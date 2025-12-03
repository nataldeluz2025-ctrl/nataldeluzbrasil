import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Leaf, Zap, Box } from "lucide-react";
import detailBranches from "@/assets/detail-branches.jpg";
import detailLights from "@/assets/detail-lights.jpg";
import customerAssembling from "@/assets/customer-assembling.jpg";

export const ProductProof = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Qualidade que Você Pode Ver
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossos produtos são cuidadosamente selecionados para garantir o melhor Natal para sua família
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Galhos de Qualidade */}
          <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-glow-green">
            <div className="relative overflow-hidden h-48">
              <img
                src={detailBranches}
                alt="Detalhe dos galhos da árvore de Natal - qualidade premium"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white">
                  <Leaf className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Galhos Premium</span>
                </div>
              </div>
            </div>
            <CardContent className="pt-4">
              <h3 className="font-bold text-lg mb-2 text-foreground">Galhos Reforçados</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Bem preenchidos e volumosos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Material resistente e durável</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Aparência natural e realista</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Luzes LED */}
          <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-glow-gold">
            <div className="relative overflow-hidden h-48">
              <img
                src={detailLights}
                alt="Detalhe das luzes LED do pisca-pisca - qualidade e economia"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="font-semibold">LED de Alta Qualidade</span>
                </div>
              </div>
            </div>
            <CardContent className="pt-4">
              <h3 className="font-bold text-lg mb-2 text-foreground">Luz LED Econômica</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Consome até 80% menos energia</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Durável e não esquenta</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Brilho intenso e uniforme</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Fácil Montagem */}
          <Card className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-glow-red">
            <div className="relative overflow-hidden h-48">
              <img
                src={customerAssembling}
                alt="Cliente montando árvore de Natal - fácil montagem"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white">
                  <Box className="w-5 h-5 text-secondary" />
                  <span className="font-semibold">Montagem Simples</span>
                </div>
              </div>
            </div>
            <CardContent className="pt-4">
              <h3 className="font-bold text-lg mb-2 text-foreground">Fácil de Montar</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>Instruções claras inclusas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>Montagem em até 15 minutos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>Fácil de guardar e armazenar</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
