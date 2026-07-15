import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createClient(): PrismaClient {
  return new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["error", "warn"]
        : ["error"],
  });
}

let _client: PrismaClient | undefined;

function getClient(): PrismaClient {
  if (!_client) {
    _client = globalForPrisma.prisma ?? createClient();
    if (process.env.NODE_ENV !== "production") {
      globalForPrisma.prisma = _client;
    }
  }
  return _client;
}

export const db = new Proxy({} as PrismaClient, {
  get(_, prop) {
    const client = getClient();
    const value = Reflect.get(client, prop);
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  },
});
