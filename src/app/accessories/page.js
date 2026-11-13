import Accessories from './AccessoriesClient';

// ─── Technical SEO Metadata ────────────────────────────────────────────────────
const PAGE_TITLE =
  'Optical Metrology Accessories & Wavefront Sensor Upgrades';
const PAGE_DESCRIPTION =
  'Enhance your Shack-Hartmann wavefront sensors with SpotOptics precision accessories. Explore laboratory mounting systems, calibration tools, and optical upgrades.';

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    'optical metrology accessories',
    'wavefront sensor upgrades',
    'SpotOptics calibration tools',
    'Shack-Hartmann accessories',
    'optical mounting systems',
    'wavefront sensor accessories',
    'laboratory optical mounts',
    'precision calibration accessories',
    'optical metrology hardware',
    'sensor upgrade kits',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/accessories',
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://www.spotoptics.com/accessories',
    siteName: 'SpotOptics',
    type: 'website',
    images: [
      {
        url: 'https://www.spotoptics.com/assets/icons/favicon.png',
        width: 1200,
        height: 630,
        alt: 'SpotOptics Optical Metrology Accessories & Calibration Tools',
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
const accessoriesPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: 'https://www.spotoptics.com/accessories',
  isPartOf: {
    '@type': 'WebSite',
    name: 'SpotOptics',
    url: 'https://www.spotoptics.com',
  },
  about: [
    { '@type': 'Thing', name: 'Optical metrology accessories' },
    { '@type': 'Thing', name: 'Wavefront sensor upgrades' },
    { '@type': 'Thing', name: 'Precision calibration tools' },
    { '@type': 'Thing', name: 'Laboratory mounting systems' },
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
      name: 'Accessories',
      item: 'https://www.spotoptics.com/accessories',
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
          __html: JSON.stringify(accessoriesPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Accessories />
    </>
  );
}
