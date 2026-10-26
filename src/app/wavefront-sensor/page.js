import Link from 'next/link';
import Image from 'next/image';
import productsData from '@/data/products.json';
import PageTopBar from '@/components/common/PageTopBar';
import ProductCard from '@/components/common/ProductCard';
import Cta from '@/components/common/Cta';

// Theme & Global Stylesheets
import '../../../public/assets/css/all-products.css';
import '../../../public/assets/css/products.css';
import '../../../public/assets/css/wavefrontSensors.css';

// ─── Static Metadata ──────────────────────────────────────────────────────────
export const metadata = {
  title: 'Wavefront Sensors | DUV–LWIR | SpotOptics',
  description:
    'Shack-Hartmann wavefront sensors from 193 nm to 10.6 μm. λ/1000 rms repeatability. Compare OMI, Optino-mu & Laserino-mu. Request a datasheet today.',
  keywords: [
    'wavefront sensor',
    'Shack-Hartmann wavefront sensor',
    'optical wavefront measurement',
    'DUV wavefront sensor',
    'LWIR wavefront sensor',
    'SWIR wavefront sensor',
    'OMI wavefront sensor',
    'Optino-mu',
    'Laserino-mu M2 MTF',
    'wavefront sensor vs interferometer',
    'lambda/1000 accuracy',
    'SenSoft software',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/wavefront-sensors/',
  },
  openGraph: {
    title: 'Wavefront Sensors | DUV to LWIR | SpotOptics',
    description:
      'Shack-Hartmann wavefront sensors from 193 nm to 10.6 μm with λ/1000 rms repeatability. OMI, Optino-mu, Laserino-mu and more.',
    url: 'https://www.spotoptics.com/wavefront-sensors/',
    siteName: 'SpotOptics S.r.l.',
    type: 'website',
  },
};

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const schemaJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.spotoptics.com/wavefront-sensors/#webpage',
    url: 'https://www.spotoptics.com/wavefront-sensors/',
    name: 'Wavefront Sensors — DUV to LWIR | SpotOptics',
    description:
      'Shack-Hartmann wavefront sensors from 193 nm to 10.6 μm with λ/1000 rms repeatability. Compare the OMI, Optino-mu, iOptino, Laserino-mu and full product family.',
    inLanguage: 'en',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.spotoptics.com/' },
        { '@type': 'ListItem', position: 2, name: 'Wavefront Sensors', item: 'https://www.spotoptics.com/wavefront-sensors/' },
      ],
    },
    publisher: { '@id': 'https://www.spotoptics.com/#organization' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SpotOptics Shack-Hartmann Wavefront Sensor Product Family',
    url: 'https://www.spotoptics.com/wavefront-sensors/',
    numberOfItems: 3,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          '@id': 'https://www.spotoptics.com/all-products/omi-test-in-single-pass#product',
          name: 'OMI Shack-Hartmann Wavefront Sensor',
          description: 'High-resolution Shack-Hartmann wavefront sensor for single-pass metrology of lasers and optical elements. Available from DUV (193 nm) to LWIR (10.6 μm).',
          url: 'https://www.spotoptics.com/all-products/omi-test-in-single-pass',
          image: 'https://www.spotoptics.com/assets/images/products/1.png',
          brand: { '@type': 'Brand', name: 'SpotOptics' },
          manufacturer: { '@id': 'https://www.spotoptics.com/#organization' },
          category: 'Wavefront Sensor / Optical Metrology Instrument',
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'Wavelength Range', value: '193 nm – 10600 nm (DUV to LWIR)' },
            { '@type': 'PropertyValue', name: 'Repeatability (rms)', value: 'λ/1000' },
            { '@type': 'PropertyValue', name: 'Accuracy', value: 'λ/60' },
            { '@type': 'PropertyValue', name: 'Speed', value: 'Up to 50 Hz' },
          ],
          offers: { '@type': 'Offer', url: 'https://www.spotoptics.com/contact', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          '@id': 'https://www.spotoptics.com/all-products/optino-mu-pocket-size-single-and-double-pass#product',
          name: "Optino-mu — World's Smallest Shack-Hartmann Wavefront Sensor",
          description: 'Pocket-sized (70×25×30 mm, 200 g) Shack-Hartmann wavefront sensor with single and double pass capability and interferometric accuracy.',
          url: 'https://www.spotoptics.com/all-products/optino-mu-pocket-size-single-and-double-pass',
          image: 'https://www.spotoptics.com/assets/images/products/2.png',
          brand: { '@type': 'Brand', name: 'SpotOptics' },
          manufacturer: { '@id': 'https://www.spotoptics.com/#organization' },
          category: 'Compact Wavefront Sensor',
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'Dimensions', value: '70 × 25 × 30 mm' },
            { '@type': 'PropertyValue', name: 'Weight', value: '200 g' },
            { '@type': 'PropertyValue', name: 'Pass Mode', value: 'Single & Double Pass in one unit' },
            { '@type': 'PropertyValue', name: 'Precision (rms)', value: 'λ/3000' },
          ],
          offers: { '@type': 'Offer', url: 'https://www.spotoptics.com/contact', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Product',
          '@id': 'https://www.spotoptics.com/all-products/laserino-mu-dual-channel-single-pass#product',
          name: 'Laserino-mu Dual-Channel Wavefront Sensor (M² & MTF)',
          description: 'Dual-channel wavefront sensor with integrated imaging for simultaneous Shack-Hartmann wavefront reconstruction and direct beam imaging. Instant M² and MTF analysis without scanning.',
          url: 'https://www.spotoptics.com/all-products/laserino-mu-dual-channel-single-pass',
          image: 'https://www.spotoptics.com/assets/images/products/3.png',
          brand: { '@type': 'Brand', name: 'SpotOptics' },
          manufacturer: { '@id': 'https://www.spotoptics.com/#organization' },
          category: 'Laser Metrology Wavefront Sensor',
          additionalProperty: [
            { '@type': 'PropertyValue', name: 'Channels', value: 'Dual (Shack-Hartmann + Direct Imaging)' },
            { '@type': 'PropertyValue', name: 'M² Measurement', value: 'Directly from Shack-Hartmann data — no scanning' },
            { '@type': 'PropertyValue', name: 'MTF Measurement', value: 'Directly from Shack-Hartmann data — no scanning' },
          ],
          offers: { '@type': 'Offer', url: 'https://www.spotoptics.com/contact', priceCurrency: 'EUR', availability: 'https://schema.org/InStock' },
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.spotoptics.com/#organization',
    name: 'SpotOptics S.r.l.',
    legalName: 'SpotOptics S.r.l.',
    description: 'Manufacturer of high-performance Shack-Hartmann wavefront sensors and optical metrology instruments for research, industry, and astronomy. Based in Padova, Italy.',
    url: 'https://www.spotoptics.com',
    logo: { '@type': 'ImageObject', url: 'https://www.spotoptics.com/assets/icons/favicon.png' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Turazza 48',
      addressLocality: 'Padova',
      addressRegion: 'PD',
      postalCode: '35128',
      addressCountry: 'IT',
    },
    contactPoint: { '@type': 'ContactPoint', email: 'contact@spot-optics.com', contactType: 'sales' },
    sameAs: [
      'https://facebook.com/spotoptics',
      'https://instagram.com/spotoptics',
      'https://linkedin.com/company/spotoptics',
      'https://twitter.com/spotoptics',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Shack-Hartmann wavefront sensor and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Shack-Hartmann wavefront sensor measures optical wavefront aberrations using a lenslet array placed in the transferred pupil. Light from the optical system is collimated and focused by each micro-lens onto a camera sensor, producing a grid of spots. Displacements of these spots from their reference positions are used to compute local wavefront slope at each lenslet. Integration of these slopes via Zernike polynomial fitting reconstructs the complete wavefront. SpotOptics sensors achieve repeatability of λ/1000 rms and operate from 193 nm (DUV) to 10.6 μm (LWIR).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the accuracy of a Shack-Hartmann wavefront sensor?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SpotOptics Shack-Hartmann wavefront sensors achieve an absolute accuracy of λ/60 (OMI series) and a repeatability of λ/1000 rms. Zernike coefficient precision reaches λ/3000 for the Optino-mu. These figures have been independently validated by comparison with Zygo GPIxp HR and Veeco interferometers, showing measurement differences of only 2 nm rms.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does a wavefront sensor compare to an interferometer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Shack-Hartmann wavefront sensors offer key advantages: (1) Vibration immunity — single-frame capture eliminates vibration isolation tables; (2) Broad wavelength range — 193 nm to 10.6 μm vs. fixed interferometer wavelength; (3) Large dynamic range — up to ±50λ vs. ±λ/4 to ±5λ; (4) Lower cost — no reference flat required; (5) Portability — Optino-mu weighs just 200 g.',
        },
      },
      {
        '@type': 'Question',
        name: 'What wavelengths do SpotOptics wavefront sensors support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SpotOptics wavefront sensors cover: DUV 193–350 nm (ArF excimer); Visible 400–700 nm; NIR 700 nm–1.1 μm; SWIR 1.0–2.5 μm (InGaAs detector); MWIR 3–5 μm; and LWIR 8–10.6 μm (CO₂ laser). Multi-wavelength models are also available.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a wavefront sensor measure M² beam quality and MTF without scanning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Laserino-mu dual-channel wavefront sensor extracts M² beam quality and MTF curves directly from Shack-Hartmann data in a single measurement — no z-scan or slit scanner required. This reduces measurement time from minutes to sub-second using SenSoft software.',
        },
      },
    ],
  },
];

