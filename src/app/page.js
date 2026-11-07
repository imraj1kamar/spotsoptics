import Hero from "@/components/sections/Hero";
import ProductsSection from "@/components/sections/ProductsSection";
import ApplicationSection from "@/components/sections/ApplicationsSection";
import StatsSection from "@/components/common/StatsSection";
import WhySpotOpticsSection from "@/components/sections/WhySpotOpticsSection";
import SensoftSection from "@/components/sections/SensoftSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import siteData from "@/data/site.json";

// ─── 1. Technical SEO Metadata (Homepage) ────────────────────────────────────
export const metadata = {
  title: {
    absolute: 'SpotOptics | High-Performance Shack-Hartmann Wavefront Sensors & Metrology',
  },
  description:
    'SpotOptics specializes in precision Shack-Hartmann wavefront sensors, optical metrology instruments, and measurement solutions from DUV (193 nm) to LWIR (10.6 µm).',
  keywords: [
    'Shack-Hartmann wavefront sensor',
    'wavefront sensor manufacturer',
    'optical metrology instruments',
    'laser beam profiling',
    'adaptive optics',
    'Zernike polynomial expansion',
    'optical testing equipment',
    'SpotOptics',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com',
  },
  openGraph: {
    title: 'SpotOptics | High-Performance Shack-Hartmann Wavefront Sensors',
    description:
      'Precision optical metrology instruments and Shack-Hartmann wavefront sensors spanning DUV to LWIR wavelengths with λ/1000 rms accuracy.',
    url: 'https://www.spotoptics.com',
    siteName: 'SpotOptics',
    type: 'website',
    images: [
      {
        url: 'https://www.spotoptics.com/assets/images/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'SpotOptics Precision Wavefront Sensors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpotOptics | High-Performance Shack-Hartmann Wavefront Sensors',
    description:
      'Precision optical metrology instruments and Shack-Hartmann wavefront sensors from DUV to LWIR.',
    images: ['https://www.spotoptics.com/assets/images/hero-image.png'],
  },
};

// ─── 2. Structured Data (Organization + WebSite Schema) ───────────────────────
const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.spotoptics.com/#organization',
      name: 'SpotOptics',
      legalName: 'SpotOptics S.r.l.',
      url: 'https://www.spotoptics.com',
      logo: 'https://www.spotoptics.com/assets/icons/favicon.png',
      description:
        'Pioneering manufacturer of precision Shack-Hartmann wavefront sensors and optical metrology instrumentation spanning DUV (193 nm) to LWIR (10.6 µm). Based in Padova, Italy.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Turazza 48',
        addressLocality: 'Padova',
        addressRegion: 'PD',
        postalCode: '35128',
        addressCountry: 'IT',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+39-049-807-6744',
          contactType: 'sales',
          email: 'contact@spot-optics.com',
          availableLanguage: ['English', 'Italian'],
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/spotoptics',
        'https://twitter.com/spotoptics',
        'https://www.facebook.com/spotoptics',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.spotoptics.com/#website',
      url: 'https://www.spotoptics.com',
      name: 'SpotOptics',
      description: 'High-Performance Shack-Hartmann Wavefront Sensors & Optical Metrology',
      publisher: {
        '@id': 'https://www.spotoptics.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.spotoptics.com/all-products?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* ── JSON-LD Structured Data Injection ─────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <div className="container">
        <ProductsSection />
        <ApplicationSection />
        <StatsSection />
        <WhySpotOpticsSection />
        <SensoftSection />
        <ResourcesSection />
      </div>
    </>
  );
}
