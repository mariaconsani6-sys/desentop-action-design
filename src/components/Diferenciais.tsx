import { Clock, Users, DollarSign, Award } from "lucide-react";

const Diferenciais = () => {
  const diferenciais = [
    {
      icon: Clock,
      title: "Rapidez Garantida",
      description: "Chegamos em até 30 minutos para atender sua emergência",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Award,
      title: "Técnicos Qualificados",
      description: "Equipe treinada e certificada com anos de experiência",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: DollarSign,
      title: "Preço Justo",
      description: "Orçamento transparente sem taxas escondidas",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Users,
      title: "Atendimento 24h",
      description: "Disponíveis todos os dias, inclusive feriados",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Por Que Escolher a DesentopJá?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos referência em desentupimento com atendimento rápido e profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diferenciais.map((diferencial, index) => {
            const Icon = diferencial.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-accent transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`${diferencial.bgColor} ${diferencial.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {diferencial.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {diferencial.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
