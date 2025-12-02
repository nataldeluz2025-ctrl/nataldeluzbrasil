import { Shield, Star, Sparkles, Lock } from 'lucide-react';

export const QualitySeal = () => (
  <div className="flex flex-col items-center gap-2 animate-fade-in">
    <div className="relative w-24 h-24 md:w-28 md:h-28">
      {/* Outer golden ring */}
      <div className="absolute inset-0 rounded-full border-4 border-christmas-gold bg-gradient-to-br from-christmas-gold/20 to-christmas-gold/5 shadow-lg shadow-christmas-gold/20 animate-pulse" />
      
      {/* Inner circle */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-christmas-green to-christmas-green-dark flex flex-col items-center justify-center">
        {/* Star icon */}
        <Star className="w-6 h-6 md:w-7 md:h-7 text-christmas-gold fill-christmas-gold" />
        
        {/* Text */}
        <span className="text-[8px] md:text-[9px] font-bold text-christmas-cream text-center leading-tight mt-1 px-2">
          QUALIDADE<br />GARANTIDA
        </span>
      </div>
      
      {/* Decorative snowflakes */}
      <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-christmas-gold animate-sparkle" />
      <Sparkles className="absolute -bottom-1 -left-1 w-3 h-3 text-christmas-cream animate-sparkle" style={{ animationDelay: '0.5s' }} />
    </div>
    <span className="text-xs text-christmas-cream/80 font-medium">Natal de Luz Brasil</span>
  </div>
);

export const SecurePaymentSeal = () => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg border border-blue-400/30 animate-fade-in">
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
      <Shield className="w-5 h-5 text-white" />
    </div>
    <div className="flex flex-col">
      <span className="text-xs font-bold text-white leading-tight">Pagamento Seguro</span>
      <span className="text-[10px] text-blue-200 leading-tight flex items-center gap-1">
        <Lock className="w-3 h-3" /> Protegido
      </span>
    </div>
  </div>
);

export const TrustBadgesSection = () => (
  <section className="py-8 bg-gradient-to-r from-christmas-green-dark via-christmas-green to-christmas-green-dark">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <QualitySeal />
        <div className="hidden md:block w-px h-16 bg-christmas-gold/30" />
        <SecurePaymentSeal />
      </div>
    </div>
  </section>
);

export const InlineSecurePaymentBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/90 text-white text-xs font-medium shadow-md">
    <Shield className="w-4 h-4" />
    <span>Pagamento Seguro</span>
  </div>
);
