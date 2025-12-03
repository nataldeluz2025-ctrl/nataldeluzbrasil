import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  city: string;
  comment: string;
  rating: number;
  avatar: string;
  product?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ana Paula",
    city: "Belo Horizonte, MG",
    comment: "A árvore chegou perfeita! O combo 2 iluminou minha sala inteira. Recomendo demais!",
    rating: 5,
    avatar: "👩",
    product: "Combo 2"
  },
  {
    name: "Ricardo Silva",
    city: "São Paulo, SP",
    comment: "Preço excelente e entrega rápida. Já é o segundo ano que compro aqui!",
    rating: 5,
    avatar: "👨",
    product: "Árvore 1,80m"
  },
  {
    name: "Daniela Costa",
    city: "Rio de Janeiro, RJ",
    comment: "Comprei o combo 3 para o comércio, ficou lindo demais! Clientes elogiaram muito.",
    rating: 5,
    avatar: "👩‍💼",
    product: "Combo 3"
  },
  {
    name: "Marcos Oliveira",
    city: "Curitiba, PR",
    comment: "Atendimento pelo WhatsApp muito atencioso. Árvore de qualidade premium!",
    rating: 5,
    avatar: "👨‍🦱",
    product: "Combo 1"
  },
  {
    name: "Fernanda Lima",
    city: "Salvador, BA",
    comment: "As luzes são lindas e econômicas. Minha conta de luz não subiu nada!",
    rating: 5,
    avatar: "👩‍🦰",
    product: "Pisca-pisca 300 LEDs"
  },
  {
    name: "Carlos Eduardo",
    city: "Brasília, DF",
    comment: "Montagem super fácil, fiz tudo sozinho em 10 minutos. Qualidade top!",
    rating: 5,
    avatar: "🧔",
    product: "Árvore 2,10m"
  }
];

export const EnhancedTestimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Clientes com o Natal Iluminado
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre os produtos da Natal de Luz Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-glow-green relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent" />
              <CardContent className="pt-6 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'fill-accent text-accent' : 'text-muted'}`} 
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>

                {/* Product Tag */}
                {testimonial.product && (
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {testimonial.product}
                    </span>
                  </div>
                )}

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
