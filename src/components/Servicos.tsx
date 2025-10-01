import { Droplet, Trash2, Waves, WashingMachine } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import servicoPia from "@/assets/servico-pia.jpg";
import servicoRalo from "@/assets/servico-ralo.jpg";
import servicoEsgoto from "@/assets/servico-esgoto.jpg";
import servicoVaso from "@/assets/servico-vaso.jpg";

const Servicos = () => {
  const servicos = [
    {
      icon: Droplet,
      title: "Desentupimento de Pia",
      description: "Desobstruímos pias de cozinha e banheiro rapidamente, sem danificar a tubulação",
      items: ["Pia de cozinha", "Pia de banheiro", "Tanque", "Lavatório"],
      image: servicoPia,
    },
    {
      icon: Trash2,
      title: "Desentupimento de Ralo",
      description: "Removemos entupimentos de ralos com equipamentos modernos e eficientes",
      items: ["Ralo de box", "Ralo de área", "Ralo de quintal", "Ralo externo"],
      image: servicoRalo,
    },
    {
      icon: Waves,
      title: "Desentupimento de Esgoto",
      description: "Solucionamos problemas complexos de esgoto com tecnologia avançada",
      items: ["Esgoto residencial", "Esgoto comercial", "Fossa séptica", "Caixa de gordura"],
      image: servicoEsgoto,
    },
    {
      icon: WashingMachine,
      title: "Desentupimento de Vaso",
      description: "Desentupimos vasos sanitários preservando a louça e o sistema hidráulico",
      items: ["Vaso sanitário", "Cano de descarga", "Sifão", "Tubulação interna"],
      image: servicoVaso,
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para todos os tipos de entupimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((servico, index) => {
            const Icon = servico.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-2 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={servico.image} 
                    alt={servico.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon size={28} className="text-accent group-hover:text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {servico.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {servico.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {servico.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold"
                    asChild
                  >
                    <a href="#contato">Solicitar Serviço</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
