export const dynamic = 'force-dynamic';

import { db } from "@/lib/db";
import Link from "next/link";
import { Plus, Edit, Eye, EyeOff } from "lucide-react";

export default async function AdminServicesPage() {
  const services = await db.service.findMany({
    orderBy: { sortOrder: "asc" },
    select: {
      id: true,
      slug: true,
      title: true,
      titleEn: true,
      isPublished: true,
      isFeatured: true,
      sortOrder: true,
      locale: true,
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-navy-900">Services</h1>
        <Link
          href="/admin/services/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 text-navy-900 rounded-lg text-sm font-semibold hover:bg-gold-400 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Service
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-warm-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-warm-200 bg-warm-50">
              <th className="text-left px-6 py-3 text-sm font-semibold text-navy-700">Title</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-navy-700">Slug</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-navy-700">Locale</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-navy-700">Status</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-navy-700">Featured</th>
              <th className="text-right px-6 py-3 text-sm font-semibold text-navy-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-b border-warm-100 hover:bg-warm-50">
                <td className="px-6 py-4">
                  <p className="font-medium text-navy-900">{service.title}</p>
                  {service.titleEn && (
                    <p className="text-sm text-navy-500">{service.titleEn}</p>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-navy-600 font-mono">{service.slug}</td>
                <td className="px-6 py-4 text-sm text-navy-600">{service.locale}</td>
                <td className="px-6 py-4">
                  {service.isPublished ? (
                    <span className="inline-flex items-center gap-1 text-sm text-green-700 bg-green-50 px-2 py-1 rounded-full">
                      <Eye className="w-3 h-3" /> Published
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                      <EyeOff className="w-3 h-3" /> Draft
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-navy-600">
                  {service.isFeatured ? "Yes" : "No"}
                </td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/admin/services/${service.id}`}
                    className="inline-flex items-center gap-1 text-sm text-navy-600 hover:text-navy-900"
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {services.length === 0 && (
          <div className="p-12 text-center text-navy-500">
            No services found. Create your first service.
          </div>
        )}
      </div>
    </div>
  );
}
