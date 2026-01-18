import { Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FoundersSection = () => {
    const scopeRef = useScrollAnimation();

    const founders = [
        {
            name: "Arthur Aquino",
            role: "Engenheiro Eletricista",
            image: "/img/arthur.webp",
            linkedin: "#" // Substituir pelo LinkedIn real
        },
        {
            name: "Felipe Hornung",
            role: "Doutor em Engenharia Elétrica",
            image: "/img/felipe.webp",
            linkedin: "#" // Substituir pelo LinkedIn real
        }
    ];

    return (
        <section ref={scopeRef} id="founders" className="py-24 md:py-32 section-darker relative">
            <div className="container px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-up opacity-0">
                        <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Quem Somos
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Conheça quem está por trás da{' '}
                            <span className="text-gradient">Outliers Invest</span>
                        </h2>
                    </div>

                    {/* Story */}
                    <div className="mb-16 animate-up opacity-0">
                        <div className="bg-card/50 border border-border/30 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
                            <p className="text-lg text-muted-foreground mb-6">
                                Fundada por <strong className="text-foreground">Arthur Aquino</strong> e{' '}
                                <strong className="text-foreground">Felipe Hornung</strong>, engenheiros eletricistas
                                apaixonados por tecnologia e mercado financeiro, a Outliers nasceu para democratizar
                                o acesso a estratégias de alto nível, com transparência, compromisso e foco no longo prazo.
                            </p>
                            <p className="text-muted-foreground">
                                Nos inspiramos no livro <em className="text-primary">"Outliers – Fora de Série"</em>, que ensina
                                que sucesso é fruto de prática, conhecimento e excelência — pilares que sustentam tudo o que fazemos.
                            </p>
                        </div>
                    </div>

                    {/* Founders Cards */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto animate-stagger">
                        {founders.map((founder, index) => (
                            <div key={index} className="stagger-item opacity-0">
                                <FounderCard {...founder} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface FounderCardProps {
    name: string;
    role: string;
    image: string;
    linkedin: string;
}

const FounderCard = ({ name, role, image, linkedin }: FounderCardProps) => (
    <div className="text-center p-8 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all group">
        {/* Avatar */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-top"
            />
        </div>

        {/* Info */}
        <h4 className="text-xl font-bold mb-1">{name}</h4>
        <p className="text-muted-foreground mb-4">{role}</p>

        {/* LinkedIn */}
        <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
            <Linkedin className="w-4 h-4" />
            LinkedIn
        </a>
    </div>
);

export default FoundersSection;
