import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const scopeRef = useScrollAnimation();
  const whatsappLink = "https://wa.me/5500000000000"; // Substituir pelo número correto

  return (
    <section ref={scopeRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade opacity-0">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">100% Online</span>
          </div>

          {/* Main Message */}
          <div className="animate-up opacity-0">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Atendimento{' '}
              <span className="text-gradient">100% online</span>
              <br />
              para todo o Brasil
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Fale conosco pelo WhatsApp e comece sua jornada com robôs inteligentes
              que cuidam do seu investimento.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-up opacity-0">
            <Button size="lg" className="text-xl px-10 py-7 shadow-glow group" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Quero saber mais no WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade opacity-0">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Sem compromisso
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Atendimento consultivo
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              30 dias grátis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;