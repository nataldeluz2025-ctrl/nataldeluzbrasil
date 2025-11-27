import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/Badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  oldPrice?: string;
  price: string;
  badge?: {
    text: string;
    variant?: "discount" | "promo" | "bestseller" | "premium";
  };
  discount?: string;
  whatsappMessage: string;
  className?: string;
}

export const ProductCard = ({
  image,
  imageAlt,
  title,
  description,
  oldPrice,
  price,
  badge,
  discount,
  whatsappMessage,
  className,
}: ProductCardProps) => {
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card className={cn("group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-glow-green", className)}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {badge && (
          <div className="absolute top-4 right-4 animate-sparkle">
            <Badge variant={badge.variant}>{badge.text}</Badge>
          </div>
        )}
        {discount && (
          <div className="absolute top-4 left-4">
            <Badge variant="discount">{discount}</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-display text-2xl mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 min-h-[3rem]">{description}</p>
        <div className="mb-4">
          {oldPrice && (
            <p className="text-sm text-muted-foreground line-through mb-1">
              De: {oldPrice}
            </p>
          )}
          <p className="font-display text-3xl text-primary">
            {price}
          </p>
        </div>
        <Button
          size="lg"
          className="w-full bg-gradient-festive hover:opacity-90 text-secondary-foreground font-bold shadow-glow-red"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          Comprar pelo WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};
