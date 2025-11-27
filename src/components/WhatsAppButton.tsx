import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 bg-gradient-festive hover:opacity-90 shadow-glow-red animate-float"
      onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os combos de Natal.', '_blank')}
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </Button>
  );
};
