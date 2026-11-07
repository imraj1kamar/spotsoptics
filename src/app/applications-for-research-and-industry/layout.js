// src/app/applications-for-research-and-industry/layout.js
export const metadata = {
  title: {
    absolute: 'Optical Metrology Applications | Automotive HUD, Telescopes & Lenses | SpotOptics',
  },
  description:
    'Industrial & scientific applications of Shack-Hartmann wavefront sensors: Automotive HUD windshield testing, astronomical telescope active optics, and ophthalmic lens stress analysis.',
  keywords: [
    'Automotive HUD Testing',
    'head-up display optical testing',
    'telescope mirror metrology',
    'astronomical active optics',
    'ophthalmic lens stress testing',
    'Shack-Hartmann applications',
    'SpotOptics metrology',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/applications-for-research-and-industry',
  },
  openGraph: {
    title: 'Optical Metrology Applications | Automotive HUD & Telescope Testing | SpotOptics',
    description:
      'Industrial and scientific applications of Shack-Hartmann wavefront sensors: Automotive HUD windshield testing, telescope collimation, and lens metrology.',
    url: 'https://www.spotoptics.com/applications-for-research-and-industry',
    siteName: 'SpotOptics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optical Metrology Applications | SpotOptics',
    description:
      'Industrial and scientific applications of Shack-Hartmann wavefront sensors across automotive, aerospace, and optical manufacturing.',
  },
};

const appSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.spotoptics.com/applications-for-research-and-industry#webpage',
      url: 'https://www.spotoptics.com/applications-for-research-and-industry',
      name: 'Optical Metrology Applications | SpotOptics',
      description: 'Industrial and scientific applications of Shack-Hartmann wavefront sensors.',
      breadcrumb: {
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
            name: 'Applications',
            item: 'https://www.spotoptics.com/applications-for-research-and-industry',
          },
        ],
      },
    },
  ],
};

export default function ApplicationsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      {children}
    </>
  );
}

