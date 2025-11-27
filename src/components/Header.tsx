import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Combos", href: "#combos" },
    { label: "Árvores", href: "#arvores" },
    { label: "Pisca-pisca", href: "#pisca-pisca" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-md">
      <div className="bg-gradient-festive py-2 px-4 text-center">
        <p className="text-xs md:text-sm font-bold text-white flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 animate-sparkle" />
          Mega Promoção de Natal – descontos especiais em combos
          <Sparkles className="w-4 h-4 animate-sparkle" />
        </p>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-accent animate-sparkle" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">
              Natal de Luz Brasil
            </h2>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              size="lg"
              className="bg-gradient-christmas hover:opacity-90 text-primary-foreground font-bold shadow-glow-green"
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os combos de Natal.', '_blank')}
            >
              Comprar no WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="lg"
                className="bg-gradient-christmas hover:opacity-90 text-primary-foreground font-bold shadow-glow-green w-full"
                onClick={() => {
                  window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os combos de Natal.', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Comprar no WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
