import { Instagram, MessageCircle, Mail } from "lucide-react";

interface FooterProps {
  logoVariant?: "white" | "black";
}

const Footer = ({ logoVariant = "white" }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = import.meta.env.VITE_WHATSAPP_LINK || "#"; // Fallback para segurança
  const instagramLink = "https://instagram.com/outliers.invest"; // Substituir pelo link correto

  const logoSrc = logoVariant === "white"
    ? "/img/logo_wide_white_text.webp"
    : "/img/logo_wide_black_text.webp";

  const isLight = logoVariant === "black";
  const textColor = isLight ? "text-slate-600" : "text-muted-foreground";
  const headingColor = isLight ? "text-slate-900" : "text-foreground";
  const hoverColor = isLight ? "hover:text-slate-900" : "hover:text-foreground";
  const borderColor = isLight ? "border-slate-200" : "border-border/30";

  return (
    <footer className={`py-12 border-t ${isLight ? "bg-slate-50 border-slate-200" : "bg-background border-border/50"}`}>
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <a href="/" className="flex items-center gap-2 mb-4">
                <img
                  src={logoSrc}
                  alt="Outliers Invest"
                  className="h-8 w-auto"
                />
              </a>
              <p className={`text-sm ${textColor}`}>
                Robôs inteligentes cuidam do seu investimento com tecnologia e gestão de risco responsável.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className={`font-semibold mb-4 ${headingColor}`}>Navegação</h4>
              <nav className="flex flex-col gap-2">
                <a href="#about" className={`text-sm ${textColor} ${hoverColor} transition-colors`}>
                  O que oferecemos
                </a>
                <a href="#why" className={`text-sm ${textColor} ${hoverColor} transition-colors`}>
                  Diferenciais
                </a>
                <a href="#steps" className={`text-sm ${textColor} ${hoverColor} transition-colors`}>
                  Como começar
                </a>
                <a href="#founders" className={`text-sm ${textColor} ${hoverColor} transition-colors`}>
                  Quem somos
                </a>
                <a href="#portfolio" className={`text-sm ${textColor} ${hoverColor} transition-colors`}>
                  Portfólio
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className={`font-semibold mb-4 ${headingColor}`}>Contato</h4>
              <div className="flex flex-col gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm ${textColor} hover:text-primary transition-colors`}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm ${textColor} hover:text-primary transition-colors`}
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="mailto:contato@outliersinvest.com.br"
                  className={`inline-flex items-center gap-2 text-sm ${textColor} hover:text-primary transition-colors`}
                >
                  <Mail className="w-4 h-4" />
                  contato@outliersinvest.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`pt-8 border-t ${borderColor} flex flex-col md:flex-row justify-between items-center gap-4`}>
            <p className={`text-sm ${textColor}`}>
              © {currentYear} Outliers Invest. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="/privacidade" className={`text-sm ${textColor} ${hoverColor} transition-colors`}>
                Política de Privacidade
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className={`mt-8 pt-6 border-t ${isLight ? "border-slate-200" : "border-border/20"}`}>
            <p className={`text-xs text-center max-w-3xl mx-auto ${isLight ? "text-slate-400" : "text-muted-foreground/70"}`}>
              Investimentos envolvem riscos e podem resultar em perdas. Rentabilidade passada não é garantia de resultados futuros.
              A Outliers Invest não é uma instituição financeira. Consulte um profissional antes de investir.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;