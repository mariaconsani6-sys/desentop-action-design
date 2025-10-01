import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-accent hover:bg-accent-light rounded-full flex items-center justify-center shadow-accent hover:scale-110 transition-all group animate-fade-in"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} className="text-accent-foreground" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Fale conosco no WhatsApp
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
    </a>
  );
};

export default WhatsAppButton;
