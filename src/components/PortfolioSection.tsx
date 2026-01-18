import { ExternalLink, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PortfolioSection = () => {
    const scopeRef = useScrollAnimation();
    const portfolioLink = "#"; // Substituir pelo link real do portfólio

    return (
        <section ref={scopeRef} id="portfolio" className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="container px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Section Header */}
                    <div className="animate-up opacity-0">
                        <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                            Transparência
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            A transparência é a{' '}
                            <span className="text-gradient">base do nosso trabalho</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Acesse nosso portfólio atualizado e acompanhe o desempenho real das nossas estratégias.
                        </p>
                    </div>

                    {/* Portfolio Card */}
                    <div className="animate-up opacity-0">
                        <div className="bg-card/50 border border-primary/20 rounded-2xl p-8 md:p-12 hover:border-primary/40 transition-all group">
                            {/* Stats Preview */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">Performance</p>
                                    <p className="font-bold text-lg">Atualizada</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Eye className="w-6 h-6 text-primary" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">Acesso</p>
                                    <p className="font-bold text-lg">Público</p>
                                </div>
                                <div className="text-center col-span-2 md:col-span-1">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <ExternalLink className="w-6 h-6 text-primary" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">Resultados</p>
                                    <p className="font-bold text-lg">Reais</p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Button size="lg" className="text-lg px-8 py-6 shadow-glow" asChild>
                                <a href={portfolioLink} target="_blank" rel="noopener noreferrer">
                                    Clique e acesse o portfólio
                                    <ExternalLink className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
