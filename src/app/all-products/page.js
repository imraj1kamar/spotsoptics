// src/app/all-products/page.js
import AllProductsCatalogClient from './AllProductsCatalogClient';
import siteData from '@/data/site.json';

// ─── 1. Metadata Export (Server Component) ──────────────────────────────────
export const metadata = {
  title: 'High-Performance Shack-Hartmann Wavefront Sensors | SpotOptics',
  description:
    'Explore precision Shack-Hartmann wavefront sensors from DUV (193 nm) to LWIR (10.6 µm). Compare OMI, Optino-mu, Laserino-mu, and SenSoft software.',
  keywords: [
    'Shack-Hartmann wavefront sensor',
    'wavefront sensor catalog',
    'optical metrology instruments',
    'OMI wavefront sensor',
    'Optino-mu pocket wavefront sensor',
    'Laserino-mu M2 MTF',
    'DUV LWIR wavefront sensor',
    'SenSoft wavefront software',
    'SpotOptics wavefront sensors',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/all-products',
  },
  openGraph: {
    title: 'High-Performance Shack-Hartmann Wavefront Sensors | SpotOptics',
    description:
      'Complete catalog of SpotOptics Shack-Hartmann wavefront sensors from DUV (193 nm) to LWIR (10.6 µm) with λ/1000 rms repeatability.',
    url: 'https://www.spotoptics.com/all-products',
    siteName: 'Shack-Hartmann wavefront sensors',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High-Performance Shack-Hartmann Wavefront Sensors | SpotOptics',
    description:
      'Precision Shack-Hartmann wavefront sensors and optical metrology systems from DUV to LWIR. Sub-nanometer repeatability up to λ/1000 rms.',
  },
};

