import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-accent animate-sparkle" />
            <h3 className="font-display text-3xl font-bold">Natal de Luz Brasil</h3>
            <Sparkles className="w-8 h-8 text-accent animate-sparkle" />
          </div>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Natal de Luz Brasil é especializada em combos de árvore de Natal com pisca-pisca, 
            árvores avulsas e luzes de Natal com descontos especiais para todo o Brasil.
          </p>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60 mb-2">
            © {new Date().getFullYear()} Natal de Luz Brasil. Todos os direitos reservados.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-primary-foreground/60">
            <button className="hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </button>
            <span>•</span>
            <button className="hover:text-primary-foreground transition-colors">
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
