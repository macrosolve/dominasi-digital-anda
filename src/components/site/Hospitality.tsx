import { Hotel, Wifi, ShieldCheck, Camera, Network, Server } from "lucide-react";

const services = [
  { icon: Server, title: "PMS Integration", desc: "Integrasi Property Management System modern." },
  { icon: Network, title: "Network Infrastructure", desc: "Desain jaringan stabil seluruh area hotel." },
  { icon: ShieldCheck, title: "Network Security", desc: "Firewall, VPN, & proteksi data tamu." },
  { icon: Wifi, title: "Guest WiFi Optimization", desc: "WiFi cepat merata di setiap kamar." },
  { icon: Camera, title: "Sistem CCTV", desc: "Pemantauan area hotel 24/7 dengan AI Detection." },
  { icon: Hotel, title: "Hotel Modernization", desc: "Upgrade sistem hotel lama secara menyeluruh." },
];

export function Hospitality() {
  return (
    <section
      id="hospitality"
      className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, oklch(0.78 0.14 82 / 0.25), transparent 50%), radial-gradient(circle at 10% 90%, oklch(0.5 0.18 258 / 0.4), transparent 55%)",
        }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            <Hotel className="h-3.5 w-3.5" /> Hospitality IT Consultant
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Modernisasi IT Hotel Anda dengan{" "}
            <span className="text-gradient-gold">Konsultan Spesialis</span>
          </h2>
          <p className="mt-5 text-base text-primary-foreground/80 md:text-lg">
            Solusi infrastruktur IT terintegrasi untuk hotel melati hingga
            bintang 5 — siap menghadapi standar tamu modern.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                style={{ animationDelay: `${i * 70}ms` }}
                className="group rounded-2xl border border-primary-foreground/12 bg-primary-foreground/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-primary-foreground/10 animate-fade-up"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-primary-foreground/75">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid items-center gap-8 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur-md md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gold">
              Investasi Mulai
            </p>
            <p className="mt-2 text-4xl font-extrabold md:text-5xl">
              Rp 4.999.000
            </p>
            <p className="mt-1 text-sm text-primary-foreground/75">
              Project-based atau monthly retainer untuk maintenance berkelanjutan.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <a
              href={`https://wa.me/6282172120802?text=${encodeURIComponent(
                "Halo, saya ingin konsultasi Hospitality IT untuk hotel saya.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-gold transition-transform hover:scale-[1.03]"
            >
              Konsultasi Hotel Anda
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/15"
            >
              Minta Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