// ─── 2. Production-Ready JSON-LD Schema (Schema.org @graph) ───────────────────
const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.spotoptics.com/#organization',
      name: 'Shack-Hartmann wavefront sensors',
      legalName: 'Shack-Hartmann wavefront sensors',
      url: 'https://www.spotoptics.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.spotoptics.com/#logo',
        url: 'https://www.spotoptics.com/assets/icons/favicon.png',
        caption: 'SpotOptics Precision Optical Metrology',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Turazza 48',
        addressLocality: 'Padova',
        addressRegion: 'Veneto',
        postalCode: '35128',
        addressCountry: 'IT',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'contact@spot-optics.com',
        telephone: '+39-049-807-6744',
      },
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.spotoptics.com/all-products#webpage',
      url: 'https://www.spotoptics.com/all-products',
      name: 'High-Performance Shack-Hartmann Wavefront Sensors | SpotOptics',
      description:
        'Complete catalog of SpotOptics Shack-Hartmann wavefront sensors covering DUV (193 nm) to LWIR (10.6 µm) with λ/1000 rms repeatability.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.spotoptics.com/#website',
        url: 'https://www.spotoptics.com',
        name: 'SpotOptics',
      },
      about: {
        '@type': 'Thing',
        name: 'Shack–Hartmann Wavefront Sensor',
        sameAs: 'https://en.wikipedia.org/wiki/Shack%E2%80%93Hartmann_wavefront_sensor',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.spotoptics.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'All Products',
            item: 'https://www.spotoptics.com/all-products',
          },
        ],
      },
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.spotoptics.com/all-products#itemlist',
      name: 'Shack-Hartmann Wavefront Sensors Product Catalog',
      url: 'https://www.spotoptics.com/all-products',
      numberOfItems: 4,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            '@id': 'https://www.spotoptics.com/all-products/omi-test-in-single-pass#product',
            name: 'OMI Shack-Hartmann Wavefront Sensor (Single Pass)',
            description:
              'High-resolution wavefront sensor for transmission metrology of laser beams and optical components from 193 nm (DUV) to 10.6 µm (LWIR).',
            url: 'https://www.spotoptics.com/all-products/omi-test-in-single-pass',
            image: 'https://www.spotoptics.com/assets/images/products/1.png',
            brand: { '@type': 'Brand', name: 'SpotOptics' },
            manufacturer: { '@id': 'https://www.spotoptics.com/#organization' },
            category: 'Optical Metrology Instruments',
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Spectral Range',
                value: '193 nm – 10.6 µm (DUV to LWIR)',
              },
              {
                '@type': 'PropertyValue',
                name: 'Wavefront Repeatability',
                value: 'λ/1000 rms',
              },
              {
                '@type': 'PropertyValue',
                name: 'Absolute Accuracy',
                value: 'λ/60 PV',
              },
            ],
            offers: {
              '@type': 'Offer',
              url: 'https://www.spotoptics.com/contact',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            '@id': 'https://www.spotoptics.com/all-products/optino-mu-pocket-size-single-and-double-pass#product',
            name: 'Optino-mu Ultra-Compact Shack-Hartmann Wavefront Sensor',
            description:
              'Pocket-sized (70×25×30 mm, 200 g) wavefront sensor featuring single and double pass capability with interferometric λ/3000 precision.',
            url: 'https://www.spotoptics.com/all-products/optino-mu-pocket-size-single-and-double-pass',
            image: 'https://www.spotoptics.com/assets/images/products/2.png',
            brand: { '@type': 'Brand', name: 'SpotOptics' },
            manufacturer: { '@id': 'https://www.spotoptics.com/#organization' },
            category: 'Compact Optical Metrology',
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Dimensions',
                value: '70 x 25 x 30 mm',
              },
              {
                '@type': 'PropertyValue',
                name: 'Weight',
                value: '200 g',
              },
              {
                '@type': 'PropertyValue',
                name: 'Measurement Mode',
                value: 'Single & Double Pass',
              },
            ],
            offers: {
              '@type': 'Offer',
              url: 'https://www.spotoptics.com/contact',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            '@id': 'https://www.spotoptics.com/all-products/laserino-mu-dual-channel-single-pass#product',
            name: 'Laserino-mu Dual-Channel Wavefront & Laser Diagnostic Sensor',
            description:
              'Simultaneous Shack-Hartmann wavefront reconstruction and direct imaging channel for instant M² and MTF analysis without mechanical scanning.',
            url: 'https://www.spotoptics.com/all-products/laserino-mu-dual-channel-single-pass',
            image: 'https://www.spotoptics.com/assets/images/products/3.png',
            brand: { '@type': 'Brand', name: 'SpotOptics' },
            manufacturer: { '@id': 'https://www.spotoptics.com/#organization' },
            category: 'Laser Metrology & Beam Profiling',
            offers: {
              '@type': 'Offer',
              url: 'https://www.spotoptics.com/contact',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Product',
            '@id': 'https://www.spotoptics.com/all-products/puntino-collimation-and-telescope-alignment#product',
            name: 'Puntino & Lentino Astronomical & Large Optics Wavefront Sensor',
            description:
              'High-precision wavefront sensor for telescope collimation, active optics feedback, and large optical component testing.',
            url: 'https://www.spotoptics.com/all-products/puntino-collimation-and-telescope-alignment',
            image: 'https://www.spotoptics.com/assets/images/products/4.png',
            brand: { '@type': 'Brand', name: 'SpotOptics' },
            manufacturer: { '@id': 'https://www.spotoptics.com/#organization' },
            category: 'Astronomical & Active Optics Metrology',
            offers: {
              '@type': 'Offer',
              url: 'https://www.spotoptics.com/contact',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock',
            },
          },
        },
      ],
    },
  ],
};

// ─── 3. Main Page Component (Server Component) ───────────────────────────────
export default function AllProductsCatalogPage() {
  return (
    <>
      {/* Schema.org Injection via Next.js Recommended Method */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Interactive Catalog Grid with Unified Branded UI */}
      <AllProductsCatalogClient />
    </>
  );
}
