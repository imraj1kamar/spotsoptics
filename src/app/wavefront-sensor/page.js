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

// ─── Static Metadata (<60 char title, target keyword front-loaded, <155 char desc) ──
export const metadata = {
  title: 'Wavefront Sensors | Shack-Hartmann Metrology | SpotOptics',
  description:
    'Precision Shack-Hartmann wavefront sensors from 193 nm to 10.6 µm. λ/1000 rms repeatability, direct M² & MTF metrology without vibration isolation tables.',
  keywords: [
    'wavefront sensor',
    'Shack-Hartmann wavefront sensor',
    'shack hartmann wavefront sensor',
    'shack hartmann',
    'wavefront sensor',
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
    'Zernike polynomial wavefront reconstruction',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/wavefront-sensor/',
  },
  openGraph: {
    title: 'Wavefront Sensors | Shack-Hartmann Metrology | SpotOptics',
    description:
      'Precision Shack-Hartmann wavefront sensors from 193 nm to 10.6 µm. λ/1000 rms repeatability, sub-nanometer accuracy, and vibration-immune wavefront metrology.',
    url: 'https://www.spotoptics.com/wavefront-sensor/',
    siteName: 'SpotOptics Optical Metrology',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wavefront Sensors | Shack-Hartmann Metrology | SpotOptics',
    description:
      'Precision Shack-Hartmann wavefront sensors from 193 nm to 10.6 µm. λ/1000 rms repeatability, sub-nanometer accuracy, and vibration-immune wavefront metrology.',
  },
};

