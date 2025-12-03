import { Shield, Star, Sparkles, Lock, Award, CheckCircle, Truck, Clock, MessageCircle, RefreshCw } from 'lucide-react';

export const QualitySeal = () => (
  <div className="flex flex-col items-center gap-2 animate-fade-in">
    <div className="relative w-24 h-24 md:w-28 md:h-28">
      {/* Outer golden ring */}
      <div className="absolute inset-0 rounded-full border-4 border-christmas-gold bg-gradient-to-br from-christmas-gold/20 to-christmas-gold/5 shadow-lg shadow-christmas-gold/20 animate-pulse" />
      
      {/* Inner circle */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-christmas-green to-christmas-green-dark flex flex-col items-center justify-center">
        <Star className="w-6 h-6 md:w-7 md:h-7 text-christmas-gold fill-christmas-gold" />
        <span className="text-[8px] md:text-[9px] font-bold text-christmas-cream text-center leading-tight mt-1 px-2">
          QUALIDADE<br />GARANTIDA
        </span>
      </div>
      
      {/* Decorative sparkles */}
      <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-christmas-gold animate-sparkle" />
      <Sparkles className="absolute -bottom-1 -left-1 w-3 h-3 text-christmas-cream animate-sparkle" style={{ animationDelay: '0.5s' }} />
    </div>
    <span className="text-xs text-christmas-cream/80 font-medium">Natal de Luz Brasil</span>
  </div>
);

export const SecurePaymentSeal = () => (
  <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg border border-blue-400/30 animate-fade-in hover:scale-105 transition-transform">
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
      <Shield className="w-6 h-6 text-white" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-bold text-white leading-tight">Pagamento Seguro</span>
      <span className="text-[11px] text-blue-200 leading-tight flex items-center gap-1">
        <Lock className="w-3 h-3" /> WhatsApp Oficial
      </span>
    </div>
    <CheckCircle className="w-5 h-5 text-emerald-400" />
  </div>
);

export const VerifiedStoreSeal = () => (
  <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-lg border border-emerald-400/30 animate-fade-in hover:scale-105 transition-transform">
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
      <Award className="w-6 h-6 text-white" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-bold text-white leading-tight">Loja Verificada</span>
      <span className="text-[11px] text-emerald-200 leading-tight flex items-center gap-1">
        <CheckCircle className="w-3 h-3" /> Compra Confiável
      </span>
    </div>
  </div>
);

export const GuaranteeSeal = () => (
  <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg border border-amber-300/30 animate-fade-in hover:scale-105 transition-transform">
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
      <RefreshCw className="w-6 h-6 text-white" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-bold text-white leading-tight">Garantia 7 Dias</span>
      <span className="text-[11px] text-amber-100 leading-tight">Contra Defeitos</span>
    </div>
  </div>
);

export const FastServiceSeal = () => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-violet-600 shadow-md animate-fade-in hover:scale-105 transition-transform">
    <Clock className="w-4 h-4 text-white" />
    <span className="text-xs font-bold text-white">Atendimento Rápido</span>
  </div>
);

export const NationwideDeliverySeal = () => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 shadow-md animate-fade-in hover:scale-105 transition-transform">
    <Truck className="w-4 h-4 text-white" />
    <span className="text-xs font-bold text-white">Entrega Todo Brasil</span>
  </div>
);

export const LimitedOfferBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold shadow-md animate-pulse">
    <Sparkles className="w-3 h-3" />
    <span>Oferta Limitada</span>
  </div>
);

export const BestsellerBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 text-xs font-bold shadow-md">
    <Star className="w-3 h-3 fill-current" />
    <span>Mais Vendido</span>
  </div>
);

export const TrustBadgesSection = () => (
  <section className="py-10 bg-gradient-to-r from-christmas-green-dark via-christmas-green to-christmas-green-dark">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-8">
        {/* Main badges row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <QualitySeal />
          <div className="hidden md:block w-px h-20 bg-christmas-gold/30" />
          <div className="flex flex-col gap-3">
            <SecurePaymentSeal />
            <VerifiedStoreSeal />
          </div>
          <div className="hidden md:block w-px h-20 bg-christmas-gold/30" />
          <GuaranteeSeal />
        </div>
        
        {/* Extra badges row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <FastServiceSeal />
          <NationwideDeliverySeal />
        </div>
      </div>
    </div>
  </section>
);

export const InlineSecurePaymentBadge = () => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/90 text-white text-sm font-medium shadow-md">
    <Shield className="w-4 h-4" />
    <span>Pagamento Seguro</span>
    <CheckCircle className="w-4 h-4 text-emerald-300" />
  </div>
);

export const WhyTrustUsSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Por Que Confiar em Nós?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sua satisfação é nossa prioridade. Compre com segurança e tranquilidade.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center p-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-3 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-sm mb-1 text-foreground">Pagamento Seguro</h3>
          <p className="text-xs text-muted-foreground">WhatsApp oficial</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center mb-3 shadow-lg">
            <Star className="w-8 h-8 text-white fill-white" />
          </div>
          <h3 className="font-bold text-sm mb-1 text-foreground">Qualidade Garantida</h3>
          <p className="text-xs text-muted-foreground">Produtos selecionados</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-3 shadow-lg">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-sm mb-1 text-foreground">Loja Verificada</h3>
          <p className="text-xs text-muted-foreground">Compra confiável</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-3 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold text-sm mb-1 text-foreground">Garantia 7 Dias</h3>
          <p className="text-xs text-muted-foreground">Contra defeitos</p>
        </div>
      </div>
    </div>
  </section>
);
