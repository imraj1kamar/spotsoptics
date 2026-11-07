// src/app/knowledge/shack-hartmann-vs-hartmann/layout.js
export const metadata = {
  title: {
    absolute: 'Shack-Hartmann vs. Hartmann Test: Precision & Calibration | SpotOptics',
  },
  description:
    'Technical comparison of classical Hartmann screen testing and modern Shack-Hartmann wavefront sensors, highlighting calibration advantages, precision, and sensitivity.',
  keywords: [
    'Shack-Hartmann vs Hartmann test',
    'classical Hartmann test',
    'lenslet array advantages',
    'wavefront sensor principle',
    'optical aberrations testing',
    'SpotOptics',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/knowledge/shack-hartmann-vs-hartmann',
  },
  openGraph: {
    title: 'Shack-Hartmann vs. Hartmann Test: Precision & Calibration | SpotOptics',
    description:
      'Technical comparison of classical Hartmann screen testing and modern Shack-Hartmann wavefront sensors.',
    url: 'https://www.spotoptics.com/knowledge/shack-hartmann-vs-hartmann',
    siteName: 'SpotOptics',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shack-Hartmann vs. Hartmann Test | SpotOptics',
    description: 'Technical comparison of Hartmann screen testing vs Shack-Hartmann lenslet arrays.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Shack-Hartmann vs. Hartmann Test: Precision, Calibration & Sensitivity',
  description:
    'A technical comparison of classical Hartmann screen testing and modern Shack-Hartmann wavefront sensors, highlighting calibration advantages, precision, and sensitivity.',
  url: 'https://www.spotoptics.com/knowledge/shack-hartmann-vs-hartmann',
  image: 'https://www.spotoptics.com/assets/images/knowledge/hartmann.webp',
  author: {
    '@type': 'Organization',
    name: 'SpotOptics Engineering Team',
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
    {
      '@type': 'Thing',
      name: 'Shack–Hartmann Wavefront Sensor',
      sameAs: 'https://en.wikipedia.org/wiki/Shack%E2%80%93Hartmann_wavefront_sensor',
    },
  ],
};

export default function ShackHartmannVsHartmannLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}

