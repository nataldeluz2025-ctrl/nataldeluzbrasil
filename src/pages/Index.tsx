import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/Badge";
import { PromoBar } from "@/components/PromoBar";
import { PaymentMethods } from "@/components/PaymentMethods";
import { ProductProof } from "@/components/ProductProof";
import { EnhancedTestimonials } from "@/components/EnhancedTestimonials";
import { 
  TrustBadgesSection, 
  InlineSecurePaymentBadge, 
  WhyTrustUsSection,
  LimitedOfferBadge
} from "@/components/EnhancedTrustBadges";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ShoppingCart, 
  Truck, 
  Shield, 
  Zap, 
  Star, 
  Gift,
  CheckCircle2,
  MessageCircle,
  Clock,
  Percent,
  Phone
} from "lucide-react";

import heroImage from "@/assets/hero-christmas.jpg";
import combo1Room from "@/assets/combo-1-room.jpg";
import combo2Room from "@/assets/combo-2-room.jpg";
import combo3Room from "@/assets/combo-3-room.jpg";
import productTree150 from "@/assets/product-tree-150.jpg";
import productTree180 from "@/assets/product-tree-180.jpg";
import productTree210 from "@/assets/product-tree-210.jpg";
import productLights100 from "@/assets/product-lights-100.jpg";
import productLights200 from "@/assets/product-lights-200.jpg";
import productLights300 from "@/assets/product-lights-300.jpg";

