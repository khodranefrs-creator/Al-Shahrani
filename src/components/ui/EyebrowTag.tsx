interface EyebrowTagProps {
  label: string;
  className?: string;
}

export function EyebrowTag({ label, className = '' }: EyebrowTagProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="w-8 h-px bg-gold-400/60 shrink-0" />
      <span className="text-gold-400 text-sm font-medium uppercase tracking-[0.15em] whitespace-nowrap">
        {label}
      </span>
      <span className="w-8 h-px bg-gold-400/60 shrink-0" />
    </div>
  );
}
