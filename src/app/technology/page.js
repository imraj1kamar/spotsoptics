import OurTechnologyPage from './OurTechnologyClient';

// ─── Technical SEO Metadata ────────────────────────────────────────────────────
const PAGE_TITLE =
  'Optical Metrology Technology | SenSoft & Shack-Hartmann';
const PAGE_DESCRIPTION =
  'SpotOptics optical metrology technology: Shack-Hartmann wavefront sensors, SenSoft analysis software, and integrated measurement workflows from DUV to LWIR.';

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    'optical metrology technology',
    'SenSoft software',
    'Shack-Hartmann workflow',
    'wavefront sensing technology',
    'optical measurement technology',
    'Shack-Hartmann wavefront sensor',
    'wavefront analysis software',
    'precision optical metrology',
    'Zernike analysis',
    'optical calibration',
    'DUV to LWIR metrology',
    'lens testing technology',
    'telescope alignment',
    'wavefront measurement workflow',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/technology',
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://www.spotoptics.com/technology',
    siteName: 'SpotOptics',
    type: 'website',
    images: [
      {
        url: 'https://www.spotoptics.com/assets/images/technology/technology-hero.png',
        width: 1200,
        height: 630,
        alt: 'SpotOptics Optical Metrology Technology – Shack-Hartmann & SenSoft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      'https://www.spotoptics.com/assets/images/technology/technology-hero.png',
    ],
  },
};

// ─── JSON-LD Structured Data ───────────────────────────────────────────────────
const technologyPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: 'https://www.spotoptics.com/technology',
  author: {
    '@type': 'Organization',
    name: 'SpotOptics',
    url: 'https://www.spotoptics.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'SpotOptics',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.spotoptics.com/assets/icons/favicon.png',
    },
  },
  about: [
    { '@type': 'Thing', name: 'Shack-Hartmann wavefront sensing' },
    { '@type': 'Thing', name: 'SenSoft optical analysis software' },
    { '@type': 'Thing', name: 'Optical metrology' },
    { '@type': 'Thing', name: 'Wavefront calibration and optimization' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.spotoptics.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Our Technology',
      item: 'https://www.spotoptics.com/technology',
    },
  ],
};

// ─── Server Component Page ─────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(technologyPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <OurTechnologyPage />
    </>
  );
}