const Index = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PromoBar />
      <div className="pt-10">
        <Header />
      </div>
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge variant="promo" className="mb-6 text-base px-6 py-2 animate-fade-in">
            🎁 Estoque Limitado para este Natal
          </Badge>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">
            Natal de Luz Brasil
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold animate-fade-in">
            Combos de Árvore de Natal com Pisca-pisca em Mega Promoção!
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in">
            Árvores de 1,50m, 1,80m e 2,10m com luzes inclusas, descontos em combos e entrega para todo o Brasil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              className="bg-gradient-festive hover:opacity-90 text-white font-bold text-lg px-8 py-6 shadow-glow-red"
              onClick={() => scrollToSection('#combos')}
            >
              Ver Combos em Promoção
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6"
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os combos de Natal.', '_blank')}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in">
            <Badge variant="discount" className="text-base px-4 py-2">
              Até 30% OFF
            </Badge>
            <LimitedOfferBadge />
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadgesSection />

      {/* Combos Section */}
      <section id="combos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Combos de Árvore + Pisca-pisca em Promoção
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Combos completos saem mais baratos do que comprar separado. Economize e tenha seu Natal iluminado!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <InlineSecurePaymentBadge />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              image={combo1Room}
              imageAlt="Combo árvore de Natal 1,50m com pisca-pisca 100 LEDs em sala pequena"
              title="Combo 1 - Árvore 1,50m + Pisca 100 LEDs"
              description="Perfeito para salas pequenas, apartamentos e ambientes compactos."
              oldPrice="R$ 159,99"
              price="R$ 129,99"
              discount="-18%"
              badge={{ text: "Mais Econômico", variant: "promo" }}
              whatsappMessage="Olá! Tenho interesse no Combo 1 (Árvore 1,50m + Pisca 100 LEDs) por R$ 129,99."
            />

            <ProductCard
              image={combo2Room}
              imageAlt="Combo árvore de Natal 1,80m com pisca-pisca 200 LEDs em sala de estar"
              title="Combo 2 - Árvore 1,80m + Pisca 200 LEDs"
              description="Tamanho ideal para a maioria das salas, com iluminação intensa."
              oldPrice="R$ 279,99"
              price="R$ 229,99"
              discount="-18%"
              badge={{ text: "⭐ Mais Vendido", variant: "bestseller" }}
              whatsappMessage="Olá! Tenho interesse no Combo 2 (Árvore 1,80m + Pisca 200 LEDs) por R$ 229,99."
            />

            <ProductCard
              image={combo3Room}
              imageAlt="Combo árvore de Natal 2,10m premium com pisca-pisca 300 LEDs em ambiente amplo"
              title="Combo 3 - Árvore 2,10m + Pisca 300 LEDs"
              description="Árvore grande e imponente, para quem quer um Natal de cinema."
              oldPrice="R$ 399,99"
              price="R$ 329,99"
              discount="-17%"
              badge={{ text: "👑 Premium", variant: "premium" }}
              whatsappMessage="Olá! Tenho interesse no Combo 3 (Árvore 2,10m + Pisca 300 LEDs) por R$ 329,99."
            />
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <PaymentMethods />

      {/* Product Proof Section */}
      <ProductProof />

      {/* Árvores Avulsas Section */}
      <section id="arvores" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Só a Árvore? Temos Várias Opções!
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha a árvore ideal para o seu espaço
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              image={productTree150}
              imageAlt="Árvore de Natal 1,50m para espaços pequenos"
              title="Árvore 1,50m"
              description="Perfeita para espaços pequenos e apartamentos compactos."
              price="R$ 99,99"
              badge={{ text: "Econômica", variant: "promo" }}
              whatsappMessage="Olá! Tenho interesse na Árvore de Natal 1,50m por R$ 99,99."
            />

            <ProductCard
              image={productTree180}
              imageAlt="Árvore de Natal 1,80m tamanho padrão"
              title="Árvore 1,80m"
              description="Tamanho padrão, ideal para a maioria das salas."
              price="R$ 169,99"
              badge={{ text: "Melhor Custo-Benefício", variant: "bestseller" }}
              whatsappMessage="Olá! Tenho interesse na Árvore de Natal 1,80m por R$ 169,99."
            />

            <ProductCard
              image={productTree210}
              imageAlt="Árvore de Natal 2,10m premium grande"
              title="Árvore 2,10m"
              description="Árvore grande e cheia, para ambientes amplos."
              price="R$ 289,99"
              badge={{ text: "Premium", variant: "premium" }}
              whatsappMessage="Olá! Tenho interesse na Árvore de Natal 2,10m por R$ 289,99."
            />
          </div>
        </div>
      </section>

      {/* Pisca-pisca Section */}
      <section id="pisca-pisca" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Só as Luzes? Ilumine seu Natal!
            </h2>
            <p className="text-xl text-muted-foreground">
              Pisca-piscas de LED de alta qualidade para qualquer decoração
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              image={productLights100}
              imageAlt="Pisca-pisca 100 LEDs para decoração natalina"
              title="Pisca-pisca 100 LEDs"
              description="Aproximadamente 10 metros. Ideal para janelas e árvores pequenas."
              price="R$ 29,99"
              whatsappMessage="Olá! Tenho interesse no Pisca-pisca 100 LEDs por R$ 29,99."
            />

            <ProductCard
              image={productLights200}
              imageAlt="Pisca-pisca 200 LEDs para varandas e sacadas"
              title="Pisca-pisca 200 LEDs"
              description="Aproximadamente 20 metros. Perfeito para varandas e sacadas."
              price="R$ 39,99"
              whatsappMessage="Olá! Tenho interesse no Pisca-pisca 200 LEDs por R$ 39,99."
            />

            <ProductCard
              image={productLights300}
              imageAlt="Pisca-pisca 300 LEDs cortina para fachadas"
              title="Pisca-pisca 300 LEDs"
              description="Aproximadamente 30 metros. Ideal para fachadas e grandes espaços."
              price="R$ 89,99"
              whatsappMessage="Olá! Tenho interesse no Pisca-pisca 300 LEDs por R$ 89,99."
            />
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Como Comprar na Natal de Luz Brasil
            </h2>
            <p className="text-xl text-muted-foreground">
              Simples, rápido e seguro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2 hover:border-primary transition-all hover:shadow-glow-green">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-christmas rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow-green">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">1. Escolha</h3>
                <p className="text-muted-foreground">
                  Escolha seu combo ou produto em promoção
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all hover:shadow-glow-red">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-festive rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow-red">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">2. WhatsApp</h3>
                <p className="text-muted-foreground">
                  Clique em "Comprar pelo WhatsApp"
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all hover:shadow-glow-gold">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow-gold">
                  <Gift className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">3. Pronto!</h3>
                <p className="text-muted-foreground">
                  Combine entrega, pagamento e pronto: seu Natal iluminado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <WhyTrustUsSection />

      {/* Benefícios Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Por Que Comprar Conosco?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              5 motivos para escolher a Natal de Luz Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardContent className="pt-8 pb-6">
                <Percent className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Descontos em Combos</h3>
                <p className="text-sm text-muted-foreground">
                  Economize comprando combos prontos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardContent className="pt-8 pb-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Garantia 7 Dias</h3>
                <p className="text-sm text-muted-foreground">
                  Troca garantida contra defeitos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardContent className="pt-8 pb-6">
                <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Atendimento Rápido</h3>
                <p className="text-sm text-muted-foreground">
                  Resposta em minutos pelo WhatsApp
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardContent className="pt-8 pb-6">
                <Truck className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Entrega Brasil Todo</h3>
                <p className="text-sm text-muted-foreground">
                  Enviamos para todas as regiões
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardContent className="pt-8 pb-6">
                <Star className="w-12 h-12 text-accent mx-auto mb-4 fill-accent" />
                <h3 className="font-bold text-lg mb-2">Qualidade Premium</h3>
                <p className="text-sm text-muted-foreground">
                  Produtos selecionados e testados
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mega Promoção Banner */}
      <section className="py-16 bg-gradient-festive text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            🎄 Mega Promoção de Natal 🎄
          </h2>
          <p className="text-xl md:text-2xl mb-6">
            Garanta sua árvore com pisca-pisca com desconto!
          </p>
          <p className="text-lg mb-8">
            Descontos especiais em combos a partir de R$ 129,99
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 font-bold text-lg px-8 py-6"
              onClick={() => scrollToSection('#combos')}
            >
              Ver Todos os Combos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold text-lg px-8 py-6"
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Quero aproveitar a promoção de Natal!', '_blank')}
            >
              <MessageCircle className="mr-2" />
              Comprar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <EnhancedTestimonials />

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Perguntas Frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">
                Vocês entregam para todo o Brasil?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Realizamos entregas para todo o território nacional. O prazo varia de acordo 
                com sua região, mas geralmente é entre 7 a 15 dias úteis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">
                Qual o prazo médio de entrega?
              </AccordionTrigger>
              <AccordionContent>
                O prazo médio é de 7 a 15 dias úteis, dependendo da sua localização. Para capitais 
                e regiões metropolitanas, geralmente é mais rápido. Entre em contato via WhatsApp 
                para consultar o prazo para sua região.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">
                Como funciona o pagamento?
              </AccordionTrigger>
              <AccordionContent>
                Aceitamos pagamento via PIX (com 5% de desconto), cartão de crédito em até 3x sem juros 
                (Visa, Mastercard, Elo), e cartão de débito. Tudo é combinado diretamente pelo WhatsApp de forma segura.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">
                Qual a garantia dos produtos?
              </AccordionTrigger>
              <AccordionContent>
                Todos os nossos produtos têm garantia de 7 dias contra defeitos de fabricação. 
                Se houver algum problema, basta entrar em contato que resolveremos rapidamente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">
                As árvores vêm desmontadas? É fácil de montar?
              </AccordionTrigger>
              <AccordionContent>
                Sim, as árvores vêm desmontadas para facilitar o transporte. A montagem é muito 
                simples e rápida - basta encaixar os galhos no tronco central. Leva em média 10-15 minutos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold">
                Posso escolher o tipo de luz (branca, quente, colorida)?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Temos opções de pisca-pisca em luz branca fria, branca quente e colorida. 
                Informe sua preferência ao fazer o pedido pelo WhatsApp.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-semibold">
                Os combos vêm com a árvore e o pisca-pisca juntos?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Nos combos você recebe a árvore e o pisca-pisca na mesma embalagem, já prontos 
                para usar. É só montar e iluminar!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left font-semibold">
                Consigo desconto em compras em quantidade?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Para compras em quantidade (acima de 5 unidades), oferecemos descontos especiais. 
                Ideal para empresas, condomínios e eventos. Entre em contato pelo WhatsApp para solicitar um orçamento.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Fale com a Natal de Luz Brasil
            </h2>
            <p className="text-xl text-muted-foreground">
              Atendimento rápido, inclusive para dúvidas sobre promoções
            </p>
          </div>

          <Card className="border-2 shadow-lg">
            <CardContent className="pt-8 pb-8">
              <div className="text-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-festive hover:opacity-90 text-white font-bold shadow-glow-red mb-4"
                  onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os combos de Natal.', '_blank')}
                >
                  <MessageCircle className="mr-2" />
                  Chamar no WhatsApp
                </Button>
                <div className="flex flex-col gap-2 items-center">
                  <p className="text-base text-foreground font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    WhatsApp: (11) 99999-9999
                  </p>
                  <p className="text-sm text-muted-foreground">
                    E-mail: contato@nataldeluzbrasil.com.br
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">ou envie uma mensagem</span>
                </div>
              </div>

              <form className="space-y-4 mt-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const nome = formData.get('nome');
                const telefone = formData.get('telefone');
                const cidade = formData.get('cidade');
                const mensagem = formData.get('mensagem');
                const whatsappMessage = `Olá! Meu nome é ${nome}, telefone ${telefone}, de ${cidade}. ${mensagem}`;
                window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
              }}>
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input id="nome" name="nome" placeholder="Seu nome" required />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <Input id="telefone" name="telefone" placeholder="(11) 99999-9999" required />
                </div>
                <div>
                  <label htmlFor="cidade" className="block text-sm font-medium mb-2">
                    Cidade
                  </label>
                  <Input id="cidade" name="cidade" placeholder="Sua cidade" required />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Sua mensagem ou dúvida"
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-christmas hover:opacity-90 text-primary-foreground font-bold"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Second Payment Methods (Footer) */}
      <PaymentMethods />

      <Footer />
    </div>
  );
};

export default Index;
