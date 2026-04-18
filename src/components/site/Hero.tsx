import { ArrowRight, Search, Shield, Zap } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="surface-hero relative overflow-hidden pt-28 pb-20 text-primary-foreground md:pt-36 md:pb-28"
    >
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              <Zap className="h-3.5 w-3.5" /> SEO • AI • Hospitality IT
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Dominasi <span className="text-gradient-gold">Google Indonesia</span>{" "}
              & Tingkatkan Profit Bisnis Anda.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">
              Solusi SEO Profesional, Aplikasi AI Kustom, dan Konsultasi IT
              Perhotelan Terintegrasi — dirancang untuk pertumbuhan bisnis
              jangka panjang.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#layanan-seo"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-[1.03]"
              >
                Lihat Paket SEO
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-4 text-base font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/15"
              >
                Konsultasi Gratis
              </a>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-wider text-primary-foreground/60">
                  Klien Aktif
                </dt>
                <dd className="mt-1 text-2xl font-bold text-gold">120+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-primary-foreground/60">
                  Keyword Page-1
                </dt>
                <dd className="mt-1 text-2xl font-bold text-gold">2.300+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-primary-foreground/60">
                  Tahun Pengalaman
                </dt>
                <dd className="mt-1 text-2xl font-bold text-gold">8+</dd>
              </div>
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md animate-float">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-gold/30 via-transparent to-primary-glow/40 blur-2xl" />
              <div className="relative rounded-2xl border border-primary-foreground/15 bg-primary-foreground/8 p-6 backdrop-blur-md shadow-elegant">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                    <span className="h-2.5 w-2.5 rounded-full bg-success" />
                  </div>
                  <span className="text-[11px] font-medium text-primary-foreground/60">
                    google.co.id
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-full bg-background px-4 py-2.5 text-foreground">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="truncate text-sm">jasa seo terbaik indonesia</span>
                </div>

                <ul className="mt-5 space-y-3">
                  {[
                    { rank: "#1", title: "PaketSEO.id — Jasa SEO Profesional", live: true },
                    { rank: "#2", title: "RajaSEO.id — Spesialis Page-One Google" },
                    { rank: "#3", title: "Kompetitor lain..." },
                  ].map((r) => (
                    <li
                      key={r.rank}
                      className={`flex items-center gap-3 rounded-lg border p-3 ${
                        r.live
                          ? "border-gold/50 bg-gold/15"
                          : "border-primary-foreground/10 bg-primary-foreground/5"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold ${
                          r.live
                            ? "bg-gold text-gold-foreground"
                            : "bg-primary-foreground/10 text-primary-foreground/70"
                        }`}
                      >
                        {r.rank}
                      </span>
                      <span className="text-sm font-medium text-primary-foreground/90">
                        {r.title}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-2 rounded-lg bg-success/15 px-3 py-2 text-xs font-medium text-success">
                  <Shield className="h-4 w-4" />
                  White-Hat SEO • 100% Aman dari Update Algoritma
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