// ─── Production-Grade JSON-LD Schema (Schema.org @graph) ─────────────────────────
const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.spotoptics.com/#organization',
      name: 'SpotOptics S.r.l.',
      legalName: 'SpotOptics S.r.l.',
      url: 'https://www.spotoptics.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.spotoptics.com/#logo',
        url: 'https://www.spotoptics.com/assets/icons/favicon.png',
        caption: 'SpotOptics Precision Optical Metrology',
      },
      description:
        'Pioneering manufacturer of precision Shack-Hartmann wavefront sensors and optical metrology instrumentation spanning DUV (193 nm) to LWIR (10.6 µm). Technology originating from ESO NTT astronomical active optics.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Turazza 48',
        addressLocality: 'Padova',
        addressRegion: 'Veneto',
        postalCode: '35128',
        addressCountry: 'IT',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+39-049-807-6744',
          contactType: 'sales',
          email: 'contact@spot-optics.com',
          availableLanguage: ['English', 'Italian'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'technical support',
          email: 'support@spot-optics.com',
          availableLanguage: ['English', 'Italian'],
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/spotoptics',
        'https://twitter.com/spotoptics',
        'https://www.facebook.com/spotoptics',
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.spotoptics.com/wavefront-sensor/#webpage',
      url: 'https://www.spotoptics.com/wavefront-sensor/',
      name: 'Wavefront Sensors | Shack-Hartmann Metrology | SpotOptics',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.spotoptics.com/#website',
        url: 'https://www.spotoptics.com',
        name: 'SpotOptics Optical Metrology',
      },
      description:
        'Precision Shack-Hartmann wavefront sensors from 193 nm to 10.6 µm. λ/1000 rms repeatability, sub-nanometer accuracy, and vibration-immune wavefront metrology.',
      inLanguage: 'en',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.spotoptics.com/wavefront-sensor/#breadcrumb',
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
            name: 'Wavefront Sensors',
            item: 'https://www.spotoptics.com/wavefront-sensor/',
          },
        ],
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Wavefront Sensor',
          sameAs: 'https://en.wikipedia.org/wiki/Wavefront_sensor',
        },
        {
          '@type': 'Thing',
          name: 'Shack–Hartmann Wavefront Sensor',
          sameAs: 'https://en.wikipedia.org/wiki/Shack%E2%80%93Hartmann_wavefront_sensor',
        },
      ],
      publisher: {
        '@id': 'https://www.spotoptics.com/#organization',
      },
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.spotoptics.com/wavefront-sensor/#itemlist',
      name: 'SpotOptics Shack-Hartmann Wavefront Sensor Lineup',
      url: 'https://www.spotoptics.com/wavefront-sensor/',
      numberOfItems: 4,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            '@id': 'https://www.spotoptics.com/all-products/omi-test-in-single-pass#product',
            name: 'OMI High-Resolution Shack-Hartmann Wavefront Sensor',
            description:
              'Laboratory-grade Shack-Hartmann sensor for single-pass metrology of optical elements and laser beams across DUV (193 nm) to LWIR (10.6 µm).',
            url: 'https://www.spotoptics.com/all-products/omi-test-in-single-pass',
            image: 'https://www.spotoptics.com/assets/images/products/1.png',
            brand: { '@type': 'Brand', name: 'SpotOptics' },
            manufacturer: { '@id': 'https://www.spotoptics.com/#organization' },
            category: 'Optical Metrology Instruments',
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Minimum Wavelength',
                value: '193',
                unitCode: 'C62',
                unitText: 'nm',
              },
              {
                '@type': 'PropertyValue',
                name: 'Maximum Wavelength',
                value: '10600',
                unitCode: 'C62',
                unitText: 'nm',
              },
              {
                '@type': 'PropertyValue',
                name: 'Wavefront Repeatability (rms)',
                value: '0.001',
                unitText: 'λ/1000 rms',
              },
              {
                '@type': 'PropertyValue',
                name: 'Absolute Measurement Accuracy',
                value: '0.016',
                unitText: 'λ/60 PV',
              },
              {
                '@type': 'PropertyValue',
                name: 'Acquisition Speed',
                value: 'Up to 50 Hz',
                unitText: 'frames per second',
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
              'Pocket-sized (70×25×30 mm, 200 g) dual-mode (single and double pass) Shack-Hartmann wavefront sensor with interferometric accuracy.',
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
                value: '200',
                unitCode: 'GRM',
                unitText: 'g',
              },
              {
                '@type': 'PropertyValue',
                name: 'Zernike Coefficient Precision',
                value: '0.00033',
                unitText: 'λ/3000 rms',
              },
              {
                '@type': 'PropertyValue',
                name: 'Operating Modes',
                value: 'Single Pass & Double Pass',
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
              'Dual-channel wavefront sensor with integrated imaging for simultaneous Shack-Hartmann wavefront reconstruction and direct beam imaging. Instant M² and MTF analysis without mechanical scanning.',
            url: 'https://www.spotoptics.com/all-products/laserino-mu-dual-channel-single-pass',
            image: 'https://www.spotoptics.com/assets/images/products/3.png',
            brand: { '@type': 'Brand', name: 'SpotOptics' },
            manufacturer: { '@id': 'https://www.spotoptics.com/#organization' },
            category: 'Laser Metrology & Beam Diagnostics',
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Optical Channels',
                value: 'Dual (Shack-Hartmann Phase + Direct Spatial Imaging)',
              },
              {
                '@type': 'PropertyValue',
                name: 'M² Measurement',
                value: 'Directly from single-shot Shack-Hartmann phase gradients (no z-scan)',
              },
              {
                '@type': 'PropertyValue',
                name: 'Modulation Transfer Function (MTF)',
                value: 'Direct instantaneous computation',
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
          position: 4,
          item: {
            '@type': 'Product',
            '@id': 'https://www.spotoptics.com/all-products/puntino-collimation-and-telescope-alignment#product',
            name: 'Puntino & Lentino Astronomical & Large Optics Wavefront Sensor',
            description:
              'Precision wavefront sensor for telescope collimation, active optics feedback, and large optics testing with Annular Zernike modal analysis.',
            url: 'https://www.spotoptics.com/all-products/puntino-collimation-and-telescope-alignment',
            image: 'https://www.spotoptics.com/assets/images/products/4.png',
            brand: { '@type': 'Brand', name: 'SpotOptics' },
            manufacturer: { '@id': 'https://www.spotoptics.com/#organization' },
            category: 'Astronomical & Active Optics Metrology',
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Technology Heritage',
                value: 'Originating from ESO 3.5m NTT Active Optics (Wilson & Noethe, 1989)',
              },
              {
                '@type': 'PropertyValue',
                name: 'Zernike Support',
                value: 'Annular Zernike for central obscurations',
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
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.spotoptics.com/wavefront-sensor/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What measurement repeatability and rms accuracy do SpotOptics Shack-Hartmann wavefront sensors achieve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SpotOptics Shack-Hartmann wavefront sensors achieve a wavefront repeatability of λ/1000 rms and an absolute accuracy of λ/60 PV across standard pupil apertures (OMI and Optino series). Individual Zernike modal coefficient repeatability reaches λ/3000 rms. These specifications have been independently corroborated through cross-validation against Zygo GPIxp HR and Veeco Fizeau interferometers, exhibiting spatial phase deviation agreements within 2 nm rms (approx. λ/300).',
          },
        },
        {
          '@type': 'Question',
          name: 'Why are Shack-Hartmann sensors preferred over Fizeau laser interferometers in industrial production environments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional Fizeau and Twyman-Green interferometers rely on temporal phase-shifting across multiple consecutive frames; ambient shop-floor vibrations or air currents scramble the interference fringes, necessitating costly pneumatic vibration isolation tables. SpotOptics Shack-Hartmann sensors employ single-frame snapshot slope integration with exposure times down to 10 microseconds. This freezes mechanical vibrations, enabling direct deployment on manufacturing lines, robotic arms, and optical benches without vibration isolation tables.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast is real-time wavefront reconstruction, and which Zernike polynomial sets are supported in SenSoft™?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wavefront frames are processed at rates up to 500 Hz using GPU-accelerated and optimized C++ slope integration algorithms in SenSoft™. The software natively computes four polynomial expansions: Standard Zernike (circular pupils), Annular Zernike (telescopes with central obscurations), Fringe Zernike (interferometric convention), and classical Seidel polynomials (geometrical third-order aberrations).',
          },
        },
        {
          '@type': 'Question',
          name: 'How does SpotOptics handle wavelength calibration and chromatic aberration across broadband or non-standard wavelengths?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Because Shack-Hartmann sensors measure geometric wavefront slopes, the lenslet focal length is the primary wavelength-dependent factor, governed by refractive dispersion n(λ). SpotOptics embeds calibrated refractive dispersion tables inside SenSoft™ for all supported substrate materials (fused silica, silicon, Germanium, ZnSe). Users can also perform in-situ software calibrations using reference point sources within minutes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can SpotOptics wavefront sensors be integrated into custom automated optical test benches and OEM production lines?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Instruments feature C-mount interfaces, 30 mm / 60 mm cage-mount compatibility, and M4/M6 mounting holes. Software automation is enabled via SenSoft™ developer APIs with native support for Python, C++, C#, MATLAB, and LabVIEW, along with hardware TTL trigger lines for synchronization with pulsed lasers and automated production equipment.',
          },
        },
      ],
    },
  ],
};

