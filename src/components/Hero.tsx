import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <div className="inline-block bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent/30">
              <p className="text-accent-light font-bold flex items-center gap-2">
                <Clock size={18} />
                Atendimento 24 Horas
              </p>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Desentupimento
              <span className="block text-accent-light">Rápido e Eficaz</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Chegamos em até <span className="font-bold text-accent-light">30 minutos</span> para resolver seu problema com urgência e qualidade
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-accent-foreground font-bold text-lg px-8 py-6 shadow-accent hover:scale-105 transition-transform"
                asChild
              >
                <a href="#contato">
                  <Phone className="mr-2" size={20} />
                  Ligar Agora
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 transition-all"
                asChild
              >
                <a href="#servicos">Ver Serviços</a>
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-white/90">
                <MapPin size={20} className="text-accent-light" />
                <span className="font-medium">Atendemos toda região</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock size={20} className="text-accent-light" />
                <span className="font-medium">Emergências 24/7</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:block animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Profissional DesentopJá em ação"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl animate-fade-in max-w-xs">
              <p className="text-primary font-bold text-lg mb-1">+5.000 clientes</p>
              <p className="text-muted-foreground">atendidos com sucesso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
