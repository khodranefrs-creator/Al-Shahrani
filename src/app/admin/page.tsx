export const dynamic = 'force-dynamic';

import { db } from "@/lib/db";
import Link from "next/link";
import { FileText, MessageSquare, Star, Plus } from "lucide-react";

export default async function AdminDashboard() {
  const [serviceCount, publishedServiceCount, postCount, consultationCount, newConsultationCount, testimonialCount] =
    await Promise.all([
      db.service.count(),
      db.service.count({ where: { isPublished: true } }),
      db.blogPost.count(),
      db.consultationRequest.count(),
      db.consultationRequest.count({ where: { status: "new" } }),
      db.testimonial.count(),
    ]);

  const stats = [
    {
      label: "Total Services",
      value: serviceCount,
      published: publishedServiceCount,
      icon: FileText,
      href: "/admin/services",
      color: "bg-blue-500",
    },
    {
      label: "Blog Posts",
      value: postCount,
      icon: FileText,
      href: "/admin/blog",
      color: "bg-green-500",
    },
    {
      label: "Consultations",
      value: consultationCount,
      newCount: newConsultationCount,
      icon: MessageSquare,
      href: "/admin/consultations",
      color: "bg-orange-500",
    },
    {
      label: "Testimonials",
      value: testimonialCount,
      icon: Star,
      href: "/admin/testimonials",
      color: "bg-purple-500",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-navy-900">Dashboard</h1>
        <div className="flex gap-3">
          <Link
            href="/admin/services"
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800 text-white rounded-lg text-sm font-medium hover:bg-navy-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Service
          </Link>
          <Link
            href="/admin/blog"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 text-navy-900 rounded-lg text-sm font-semibold hover:bg-gold-400 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Post
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white rounded-xl border border-warm-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy-900">{stat.value}</p>
                  <p className="text-sm text-navy-600">{stat.label}</p>
                </div>
              </div>
              {stat.published !== undefined && (
                <p className="mt-3 text-xs text-navy-500">
                  {stat.published} published
                </p>
              )}
              {stat.newCount !== undefined && stat.newCount > 0 && (
                <p className="mt-3 text-xs text-orange-600 font-medium">
                  {stat.newCount} new
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
