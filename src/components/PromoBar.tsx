import { Sparkles } from "lucide-react";

export const PromoBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-secondary via-red-600 to-secondary py-2 px-4 text-center shadow-lg">
      <p className="text-white text-sm md:text-base font-bold flex items-center justify-center gap-2 animate-pulse">
        <Sparkles className="w-4 h-4" />
        <span>🎄 MEGA PROMOÇÃO: combos com até 30% OFF – Estoque Limitado!</span>
        <Sparkles className="w-4 h-4" />
      </p>
    </div>
  );
};
