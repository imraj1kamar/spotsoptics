// src/app/all-products/wavefront-sensor-software/layout.js
export const metadata = {
  title: {
    absolute: 'SenSoft™ Wavefront Analysis Software | Shack-Hartmann Modal Reconstruction | SpotOptics',
  },
  description:
    'Proprietary SenSoft™ software for Shack-Hartmann wavefront analysis: GPU acceleration up to 500 Hz, Zernike & Seidel modal fitting, M² & MTF computation.',
  keywords: [
    'SenSoft wavefront software',
    'Shack-Hartmann software',
    'Zernike polynomial analysis software',
    'laser M2 measurement software',
    'MTF analysis software',
    'optical metrology software',
    'SpotOptics SenSoft',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/all-products/wavefront-sensor-software',
  },
  openGraph: {
    title: 'SenSoft™ Wavefront Analysis Software | SpotOptics',
    description:
      'Proprietary SenSoft™ software for Shack-Hartmann image acquisition, Zernike expansion, beam profiling, and real-time M² / MTF analysis.',
    url: 'https://www.spotoptics.com/all-products/wavefront-sensor-software',
    siteName: 'SpotOptics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SenSoft™ Wavefront Analysis Software | SpotOptics',
    description:
      'Proprietary software for real-time Shack-Hartmann modal reconstruction up to 500 Hz.',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SenSoft™ Wavefront Analysis Software',
  operatingSystem: 'Windows 10, Windows 11',
  applicationCategory: 'DesignApplication',
  description:
    'Proprietary software for Shack-Hartmann wavefront image acquisition, Zernike polynomial expansion (Standard, Annular, Fringe, Seidel), beam profiling, and instant M² & MTF metrology.',
  url: 'https://www.spotoptics.com/all-products/wavefront-sensor-software',
  publisher: {
    '@type': 'Organization',
    name: 'SpotOptics',
    url: 'https://www.spotoptics.com',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: 'https://www.spotoptics.com/contact',
  },
};

export default function SensoftLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {children}
    </>
  );
}

