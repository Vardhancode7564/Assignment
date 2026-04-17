import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919784818899"
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-btn"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white transition-transform duration-200 hover:scale-110"
      style={{
        background: "#25D366",
        boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
        animation: "pulse-green 2.5s ease-in-out infinite",
      }}
    >
      <MessageCircle size={26} />
    </a>
  );
}
