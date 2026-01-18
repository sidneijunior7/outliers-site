import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, CheckCircle2, Bot, Brain, Shield } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// CPF Validation Utility
const isValidCPF = (cpf: string) => {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true;
};

const Leads = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [searchParams] = useSearchParams();
    const scopeRef = useScrollAnimation();

    // A/B Test Variant
    // 1: Dark + CPF
    // 2: Light - CPF (Ajustado para o feedback)
    // 3: Light + CPF
    // 4: Dark - CPF
    const variant = parseInt(searchParams.get("v") || "1");
    const hasCPF = variant === 1 || variant === 3;
    const isDark = variant === 1 || variant === 4;

    const logoVariant = isDark ? "white" : "black";

    const formSchema = useMemo(() => z.object({
        name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
        email: z.string().email("E-mail inválido"),
        phone: z.string().min(10, "Telefone inválido"),
        cpf: hasCPF ? z.string().refine(isValidCPF, "CPF inválido") : z.string().optional(),
    }), [hasCPF]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            cpf: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);

        try {
            // POST to internal proxy (handled by server.js)
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...values, variant }),
            });

            if (response.ok) {
                setIsSuccess(true);
                toast.success("Dados enviados com sucesso!");
                form.reset();
            } else {
                throw new Error("Erro ao enviar dados");
            }
        } catch (error) {
            console.error(error);
            toast.error("Erro ao enviar o formulário. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`min-h-screen flex flex-col font-sans transition-colors duration-500 relative ${isDark ? "bg-background dark text-foreground" : "bg-slate-50 text-slate-900"}`}>

            {/* Light Mode Background */}
            {!isDark && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'url(/img/candlesticks.webp)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'grayscale(100%)'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50/0 via-slate-50/50 to-slate-50" />
                </div>
            )}

            <Header logoVariant={logoVariant} />
            <main className="flex-1 flex items-center justify-center pt-24 pb-12" ref={scopeRef}>
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">

                        {/* Left Column: Copy & Branding */}
                        <div className="order-2 lg:order-1">
                            <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium border mb-6 animate-fade opacity-0 ${isDark ? "bg-primary/10 text-primary border-primary/20" : "bg-primary/5 text-primary border-primary/20"}`}>
                                Comece sua jornada
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-up opacity-0">
                                Robôs inteligentes para seu{' '}
                                <span className="text-primary">investimento.</span>
                            </h1>
                            <p className={`text-xl mb-8 animate-up opacity-0 ${isDark ? "text-muted-foreground" : "text-slate-600"}`}>
                                Tecnologia e performance real ao seu alcance, sem falsas promessas e sem complicações.
                            </p>

                            <div className="space-y-8 animate-stagger">
                                <div className="flex gap-4 stagger-item opacity-0">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-primary ${isDark ? "bg-primary/10" : "bg-primary/10 ring-1 ring-primary/20"}`}>
                                        <Brain className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Inteligência Artificial</h3>
                                        <p className={`leading-relaxed ${isDark ? "text-muted-foreground" : "text-slate-600 font-medium opacity-80"}`}>
                                            Estratégias desenvolvidas com algoritmos avançados e validadas por testes estatísticos rigorosos.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 stagger-item opacity-0">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-primary ${isDark ? "bg-primary/10" : "bg-primary/10 ring-1 ring-primary/20"}`}>
                                        <Bot className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">8 Estratégias Automatizadas</h3>
                                        <p className={`leading-relaxed ${isDark ? "text-muted-foreground" : "text-slate-600 font-medium opacity-80"}`}>
                                            Portfólio estruturado com lógica complementar entre os robôs, operando 24/7 sem fator emocional.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 stagger-item opacity-0">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-primary ${isDark ? "bg-primary/10" : "bg-primary/10 ring-1 ring-primary/20"}`}>
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">30 Dias de Teste Grátis</h3>
                                        <p className={`leading-relaxed ${isDark ? "text-muted-foreground" : "text-slate-600 font-medium opacity-80"}`}>
                                            Experimente sem compromisso, com suporte individual e acompanhamento próximo durante todo o período.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Capture Form */}
                        <div className="order-1 lg:order-2 w-full max-w-md mx-auto animate-fade opacity-0">
                            {isSuccess ? (
                                <Card className={`text-center py-12 border-primary/20 shadow-xl ${isDark ? "bg-primary/5" : "bg-white border-primary/10"}`}>
                                    <CardContent className="flex flex-col items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                        <h2 className={isDark ? "text-2xl font-bold" : "text-2xl font-bold text-slate-900"}>Cadastro Realizado!</h2>
                                        <p className={isDark ? "text-muted-foreground" : "text-slate-600"}>
                                            Recebemos seus dados e entraremos em contato pelo WhatsApp para dar início à sua jornada.
                                        </p>
                                        <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
                                            Enviar novo cadastro
                                        </Button>
                                    </CardContent>
                                </Card>
                            ) : (
                                <Card className={`shadow-2xl border-border/50 ${isDark ? "bg-card/50 backdrop-blur" : "bg-white/90 backdrop-blur-sm border-slate-200"}`}>
                                    <CardHeader>
                                        <CardTitle className={`text-2xl text-center ${!isDark ? "text-slate-900" : ""}`}>Quero Conhecer os Robôs</CardTitle>
                                        <CardDescription className="text-center">
                                            Preencha seus dados para receber o contato do nosso time.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                                <FormField
                                                    control={form.control}
                                                    name="name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className={!isDark ? "text-slate-700 font-semibold" : ""}>Nome Completo</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Seu nome" {...field} className={!isDark ? "bg-white border-slate-300 text-slate-900 focus:ring-primary focus:border-primary shadow-sm" : ""} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className={!isDark ? "text-slate-700 font-semibold" : ""}>E-mail</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="seu@email.com" {...field} className={!isDark ? "bg-white border-slate-300 text-slate-900 focus:ring-primary focus:border-primary shadow-sm" : ""} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {hasCPF && (
                                                    <FormField
                                                        control={form.control}
                                                        name="cpf"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className={!isDark ? "text-slate-700 font-semibold" : ""}>CPF</FormLabel>
                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="000.000.000-00"
                                                                        {...field}
                                                                        className={!isDark ? "bg-white border-slate-300 text-slate-900 focus:ring-primary focus:border-primary shadow-sm" : ""}
                                                                        onChange={(e) => {
                                                                            let v = e.target.value.replace(/\D/g, "");
                                                                            if (v.length > 11) v = v.slice(0, 11);
                                                                            v = v.replace(/(\d{3})(\d)/, "$1.$2");
                                                                            v = v.replace(/(\d{3})(\d)/, "$1.$2");
                                                                            v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                                                                            field.onChange(v);
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                )}

                                                <FormField
                                                    control={form.control}
                                                    name="phone"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className={!isDark ? "text-slate-700 font-semibold" : ""}>Celular (WhatsApp)</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="(11) 99999-9999"
                                                                    {...field}
                                                                    className={!isDark ? "bg-white border-slate-300 text-slate-900 focus:ring-primary focus:border-primary shadow-sm" : ""}
                                                                    onChange={(e) => {
                                                                        let v = e.target.value.replace(/\D/g, "");
                                                                        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
                                                                        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
                                                                        if (v.length > 15) v = v.substring(0, 15);
                                                                        field.onChange(v);
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                <Button type="submit" className="w-full mt-2" disabled={isLoading} size="lg">
                                                    {isLoading ? (
                                                        <>
                                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                            Enviando...
                                                        </>
                                                    ) : (
                                                        "Quero Começar"
                                                    )}
                                                </Button>
                                            </form>
                                        </Form>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer logoVariant={logoVariant} />
        </div>
    );
};

export default Leads;
