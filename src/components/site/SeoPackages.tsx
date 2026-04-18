import { Check, Star, TrendingUp, Crown } from "lucide-react";

type Pkg = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  icon: typeof Star;
  features: string[];
  popular?: boolean;
  cta: string;
};

const packages: Pkg[] = [
  {
    id: "silver",
    name: "Silver",
    tagline: "Start-up Friendly",
    price: "Rp 1.499.000",
    period: "/ bulan",
    icon: Star,
    features: [
      "Optimasi Local SEO (Google Maps)",
      "5 Keyword Target Utama",
      "On-Page Optimization Dasar",
      "Setup Google Search Console & Analytics",
      "Laporan Bulanan Profesional",
      "Konsultasi via WhatsApp",
    ],
    cta: "Mulai dengan Silver",
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "Business Growth",
    price: "Rp 3.499.000",
    period: "/ bulan",
    icon: TrendingUp,
    popular: true,
    features: [
      "Semua fitur paket Silver",
      "15 Keyword Kompetitif",
      "Backlink Berkualitas Tinggi (DA 40+)",
      "Strategi Konten & 4 Artikel SEO/bulan",
      "Technical SEO Audit Triwulan",
      "Competitor Analysis Mendalam",
      "Dedicated SEO Specialist",
    ],
    cta: "Pilih Paket Gold",
  },
  {
    id: "platinum",
    name: "Platinum",
    tagline: "Market Dominator",
    price: "Rp 7.499.000",
    period: "/ bulan",
    icon: Crown,
    features: [
      "Semua fitur paket Gold",
      "Unlimited Keyword Target",
      "Full Technical SEO Audit Bulanan",
      "Authority Building & Digital PR",
      "Strategy Call Bulanan dengan Ahli",
      "8 Artikel SEO Long-Form/bulan",
      "Priority Support 24/7",
      "Garansi Performa Tertulis",
    ],
    cta: "Dominasi Pasar Anda",
  },
];

export function SeoPackages() {
  return (
    <section id="layanan-seo" className="surface-section py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Paket Layanan SEO
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Pilih Paket SEO yang <span className="text-gradient-gold">Tepat</span> untuk
            Bisnis Anda
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Harga kompetitif terbaik di Indonesia dengan strategi white-hat SEO
            yang terbukti dominan di Google.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7 lg:gap-8">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <article
                key={pkg.id}
                style={{ animationDelay: `${i * 90}ms` }}
                className={`card-elegant card-elegant-hover relative flex flex-col rounded-2xl p-7 animate-fade-up md:p-8 ${
                  pkg.popular
                    ? "ring-2 ring-gold shadow-gold md:-translate-y-3"
                    : ""
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold to-[oklch(0.86_0.13_88)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground shadow-gold">
                    Most Popular
                  </span>
                )}

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    pkg.popular
                      ? "bg-gold text-gold-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-foreground">{pkg.name}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {pkg.tagline}
                </p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-foreground md:text-4xl">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{pkg.period}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-foreground/85">
                      <Check
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                          pkg.popular ? "text-gold" : "text-success"
                        }`}
                        aria-hidden="true"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/6282172120802?text=${encodeURIComponent(
                    `Halo, saya tertarik dengan Paket ${pkg.name} (${pkg.price}/bulan).`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    pkg.popular
                      ? "bg-gold text-gold-foreground shadow-gold"
                      : "bg-primary text-primary-foreground shadow-soft hover:bg-primary-glow"
                  }`}
                >
                  {pkg.cta}
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Butuh paket khusus? <a href="#kontak" className="font-semibold text-primary hover:text-gold">Hubungi tim kami</a> untuk penawaran enterprise.
        </p>
      </div>
    </section>
  );
}
