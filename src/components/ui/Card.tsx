import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  children,
  className,
  hover = false,
  padding = "md",
}: CardProps) {
  const paddingStyles = {
    sm: "p-4 md:p-5",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-warm-200 shadow-sm",
        hover && "transition-all duration-300 hover:shadow-md hover:border-gold-300 hover:-translate-y-0.5",
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
