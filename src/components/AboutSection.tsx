import { Bot, Brain, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
    const scopeRef = useScrollAnimation();

    return (
        <section ref={scopeRef} id="about" className="py-24 md:py-32 bg-background relative">
            <div className="container px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Section Header */}
                    <div className="animate-up opacity-0">
                        <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Nossos Serviços
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            O que oferecemos?
                        </h2>
                    </div>

                    {/* Main Message */}
                    <div className="animate-up opacity-0 mb-16">
                        <div className="bg-card/50 border border-border/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Bot className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Um portfólio robusto com{' '}
                                <span className="text-primary">8 estratégias automatizadas</span>{' '}
                                que operam em conjunto.
                            </h3>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Cada estratégia é validada por inteligência artificial e testes estatísticos,
                                construídos para oferecer <strong className="text-foreground">desempenho real</strong> e controle de risco.
                            </p>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid md:grid-cols-3 gap-6 animate-stagger">
                        <div className="stagger-item opacity-0">
                            <FeatureCard
                                icon={Brain}
                                title="Inteligência Artificial"
                                description="Algoritmos avançados que identificam as melhores oportunidades de mercado"
                            />
                        </div>
                        <div className="stagger-item opacity-0">
                            <FeatureCard
                                icon={BarChart3}
                                title="Testes Estatísticos"
                                description="Validação rigorosa para garantir consistência e segurança nas operações"
                            />
                        </div>
                        <div className="stagger-item opacity-0">
                            <FeatureCard
                                icon={Bot}
                                title="Operação Conjunta"
                                description="8 estratégias descorrelacionadas trabalhando em sinergia"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
    <div className="p-6 rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-300 group">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
        </div>
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
    </div>
);

export default AboutSection;
