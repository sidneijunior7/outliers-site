import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  logoVariant?: "white" | "black";
}

const Header = ({ logoVariant = "white" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = import.meta.env.VITE_WHATSAPP_LINK || "#"; // Fallback para segurança

  const logoSrc = logoVariant === "white"
    ? "/img/logo_wide_white_text.webp"
    : "/img/logo_wide_black_text.webp";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? (logoVariant === "white" ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-white/80 backdrop-blur-xl border-b border-slate-200")
        : "bg-transparent"
        }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src={logoSrc}
              alt="Outliers Invest"
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              O que oferecemos
            </a>
            <a href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Diferenciais
            </a>
            <a href="#steps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Como começar
            </a>
            <a href="#founders" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Quem somos
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="#portfolio">
                Portfólio
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-xl absolute left-0 right-0 px-4 shadow-xl">
            <nav className="flex flex-col gap-4">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                O que oferecemos
              </a>
              <a href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Diferenciais
              </a>
              <a href="#steps" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Como começar
              </a>
              <a href="#founders" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Quem somos
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="#portfolio">
                    Portfólio
                  </a>
                </Button>
                <Button size="sm" className="w-full" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;