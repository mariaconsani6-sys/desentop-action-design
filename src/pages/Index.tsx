import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import Servicos from "@/components/Servicos";
import Regioes from "@/components/Regioes";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Diferenciais />
      <Servicos />
      <Regioes />
      <Depoimentos />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
