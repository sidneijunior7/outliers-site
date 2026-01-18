import { ArrowRight, Bot, Shield, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const scopeRef = useScrollAnimation();
  const whatsappLink = import.meta.env.VITE_WHATSAPP_LINK || "#"; // Fallback para segurança

  return (
    <section ref={scopeRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with reduced brightness */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/img/candlesticks.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-90" />
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
        {/* Bottom fade to background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="container relative z-10 px-4 py-10 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade opacity-0">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Copytrading com Inteligência Artificial</span>
          </div>

          {/* Main Headline */}
          <div className="animate-up opacity-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-['Inter']">
              Robôs inteligentes cuidam do seu{' '}
              <span className="text-gradient">investimento</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-up opacity-0">
            Tecnologia e gestão de risco responsável.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-up opacity-0">
            Performance real ao seu alcance, <strong className="text-foreground">sem falsas promessas</strong> e sem complicações.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-up opacity-0">
            <Button size="lg" className="text-lg px-8 py-6 shadow-glow group" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Quero saber mais no WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-border/50 bg-secondary/20 hover:bg-secondary/40" asChild>
              <a href="#about">
                Conhecer o Portfólio
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto animate-stagger">
            <div className="stagger-item opacity-0">
              <StatCard icon={Bot} value="8" label="Estratégias" />
            </div>
            <div className="stagger-item opacity-0">
              <StatCard icon={Shield} value="IA" label="Validada" />
            </div>
            <div className="stagger-item opacity-0">
              <StatCard icon={Clock} value="30 dias" label="Teste Grátis" />
            </div>
            <div className="stagger-item opacity-0">
              <StatCard icon={Zap} value="1:1" label="Suporte Individual" />
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className="mt-20 relative animate-up opacity-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-xl overflow-hidden border border-primary/20 shadow-elevated bg-card/50 backdrop-blur p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-semibold mb-4">
                Conectando você às <span className="text-primary">melhores oportunidades</span> do mercado.
              </p>
              <p className="text-muted-foreground">
                Um portfólio robusto com 8 estratégias automatizadas que operam em conjunto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => (
  <div className="text-center p-4 rounded-lg bg-card/50 border border-border/30 backdrop-blur-sm">
    <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
    <div className="metric-value text-2xl md:text-3xl text-foreground">{value}</div>
    <div className="metric-label text-xs">{label}</div>
  </div>
);

export default HeroSection;