// ─── Product data (sensor products) ──────────────────────────────────────────
const sensorProducts = (productsData?.items || []).slice(0, 6);

// ─── Comparison Table Data ───────────────────────────────────────────────────
const comparisonRows = [
  { criterion: 'Absolute Accuracy',     sh: 'λ/60 (OMI), λ/40 (SWIR)',        interf: 'λ/100 to λ/500',          winner: 'interf' },
  { criterion: 'Repeatability (rms)',   sh: 'λ/1000',                           interf: 'λ/1000 – λ/2000',         winner: 'equal'  },
  { criterion: 'Vibration Immunity',    sh: '✅ Excellent (single-frame)',      interf: '❌ Needs isolation table', winner: 'sh'     },
  { criterion: 'Wavelength Flexibility',sh: '✅ 193 nm – 10.6 μm',             interf: '❌ Fixed source wavelength',winner: 'sh'    },
  { criterion: 'Dynamic Range',         sh: '±50λ (tilt subtracted)',           interf: '±λ/4 to ±5λ',             winner: 'sh'     },
  { criterion: 'Cost',                  sh: '💰 Lower (no reference flat)',     interf: '💰💰 Higher',             winner: 'sh'     },
  { criterion: 'Setup Complexity',      sh: 'Low — USB3 plug-and-play',         interf: 'High — alignment-critical',winner: 'sh'    },
  { criterion: 'Calibration',          sh: 'In-situ by user',                   interf: 'Reference flat required',  winner: 'sh'    },
  { criterion: 'Form Factor',           sh: 'Pocket-size (200 g, Optino-mu)',   interf: 'Bench-top only',           winner: 'sh'    },
  { criterion: 'Software',             sh: 'SenSoft™ (included)',               interf: 'Vendor-locked',            winner: 'sh'    },
];

