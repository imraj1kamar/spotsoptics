// ─── Knowledge Corner SEO Metadata (Server Component) ──────────────────────────
import KnowledgeClient from './KnowledgeClient';

export const metadata = {
  title: 'Wavefront Sensor Knowledge Corner | Shack-Hartmann Guides | SpotOptics',
  description:
    'In-depth technical guides: Shack-Hartmann vs Hartmann test, wavefront sensor accuracy vs interferometers, Zernike polynomials, lenslet array focal length — by SpotOptics engineers.',
  alternates: { canonical: 'https://www.spotoptics.com/knowledge' },
  keywords: [
    'Shack-Hartmann wavefront sensor guide',
    'wavefront sensor accuracy vs interferometer',
    'Zernike polynomials wavefront',
    'lenslet array focal length',
    'Hartmann test vs Shack-Hartmann',
    'optical aberrations explained',
  ],
  openGraph: {
    title: 'Wavefront Sensor Knowledge Corner | SpotOptics',
    description: 'Technical articles on Shack-Hartmann working principle, accuracy, Zernike fitting, and optical metrology best practices.',
    url: 'https://www.spotoptics.com/knowledge',
    siteName: 'SpotOptics',
    type: 'website',
  },
};

const knowledgeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.spotoptics.com/knowledge#webpage',
      url: 'https://www.spotoptics.com/knowledge',
      name: 'Wavefront Sensor Knowledge Corner | SpotOptics',
      description:
        'In-depth technical guides: Shack-Hartmann vs Hartmann test, wavefront sensor accuracy vs interferometers, Zernike polynomials, lenslet array focal length — by SpotOptics engineers.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.spotoptics.com' },
          { '@type': 'ListItem', position: 2, name: 'Knowledge Corner', item: 'https://www.spotoptics.com/knowledge' },
        ],
      },
    },
  ],
};

export default function KnowledgePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeSchema) }}
      />
      <KnowledgeClient />
    </>
  );
}