// ─── Product data (sensor products) ──────────────────────────────────────────
const sensorProducts = (productsData?.items || []).slice(0, 6);

// ─── Technical Comparison Table Data ─────────────────────────────────────────
const comparisonRows = [
  {
    criterion: 'Vibration Insensitivity',
    sh: 'Complete immunity: single-frame snapshot (10 µs – 10 ms) freezes vibration',
    interf: 'Extremely vulnerable: requires pneumatic tables & acoustic isolation',
    winner: 'sh',
  },
  {
    criterion: 'Dynamic Range',
    sh: 'Wide: ±50λ continuous aberration capture without phase ambiguity',
    interf: 'Narrow: ±λ/4 to ±5λ; prone to phase unwrapping errors',
    winner: 'sh',
  },
  {
    criterion: 'Wavelength Versatility',
    sh: 'Broadband: 193 nm to 10.6 µm with polychromatic or laser sources',
    interf: 'Monochromatic: locked to fixed laser line (He-Ne 632.8 nm)',
    winner: 'sh',
  },
  {
    criterion: 'Absolute Accuracy',
    sh: 'λ/60 PV (OMI Series) | λ/40 (Infrared)',
    interf: 'λ/100 to λ/500 PV (under ideal laboratory conditions)',
    winner: 'interf',
  },
  {
    criterion: 'Repeatability (rms)',
    sh: 'λ/1000 rms | λ/3000 Zernike precision (Optino-mu)',
    interf: 'λ/1000 to λ/2000 rms (in climate-controlled cleanroom)',
    winner: 'equal',
  },
  {
    criterion: 'Reference Optics Required',
    sh: 'None: in-situ software calibration with spherical/plane reference',
    interf: 'Mandatory: calibrated master transmission sphere/flat ($$$)',
    winner: 'sh',
  },
  {
    criterion: 'Laser M² & Wavefront',
    sh: 'Simultaneous: instant M², MTF & phase in single shot (Laserino-mu)',
    interf: 'Not supported: requires secondary motorized scanning stages',
    winner: 'sh',
  },
  {
    criterion: 'Setup & Alignment',
    sh: 'Low complexity: USB3 plug-and-play, wide angular tolerance',
    interf: 'High complexity: precision cavity alignment required',
    winner: 'sh',
  },
  {
    criterion: 'Form Factor & Portability',
    sh: 'Ultra-compact: 70×25×30 mm, 200 g (Optino-mu) portable unit',
    interf: 'Bulky: 15–40 kg heavy benchtop chassis only',
    winner: 'sh',
  },
  {
    criterion: 'Capital Cost',
    sh: 'Cost-effective: no expensive reference flats or isolation tables',
    interf: 'High capital investment + ongoing recalibration costs',
    winner: 'sh',
  },
];

