import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const linksSec = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Regiões", href: "#regioes" },
    { label: "Contato", href: "#contato" },
  ];

  const servicos = [
    "Desentupimento de Pia",
    "Desentupimento de Ralo",
    "Desentupimento de Esgoto",
    "Desentupimento de Vaso",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <img src={logo} alt="DesentopJá" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 mb-4">
              Soluções rápidas e profissionais em desentupimento. Atendimento 24 horas em toda região.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {linksSec.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {servicos.map((servico) => (
                <li key={servico}>
                  <a
                    href="#servicos"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {servico}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Telefone</p>
                  <a href="tel:11999999999" className="hover:text-accent transition-colors">
                    (11) 9999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/60">E-mail</p>
                  <a
                    href="mailto:contato@desentopja.com.br"
                    className="hover:text-accent transition-colors break-all"
                  >
                    contato@desentopja.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Horário</p>
                  <p>24 horas • 7 dias</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © 2025 DesentopJá. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
