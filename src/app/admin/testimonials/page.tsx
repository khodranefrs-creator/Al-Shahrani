export const dynamic = 'force-dynamic';

import { db } from "@/lib/db";
import Link from "next/link";
import { Plus, Edit, Star } from "lucide-react";

export default async function AdminTestimonialsPage() {
  const testimonials = await db.testimonial.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-navy-900">Testimonials</h1>
        <Link
          href="/admin/testimonials/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 text-navy-900 rounded-lg text-sm font-semibold hover:bg-gold-400 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Testimonial
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-xl border border-warm-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < (testimonial.rating || 5) ? "text-gold-500 fill-gold-500" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="text-sm text-navy-700 line-clamp-3 mb-4">
              &ldquo;{testimonial.content}&rdquo;
            </p>
            <div className="border-t border-warm-100 pt-3">
              <p className="font-medium text-navy-900">{testimonial.name}</p>
              <p className="text-sm text-navy-500">
                {testimonial.role}{testimonial.company ? ` — ${testimonial.company}` : ""}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className={`text-xs px-2 py-1 rounded-full ${testimonial.isPublished ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-500"}`}>
                {testimonial.isPublished ? "Published" : "Draft"}
              </span>
              <Link
                href={`/admin/testimonials/${testimonial.id}`}
                className="text-sm text-navy-600 hover:text-navy-900"
              >
                <Edit className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}

        {testimonials.length === 0 && (
          <div className="col-span-full bg-white rounded-xl border border-warm-200 p-12 text-center text-navy-500">
            No testimonials yet.
          </div>
        )}
      </div>
    </div>
  );
}
