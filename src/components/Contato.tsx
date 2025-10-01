import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contato = () => {
  const contatos = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(43) 9999-9999",
      link: "tel:43999999999",
      cta: "Ligar Agora",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@desentopja.com.br",
      link: "mailto:contato@desentopja.com.br",
      cta: "Enviar E-mail",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Toda a região metropolitana",
      link: "#regioes",
      cta: "Ver Regiões",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "24 horas por dia, 7 dias por semana",
      link: "#inicio",
      cta: "Solicitar Agora",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato agora mesmo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contatos.map((contato, index) => {
            const Icon = contato.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-accent animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                    <Icon size={28} className="text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{contato.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">
                    {contato.info}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold w-full"
                    asChild
                  >
                    <a href={contato.link}>{contato.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card
            className="overflow-hidden border-2 border-accent shadow-accent"
            style={{ background: "var(--gradient-primary)" }}
          >
            <CardContent className="p-8 lg:p-12 text-center text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Emergência? Atendemos Agora!
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Chegamos em até 30 minutos na sua região
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 shadow-xl"
                  asChild
                >
                  <a href="tel:43999999999">
                    <Phone className="mr-2" size={20} />
                    Ligar: (43) 9999-9999
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6"
                  asChild
                >
                  <a href="https://wa.me/5543999999999" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contato;
