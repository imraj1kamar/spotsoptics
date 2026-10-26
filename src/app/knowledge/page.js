// ─── Knowledge Corner SEO Metadata (Server Component) ──────────────────────────
import KnowledgeClient from './KnowledgeClient';

export const metadata = {
  title: 'Wavefront Sensor Knowledge Corner | Shack-Hartmann Guides | SpotOptics',
  description:
    'In-depth technical guides: Shack-Hartmann vs Hartmann test, wavefront sensor accuracy vs interferometers, Zernike polynomials, lenslet array focal length — by SpotOptics engineers.',
  alternates: { canonical: 'https://www.spotoptics.com/knowledge/' },
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
    url: 'https://www.spotoptics.com/knowledge/',
    siteName: 'SpotOptics S.r.l.',
    type: 'website',
  },
};

export default function KnowledgePage() {
  return <KnowledgeClient />;
}