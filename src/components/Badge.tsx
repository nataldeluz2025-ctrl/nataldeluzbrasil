import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "discount" | "promo" | "bestseller" | "premium";
  className?: string;
}

export const Badge = ({ children, variant = "discount", className }: BadgeProps) => {
  const variants = {
    discount: "bg-gradient-festive text-secondary-foreground shadow-glow-red",
    promo: "bg-gradient-gold text-accent-foreground shadow-glow-gold",
    bestseller: "bg-primary text-primary-foreground shadow-glow-green",
    premium: "bg-gradient-christmas text-primary-foreground shadow-glow-green",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
