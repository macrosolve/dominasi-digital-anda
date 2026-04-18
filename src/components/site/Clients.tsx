import { Quote, Star } from "lucide-react";

/**
 * EDIT KLIEN DI SINI
 * Untuk menambah/mengubah klien, cukup edit array `clients` di bawah ini.
 */
const clients = [
  {
    name: "Hotel Permata Bali",
    industry: "Hospitality",
    initials: "HP",
    testimonial:
      "Setelah modernisasi IT & WiFi tamu, rating Booking.com kami naik dari 7.8 ke 8.9 dalam 4 bulan.",
    person: "Ibu Andini",
    role: "General Manager",
    rating: 5,
  },
  {
    name: "Toko Mebel Jaya",
    industry: "E-Commerce UMKM",
    initials: "TM",
    testimonial:
      "Paket Silver SEO bikin toko kami nongol di halaman 1 Google. Order naik 3x lipat dalam 6 bulan.",
    person: "Pak Budi Santoso",
    role: "Owner",
    rating: 5,
  },
  {
    name: "Klinik Sehat Sentosa",
    industry: "Healthcare",
    initials: "KS",
    testimonial:
      "Chatbot AI kustom otomatis booking pasien 24/7. Tim admin kami bisa fokus kerjaan lain.",
    person: "dr. Maya Wijaya",
    role: "Direktur",
    rating: 5,
  },
  {
    name: "PT Nusantara Logistik",
    industry: "Logistics",
    initials: "NL",
    testimonial:
      "Paket Platinum SEO + automation tools mengubah cara kami mendapatkan B2B leads. Sangat profesional.",
    person: "Pak Reza Pratama",
    role: "Marketing Director",
    rating: 5,
  },
  {
    name: "Resort Lombok Indah",
    industry: "Hospitality",
    initials: "RL",
    testimonial:
      "PMS integration & CCTV AI detection berjalan mulus. Tim support sangat responsif.",
    person: "Ibu Sari Dewi",
    role: "Operations Manager",
    rating: 5,
  },
  {
    name: "EduCourse Online",
    industry: "EdTech",
    initials: "EO",
    testimonial:
      "Strategi konten Gold Package menempatkan kami di top 3 untuk 12 keyword utama edukasi.",
    person: "Pak Arif Hidayat",
    role: "Founder",
    rating: 5,
  },
];

export function Clients() {
  return (
    <section id="klien" className="surface-section py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Klien Kami
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Dipercaya Oleh{" "}
            <span className="text-gradient-gold">120+ Bisnis</span> di Indonesia
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Dari UMKM hingga hotel dan korporasi — kami bertumbuh bersama klien.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((c, i) => (
            <article
              key={c.name}
              style={{ animationDelay: `${i * 70}ms` }}
              className="card-elegant card-elegant-hover relative flex flex-col rounded-2xl p-6 animate-fade-up md:p-7"
            >
              <Quote
                className="absolute right-5 top-5 h-8 w-8 text-gold/30"
                aria-hidden="true"
              />

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-sm font-bold text-primary-foreground shadow-soft">
                  {c.initials}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {c.name}
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground">
                    {c.industry}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: c.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-gold text-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">
                "{c.testimonial}"
              </p>

              <footer className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{c.person}</p>
                <p className="text-xs text-muted-foreground">{c.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