// ─── FAQ Data ────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: 'What measurement repeatability and rms accuracy do SpotOptics Shack-Hartmann wavefront sensors achieve?',
    a: 'SpotOptics Shack-Hartmann wavefront sensors achieve a wavefront repeatability of λ/1000 rms and an absolute accuracy of λ/60 PV across standard pupil apertures (in the OMI and Optino series). In individual Zernike modal coefficient repeatability, our instruments reach λ/3000 rms. These metrology specifications have been independently corroborated through cross-validation against industry-standard Zygo GPIxp HR and Veeco Fizeau interferometers, exhibiting spatial phase deviation agreements within 2 nm rms (approx. λ/300).',
  },
  {
    q: 'Why are Shack-Hartmann sensors preferred over Fizeau laser interferometers in industrial production environments?',
    a: 'Traditional Fizeau and Twyman-Green interferometers rely on temporal phase-shifting across multiple consecutive frames. Any shop-floor vibration, acoustic disturbance, or thermal air turbulence scrambles interference fringes, requiring dedicated pneumatic vibration isolation tables and enclosed cleanrooms. In contrast, SpotOptics Shack-Hartmann sensors employ single-frame snapshot slope integration with exposure times down to 10 microseconds. This freezes mechanical vibrations completely, allowing direct mounting on manufacturing lines, robotic end-effectors, and open optical benches without isolation tables.',
  },
  {
    q: 'How fast is real-time wavefront reconstruction, and which Zernike polynomial sets are supported in SenSoft™?',
    a: 'Reconstructed wavefront frames are processed at rates up to 500 Hz using GPU-accelerated and optimized C++ slope integration algorithms in SenSoft™. The software natively computes four polynomial expansions: (1) Standard Zernike Polynomials for circular pupils, (2) Annular Zernike Polynomials for optics with central obscurations like Cassegrain telescopes, (3) Fringe Zernike Polynomials for 1:1 cross-software benchmarking with interferometers, and (4) Seidel Polynomials for immediate geometrical third-order aberration metrics (Spherical, Coma, Astigmatism, Defocus, Distortion).',
  },
  {
    q: 'How does SpotOptics handle wavelength calibration and chromatic aberration across broadband or non-standard wavelengths?',
    a: 'Because Shack-Hartmann sensors measure geometric wavefront slopes (θ = Δx / f_LA), the lenslet focal length is the primary wavelength-dependent factor, governed by refractive dispersion n(λ). SpotOptics embeds calibrated refractive dispersion tables inside SenSoft™ for all supported substrate materials (fused silica, silicon, Germanium, ZnSe). Users can also perform in-situ software calibrations using reference point sources within minutes.',
  },
  {
    q: 'Can SpotOptics wavefront sensors be integrated into custom automated optical test benches and OEM production lines?',
    a: 'Yes. All SpotOptics instruments feature C-mount interfaces, 30 mm / 60 mm cage-mount compatibility, and M4/M6 optical breadboard taps. For automation, SenSoft™ provides a comprehensive developer API with native dynamic-link libraries (DLLs) and wrappers for Python, C++, C#, MATLAB, and National Instruments LabVIEW, along with hardware TTL trigger lines for synchronization with pulsed lasers and automated production equipment.',
  },
];

