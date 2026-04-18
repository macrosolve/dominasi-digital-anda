import { Bot, Workflow, Database, Sparkles, Check } from "lucide-react";

const features = [
  { icon: Bot, title: "AI Chatbot Kustom", desc: "Chatbot 24/7 untuk WhatsApp, web, & Instagram." },
  { icon: Workflow, title: "Automation Tools", desc: "Otomatisasi alur kerja & proses bisnis berulang." },
  { icon: Database, title: "Data Scraper", desc: "Pengumpulan & analisa data kompetitor real-time." },
  { icon: Sparkles, title: "Custom AI App", desc: "Aplikasi AI sesuai kebutuhan unik bisnis Anda." },
];

const included = [
  "Konsultasi & analisa kebutuhan",
  "Development aplikasi AI kustom",
  "Hosting & maintenance bulanan",
  "Update fitur & bug fixing",
  "Training tim Anda",
];

export function AiExpert() {
  return (
    <section id="ai-expert" className="bg-background py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-foreground">
              <Sparkles className="h-3.5 w-3.5" /> AI Expert Solutions
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Aplikasi AI Kustom <span className="text-gradient-gold">Tanpa Biaya Awal</span>{" "}
              yang Mahal
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Kompetitor meminta puluhan juta di muka. Kami menawarkan model
              langganan terjangkau — ringan untuk cashflow, berdampak besar
              untuk bisnis Anda.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-gradient-to-br from-primary to-primary-glow p-6 text-primary-foreground shadow-elegant md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                Mulai dari
              </p>
              <p className="mt-2 text-4xl font-extrabold md:text-5xl">
                Rp 999.000
                <span className="ml-2 text-lg font-medium text-primary-foreground/70">
                  / bulan
                </span>
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Maintenance, hosting & update sudah termasuk.
              </p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {included.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/6282172120802?text=${encodeURIComponent(
                  "Halo, saya ingin diskusi mengenai layanan AI Expert Subscription.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-gold transition-transform hover:scale-[1.03]"
              >
                Diskusi Kebutuhan AI Anda
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  style={{ animationDelay: `${i * 80}ms` }}
                  className="card-elegant card-elegant-hover rounded-2xl p-6 animate-fade-up"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-soft text-gold-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
