import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: "Gabriel Moreira Nunes",
      localizacao: "Centro",
      avaliacao: 5,
      texto: "Serviço excelente! Chegaram super rápido e resolveram o problema do esgoto em menos de 1 hora. Equipe muito profissional e educada.",
      data: "Há 2 semanas",
    },
    {
      nome: "Larissa Monteiro Prado",
      localizacao: "Zona Norte",
      avaliacao: 5,
      texto: "Precisei de um desentupimento emergencial às 3h da manhã e eles atenderam prontamente. Preço justo e trabalho impecável!",
      data: "Há 1 mês",
    },
    {
      nome: "Matheus Vinícius Cardoso",
      localizacao: "Zona Sul",
      avaliacao: 5,
      texto: "Recomendo demais! Fizeram o desentupimento da pia da cozinha e ainda deram dicas para evitar novos entupimentos. Muito atenciosos!",
      data: "Há 3 semanas",
    },
    {
      nome: "Isabella Figueiredo Lopes",
      localizacao: "Gleba Palhano",
      avaliacao: 5,
      texto: "Empresa séria e comprometida. Resolveram um problema complexo de esgoto que outras empresas não conseguiram. Nota 10!",
      data: "Há 1 semana",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Star className="text-accent fill-accent" size={20} />
            <span className="text-accent font-bold">5.0 Estrelas</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Satisfação garantida em cada atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {depoimentos.map((depoimento, index) => (
            <Card
              key={index}
              className="group hover:shadow-accent transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-accent/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(depoimento.avaliacao)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent fill-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{depoimento.texto}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{depoimento.nome}</p>
                  <p className="text-sm text-muted-foreground">{depoimento.localizacao}</p>
                  <p className="text-xs text-muted-foreground mt-1">{depoimento.data}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
