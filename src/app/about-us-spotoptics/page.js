// ─── About SpotOptics — Server Component (SEO Metadata + Schema) ───────────────
import AboutUsClient from './AboutUsClient';

// FIX: Canonical now exactly matches the page URL (was pointing to root before)
export const metadata = {
  title: 'About SpotOptics | Shack-Hartmann Wavefront Sensor Manufacturer',
  description:
    'Learn about SpotOptics — pioneers in Shack-Hartmann wavefront sensor technology since 1999. Discover our company history, optical metrology milestones, and areas of expertise.',
  alternates: {
    canonical: 'https://www.spotoptics.com/about-us-spotoptics',
  },
  keywords: [
    'SpotOptics company profile',
    'Shack-Hartmann wavefront sensor manufacturer',
    'optical metrology company',
    'wavefront sensor history',
    'SpotOptics about us',
    'optical testing instruments Italy',
  ],
  openGraph: {
    title: 'About SpotOptics | Wavefront Sensor Pioneers Since 1999',
    description:
      'SpotOptics is a leading manufacturer of Shack-Hartmann wavefront sensors. Explore our company history, product milestones, and deep optical metrology expertise.',
    url: 'https://www.spotoptics.com/about-us-spotoptics',
    siteName: 'SpotOptics',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD: Organization + AboutPage schema for rich results
const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://www.spotoptics.com/about-us-spotoptics#webpage',
      url: 'https://www.spotoptics.com/about-us-spotoptics',
      name: 'About SpotOptics | Shack-Hartmann Wavefront Sensor Manufacturer',
      description:
        'Learn about SpotOptics — pioneers in Shack-Hartmann wavefront sensor technology. Discover our company history, optical metrology milestones, and areas of expertise.',
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
            name: 'About Us',
            item: 'https://www.spotoptics.com/about-us-spotoptics',
          },
        ],
      },
      about: {
        '@type': 'Organization',
        '@id': 'https://www.spotoptics.com/#organization',
        name: 'SpotOptics',
        url: 'https://www.spotoptics.com',
        description:
          'SpotOptics designs and manufactures Shack-Hartmann wavefront sensors and optical metrology instruments for research, industrial, and astronomical applications.',
        foundingDate: '1999',
        areaServed: 'Worldwide',
        knowsAbout: [
          'Shack-Hartmann wavefront sensors',
          'Optical metrology',
          'Zernike polynomials',
          'Lenslet array design',
          'Wavefront aberration analysis',
        ],
      },
    },
  ],
};

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutUsClient />
    </>
  );
}
