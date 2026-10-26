// ─── All Products SEO Metadata (Server Component) ───────────────────────────
import AllProductsCatalogClient from './AllProductsCatalogClient';

export const metadata = {
  title: 'Shack-Hartmann Wavefront Sensor Catalog | SpotOptics',
  description:
    'Browse the complete SpotOptics range: OMI, Optino-mu, iOptino, Laserino-mu, Lentino, Contour and more. Wavefront sensors from DUV 193 nm to LWIR 10.6 μm.',
  alternates: { canonical: 'https://www.spotoptics.com/all-products/' },
  keywords: [
    'Shack-Hartmann wavefront sensor catalog',
    'optical metrology instruments',
    'OMI wavefront sensor',
    'Optino-mu',
    'Laserino-mu',
    'DUV LWIR wavefront sensor',
    'SpotOptics products',
  ],
  openGraph: {
    title: 'Shack-Hartmann Wavefront Sensor Catalog | SpotOptics',
    description: 'Complete range of SpotOptics Shack-Hartmann wavefront sensors from DUV to LWIR. Request a quote or download technical datasheets.',
    url: 'https://www.spotoptics.com/all-products/',
    siteName: 'SpotOptics S.r.l.',
    type: 'website',
  },
};

export default function AllProductsCatalogPage() {
  return <AllProductsCatalogClient />;
}
