import { CreditCard, Smartphone, Shield, CheckCircle } from "lucide-react";

export const PaymentMethods = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-muted/50 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">
            Formas de Pagamento
          </h3>
          <p className="text-muted-foreground">Pagamento seguro e facilitado</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {/* PIX */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <span className="text-sm font-semibold text-foreground">PIX</span>
            <span className="text-xs text-primary font-medium">5% de desconto</span>
          </div>

          {/* Visa */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <CreditCard className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <span className="text-sm font-semibold text-foreground">Visa</span>
            <span className="text-xs text-muted-foreground">até 3x s/ juros</span>
          </div>

          {/* Mastercard */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <CreditCard className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <span className="text-sm font-semibold text-foreground">Mastercard</span>
            <span className="text-xs text-muted-foreground">até 3x s/ juros</span>
          </div>

          {/* Elo */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <CreditCard className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <span className="text-sm font-semibold text-foreground">Elo</span>
            <span className="text-xs text-muted-foreground">até 3x s/ juros</span>
          </div>

          {/* Pagamento Seguro */}
          <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform relative">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <CheckCircle className="w-4 h-4 absolute -bottom-1 -right-1 text-emerald-400 bg-white rounded-full" />
            </div>
            <span className="text-sm font-semibold text-foreground">Seguro</span>
            <span className="text-xs text-muted-foreground">100% protegido</span>
          </div>
        </div>
      </div>
    </section>
  );
};
