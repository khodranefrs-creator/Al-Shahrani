import { db } from "@/lib/db";
import { cookies } from "next/headers";
import crypto from "crypto";

const SESSION_SECRET = process.env.SESSION_SECRET || "al-shahrani-dev-secret-change-in-production";
const COOKIE_NAME = "al-shahrani-session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function hashPassword(plain: string): Promise<string> {
  const bcryptjs = await import("bcryptjs");
  return bcryptjs.hash(plain, 12);
}

export async function verifyPassword(plain: string, hashed: string): Promise<boolean> {
  const bcryptjs = await import("bcryptjs");
  return bcryptjs.compare(plain, hashed);
}

function sign(payload: string): string {
  const hmac = crypto.createHmac("sha256", SESSION_SECRET);
  hmac.update(payload);
  const signature = hmac.digest("hex");
  return `${Buffer.from(payload).toString("base64")}.${signature}`;
}

function unsign(signed: string): string | null {
  const [payloadB64, signature] = signed.split(".");
  if (!payloadB64 || !signature) return null;

  const payload = Buffer.from(payloadB64, "base64").toString("utf-8");
  const hmac = crypto.createHmac("sha256", SESSION_SECRET);
  hmac.update(payload);
  const expectedSignature = hmac.digest("hex");

  if (signature !== expectedSignature) return null;
  return payload;
}

export async function createSession(adminId: string) {
  const cookieStore = await cookies();
  const signed = sign(adminId);
  cookieStore.set(COOKIE_NAME, signed, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME);
  if (!sessionCookie?.value) return null;

  const adminId = unsign(sessionCookie.value);
  if (!adminId) return null;

  const admin = await db.adminUser.findUnique({
    where: { id: adminId },
    select: { id: true, email: true, name: true, role: true },
  });

  return admin;
}
