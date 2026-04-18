import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { SeoPackages } from "@/components/site/SeoPackages";
import { AiExpert } from "@/components/site/AiExpert";
import { Hospitality } from "@/components/site/Hospitality";
import { Clients } from "@/components/site/Clients";
import { ContactCta } from "@/components/site/ContactCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const SITE_URL = "https://paketseo.id";
const TITLE =
  "PaketSEO.id & RajaSEO.id — Jasa SEO, AI Expert & Hospitality IT Indonesia";
const DESCRIPTION =
  "Jasa SEO profesional Indonesia mulai Rp1.499.000/bln, aplikasi AI kustom subscription, dan konsultan IT perhotelan. Dominasi Google Indonesia bersama PaketSEO.id.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PaketSEO.id",
  alternateName: "RajaSEO.id",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: DESCRIPTION,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-821-7212-0802",
    contactType: "customer service",
    areaServed: "ID",
    availableLanguage: ["Indonesian", "English"],
  },
  sameAs: [
    "https://www.instagram.com/paketseo.id",
    "https://www.facebook.com/paketseo.id",
  ],
};

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Jasa SEO Indonesia",
    provider: { "@type": "Organization", name: "PaketSEO.id" },
    areaServed: "Indonesia",
    offers: [
      { "@type": "Offer", name: "Silver Package", price: "1499000", priceCurrency: "IDR" },
      { "@type": "Offer", name: "Gold Package", price: "3499000", priceCurrency: "IDR" },
      { "@type": "Offer", name: "Platinum Package", price: "7499000", priceCurrency: "IDR" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Application Development Subscription",
    provider: { "@type": "Organization", name: "PaketSEO.id" },
    offers: { "@type": "Offer", price: "999000", priceCurrency: "IDR" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Hospitality IT Consultant",
    provider: { "@type": "Organization", name: "PaketSEO.id" },
    offers: { "@type": "Offer", price: "4999000", priceCurrency: "IDR" },
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "jasa seo, paket seo indonesia, jasa seo murah, ai expert indonesia, konsultan it hotel, hospitality it, rajaseo, paketseo",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "id_ID" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "Indonesian" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      ...servicesSchema.map((s) => ({
        type: "application/ld+json",
        children: JSON.stringify(s),
      })),
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <h1 className="sr-only">
          PaketSEO.id &amp; RajaSEO.id — Jasa SEO, AI Expert &amp; Hospitality IT
          Indonesia
        </h1>
        <Hero />
        <SeoPackages />
        <AiExpert />
        <Hospitality />
        <Clients />
        <ContactCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
