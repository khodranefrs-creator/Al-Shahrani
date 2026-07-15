import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "navy" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variantStyles = {
    default: "bg-warm-100 text-navy-700 border-warm-200",
    gold: "bg-gold-100 text-gold-800 border-gold-200",
    navy: "bg-navy-100 text-navy-800 border-navy-200",
    outline: "bg-transparent text-navy-700 border-navy-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-sm font-medium rounded-full border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
