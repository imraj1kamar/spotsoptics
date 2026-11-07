// src/app/knowledge/wavefront-sensor-accuracy/layout.js
export const metadata = {
  title: {
    absolute: 'Wavefront Sensor Accuracy vs Interferometers (Zygo & Veeco) | SpotOptics',
  },
  description:
    'Independent cross-validation benchmarking SpotOptics Shack-Hartmann wavefront sensors against industry-standard Zygo GPIxp HR and Veeco Fizeau interferometers (2 nm rms agreement).',
  keywords: [
    'wavefront sensor accuracy',
    'wavefront sensor vs interferometer',
    'Zygo GPIxp HR comparison',
    'Veeco interferometer comparison',
    'optical metrology precision',
    'SpotOptics Optino accuracy',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/knowledge/wavefront-sensor-accuracy',
  },
  openGraph: {
    title: 'Wavefront Sensor Accuracy vs Interferometers (Zygo & Veeco) | SpotOptics',
    description:
      'Independent comparison of SpotOptics Shack-Hartmann wavefront sensors with Zygo and Veeco interferometers exhibiting 2 nm rms spatial phase agreement.',
    url: 'https://www.spotoptics.com/knowledge/wavefront-sensor-accuracy',
    siteName: 'SpotOptics',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wavefront Sensor Accuracy vs Interferometers | SpotOptics',
    description: 'Benchmarking SpotOptics Shack-Hartmann sensors against Zygo and Veeco interferometers.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Exceptional Accuracy and Precision of Shack-Hartmann Wavefront Sensors vs. Interferometers',
  description:
    'Independent metrology cross-validation benchmarking SpotOptics Shack-Hartmann sensors against Zygo GPIxp HR and Veeco Fizeau interferometers exhibiting spatial phase agreements within 2 nm rms.',
  url: 'https://www.spotoptics.com/knowledge/wavefront-sensor-accuracy',
  image: 'https://www.spotoptics.com/assets/images/knowledge/image_2022-10-19_154624673.png',
  author: {
    '@type': 'Organization',
    name: 'SpotOptics Metrology Lab',
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
      name: 'Interferometry',
      sameAs: 'https://en.wikipedia.org/wiki/Interferometry',
    },
    {
      '@type': 'Thing',
      name: 'Wavefront Sensor',
      sameAs: 'https://en.wikipedia.org/wiki/Wavefront_sensor',
    },
  ],
};

export default function WavefrontAccuracyLayout({ children }) {
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

