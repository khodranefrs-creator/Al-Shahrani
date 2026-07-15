export const dynamic = "force-dynamic";

import { getAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FileText, MessageSquare, Star, Settings } from "lucide-react";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/services", label: "Services", icon: FileText },
  { href: "/admin/blog", label: "Blog", icon: FileText },
  { href: "/admin/consultations", label: "Consultations", icon: MessageSquare },
  { href: "/admin/testimonials", label: "Testimonials", icon: Star },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-warm-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-navy-900 text-white flex flex-col fixed inset-y-0 left-0 z-40">
        <div className="p-6 border-b border-navy-700">
          <h1 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Admin Dashboard
          </h1>
          <p className="text-sm text-navy-300 mt-1">Al-Shahrani Law Firm</p>
        </div>

        <nav className="flex-1 p-4 space-y-1" aria-label="Admin navigation">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-navy-200 hover:bg-navy-800 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-navy-700">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-navy-900 font-bold text-sm">
              {session.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{session.name}</p>
              <p className="text-xs text-navy-400">{session.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
