import { useEffect, useState } from "react";
import { Menu, X, Crown } from "lucide-react";

const NAV = [
  { href: "#layanan-seo", label: "Paket SEO" },
  { href: "#ai-expert", label: "AI Expert" },
  { href: "#hospitality", label: "Hospitality IT" },
  { href: "#klien", label: "Klien" },
  { href: "#kontak", label: "Kontak" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a
          href="#hero"
          className={`flex items-center gap-2 font-bold tracking-tight ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
            <Crown className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg">
            Paket<span className="text-gradient-gold">SEO</span>.id
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? "text-foreground/80" : "text-primary-foreground/85"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#layanan-seo"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-[1.03]"
          >
            Lihat Paket
          </a>
        </nav>

        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-md md:hidden ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#layanan-seo"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-gold-foreground shadow-gold"
            >
              Lihat Paket SEO
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
