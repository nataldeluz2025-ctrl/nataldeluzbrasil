import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/Badge";
import { TrustBadgesSection, InlineSecurePaymentBadge } from "@/components/TrustBadges";
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
  MessageCircle
} from "lucide-react";

import heroImage from "@/assets/hero-christmas.jpg";
import tree150 from "@/assets/tree-150cm.jpg";
import tree180 from "@/assets/tree-180cm.jpg";
import tree210 from "@/assets/tree-210cm.jpg";
import lights100 from "@/assets/lights-100.jpg";
import lights200 from "@/assets/lights-200.jpg";
import lights300 from "@/assets/lights-300.jpg";

const Index = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
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
            Estoque Limitado para este Natal
          </Badge>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
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
              Falar no WhatsApp
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4 animate-fade-in">
            <Badge variant="discount" className="text-base px-4 py-2">
              Até 30% OFF
            </Badge>
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
            <InlineSecurePaymentBadge />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              image={tree150}
              imageAlt="Combo árvore de Natal 1,50m com pisca-pisca 100 LEDs em sala pequena"
              title="Combo 1 - Árvore 1,50m + Pisca 100 LEDs"
              description="Perfeito para salas pequenas, apartamentos e ambientes compactos."
              oldPrice="R$ 159,99"
              price="R$ 129,99"
              discount="-18%"
              badge={{ text: "Economize R$ 30", variant: "discount" }}
              whatsappMessage="Olá! Tenho interesse no Combo 1 (Árvore 1,50m + Pisca 100 LEDs) por R$ 129,99."
            />

            <ProductCard
              image={tree180}
              imageAlt="Combo árvore de Natal 1,80m com pisca-pisca 200 LEDs em sala de estar"
              title="Combo 2 - Árvore 1,80m + Pisca 200 LEDs"
              description="Tamanho ideal para a maioria das salas, com iluminação intensa."
              oldPrice="R$ 279,99"
              price="R$ 229,99"
              discount="-18%"
              badge={{ text: "Mais Vendido", variant: "bestseller" }}
              whatsappMessage="Olá! Tenho interesse no Combo 2 (Árvore 1,80m + Pisca 200 LEDs) por R$ 229,99."
            />

            <ProductCard
              image={tree210}
              imageAlt="Combo árvore de Natal 2,10m premium com pisca-pisca 300 LEDs em ambiente amplo"
              title="Combo 3 - Árvore 2,10m + Pisca 300 LEDs"
              description="Árvore grande e imponente, para quem quer um Natal de cinema."
              oldPrice="R$ 399,99"
              price="R$ 329,99"
              discount="-17%"
              badge={{ text: "Combo Premium", variant: "premium" }}
              whatsappMessage="Olá! Tenho interesse no Combo 3 (Árvore 2,10m + Pisca 300 LEDs) por R$ 329,99."
            />
          </div>
        </div>
      </section>

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
              image={tree150}
              imageAlt="Árvore de Natal 1,50m para espaços pequenos"
              title="Árvore 1,50m"
              description="Perfeita para espaços pequenos e apartamentos compactos."
              price="R$ 99,99"
              badge={{ text: "Econômica", variant: "promo" }}
              whatsappMessage="Olá! Tenho interesse na Árvore de Natal 1,50m por R$ 99,99."
            />

            <ProductCard
              image={tree180}
              imageAlt="Árvore de Natal 1,80m tamanho padrão"
              title="Árvore 1,80m"
              description="Tamanho padrão, ideal para a maioria das salas."
              price="R$ 169,99"
              badge={{ text: "Melhor Custo-Benefício", variant: "bestseller" }}
              whatsappMessage="Olá! Tenho interesse na Árvore de Natal 1,80m por R$ 169,99."
            />

            <ProductCard
              image={tree210}
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
              image={lights100}
              imageAlt="Pisca-pisca 100 LEDs para decoração natalina"
              title="Pisca-pisca 100 LEDs"
              description="Aproximadamente 10 metros. Ideal para janelas e árvores pequenas."
              price="R$ 29,99"
              whatsappMessage="Olá! Tenho interesse no Pisca-pisca 100 LEDs por R$ 29,99."
            />

            <ProductCard
              image={lights200}
              imageAlt="Pisca-pisca 200 LEDs para varandas e sacadas"
              title="Pisca-pisca 200 LEDs"
              description="Aproximadamente 20 metros. Perfeito para varandas e sacadas."
              price="R$ 39,99"
              whatsappMessage="Olá! Tenho interesse no Pisca-pisca 200 LEDs por R$ 39,99."
            />

            <ProductCard
              image={lights300}
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
            <Card className="text-center border-2 hover:border-primary transition-all">
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

            <Card className="text-center border-2 hover:border-primary transition-all">
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

            <Card className="text-center border-2 hover:border-primary transition-all">
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

      {/* Benefícios Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Por Que Comprar com a Natal de Luz Brasil?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-2">
              <CardContent className="pt-8 pb-6">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Descontos em Combos</h3>
                <p className="text-sm text-muted-foreground">
                  Combos prontos com desconto em relação ao preço individual
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="pt-8 pb-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Qualidade Garantida</h3>
                <p className="text-sm text-muted-foreground">
                  Produtos selecionados com boa qualidade
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="pt-8 pb-6">
                <MessageCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Atendimento Rápido</h3>
                <p className="text-sm text-muted-foreground">
                  Atendimento humanizado pelo WhatsApp
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="pt-8 pb-6">
                <Truck className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Entrega para Todo Brasil</h3>
                <p className="text-sm text-muted-foreground">
                  Pagamento facilitado (PIX, cartão)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mega Promoção Banner */}
      <section className="py-16 bg-gradient-festive text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            🎄 Mega Promoção de Natal 🎄
          </h2>
          <p className="text-xl md:text-2xl mb-6">
            Garanta sua árvore com pisca-pisca com desconto!
          </p>
          <p className="text-lg mb-8">
            Descontos especiais em combos a partir de R$ 129,99
          </p>
          <Button
            size="lg"
            className="bg-white text-secondary hover:bg-white/90 font-bold text-lg px-8 py-6"
            onClick={() => scrollToSection('#combos')}
          >
            Ver Todos os Combos
          </Button>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Clientes com o Natal Iluminado
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "A árvore chegou perfeita e as luzes são lindas! O combo ficou muito mais barato 
                  do que comprar separado. Super recomendo!"
                </p>
                <p className="font-bold">Maria Silva</p>
                <p className="text-sm text-muted-foreground">São Paulo, SP</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Atendimento pelo WhatsApp foi muito rápido e a entrega chegou antes do prazo. 
                  Minha sala ficou linda com a árvore de 1,80m!"
                </p>
                <p className="font-bold">João Santos</p>
                <p className="text-sm text-muted-foreground">Rio de Janeiro, RJ</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Comprei o combo premium para minha casa nova e estou encantada! 
                  A árvore de 2,10m é maravilhosa e as 300 luzes deixam tudo mágico."
                </p>
                <p className="font-bold">Ana Costa</p>
                <p className="text-sm text-muted-foreground">Belo Horizonte, MG</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
              <AccordionTrigger className="text-left">
                Vocês entregam para todo o Brasil?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Realizamos entregas para todo o território nacional. O prazo varia de acordo 
                com sua região, mas geralmente é entre 7 a 15 dias úteis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Qual o prazo médio de entrega?
              </AccordionTrigger>
              <AccordionContent>
                O prazo médio é de 7 a 15 dias úteis, dependendo da sua localização. Para capitais 
                e regiões metropolitanas, geralmente é mais rápido. Entre em contato via WhatsApp 
                para consultar o prazo para sua região.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Como funciona o pagamento?
              </AccordionTrigger>
              <AccordionContent>
                Aceitamos pagamento via PIX (com desconto), cartão de crédito em até 3x sem juros, 
                e cartão de débito. Tudo é combinado diretamente pelo WhatsApp de forma segura.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Posso escolher o tipo de luz (branca, quente, colorida)?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Temos opções de pisca-pisca em luz branca fria, branca quente e colorida. 
                Informe sua preferência ao fazer o pedido pelo WhatsApp.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                As árvores vêm desmontadas? É fácil de montar?
              </AccordionTrigger>
              <AccordionContent>
                Sim, as árvores vêm desmontadas para facilitar o transporte. A montagem é muito 
                simples e rápida - basta encaixar os galhos no tronco central. Acompanha instruções.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                Os combos vêm com a árvore e o pisca-pisca juntos?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Nos combos você recebe a árvore e o pisca-pisca na mesma embalagem, já prontos 
                para usar. É só montar e iluminar!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                Consigo desconto em compras em quantidade para empresa ou condomínio?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Para compras em quantidade (acima de 5 unidades), oferecemos descontos especiais. 
                Entre em contato pelo WhatsApp para solicitar um orçamento personalizado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                Os LEDs têm garantia?
              </AccordionTrigger>
              <AccordionContent>
                Sim! Todos os nossos pisca-piscas de LED têm garantia de 3 meses contra defeitos 
                de fabricação. Se houver algum problema, basta entrar em contato que resolveremos.
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

          <Card className="border-2">
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
                <p className="text-sm text-muted-foreground">
                  WhatsApp: (11) 99999-9999
                </p>
                <p className="text-sm text-muted-foreground">
                  E-mail: contato@nataldeluzbrasil.com.br
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => {
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

      <Footer />
    </div>
  );
};

export default Index;