// ─── FAQ Data ────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: 'What is a Shack-Hartmann wavefront sensor and how does it work?',
    a: 'A Shack-Hartmann wavefront sensor uses a precision lenslet array placed in the pupil plane to convert wavefront slope into measurable spot displacements on a camera sensor. Each micro-lens focuses a sub-aperture of the incoming beam; displacements from reference positions are fit to Zernike polynomials to reconstruct the full wavefront in real time — up to 500 Hz with SenSoft™ software.',
  },
  {
    q: 'What is the accuracy of a Shack-Hartmann wavefront sensor?',
    a: 'SpotOptics OMI sensors reach λ/60 absolute accuracy with λ/1000 rms repeatability. The Optino-mu achieves λ/3000 Zernike precision. Results have been independently validated against Zygo GPIxp HR and Veeco interferometers — agreement within 2 nm rms.',
  },
  {
    q: 'How does a Shack-Hartmann wavefront sensor compare to an interferometer?',
    a: 'Key advantages: single-frame capture gives vibration immunity without isolation tables; broad spectral coverage (193 nm–10.6 μm) vs. fixed single laser wavelength; ±50λ dynamic range vs. ±5λ; no reference optical flat needed; and pocket-portable form factor (200 g Optino-mu).',
  },
  {
    q: 'What wavelength ranges are available?',
    a: 'DUV (193–350 nm), Visible (400–700 nm), NIR (700 nm–1.1 μm), SWIR (1.0–2.5 μm, InGaAs), MWIR (3–5 μm), and LWIR (8–10.6 μm). Multi-wavelength models allow testing at multiple wavelengths simultaneously.',
  },
  {
    q: 'Can a wavefront sensor measure M² and MTF without scanning?',
    a: 'Yes — the Laserino-mu dual-channel sensor extracts M² beam quality and MTF curves directly from Shack-Hartmann data in a single acquisition. No z-scan or slit scanner needed. Analysis is done in real time by SenSoft™ software.',
  },
];

