import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  level?: 1 | 2;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
  level = 2,
}: SectionHeadingProps) {
  const Tag = level === 1 ? "h1" : "h2";

  return (
    <div
      className={cn(
        "mb-14",
        align === "center" ? "text-center" : "text-start"
      )}
    >
      <Tag
        className={cn(
          "text-3xl md:text-4xl font-semibold tracking-tight leading-tight",
          light ? "text-white" : "text-navy-900"
        )}
        style={{ fontFamily: "var(--font-heading-ar)" }}
      >
        {title}
      </Tag>
      <div
        className={cn(
          "mt-5 h-[2px] w-12 bg-gradient-to-r from-gold-500 to-gold-300",
          align === "center" && "mx-auto"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-6 text-lg max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-warm-300" : "text-warm-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
