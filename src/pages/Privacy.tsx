import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-background dark flex flex-col">
            <Header />
            <main className="flex-1 container px-4 py-32 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 font-['Inter']">Política de Privacidade</h1>

                <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-4">1. Visão Geral</h2>
                        <p>
                            A Outliers Invest ("nós", "nosso") está comprometida em proteger sua privacidade.
                            Esta Política de Privacidade explica como coletamos, usamos e compartilhamos suas informações pessoais
                            ao visitar nosso site ou utilizar nossos serviços.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-4">2. Coleta de Dados</h2>
                        <p>
                            Podemos coletar as seguintes informações:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Informações de contato (nome, e-mail, CPF, telefone) fornecidas voluntariamente.</li>
                            <li>Dados de uso e navegação para melhoria contínua da plataforma.</li>
                            <li>Informações técnicas (IP, tipo de navegador) para segurança e análise.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-4">3. Uso das Informações</h2>
                        <p>
                            Utilizamos seus dados para:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Fornecer e manter nossos serviços de copytrading automatizado.</li>
                            <li>Comunicar atualizações, ofertas e suporte via WhatsApp.</li>
                            <li>Cumprir obrigações legais e regulatórias.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-4">4. Segurança</h2>
                        <p>
                            Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado,
                            alteração ou destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-4">5. Contato</h2>
                        <p>
                            Se tiver dúvidas sobre esta política, entre em contato conosco através do e-mail: contato@outliersinvest.com.br
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;
