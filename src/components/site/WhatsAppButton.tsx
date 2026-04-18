import { MessageCircle } from "lucide-react";

const PHONE = "6282172120802";
const MESSAGE = encodeURIComponent(
  "Saya ingin mengetahui lebih lanjut mengenai Layanan Online anda",
);

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-whatsapp-foreground shadow-[0_12px_30px_-8px_oklch(0.68_0.16_150/0.55)] transition-transform hover:scale-105 md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">Chat WhatsApp</span>
    </a>
  );
}
