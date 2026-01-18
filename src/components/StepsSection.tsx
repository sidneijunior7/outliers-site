import { MessageCircle, Building2, Globe, Bot, Rocket, Gift, Users, CreditCard, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StepsSection = () => {
    const scopeRef = useScrollAnimation();

    const steps = [
        {
            icon: MessageCircle,
            title: "Bem-vindo!",
            description: "Atendimento no WhatsApp para tirar dúvidas"
        },
        {
            icon: Building2,
            title: "Conta na XP",
            description: "Criação da conta na XP Investimentos (via link Outliers)"
        },
        {
            icon: Globe,
            title: "Cadastro OnTick",
            description: "Cadastro na plataforma OnTick → www.ontick.com.br"
        },
        {
            icon: Bot,
            title: "Contratação",
            description: "Contratação dos robôs da Outliers via OnTick"
        },
        {
            icon: Rocket,
            title: "Ativação",
            description: "Ativação do robô na conta XP"
        },
        {
            icon: Gift,
            title: "Teste Gratuito",
            description: "Teste gratuito por 30 dias"
        },
        {
            icon: Users,
            title: "Grupo Exclusivo",
            description: "Acesso ao grupo exclusivo no WhatsApp + PDF de ativação"
        },
        {
            icon: CreditCard,
            title: "Conversão",
            description: "Conversão para plano mensal ou trimestral"
        }
    ];

    return (
        <section ref={scopeRef} id="steps" className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="container px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-up opacity-0">
                        <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Jornada
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Veja os passos{' '}
                            <span className="text-gradient">para começar</span>
                        </h2>
                    </div>

                    {/* Steps Timeline */}
                    <div className="relative animate-stagger">
                        {/* Vertical Line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-px" />

                        {steps.map((step, index) => (
                            <div key={index} className="stagger-item opacity-0">
                                <StepItem
                                    {...step}
                                    stepNumber={index + 1}
                                    isLeft={index % 2 === 0}
                                    isLast={index === steps.length - 1}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface StepItemProps {
    icon: React.ElementType;
    title: string;
    description: string;
    stepNumber: number;
    isLeft: boolean;
    isLast: boolean;
}

const StepItem = ({ icon: Icon, title, description, stepNumber, isLeft }: StepItemProps) => (
    <div className={`relative flex items-center gap-6 mb-8 md:mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Content Card */}
        <div className={`flex-1 ml-16 md:ml-0 ${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
            <div className={`inline-block p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all ${isLeft ? 'md:ml-auto' : ''}`}>
                <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                    <Icon className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">{title}</h4>
                </div>
                <p className="text-muted-foreground text-sm">{description}</p>
            </div>
        </div>

        {/* Center Circle */}
        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10">
            <Check className="w-5 h-5 text-primary" />
        </div>

        {/* Mobile Number */}
        <div className="absolute left-16 top-1 md:hidden text-xs text-muted-foreground">
            Passo {stepNumber}
        </div>

        {/* Hidden content for layout on opposite side */}
        <div className="hidden md:block flex-1" />
    </div>
);

export default StepsSection;
