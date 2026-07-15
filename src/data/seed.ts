import { db } from "@/lib/db";
import bcryptjs from "bcryptjs";

async function main() {
  console.log("Seeding database...");

  // Admin user
  const adminEmail = process.env.ADMIN_EMAIL || "admin@alshahrani.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "change-me-in-production";
  const adminName = process.env.ADMIN_NAME || "Administrator";

  const passwordHash = await bcryptjs.hash(adminPassword, 12);

  await db.adminUser.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: adminName,
      passwordHash,
      role: "admin",
    },
  });

  console.log(`Admin user created: ${adminEmail}`);

  // Services
  const services = [
    {
      slug: "corporate-law",
      locale: "ar",
      title: "القانون التجاري",
      titleEn: "Corporate Law",
      summary: "تأسيس الشركات والهيكلة المؤسسية والإشراف على الامتثال القانوني",
      summaryEn: "Company formation, corporate structuring, and legal compliance oversight",
      content: "يقدم مكتبنا خدمات قانونية شاملة للشركات في مرحلة التأسيس وما بعدها. نساعد في اختيار الهيكل القانوني المناسب، إعداد العقود التأسيسية، والامتثال لمتطلبات هيئة الشركات. كما نقدم استشارات استراتيجية فيما يتعلق بالهيكلة المؤسسية وتطوير السياسات الداخلية.",
      contentEn: "We provide comprehensive legal services for companies at the formation stage and beyond. We assist in selecting the appropriate legal structure, preparing incorporation documents, and ensuring compliance with Saudi Company Law requirements.",
      icon: "Building2",
      sortOrder: 1,
      isPublished: true,
      isFeatured: true,
      metaTitle: "القانون التجاري — مكتب الشهراني للمحاماة",
      metaDesc: "خدمات قانونية شاملة للشركات: التأسيس، الهيكلة، الامتثال.",
    },
    {
      slug: "governance",
      locale: "ar",
      title: "الحوكمة المؤسسية",
      titleEn: "Corporate Governance",
      summary: "تصميم وتطبيق أنظمة الحوكمة المؤسسية",
      summaryEn: "Design and implementation of corporate governance frameworks",
      content: "الحوكمة المؤسسية هي حجر الأساس في نجاح المؤسسات الحديثة. نقدم خدمات تصميم وتطبيق أنظمة الحوكمة المؤسسية بما يتوافق مع أفضل الممارسات العالمية ومتطلبات السوق السعودي.",
      contentEn: "Corporate governance is the cornerstone of modern institutional success. We design and implement corporate governance frameworks aligned with global best practices and Saudi market requirements.",
      icon: "Shield",
      sortOrder: 2,
      isPublished: true,
      isFeatured: true,
      metaTitle: "الحوكمة المؤسسية — مكتب الشهراني",
      metaDesc: "استشارات الحوكمة المؤسسية لتصميم وتطبيق أنظمة حوكمة.",
    },
    {
      slug: "contracts",
      locale: "ar",
      title: "العقود",
      titleEn: "Contracts",
      summary: "إعداد ومراجعة جميع أنواع العقود التجارية والقانونية",
      summaryEn: "Drafting and review of all commercial and legal contracts",
      content: "نقدم خدمات إعداد ومراجعة جميع أنواع العقود التجارية والقانونية. يضمن فريقنا أن كل عقد يحمي مصالح العميل ويتوافق مع الأنظمة النافذة.",
      contentEn: "We draft and review all types of commercial and legal contracts. Our team ensures every contract protects the client's interests and complies with applicable regulations.",
      icon: "FileText",
      sortOrder: 3,
      isPublished: true,
      isFeatured: true,
      metaTitle: "إعداد العقود — مكتب الشهراني للمحاماة",
      metaDesc: "خدمات إعداد ومراجعة العقود التجارية والقانونية.",
    },
    {
      slug: "ma",
      locale: "ar",
      title: "الاندماج والاستحواذ",
      titleEn: "Mergers & Acquisitions",
      summary: "استشارات قانونية لعمليات الاندماج والاستحواذ",
      summaryEn: "Legal advisory for M&A transactions and due diligence",
      content: "نقدم استشارات قانونية متخصصة في عمليات الاندماج والاستحواذ، تشمل دراسات العرض Due Diligence، وتفاوض الشروط، وإعداد المستندات اللازمة، وضمان الامتثال التنظيمي.",
      contentEn: "We provide specialized legal advisory for M&A transactions including due diligence studies, term negotiation, document preparation, and regulatory compliance.",
      icon: "GitMerge",
      sortOrder: 4,
      isPublished: true,
      isFeatured: true,
      metaTitle: "الاندماج والاستحواذ — مكتب الشهراني",
      metaDesc: "استشارات قانونية متخصصة في عمليات الاندماج والاستحواذ.",
    },
    {
      slug: "litigation",
      locale: "ar",
      title: "التقاضي وتسوية المنازعات",
      titleEn: "Dispute Resolution & Litigation",
      summary: "التمثيل القضائي أمام جميع درجات المحاكم",
      summaryEn: "Litigation representation across all court levels",
      content: "يتمتع فريقنا بخبرة واسعة في التمثيل القضائي أمام جميع درجات المحاكم. نقدم خدمات التفويض الكامل أو التمثيل الجزئي في القضايا المدنية والتجارية والإدارية.",
      contentEn: "Our team has extensive experience in litigation representation across all court levels. We offer full delegation or partial representation in civil, commercial, and administrative cases.",
      icon: "Scale",
      sortOrder: 5,
      isPublished: true,
      isFeatured: true,
      metaTitle: "التقاضي وتسوية المنازعات — مكتب الشهراني",
      metaDesc: "تمثيل قضائي متخصص أمام جميع درجات المحاكم.",
    },
    {
      slug: "debt-collection",
      locale: "ar",
      title: "تحصيل الديون",
      titleEn: "Debt Collection",
      summary: "تحصيل الديون بالطرق القانونية والقضائية",
      summaryEn: "Legal and judicial debt recovery services",
      content: "نوفر للشركات والأفراد خدمات تحصيل الديون بكفاءة عالية، سواء عبر التفاوض والتسويات الودية أو عبر الإجراءات القضائية والتنفيذية.",
      contentEn: "We provide efficient debt recovery services for companies and individuals, whether through negotiation and amicable settlements or through judicial and enforcement proceedings.",
      icon: "Banknote",
      sortOrder: 6,
      isPublished: true,
      isFeatured: false,
      metaTitle: "تحصيل الديون — مكتب الشهراني للمحاماة",
      metaDesc: "خدمات تحصيل الديون بكفاءة عالية للشركات والأفراد.",
    },
    {
      slug: "notarization",
      locale: "ar",
      title: "التوثيق",
      titleEn: "Notarization & Documentation",
      summary: "توثيق العقود والاتفاقيات الرسمية",
      summaryEn: "Contract authentication and official documentation",
      content: "يقدم المكتب خدمات التوثيق القانوني بالتعاون مع شركاء موثقين مرخصين، بما في ذلك توثيق العقود والاتفاقيات والتصديقات الرسمية.",
      contentEn: "The firm provides legal documentation services in collaboration with licensed notary partners, including contract authentication, agreements, and official certifications.",
      icon: "Stamp",
      sortOrder: 7,
      isPublished: true,
      isFeatured: false,
      metaTitle: "التوثيق القانوني — مكتب الشهراني",
      metaDesc: "خدمات التوثيق القانوني والتوثيق الرسمي.",
    },
    {
      slug: "labor",
      locale: "ar",
      title: "القانون العرفي والعلاقات العمالية",
      titleEn: "Labor Law & Employment Relations",
      summary: "استشارات قانون العمل والمنازعات العمالية",
      summaryEn: "Labor law advisory and employment dispute resolution",
      content: "نقدم استشارات شاملة في قانون العمل والعلاقات العمالية، بما في ذلك إعداد أنظمة العمل الداخلية، ومراجعة عقود العمل، والتمثيل في منازعات العمل.",
      contentEn: "We provide comprehensive advisory on labor law and employment relations, including drafting internal labor regulations, reviewing employment contracts, and representing clients in labor disputes.",
      icon: "Briefcase",
      sortOrder: 8,
      isPublished: true,
      isFeatured: false,
      metaTitle: "القانون العرفي — مكتب الشهراني للمحاماة",
      metaDesc: "استشارات قانون العمل والعلاقات العمالية.",
    },
    {
      slug: "personal-status",
      locale: "ar",
      title: "الأحوال الشخصية والتركات",
      titleEn: "Personal Status & Inheritance",
      summary: "تسوية الإرثات والوصايا والخلافات العائلية",
      summaryEn: "Estate settlements, wills, and family dispute resolution",
      content: "نقدم خدمات قانونية في مجال الأحوال الشخصية والتركات، بما في ذلك تسوية الإرثات والوصايا والخلافات العائلية وفقاً لأحكام الشريعة الإسلامية.",
      contentEn: "We provide legal services in personal status and inheritance matters, including estate settlements, wills, and family disputes in accordance with Islamic law.",
      icon: "Heart",
      sortOrder: 9,
      isPublished: true,
      isFeatured: false,
      metaTitle: "الأحوال الشخصية — مكتب الشهراني",
      metaDesc: "خدمات قانونية في الأحوال الشخصية والتركات.",
    },
    {
      slug: "property",
      locale: "ar",
      title: "قانون العقارات",
      titleEn: "Property Law",
      summary: "استشارات قانون العقارات والملكية",
      summaryEn: "Property and real estate legal advisory",
      content: "نقدم استشارات قانونية في قانون العقارات والملكية، بما في ذلك عقود البيع والشراء والإيجار والتمليك، وتسجيل العقارات وحل منازعات الملكية.",
      contentEn: "We provide legal advisory on property and real estate law, including sale, purchase, lease, and ownership contracts, property registration, and ownership dispute resolution.",
      icon: "Home",
      sortOrder: 10,
      isPublished: true,
      isFeatured: false,
      metaTitle: "قانون العقارات — مكتب الشهراني للمحاماة",
      metaDesc: "استشارات قانونية في العقارات والملكية.",
    },
    {
      slug: "medical",
      locale: "ar",
      title: "القضايا الطبية",
      titleEn: "Medical Law Cases",
      summary: "تمثيل قانوني في القضايا الطبية والتعويضات",
      summaryEn: "Legal representation in medical cases and compensation claims",
      content: "نقدم تمثيلاً قانونياً متخصصاً في القضايا الطبية والتعويضات عن الأخطاء الطبية، بالتعاون مع خبراء طبيين متخصصين.",
      contentEn: "We provide specialized legal representation in medical cases and malpractice compensation claims, in collaboration with expert medical consultants.",
      icon: "Stethoscope",
      sortOrder: 11,
      isPublished: true,
      isFeatured: false,
      metaTitle: "القضايا الطبية — مكتب الشهراني",
      metaDesc: "تمثيل قانوني متخصص في القضايا الطبية.",
    },
  ];

  for (const service of services) {
    const existing = await db.service.findFirst({
      where: { slug: service.slug, locale: service.locale },
    });
    if (existing) {
      await db.service.update({
        where: { id: existing.id },
        data: service,
      });
    } else {
      await db.service.create({ data: service });
    }
  }

  console.log(`${services.length} services seeded`);

  // Testimonials
  const testimonials = [
    {
      locale: "ar",
      name: "عبدالله الفيصل",
      nameEn: "Abdullah Al-Faisal",
      role: "مدير عام",
      roleEn: "General Manager",
      company: "شركة البناء الحديث",
      companyEn: "Modern Construction Co.",
      content: "تعاملنا مع مكتب الشهراني في عدة مشاريع مؤسسية ونثمن خبرتهم القانونية العميقة واحترافيتهم العالية.",
      contentEn: "We worked with Al-Shahrani firm on several corporate projects and deeply value their legal expertise and professionalism.",
      rating: 5,
      isPublished: true,
      sortOrder: 1,
    },
    {
      locale: "ar",
      name: "سارة الحربي",
      nameEn: "Sara Al-Harbi",
      role: "رائدة أعمال",
      roleEn: "Entrepreneur",
      company: "مؤسسة تقنية المعلومات",
      companyEn: "Tech Solutions LLC",
      content: "حصلنا على استشارات ممتازة في تأسيس شركتنا وتصميم هيكلها القانوني. فريق متميز ومتعاون.",
      contentEn: "Received excellent advisory for establishing our company and designing its legal structure. Outstanding team.",
      rating: 5,
      isPublished: true,
      sortOrder: 2,
    },
    {
      locale: "ar",
      name: "محمد العتيبي",
      nameEn: "Mohammed Al-Otaibi",
      role: "مستثمر",
      roleEn: "Investor",
      company: "مجموعة الاستثمار السعودية",
      companyEn: "Saudi Investment Group",
      content: "مكتب يتمتع بخبرة واسعة في قانون الشركات والاستحواذ. نوصي به بشدة لأي مؤسسة.",
      contentEn: "A firm with extensive experience in corporate and acquisition law. Highly recommended for any institution.",
      rating: 5,
      isPublished: true,
      sortOrder: 3,
    },
  ];

  for (const testimonial of testimonials) {
    const existing = await db.testimonial.findFirst({
      where: { name: testimonial.name, locale: testimonial.locale },
    });
    if (!existing) {
      await db.testimonial.create({ data: testimonial });
    }
  }

  console.log(`${testimonials.length} testimonials seeded`);

  // Team members
  const teamMembers = [
    {
      locale: "ar",
      name: "محمد حمود الشهراني",
      nameEn: "Muhammad Hamoud Al-Shahrani",
      title: "المحاميprincipal",
      titleEn: "Principal Lawyer",
      bio: "محامي ومستشار قانوني بخبرة واسعة في القانون التجاري والشركات.",
      bioEn: "Lawyer and legal consultant with extensive experience in commercial and corporate law.",
      sortOrder: 1,
      isPublished: true,
    },
  ];

  for (const member of teamMembers) {
    const existing = await db.teamMember.findFirst({
      where: { name: member.name, locale: member.locale },
    });
    if (!existing) {
      await db.teamMember.create({ data: member });
    }
  }

  console.log(`${teamMembers.length} team members seeded`);

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