export default function WavefrontSensorsPage() {
  return (
    <>
      {/* ── Production-Grade JSON-LD Schema ──────────────────────────────── */}
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

          {/* ── HERO BANNER (H1: DEFINITIVE COMMERCIAL & ENGINEERING TITLE) ──── */}
          <section className="wfs-hero-card p-4 p-lg-5 mb-5" aria-label="Wavefront Sensors Overview">
            <div className="wfs-hero-glow" aria-hidden="true" />
            <div className="row align-items-center position-relative z-2">
              <div className="col-lg-8">

                {/* Brand Tagline Badge */}
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white bg-opacity-10 text-white border border-white border-opacity-15 mb-3">
                  <span className="hero-pulse-dot" />
                  <span className="small fw-bold letter-spacing-1 text-uppercase">
                    Precision Optical Metrology &amp; Adaptive Optics
                  </span>
                </div>

                <h1 className="wfs-hero-title mb-2">
                  Shack-Hartmann Wavefront Sensors: Sub-Nanometer Optical Metrology from DUV to LWIR
                </h1>
                <p className="wfs-hero-subtitle mb-3">
                  DUV (193 nm) to LWIR (10.6 μm) — λ/1000 rms Precision, Direct M² &amp; MTF Diagnostics
                </p>
                <div className="hero-accent-line mb-3" />

                <p className="wfs-hero-desc mb-4">
                  SpotOptics engineers laboratory-grade and production-line{' '}
                  <strong className="text-white">Shack-Hartmann wavefront sensors</strong> delivering up to{' '}
                  <strong className="text-white">λ/1000 rms repeatability</strong> and{' '}
                  <strong className="text-white">λ/60 absolute accuracy</strong>. Deployed worldwide in laser metrology,
                  telescope active optics, automotive HUD validation, and high-precision ophthalmic optics.
                </p>

                {/* Key Metrics Stats */}
                <div className="row g-3 mb-4">
                  {[
                    { value: 'λ/1000', label: 'rms Repeatability' },
                    { value: 'λ/60', label: 'Absolute Accuracy' },
                    { value: '193 nm', label: 'DUV Lithography' },
                    { value: '10.6 μm', label: 'LWIR CO₂ Metrology' },
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
                    Contact Optical Engineering Team
                  </Link>
                  <Link href="/downloads" className="btn btn-outline-custom px-4 py-2 text-white border-white border-opacity-50" id="hero-cta-datasheet">
                    Request Technical Datasheet
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
                Micro-Lenslet Array Spot-Displacement Mechanics vs Classical Hartmann Screen
              </h2>
              <p className="wfs-section-lead mx-auto">
                A <strong>Shack-Hartmann wavefront sensor</strong> measures the phase distribution across an optical pupil by discretizing
                the incoming wavefront into local sub-apertures. Focal spot displacements directly yield local phase slopes,
                reconstructed via Zernike polynomial expansion without requiring a reference mirror.
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
                    A precision <strong>micro-lenslet array</strong> focuses sub-apertures of the transferred pupil onto a CMOS or InGaAs matrix.
                    Local spot displacements (Δx, Δy) from calibrated reference positions are directly proportional to the local wavefront gradient:
                    <code className="d-block my-2 p-2 bg-light rounded text-dark fw-semibold">
                      θ_x = Δx / f_LA = (1/k) · (∂Φ/∂x)
                    </code>
                    Real-time modal reconstruction via SenSoft™ yields complete spatial phase topography and Zernike aberration coefficients.
                  </p>
                  <ul className="wfs-check-list">
                    <li>
                      <span className="text-primary fw-bold">✓</span>
                      <span><strong>Single-frame snapshot:</strong> Immune to industrial vibrations and air turbulence (no vibration isolation tables required).</span>
                    </li>
                    <li>
                      <span className="text-primary fw-bold">✓</span>
                      <span><strong>Broadband spectral flexibility:</strong> Continuous coverage from 193 nm DUV to 10.6 μm LWIR.</span>
                    </li>
                    <li>
                      <span className="text-primary fw-bold">✓</span>
                      <span><strong>Large dynamic range:</strong> Captures up to ±50λ continuous wavefront error without 2π fringe ambiguity.</span>
                    </li>
                    <li>
                      <span className="text-primary fw-bold">✓</span>
                      <span><strong>Real-time reconstruction:</strong> Up to 500 Hz modal decomposition into Standard, Annular, and Fringe Zernike polynomials.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="wfs-card opacity-90">
                  <h3 className="wfs-card-title text-muted">
                    Classical Hartmann Screen (Legacy Mask)
                  </h3>
                  <p className="mb-3">
                    The historical Hartmann test utilized an opaque screen perforated with pinholes placed before the test optic.
                    While conceptually related, the classical screen has been rendered obsolete by micro-lenslet technology:
                  </p>
                  <ul className="wfs-check-list text-muted">
                    <li>
                      <span className="text-danger fw-bold">✗</span>
                      <span><strong>Severe light starvation:</strong> Over 95% of incoming light is absorbed by the opaque screen, limiting low-light metrology.</span>
                    </li>
                    <li>
                      <span className="text-danger fw-bold">✗</span>
                      <span><strong>Diffraction blur:</strong> Pinhole apertures produce diffuse geometric spots with low signal-to-noise ratio.</span>
                    </li>
                    <li>
                      <span className="text-danger fw-bold">✗</span>
                      <span><strong>No optical focusing gain:</strong> Lacks refractive sub-aperture lens focusing, degrading centroiding resolution.</span>
                    </li>
                    <li>
                      <span className="text-danger fw-bold">✗</span>
                      <span><strong>Cumbersome alignment:</strong> Demands labor-intensive manual alignment and restricted spatial sampling.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accuracy Validation Callout */}
            <div className="wfs-callout-box d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div>
                <strong>Independent Metrology Validation:</strong> SpotOptics Shack-Hartmann wavefront sensors have been cross-benchmarked against
                industry-standard <strong>Zygo GPIxp HR</strong> and <strong>Veeco</strong> Fizeau interferometers, achieving rms phase agreement within{' '}
                <strong>2 nm rms (λ/300)</strong>.
              </div>
              <Link href="/knowledge/wavefront-sensor-accuracy" className="a-link text-uppercase fw-bold">
                Read Validation Study →
              </Link>
            </div>
          </section>

          {/* ── SECTION 2: SPECTRAL RANGE MATRIX ────────────────────────────── */}
          <section className="mb-5 pb-3" id="wavelength-coverage" aria-labelledby="wl-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Spectral Breadth</span>
              <h2 id="wl-heading" className="wfs-section-heading">
                Spectral Range Matrix: DUV (193 nm) to LWIR (10.6 μm)
              </h2>
              <p className="wfs-section-lead mx-auto">
                No other optical metrology manufacturer offers this extensive spectral breadth within a unified hardware and software ecosystem.
              </p>
            </div>

            <div className="row g-3">
              {[
                {
                  band: 'DUV', range: '193 – 350 nm', bg: '#f3e8ff', color: '#7c3aed',
                  title: 'Deep Ultraviolet', desc: 'ArF excimer laser metrology, semiconductor lithography optics, DUV stepper lens qualification.',
                  model: 'OMI-DUV-HR',
                },
                {
                  band: 'VIS', range: '400 – 700 nm', bg: '#e0f2fe', color: '#0284c7',
                  title: 'Visible Light', desc: 'Precision optical testing, imaging lens metrology, consumer camera modules, freeform optics.',
                  model: 'OMI-HS, Optino-mu, Optino',
                },
                {
                  band: 'NIR', range: '700 nm – 1.1 μm', bg: '#ecfeff', color: '#0891b2',
                  title: 'Near Infrared', desc: 'Telecom photonics, Nd:YAG laser qualification (1064 nm), silicon wafer inspection, fiber collimators.',
                  model: 'OMI-45, OMI-HR, Laserino-mu',
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

          {/* ── SECTION 3: PRODUCT FAMILY SHOWCASE ─────────────────────────── */}
          <section className="mb-5 pb-3" id="product-family" aria-labelledby="pf-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Instruments Lineup</span>
              <h2 id="pf-heading" className="wfs-section-heading">
                SpotOptics Shack-Hartmann Wavefront Sensor Family
              </h2>
              <p className="wfs-section-lead mx-auto">
                Engineered in Padova, Italy — from pocket-sized dual-pass units to high-resolution transmission systems
                and dual-channel laser diagnostics.
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

          {/* ── SECTION 4: TECHNICAL COMPARISON TABLE ───────────────────────── */}
          <section className="mb-5 pb-3" id="sh-vs-interferometer" aria-labelledby="comp-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Metrology Benchmark</span>
              <h2 id="comp-heading" className="wfs-section-heading">
                Shack-Hartmann Wavefront Sensor vs. Fizeau / Twyman-Green Interferometer
              </h2>
              <p className="wfs-section-lead mx-auto">
                A rigorous technical benchmark to assist optical engineers, metrologists, and system integrators
                in selecting the optimal measurement platform.
              </p>
            </div>

            <div className="wfs-table-card mb-4">
              <div className="table-responsive">
                <table className="wfs-table" aria-label="Shack-Hartmann vs Interferometer comparison">
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '24%' }}>Performance Criterion</th>
                      <th scope="col" style={{ width: '38%' }}>🔬 Shack-Hartmann (SpotOptics)</th>
                      <th scope="col" style={{ width: '38%' }}>💡 Fizeau / Twyman-Green Interferometer</th>
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
                <strong>When to choose Shack-Hartmann:</strong> Industrial shop-floor testing, laser beam quality analysis (M²),
                broadband/multi-wavelength testing, large wavefront aberrations (up to ±50λ), and space-constrained OEM test benches.
              </p>
              <p className="mb-0">
                <strong>When interferometry is required:</strong> Sub-angstrom surface roughness metrology (λ/200+ PV) where reference transmission spheres and pneumatic isolation tables are readily available.
              </p>
            </div>
          </section>

          {/* ── SECTION 5: APPLICATIONS & USE CASES ─────────────────────────── */}
          <section className="mb-5 pb-3" id="applications" aria-labelledby="app-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Industrial &amp; Research</span>
              <h2 id="app-heading" className="wfs-section-heading">
                High-Impact Metrology Applications
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
                  desc: 'Wavefront aberration testing of Head-Up Display projection lenses, automotive camera modules, and ADAS optical assemblies without vibration artifacts.',
                  link: '/applications-for-research-and-industry?app=head-up-display-test',
                  anchor: 'HUD Testing Guide',
                },
                {
                  icon: '🔭',
                  title: 'Telescope Active Optics & Alignment',
                  desc: 'Active optics feedback and real-time collimation of astronomical telescope primary and secondary mirrors (heritage from ESO NTT 1989).',
                  link: '/applications-for-research-and-industry?app=telescope-mirror-test',
                  anchor: 'Telescope Alignment Guide',
                },
                {
                  icon: '⚡',
                  title: 'Laser Beam Quality (M² & MTF)',
                  desc: 'Instantaneous extraction of M² beam propagation factor and Modulation Transfer Function directly from single-shot phase data without mechanical scanning.',
                  link: '/all-products/laserino-mu-dual-channel-single-pass',
                  anchor: 'Laser Diagnostics Details',
                },
                {
                  icon: '🔬',
                  title: 'Optical Lens & Asphere Metrology',
                  desc: 'Single and double-pass transmission and reflection testing of lenses, prisms, and aspherical optical surfaces across DUV to LWIR.',
                  link: '/all-products/optino-single-and-double-pass',
                  anchor: 'Optino Metrology',
                },
                {
                  icon: '👁️',
                  title: 'Ophthalmic & Contact Lens QC',
                  desc: 'Production-line contact lens metrology — measuring dioptric power, astigmatism, higher-order Zernike aberrations, and MTF in wet or dry cells.',
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
                    <Link href={app.link} className="a-link text-uppercase fw-semibold">
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
                        desc: 'Full support for Standard, Annular (central obscuration), Fringe, and Seidel polynomial expansions.',
                      },
                      {
                        metric: 'Single-Shot Output',
                        title: 'M² & MTF Calculation',
                        desc: 'Beam quality factor (M²) and MTF curves calculated directly from phase gradients without translation stages.',
                      },
                      {
                        metric: 'Developer APIs',
                        title: 'Automation & SDK',
                        desc: 'Full API support for Python, C++, C#, MATLAB, and LabVIEW with hardware TTL trigger synchronization.',
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

          {/* ── SECTION 7: FREQUENTLY ASKED QUESTIONS (FAQ SCHEMA EMBEDDED) ─── */}
          <section className="mb-5 pb-3" id="faq" aria-labelledby="faq-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Engineering FAQ</span>
              <h2 id="faq-heading" className="wfs-section-heading">
                Frequently Asked Technical Questions
              </h2>
              <p className="wfs-section-lead mx-auto">
                Authoritative technical clarifications for optical engineering teams specifying Shack-Hartmann wavefront sensors.
                For additional guides, explore our <Link href="/faq/" className="a-link">Technical FAQ Library →</Link>
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

          {/* ── SECTION 8: HIGH-VALUE B2B CALL TO ACTION ─────────────────────── */}
          <section className="my-5 p-4 p-lg-5 rounded-4 border bg-white shadow-sm" aria-label="Engineering Consultation">
            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <span className="wfs-section-tag mb-2">B2B Metrology Consultation</span>
                <h3 className="h3 fw-bold text-dark mb-2">
                  Discuss Your Optical Test Bench with Senior Optical Physicists
                </h3>
                <p className="text-muted mb-0">
                  Whether qualifying extreme UV lithography lenses, characterising high-power CO₂ laser systems,
                  or automating automotive HUD test lines, our Padova engineering team configures custom lenslet pitches,
                  focal lengths, and spectral configurations.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <div className="d-flex flex-column gap-2">
                  <Link href="/contact" className="btn btn-primary-custom px-4 py-2 text-center" id="cta-contact-team">
                    Contact Engineering Team
                  </Link>
                  <Link href="/downloads" className="btn btn-outline-custom px-4 py-2 text-center" id="cta-datasheet-req">
                    Request Technical Datasheet
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 9: GLOBAL CTA COMPONENT ─────────────────────────────── */}
          <div className="mt-4">
            <Cta />
          </div>

        </div>
      </main>
    </>
  );
}
