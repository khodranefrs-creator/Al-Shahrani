export const dynamic = 'force-dynamic';

import { db } from "@/lib/db";
import { formatDate } from "@/lib/utils";
import { MessageSquare, Phone, Clock, CheckCircle, Circle } from "lucide-react";

export default async function AdminConsultationsPage() {
  const consultations = await db.consultationRequest.findMany({
    orderBy: { createdAt: "desc" },
    include: { service: { select: { title: true, titleEn: true } } },
  });

  const statusColors: Record<string, string> = {
    new: "bg-orange-50 text-orange-700",
    contacted: "bg-blue-50 text-blue-700",
    closed: "bg-green-50 text-green-700",
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-navy-900">Consultation Requests</h1>
        <p className="text-sm text-navy-600">
          {consultations.filter((c) => c.status === "new").length} new requests
        </p>
      </div>

      <div className="space-y-4">
        {consultations.map((consultation) => (
          <div
            key={consultation.id}
            className="bg-white rounded-xl border border-warm-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-navy-900">{consultation.name}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-navy-600">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    {consultation.phone}
                  </span>
                  {consultation.email && (
                    <span>{consultation.email}</span>
                  )}
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatDate(consultation.createdAt, "en")}
                  </span>
                </div>
              </div>
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${statusColors[consultation.status] || "bg-gray-50 text-gray-700"}`}>
                {consultation.status === "new" ? (
                  <Circle className="w-3 h-3" />
                ) : (
                  <CheckCircle className="w-3 h-3" />
                )}
                {consultation.status}
              </span>
            </div>

            {consultation.subject && (
              <p className="mt-3 text-sm font-medium text-navy-800">
                Subject: {consultation.subject}
              </p>
            )}

            <p className="mt-2 text-sm text-navy-600 line-clamp-2">
              {consultation.description}
            </p>

            {consultation.serviceType && (
              <p className="mt-2 text-xs text-navy-500">
                Service: {consultation.serviceType}
              </p>
            )}
          </div>
        ))}

        {consultations.length === 0 && (
          <div className="bg-white rounded-xl border border-warm-200 p-12 text-center text-navy-500">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-navy-300" />
            <p>No consultation requests yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
