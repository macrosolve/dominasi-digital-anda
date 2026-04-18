import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function ContactCta() {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="container-x">
        <div className="surface-hero relative overflow-hidden rounded-3xl p-8 text-primary-foreground shadow-elegant md:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                Siap Naik Level?{" "}
                <span className="text-gradient-gold">Mulai Hari Ini.</span>
              </h2>
              <p className="mt-4 max-w-lg text-base text-primary-foreground/85 md:text-lg">
                Konsultasi gratis 30 menit untuk menentukan strategi terbaik
                untuk bisnis Anda. Tanpa komitmen.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+6282172120802"
                  className="flex items-center gap-3 text-primary-foreground/90 hover:text-gold"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">+62 821-7212-0802</span>
                </a>
                <a
                  href="mailto:halo@paketseo.id"
                  className="flex items-center gap-3 text-primary-foreground/90 hover:text-gold"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">halo@paketseo.id</span>
                </a>
                <div className="flex items-center gap-3 text-primary-foreground/90">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">
                    Jakarta • Bali • Melayani Seluruh Indonesia
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-7 backdrop-blur-md animate-fade-up md:p-8">
              <h3 className="text-xl font-bold">Hubungi Tim Kami Sekarang</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">
                Respon &lt; 30 menit pada jam kerja (Senin–Sabtu, 09.00–18.00 WIB).
              </p>

              <a
                href={`https://wa.me/6282172120802?text=${encodeURIComponent(
                  "Saya ingin mengetahui lebih lanjut mengenai Layanan Online anda",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-bold text-whatsapp-foreground shadow-[0_12px_30px_-8px_oklch(0.68_0.16_150/0.55)] transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat WhatsApp Sekarang
              </a>
              <a
                href="#layanan-seo"
                className="mt-3 flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-gold-foreground shadow-gold transition-transform hover:scale-[1.02]"
              >
                Lihat Semua Paket
              </a>

              <p className="mt-5 text-center text-xs text-primary-foreground/65">
                🔒 Konsultasi 100% gratis & tanpa komitmen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
