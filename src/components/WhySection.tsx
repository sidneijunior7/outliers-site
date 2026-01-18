import { Brain, BarChart3, Bot, Users, Gift, HeartHandshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhySection = () => {
    const scopeRef = useScrollAnimation();

    const differentiators = [
        {
            icon: Brain,
            title: "Inteligência Artificial",
            description: "Estratégias desenvolvidas com algoritmos avançados."
        },
        {
            icon: BarChart3,
            title: "Validade Estatística",
            description: "Testes rigorosos garantem segurança e consistência."
        },
        {
            icon: Bot,
            title: "Sem Fator Emocional",
            description: "Você não precisa operar, os robôs seguem lógica fria e validada."
        },
        {
            icon: Users,
            title: "Descorrelação entre Estratégias",
            description: "Portfólio estruturado com lógica complementar entre os robôs."
        },
        {
            icon: HeartHandshake,
            title: "Suporte Individual",
            description: "Atendimento próximo, transparente e consultivo."
        },
        {
            icon: Gift,
            title: "30 Dias de Teste Gratuito",
            description: "Experimente sem compromisso e com acompanhamento."
        }
    ];

    return (
        <section ref={scopeRef} id="why" className="py-24 md:py-32 section-darker relative">
            <div className="container px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-up opacity-0">
                        <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Diferenciais
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Por que utilizar os robôs da{' '}
                            <span className="text-gradient">Outliers Invest</span>?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Conheça os principais diferenciais das nossas estratégias automatizadas.
                        </p>
                    </div>

                    {/* Differentiators Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
                        {differentiators.map((item, index) => (
                            <div key={index} className="stagger-item opacity-0">
                                <DifferentiatorCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface DifferentiatorCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

const DifferentiatorCard = ({ icon: Icon, title, description }: DifferentiatorCardProps) => (
    <div className="p-8 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300 group h-full">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-7 h-7 text-primary" />
        </div>
        <h4 className="text-xl font-bold mb-3">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
    </div>
);

export default WhySection;
