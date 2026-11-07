// src/app/knowledge/lensletFocalLengthDetail/layout.js
export const metadata = {
  title: {
    absolute: 'Importance of Long Focal Length Lenslet Arrays | SpotOptics',
  },
  description:
    'Technical simulation and optical analysis: Why using Shack-Hartmann lenslet arrays with long focal length provides superior sensitivity and noise immunity in aberration detection.',
  keywords: [
    'lenslet array focal length',
    'Shack-Hartmann sensitivity',
    'micro-lenslet array design',
    'optical aberration detection',
    'focal length vs noise immunity',
    'SpotOptics',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/knowledge/lensletFocalLengthDetail',
  },
  openGraph: {
    title: 'Importance of Long Focal Length Lenslet Arrays | SpotOptics',
    description:
      'Explore how lenslet array focal length directly governs spot displacement sensitivity, noise immunity, and wavefront measurement accuracy.',
    url: 'https://www.spotoptics.com/knowledge/lensletFocalLengthDetail',
    siteName: 'SpotOptics',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Importance of Long Focal Length Lenslet Arrays | SpotOptics',
    description: 'Technical guide on why long focal length lenslet arrays deliver higher metrology accuracy.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Importance of Using Lenslet Arrays with Long Focal Length in Shack-Hartmann Metrology',
  description:
    'Technical simulation and optical analysis demonstrating how lenslet array focal length directly governs spot displacement sensitivity, noise immunity, and wavefront measurement accuracy.',
  url: 'https://www.spotoptics.com/knowledge/lensletFocalLengthDetail',
  image: 'https://www.spotoptics.com/assets/images/knowledge/Lenslet-fl-22mm_Collimator_Diamond_turned_marks_Clealry_visible_notext.webp',
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
};

export default function LensletFocalLengthLayout({ children }) {
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

