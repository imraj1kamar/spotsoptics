// src/app/knowledge/zernike-polynomials/layout.js
export const metadata = {
  title: {
    absolute: 'Zernike Polynomials in SenSoft™ (Standard, Annular & Seidel) | SpotOptics',
  },
  description:
    'Mathematical formulation and analysis of Zernike polynomials in SenSoft™: Standard, Annular (central obscuration for telescopes), Fringe, and classical Seidel polynomials.',
  keywords: [
    'Zernike polynomials wavefront',
    'Annular Zernike polynomials',
    'Standard Zernike polynomials',
    'Seidel aberrations',
    'Fringe Zernike',
    'telescope central obscuration wavefront',
    'SenSoft Zernike fitting',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/knowledge/zernike-polynomials',
  },
  openGraph: {
    title: 'Zernike Polynomials in SenSoft™ (Standard, Annular & Seidel) | SpotOptics',
    description:
      'Mathematical guide to phase aberration representation using Standard, Annular, and Fringe Zernike polynomials in SpotOptics SenSoft™ software.',
    url: 'https://www.spotoptics.com/knowledge/zernike-polynomials',
    siteName: 'SpotOptics',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zernike Polynomials in SenSoft™ | SpotOptics',
    description: 'Learn how SenSoft models phase aberrations with Standard, Annular, and Seidel polynomials.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Zernike Polynomials in SenSoft™: Standard, Annular, Fringe & Seidel Aberration Fitting',
  description:
    'Mathematical formulation and analysis of Zernike polynomials in SenSoft™: Standard, Annular (central obscuration for telescopes), Fringe, and classical Seidel polynomials.',
  url: 'https://www.spotoptics.com/knowledge/zernike-polynomials',
  image: 'https://www.spotoptics.com/assets/images/knowledge/Zernike-convention-1.webp',
  author: {
    '@type': 'Organization',
    name: 'SpotOptics Optical Physicists',
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
      name: 'Zernike polynomials',
      sameAs: 'https://en.wikipedia.org/wiki/Zernike_polynomials',
    },
  ],
};

export default function ZernikePolynomialsLayout({ children }) {
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

