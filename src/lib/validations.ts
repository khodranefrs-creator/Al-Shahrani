import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().min(2, "الاسم مطلوب").max(100),
  phone: z.string().min(10, "رقم الجوال غير صحيح").max(20),
  email: z.string().email("البريد الإلكتروني غير صحيح").optional().or(z.literal("")),
  whatsapp: z.string().optional(),
  serviceType: z.string().optional(),
  subject: z.string().min(3, "الموضوع مطلوب").max(200),
  description: z.string().min(10, "يرجى تفاصيل أكثر").max(5000),
  urgency: z.enum(["normal", "urgent", "very-urgent"]).default("normal"),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const serviceSchema = z.object({
  slug: z.string().min(1),
  locale: z.string().default("ar"),
  title: z.string().min(1),
  titleEn: z.string().optional(),
  summary: z.string().optional(),
  summaryEn: z.string().optional(),
  content: z.string().optional(),
  contentEn: z.string().optional(),
  icon: z.string().optional(),
  sortOrder: z.number().default(0),
  isPublished: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
  metaTitle: z.string().optional(),
  metaDesc: z.string().optional(),
  faqs: z.any().optional(),
});

export const blogPostSchema = z.object({
  slug: z.string().min(1),
  locale: z.string().default("ar"),
  title: z.string().min(1),
  titleEn: z.string().optional(),
  excerpt: z.string().optional(),
  excerptEn: z.string().optional(),
  content: z.string().min(1),
  contentEn: z.string().optional(),
  coverImage: z.string().optional(),
  author: z.string().optional(),
  authorEn: z.string().optional(),
  tags: z.string().optional(),
  isPublished: z.boolean().default(false),
  publishedAt: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDesc: z.string().optional(),
  ogImage: z.string().optional(),
});

export const testimonialSchema = z.object({
  locale: z.string().default("ar"),
  name: z.string().min(1),
  nameEn: z.string().optional(),
  role: z.string().optional(),
  roleEn: z.string().optional(),
  company: z.string().optional(),
  companyEn: z.string().optional(),
  content: z.string().min(1),
  contentEn: z.string().optional(),
  rating: z.number().min(1).max(5).default(5),
  isPublished: z.boolean().default(false),
  sortOrder: z.number().default(0),
});
