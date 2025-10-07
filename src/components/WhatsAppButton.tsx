import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "2250749992599";
  const message = "Bonjour ARCHANGE BTP, j'aimerais obtenir plus d'informations sur vos services.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed left-6 bottom-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg transition-all duration-300 group"
      aria-label="Contacter sur WhatsApp"
    >
      <div className="w-14 h-14 flex items-center justify-center">
        <MessageCircle className="w-6 h-6" />
      </div>
      <span
        className={`pr-4 font-medium transition-all duration-300 overflow-hidden ${
          isHovered ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        Contactez-nous
      </span>
    </button>
  );
};

export default WhatsAppButton;
