import DownloadsPage from './DownloadsClient';

// ─── Technical SEO Metadata ────────────────────────────────────────────────────
const PAGE_TITLE =
  'Wavefront Sensor Brochures & Datasheets Download';
const PAGE_DESCRIPTION =
  'Download official product brochures, technical datasheets, and SenSoft software manuals for SpotOptics high-precision Shack-Hartmann wavefront sensors.';

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    'wavefront sensor brochures',
    'optical metrology datasheets',
    'SpotOptics documentation',
    'Shack-Hartmann sensor datasheet',
    'SenSoft software manual',
    'wavefront sensor PDF',
    'optical metrology brochure download',
    'SpotOptics product downloads',
    'wavefront measurement datasheet',
    'optical sensor technical documentation',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/downloads',
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://www.spotoptics.com/downloads',
    siteName: 'SpotOptics',
    type: 'website',
    images: [
      {
        url: 'https://www.spotoptics.com/assets/icons/favicon.png',
        width: 1200,
        height: 630,
        alt: 'SpotOptics Wavefront Sensor Brochures & Datasheets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      'https://www.spotoptics.com/assets/icons/favicon.png',
    ],
  },
};

// ─── JSON-LD Structured Data ───────────────────────────────────────────────────
const downloadsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: 'https://www.spotoptics.com/downloads',
  isPartOf: {
    '@type': 'WebSite',
    name: 'SpotOptics',
    url: 'https://www.spotoptics.com',
  },
  about: [
    { '@type': 'Thing', name: 'Wavefront sensor product brochures' },
    { '@type': 'Thing', name: 'Optical metrology technical datasheets' },
    { '@type': 'Thing', name: 'SenSoft software documentation' },
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
      name: 'Downloads',
      item: 'https://www.spotoptics.com/downloads',
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
          __html: JSON.stringify(downloadsPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <DownloadsPage />
    </>
  );
}