export default function WavefrontSensorsPage() {
  return (
    <>
      {/* ── JSON-LD Structured Data ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      <main className="page-section wfs-page-wrapper">
        <div className="container">

          {/* ── TOP BAR: BREADCRUMBS & COUNTER ──────────────────────────────── */}
          <PageTopBar
            breadcrumbs={[
              { label: 'Home', href: '/' },
              { label: 'Wavefront Sensors' },
            ]}
            showCounter={true}
            counterValue="07"
            counterLabel="SENSOR MODELS"
          />

          {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
          <section className="wfs-hero-card p-4 p-lg-5 mb-5" aria-label="Wavefront Sensors Overview">
            <div className="wfs-hero-glow" aria-hidden="true" />
            <div className="row align-items-center position-relative z-2">
              <div className="col-lg-8">
                
                {/* Brand Tagline Badge */}
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white bg-opacity-10 text-white border border-white border-opacity-15 mb-3">
                  <span className="hero-pulse-dot" />
                  <span className="small fw-bold letter-spacing-1 text-uppercase">
                    Shack-Hartmann Optical Metrology
                  </span>
                </div>

                <h1 className="wfs-hero-title mb-2">
                  Wavefront Sensors
                </h1>
                <p className="wfs-hero-subtitle mb-3">
                  From DUV (193 nm) to LWIR (10.6 μm) — Sub-Nanometer Precision to λ/1000 rms
                </p>
                <div className="hero-accent-line mb-3" />

                <p className="wfs-hero-desc mb-4">
                  SpotOptics engineers and manufactures the world&apos;s most versatile{' '}
                  <strong className="text-white">Shack-Hartmann wavefront sensors</strong>.
                  Used worldwide in laser metrology, optical element testing, telescope alignment,
                  automotive HUD validation, and high-volume contact lens production.
                </p>

                {/* Key Metrics Stats */}
                <div className="row g-3 mb-4">
                  {[
                    { value: 'λ/1000', label: 'rms Repeatability' },
                    { value: 'λ/60',   label: 'Absolute Accuracy'  },
                    { value: '193 nm', label: 'DUV Lithography' },
                    { value: '10.6 μm',label: 'LWIR CO₂ Testing' },
                  ].map((stat) => (
                    <div className="col-6 col-sm-3" key={stat.label}>
                      <div className="wfs-hero-stat-box">
                        <div className="wfs-stat-val">{stat.value}</div>
                        <div className="wfs-stat-lbl">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="d-flex flex-wrap gap-3">
                  <Link href="/contact" className="btn btn-primary-custom px-4 py-2" id="hero-cta-quote">
                    Request a Quote
                  </Link>
                  <Link href="/downloads" className="btn btn-outline-custom px-4 py-2 text-white border-white border-opacity-50" id="hero-cta-datasheet">
                    Download Datasheets
                  </Link>
                </div>
              </div>

              {/* Hardware Graphic Right Column */}
              <div className="col-lg-4 text-center d-none d-lg-block">
                <Image
                  src="/assets/images/products/1.png"
                  alt="SpotOptics Shack-Hartmann Wavefront Sensor OMI"
                  width={340}
                  height={300}
                  className="img-fluid drop-shadow"
                  priority
                />
              </div>
            </div>
          </section>

          {/* ── SECTION 1: WORKING PRINCIPLE ────────────────────────────────── */}
          <section className="mb-5 pb-3" id="working-principle" aria-labelledby="wp-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Working Principle</span>
              <h2 id="wp-heading" className="wfs-section-heading">
                What Is a Wavefront Sensor?
              </h2>
              <p className="wfs-section-lead mx-auto">
                A <strong>wavefront sensor</strong> measures the phase deviations (aberrations) across an optical pupil.
                Unlike interferometers requiring mirror-quality reference surfaces, Shack-Hartmann sensors directly measure
                wavefront slope using a micro-lenslet array.
              </p>
            </div>

            <div className="row g-4 mb-4">
              <div className="col-lg-6">
                <div className="wfs-card wfs-card-active">
                  <h3 className="wfs-card-title d-flex align-items-center gap-2">
                    <span className="hero-pulse-dot" />
                    Shack-Hartmann Lenslet Array (Modern Standard)
                  </h3>
                  <p className="mb-3">
                    A precision <strong>micro-lenslet array</strong> subdivides the incident beam into an array of sub-apertures.
                    Each lenslet focuses its portion of light onto a CMOS/InGaAs camera sensor. Local spot displacements from calibrated reference coordinates
                    directly measure the wavefront gradient. Zernike polynomial expansion instantly reconstructs the complete phase map.
                  </p>
                  <ul className="wfs-check-list">
                    <li>
                      <span className="text-primary fw-bold">✓</span>
                      <span><strong>Single-frame capture:</strong> Immune to workshop and factory vibrations (no isolation table needed).</span>
                    </li>
                    <li>
                      <span className="text-primary fw-bold">✓</span>
                      <span><strong>Broadband spectral range:</strong> Operates seamlessly from 193 nm DUV to 10.6 μm LWIR.</span>
                    </li>
                    <li>
                      <span className="text-primary fw-bold">✓</span>
                      <span><strong>Large dynamic range:</strong> Up to ±50λ continuous aberration capture without phase unwrapping failure.</span>
                    </li>
                    <li>
                      <span className="text-primary fw-bold">✓</span>
                      <span><strong>Real-time analysis:</strong> High-speed modal decomposition up to 500 Hz with SenSoft™ software.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="wfs-card opacity-90">
                  <h3 className="wfs-card-title text-muted">
                    Classical Hartmann Screen (Legacy)
                  </h3>
                  <p className="mb-3">
                    The historical Hartmann test utilized an opaque mask perforated with pinholes placed before an optic.
                    Spots were recorded on photographic plates or CCDs near focus. While conceptually related, the lenslet array replaced it completely:
                  </p>
                  <ul className="wfs-check-list text-muted">
                    <li>
                      <span className="text-danger fw-bold">✗</span>
                      <span><strong>Lower light throughput:</strong> Heavy absorption by opaque screen limits low-light utility.</span>
                    </li>
                    <li>
                      <span className="text-danger fw-bold">✗</span>
                      <span><strong>Coarser spatial sampling:</strong> Fewer measurement sub-apertures across the pupil.</span>
                    </li>
                    <li>
                      <span className="text-danger fw-bold">✗</span>
                      <span><strong>No lenslet optical gain:</strong> Weaker spot intensity and inferior centroiding resolution.</span>
                    </li>
                    <li>
                      <span className="text-danger fw-bold">✗</span>
                      <span><strong>Cumbersome calibration:</strong> Requires complex manual alignment procedures.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accuracy Validation Callout */}
            <div className="wfs-callout-box d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div>
                <strong>Independent Metrology Validation:</strong> SpotOptics wavefront sensors have been rigorously tested against
                Zygo GPIxp HR and Veeco interferometers, demonstrating rms phase agreement within <strong>2 nm rms (λ/300)</strong>.
              </div>
              <Link href="/knowledge/wavefront-sensor-accuracy" className="a-link text-uppercase">
                Read Validation Study →
              </Link>
            </div>
          </section>

          {/* ── SECTION 2: PRODUCT FAMILY SHOWCASE ─────────────────────────── */}
          <section className="mb-5 pb-3" id="product-family" aria-labelledby="pf-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Instruments Range</span>
              <h2 id="pf-heading" className="wfs-section-heading">
                SpotOptics Sensor Product Family
              </h2>
              <p className="wfs-section-lead mx-auto">
                Explore our full range of Shack-Hartmann wavefront sensors — from pocket-sized multi-pass units
                to high-resolution single-pass systems and dual-channel laser diagnostics.
              </p>
            </div>

            <div className="row g-4 mb-4">
              {sensorProducts.map((product, index) => (
                <div className="col-12 col-md-6 col-lg-4" key={product.id || index}>
                  <ProductCard
                    index={index}
                    name={product.name || ''}
                    description={product.description || ''}
                    image={product.image || ''}
                    link={`/all-products/${product.id}`}
                    badge={product.badge || ''}
                    className="h-100"
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-3">
              <Link href="/all-products" className="btn btn-outline-custom px-4 py-2">
                Browse Complete Product Catalog →
              </Link>
            </div>
          </section>

          {/* ── SECTION 3: WAVELENGTH COVERAGE ──────────────────────────────── */}
          <section className="mb-5 pb-3" id="wavelength-coverage" aria-labelledby="wl-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Spectral Breadth</span>
              <h2 id="wl-heading" className="wfs-section-heading">
                Wavelength Coverage: DUV to LWIR
              </h2>
              <p className="wfs-section-lead mx-auto">
                No other optical metrology manufacturer offers this extensive spectral coverage in a unified software ecosystem.
              </p>
            </div>

            <div className="row g-3">
              {[
                {
                  band: 'DUV', range: '193 – 350 nm', bg: '#f3e8ff', color: '#7c3aed',
                  title: 'Deep Ultraviolet', desc: 'ArF excimer laser metrology, semiconductor lithography optics, DUV stepper lens testing.',
                  model: 'OMI-DUV-HR',
                },
                {
                  band: 'VIS', range: '400 – 700 nm', bg: '#e0f2fe', color: '#0284c7',
                  title: 'Visible Light', desc: 'Precision optical testing, imaging lens metrology, adaptive optics, telescope alignment at visible wavelengths.',
                  model: 'OMI-HS, Optino-mu, Optino',
                },
                {
                  band: 'NIR', range: '700 nm – 1.1 μm', bg: '#ecfeff', color: '#0891b2',
                  title: 'Near Infrared', desc: 'Telecom photonics, Nd:YAG laser qualification, silicon wafer inspection, fiber collimators.',
                  model: 'OMI-45, OMI-HR',
                },
                {
                  band: 'SWIR', range: '1.0 – 2.5 μm', bg: '#ecfdf5', color: '#059669',
                  title: 'Short-Wave Infrared', desc: 'InGaAs detector sensors for SWIR surveillance optics, LIDAR beam characterization, night-vision lenses.',
                  model: 'OMI-SWIR-HR',
                },
                {
                  band: 'MWIR', range: '3 – 5 μm', bg: '#fffbeb', color: '#d97706',
                  title: 'Mid-Wave Infrared', desc: 'Thermal imaging lens characterization, MWIR detector testing, aerospace EO/IR payload qualification.',
                  model: 'OMI-MWIR',
                },
                {
                  band: 'LWIR', range: '8 – 10.6 μm', bg: '#fef2f2', color: '#dc2626',
                  title: 'Long-Wave Infrared', desc: 'High-power CO₂ industrial laser beam quality (10.6 μm), thermal infrared telescope optics, LWIR aspheres.',
                  model: 'OMI-LWIR',
                },
              ].map((band) => (
                <div className="col-12 col-md-6 col-lg-4" key={band.band}>
                  <div className="wfs-band-card">
                    <div>
                      <span className="wfs-band-badge" style={{ backgroundColor: band.bg, color: band.color }}>
                        {band.band}
                      </span>
                      <div className="wfs-band-range">{band.range}</div>
                      <h3 className="h6 fw-bold text-dark mb-2">{band.title}</h3>
                      <p className="small text-muted mb-3">{band.desc}</p>
                    </div>
                    <div className="wfs-band-model">Compatible Models: {band.model}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 4: BENCHMARK COMPARISON TABLE ───────────────────────── */}
          <section className="mb-5 pb-3" id="sh-vs-interferometer" aria-labelledby="comp-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Technology Comparison</span>
              <h2 id="comp-heading" className="wfs-section-heading">
                Shack-Hartmann vs. Interferometer
              </h2>
              <p className="wfs-section-lead mx-auto">
                A direct technical benchmark to help optical engineers choose the optimal metrology solution.
              </p>
            </div>

            <div className="wfs-table-card mb-4">
              <div className="table-responsive">
                <table className="wfs-table" aria-label="Shack-Hartmann vs Interferometer comparison">
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '28%' }}>Criterion</th>
                      <th scope="col" style={{ width: '36%' }}>🔬 Shack-Hartmann (SpotOptics)</th>
                      <th scope="col" style={{ width: '36%' }}>💡 Fizeau / Twyman-Green Interferometer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.criterion}>
                        <th scope="row" className="fw-semibold text-dark">{row.criterion}</th>
                        <td className={row.winner === 'sh' ? 'wfs-cell-highlight' : ''}>{row.sh}</td>
                        <td className={row.winner === 'interf' ? 'wfs-cell-highlight' : ''}>{row.interf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="wfs-callout-box">
              <p className="mb-1">
                <strong>When to choose Shack-Hartmann:</strong> Vibration-sensitive environments, broadband or non-laser sources,
                large dynamic range requirements (up to ±50λ), portable production line testing, or fast turnaround.
              </p>
              <p className="mb-0">
                <strong>When interferometry is required:</strong> Ultra-smooth surface roughness metrology (λ/200+) where traceable reference flats and vibration-isolated tables are readily available.
              </p>
            </div>
          </section>

          {/* ── SECTION 5: APPLICATIONS & USE CASES ─────────────────────────── */}
          <section className="mb-5 pb-3" id="applications" aria-labelledby="app-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Industrial & Research</span>
              <h2 id="app-heading" className="wfs-section-heading">
                Key Applications
              </h2>
              <p className="wfs-section-lead mx-auto">
                SpotOptics Shack-Hartmann sensors are deployed across deep-tech industries, national observatories, and defense laboratories worldwide.
              </p>
            </div>

            <div className="row g-4">
              {[
                {
                  icon: '🚗',
                  title: 'HUD & Automotive Optics',
                  desc: 'Wavefront aberration testing of Head-Up Display projection lenses, automotive camera modules, and ADAS optical assemblies.',
                  link: '/applications-for-research-and-industry?app=head-up-display-test',
                  anchor: 'HUD Testing Guide',
                },
                {
                  icon: '🔭',
                  title: 'Telescope Active Optics & Alignment',
                  desc: 'Active optics and real-time alignment of astronomical telescope primary and secondary mirrors (active since ESO NTT 1989).',
                  link: '/applications-for-research-and-industry?app=telescope-mirror-test',
                  anchor: 'Telescope Alignment Guide',
                },
                {
                  icon: '⚡',
                  title: 'Laser Beam Quality (M² & MTF)',
                  desc: 'Single-shot extraction of M² beam quality and Modulation Transfer Function directly from Shack-Hartmann data without mechanical scanning.',
                  link: '/all-products/laserino-mu-dual-channel-single-pass',
                  anchor: 'Laserino-mu Details',
                },
                {
                  icon: '🔬',
                  title: 'Optical Lens & Asphere Metrology',
                  desc: 'Single and double-pass transmission and reflection testing of lenses, mirrors, prisms, and aspherical optical surfaces across DUV to LWIR.',
                  link: '/all-products/optino-single-and-double-pass',
                  anchor: 'Optino Metrology',
                },
                {
                  icon: '👁️',
                  title: 'Ophthalmic & Contact Lens QC',
                  desc: 'Production-line contact lens metrology — measuring dioptric power, astigmatism, higher-order Zernike aberrations, and MTF in wet or dry state.',
                  link: '/all-products/contour-for-contact-lenses',
                  anchor: 'Contour Instrument',
                },
                {
                  icon: '📡',
                  title: 'Infrared & Thermal Imaging Metrology',
                  desc: 'MWIR and LWIR wavefront characterization for military thermal camera lenses, drone EO/IR sensors, and industrial CO₂ laser optics.',
                  link: '/all-products/omi-test-in-single-pass',
                  anchor: 'OMI Infrared Sensors',
                },
              ].map((app) => (
                <div className="col-12 col-md-6 col-lg-4" key={app.title}>
                  <div className="wfs-app-card">
                    <div className="wfs-app-icon-wrap">{app.icon}</div>
                    <h3 className="wfs-app-title">{app.title}</h3>
                    <p className="wfs-app-desc">{app.desc}</p>
                    <Link href={app.link} className="a-link text-uppercase">
                      {app.anchor} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 6: SENSOFT SOFTWARE LAYER ───────────────────────────── */}
          <section className="mb-5 pb-3" id="sensoft" aria-labelledby="ss-heading">
            <div className="wfs-sensoft-box">
              <div className="row align-items-center g-4">
                <div className="col-lg-5">
                  <span className="wfs-section-tag mb-2">Software Platform</span>
                  <h2 id="ss-heading" className="wfs-section-heading mb-3">
                    SenSoft™ Analysis Intelligence
                  </h2>
                  <p className="text-muted mb-4">
                    Every SpotOptics Shack-Hartmann wavefront sensor is powered by SenSoft™ — our proprietary,
                    hardware-synchronized optical measurement and modal expansion suite.
                  </p>
                  <Link href="/all-products/wavefront-sensor-software" className="btn btn-primary-custom px-4 py-2">
                    Explore SenSoft™ Software →
                  </Link>
                </div>

                <div className="col-lg-7">
                  <div className="row g-3">
                    {[
                      {
                        metric: 'Up to 500 Hz',
                        title: 'Real-Time Acquisition',
                        desc: 'Hardware-synchronized simultaneous capture and slope integration across both wavefront and imaging channels.',
                      },
                      {
                        metric: '4 Polynomial Sets',
                        title: 'Zernike Modal Fitting',
                        desc: 'Full support for Standard, Annular, Fringe, and Seidel polynomial expansions with selectable order.',
                      },
                      {
                        metric: 'Instant Output',
                        title: 'M² & MTF Calculation',
                        desc: 'Instant beam quality factor and MTF curves calculated directly from Shack-Hartmann phase gradients — no scanning required.',
                      },
                      {
                        metric: 'Integrated Suite',
                        title: 'Optical Simulation Tool',
                        desc: 'Simulate lenslet array pitch, spot dynamic range, and detectability limits prior to experimental setup.',
                      },
                    ].map((feature) => (
                      <div className="col-sm-6" key={feature.title}>
                        <div className="wfs-sensoft-chip">
                          <div className="wfs-chip-metric">{feature.metric}</div>
                          <div className="wfs-chip-title">{feature.title}</div>
                          <p className="small text-muted mb-0">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 7: FREQUENTLY ASKED QUESTIONS ───────────────────────── */}
          <section className="mb-5 pb-3" id="faq" aria-labelledby="faq-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Engineering FAQ</span>
              <h2 id="faq-heading" className="wfs-section-heading">
                Frequently Asked Questions
              </h2>
              <p className="wfs-section-lead mx-auto">
                Essential engineering clarifications for teams specifying Shack-Hartmann wavefront sensors.
                For more detailed answers, consult our <Link href="/faq/" className="a-link">Technical FAQ section →</Link>
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, idx) => (
                <details className="wfs-faq-details" key={idx} open={idx === 0}>
                  <summary className="wfs-faq-summary">
                    <span>{item.q}</span>
                    <span className="text-primary fw-bold ms-2">+</span>
                  </summary>
                  <div className="wfs-faq-body">{item.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* ── SECTION 8: GLOBAL CTA COMPONENT ─────────────────────────────── */}
          <div className="mt-4">
            <Cta />
          </div>

        </div>
      </main>
    </>
  );
}
