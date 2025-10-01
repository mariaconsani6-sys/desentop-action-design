import { MapPin, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Regioes = () => {
  const regioes = [
    "Centro",
    "Zona Norte",
    "Zona Sul",
    "Zona Leste",
    "Zona Oeste",
    "Região Metropolitana",
    "Bairros Nobres",
    "Periferia",
    "Condomínios",
    "Áreas Comerciais",
    "Áreas Industriais",
    "Residências",
  ];

  return (
    <section id="regioes" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="text-accent" size={20} />
            <span className="text-accent font-bold">Cobertura Total</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Atendemos Sua Região
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos presentes em toda a cidade e região metropolitana
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 shadow-xl border-2 border-border">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regioes.map((regiao, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group hover:translate-x-2 transition-transform animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-foreground font-medium">{regiao}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-accent/5 rounded-xl border border-accent/20">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Não encontrou sua região?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Entre em contato conosco! Estamos em constante expansão e podemos atender sua localidade.
                  </p>
                  <a
                    href="#contato"
                    className="text-accent font-bold hover:text-accent-dark transition-colors inline-flex items-center gap-2"
                  >
                    Consultar atendimento
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Regioes;
