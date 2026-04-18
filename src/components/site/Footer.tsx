import { Crown } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-primary-foreground/80">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#hero" className="flex items-center gap-2 font-bold text-primary-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-gold-foreground">
                <Crown className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg">
                Paket<span className="text-gradient-gold">SEO</span>.id &amp; RajaSEO.id
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
              Solusi SEO Profesional, AI Kustom, dan Hospitality IT Consultant
              terintegrasi untuk pertumbuhan bisnis Indonesia.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Layanan
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#layanan-seo" className="hover:text-gold">Paket SEO</a></li>
              <li><a href="#ai-expert" className="hover:text-gold">AI Expert</a></li>
              <li><a href="#hospitality" className="hover:text-gold">Hospitality IT</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground">
              Kontak
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>+62 821-7212-0802</li>
              <li>halo@paketseo.id</li>
              <li>Jakarta • Bali • Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} PaketSEO.id &amp; RajaSEO.id — Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
