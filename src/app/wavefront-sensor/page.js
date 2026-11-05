import Link from 'next/link';
import Image from 'next/image';
import productsData from '@/data/products.json';
import applicationData from '@/data/application.json';
import knowledgeData from '@/data/knowledge.json';
import PageTopBar from '@/components/common/PageTopBar';
import ProductCard from '@/components/common/ProductCard';
import Cta from '@/components/common/Cta';

// Theme & Bootstrap Stylesheets
import '../../../public/assets/css/all-products.css';
import '../../../public/assets/css/products.css';
import '../../../public/assets/css/wavefrontSensors.css';

// ─── Technical SEO Metadata (Strict Canonical, Front-Loaded H1 Match) ──────────
export const metadata = {
  title: {
    absolute: 'High-Performance Shack-Hartmann Wavefront Sensors | SpotOptics',
  },
  description:
    'Technical guide to Shack-Hartmann wavefront sensors. Explore operating principles, master specifications, and precision metrology from DUV (193 nm) to LWIR (10.6 µm).',
  keywords: [
    'wavefront sensor',
    'Shack-Hartmann wavefront sensor',
    'optical metrology',
    'lenslet array',
    'wavefront measurement',
    'Zernike polynomials',
    'OMI wavefront sensor',
    'Optino-mu',
    'Laserino-mu',
    'Puntino telescope metrology',
    'wavefront sensor vs interferometer',
  ],
  alternates: {
    canonical: 'https://www.spotoptics.com/wavefront-sensor',
  },
  openGraph: {
    title: 'High-Performance Shack-Hartmann Wavefront Sensors | SpotOptics',
    description:
      'Technical guide to Shack-Hartmann wavefront sensors. Explore operating principles, master specifications, and precision metrology from DUV (193 nm) to LWIR (10.6 µm).',
    url: 'https://www.spotoptics.com/wavefront-sensor',
    siteName: 'SpotOptics Optical Metrology',
    type: 'website',
    images: [
      {
        url: 'https://www.spotoptics.com/assets/images/products/1.png',
        width: 1200,
        height: 630,
        alt: 'SpotOptics Shack-Hartmann Wavefront Sensor OMI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High-Performance Shack-Hartmann Wavefront Sensors | SpotOptics',
    description:
      'Technical guide to Shack-Hartmann wavefront sensors. Explore operating principles, master specifications, and precision metrology from DUV (193 nm) to LWIR (10.6 µm).',
    images: ['https://www.spotoptics.com/assets/images/products/1.png'],
  },
};

// ─── Schema.org Structured Data (Organization + WebPage + FAQPage) ─────────────
const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.spotoptics.com/#organization',
      name: 'SpotOptics',
      legalName: 'SpotOptics S.r.l.',
      url: 'https://www.spotoptics.com',
      logo: 'https://www.spotoptics.com/assets/icons/favicon.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Turazza 48',
        addressLocality: 'Padova',
        addressRegion: 'PD',
        postalCode: '35128',
        addressCountry: 'IT',
      },
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.spotoptics.com/wavefront-sensor#webpage',
      url: 'https://www.spotoptics.com/wavefront-sensor',
      name: 'High-Performance Shack-Hartmann Wavefront Sensors | SpotOptics',
      description:
        'Technical guide and instrument lineup for SpotOptics Shack-Hartmann wavefront sensors, spanning DUV to LWIR wavelengths.',
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
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.spotoptics.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Wavefront Sensors',
            item: 'https://www.spotoptics.com/wavefront-sensor',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.spotoptics.com/wavefront-sensor#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why Choose Shack-Hartmann over Interferometers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SpotOptics Shack-Hartmann wavefront sensors deliver measurement precision comparable to interferometers (validated against Zygo and Veeco systems to within 2 nm rms), but operate via single-frame snapshots without requiring costly pneumatic vibration-isolation tables, complex cavity alignment, or strict monochromatic laser sources. They cover a broad wavelength range from 193 nm DUV to 10.6 µm LWIR and offer high dynamic range up to ±50λ.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does a Shack-Hartmann wavefront sensor measure optical aberrations?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A micro-lenslet array positioned at the transferred pupil discretizes the incoming wavefront into sub-apertures. Focal spot displacements on the sensor matrix directly correspond to local phase gradients. SenSoft software reconstructs the full wavefront phase topography using Standard, Annular, or Fringe Zernike polynomials.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can SpotOptics wavefront sensors test optical systems off-axis?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. SpotOptics wavefront sensors and motorized platforms (such as Stella and Sfera) are engineered to test optical systems both on-axis and off-axis up to ±50°, enabling comprehensive lens aberration qualification, distortion mapping, and field-dependent wavefront analysis.',
          },
        },
        {
          '@type': 'Question',
          name: 'How are Shack-Hartmann sensors used in Head-Up Display (HUD) and automotive testing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'As demonstrated in production line systems developed by SpotOptics for automotive tier-1 manufacturers, the OMI sensor coupled with SenSoft operates in a closed loop to extract Zernike coefficients and evaluate optical transmission quality across automotive windshields and projection optics.',
          },
        },
      ],
    },
  ],
};

export default function WavefrontSensorPage() {
  const allItems = productsData?.items || [];

  // Core sensor products defined in requirements
  const coreProducts = allItems.filter((p) =>
    [
      'omi-test-in-single-pass',
      'optino-mu-pocket-size-single-and-double-pass',
      'laserino-mu-dual-channel-single-pass',
      'puntino-dual-channel-for-astronomical-telescopes',
    ].includes(p.id)
  );

  const displayProducts = coreProducts.length >= 4 ? coreProducts : allItems.slice(0, 4);

  // Master Specification Selection Matrix Data (derived directly from products.json)
  const masterSpecs = [
    {
      model: 'OMI: Single Pass',
      wavelength: 'DUV – LWIR (193 nm to 10.6 µm)',
      accuracy: 'λ/60 PV (Accuracy) | λ/1000 (Repeatability)',
      speed: 'Up to 50 Hz',
      application: 'High-resolution transmission testing of lasers & optics; DUV to LWIR multi-band metrology',
      link: '/all-products/omi-test-in-single-pass',
    },
    {
      model: 'Optino-mu: Pocket Size',
      wavelength: 'UV – Vis – NIR (Pocket 70×25×30 mm)',
      accuracy: 'λ/3000 (Zernike) | λ/1000 (RMS Precision)',
      speed: 'Up to 50 Hz',
      application: 'Portable single & double pass lens metrology; compact OEM & research bench integration',
      link: '/all-products/optino-mu-pocket-size-single-and-double-pass',
    },
    {
      model: 'Laserino-mu: Dual Channel',
      wavelength: 'Vis – NIR (Dual Optical Channels)',
      accuracy: 'Direct M² & MTF without motorized z-scanning',
      speed: 'Real-time simultaneous capture',
      application: 'Laser beam profiling, instant M² propagation factor & MTF evaluation',
      link: '/all-products/laserino-mu-dual-channel-single-pass',
    },
    {
      model: 'Puntino: Astronomical',
      wavelength: 'Visible to NIR (Dual-camera Cooled CCD/CMOS)',
      accuracy: 'Sub-nanometer Annular Zernike resolution',
      speed: 'f/5 to f/18 dynamic matching',
      application: 'Astronomical telescope collimation, active optics feedback & primary mirror support stress',
      link: '/all-products/puntino-dual-channel-for-astronomical-telescopes',
    },
  ];

  return (
    <>
      {/* ── JSON-LD Structured Data Injection ─────────────────────────────── */}
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
            counterValue="04"
            counterLabel="CORE SENSORS"
          />

          {/* ── SECTION 1: THE ULTIMATE GUIDE HERO (WHAT & HOW) ─────────────── */}
          <section className="wfs-hero-card p-4 p-lg-5 mb-5" aria-labelledby="hero-heading">
            <div className="wfs-hero-glow" aria-hidden="true" />
            <div className="row align-items-center position-relative z-2">
              <div className="col-lg-8">
                
                {/* Brand Tagline Badge */}
                <header className="mb-3">
                  <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white bg-opacity-10 text-white border border-white border-opacity-15 mb-3">
                    <span className="hero-pulse-dot" />
                    <span className="small fw-bold letter-spacing-1 text-uppercase">
                      Technical Guide &amp; Optical Metrology Reference
                    </span>
                  </div>

                  <h1 id="hero-heading" className="wfs-hero-title mb-3">
                    High-Performance Shack-Hartmann Wavefront Sensors
                  </h1>

                  <p className="wfs-hero-subtitle mb-3">
                    DUV (193 nm) to LWIR (10.6 μm) — Sub-Nanometer Phase Accuracy &amp; Modal Reconstruction
                  </p>
                  
                  <div className="hero-accent-line mb-3" />

                  <p className="wfs-hero-desc mb-4">
                    An authoritative engineering reference on precision <strong>Shack-Hartmann wavefront sensing</strong> — covering
                    sub-aperture spot displacement mechanics, Zernike polynomial expansion, and industrial instrument selection across research,
                    semiconductor lithography, automotive HUD validation, and astronomical active optics.
                  </p>
                </header>

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

              </div>

              {/* Hardware Graphic Right Column */}
              <div className="col-lg-4 text-center d-none d-lg-block">
                <Image
                  src="/assets/images/products/1.png"
                  alt="SpotOptics Shack-Hartmann Wavefront Sensor OMI"
                  width={340}
                  height={300}
                  className="drop-shadow img-fluid"
                  style={{ maxWidth: '100%', height: 'auto', width: 'auto' }}
                  priority
                />
              </div>
            </div>
          </section>

          {/* ── WORKING PRINCIPLE (EDUCATIONAL DEEP DIVE) ───────────────────── */}
          <section className="mb-5 pb-3" id="working-principle" aria-labelledby="wp-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Working Principle</span>
              <h2 id="wp-heading" className="wfs-section-heading">
                Micro-Lenslet Array Discretization &amp; Wavefront Reconstruction
              </h2>
              <p className="wfs-section-lead mx-auto">
                How modern Shack-Hartmann sensors measure local phase gradients and reconstruct the complete optical wavefront.
              </p>
            </div>

            <div className="row g-4 align-items-center">
              
              {/* Working Principle Text */}
              <div className="col-lg-7">
                <div className="wfs-card wfs-card-active">
                  <h3 className="wfs-card-title d-flex align-items-center gap-2">
                    <span className="hero-pulse-dot" />
                    Sub-Aperture Spot Displacement Mechanics
                  </h3>
                  <p className="mb-3">
                    In the Shack-Hartmann test, a precision <strong>micro-lenslet array</strong> is positioned directly in the transferred pupil:
                    light from the optical system under test comes to a focus and is made parallel by the collimator, which images the pupil on the array.
                  </p>
                  <p className="mb-3">
                    Each individual lenslet samples a discrete sub-aperture of the beam. The lateral displacement (Δx, Δy) of each focal spot from its calibrated reference position is directly proportional to the local wavefront slope:
                  </p>
                  
                  <div className="p-3 bg-light rounded-3 mb-3 border">
                    <code className="text-dark fw-bold d-block text-center">
                      θ_x = Δx / f_LA = (1/k) · (∂Φ/∂x)
                    </code>
                  </div>

                  <p className="mb-0">
                    Our proprietary <strong>SenSoft™</strong> software integrates these orthogonal phase slopes in real time, expanding the wavefront into orthonormal modal expansions (Standard Zernike, Annular Zernike for central obscurations, Fringe Zernike, and classical Seidel aberrations).
                  </p>
                </div>
              </div>

              {/* Working Principle Visual Graphic / Placeholder */}
              <div className="col-lg-5">
                <div className="wfs-card d-flex flex-column align-items-center justify-content-center text-center p-4">
                  <div className="w-100 p-4 rounded-3 border border-2 border-dashed bg-light mb-3 position-relative">
                    
                    <div className="mb-3 text-primary">
                      <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 3v-2m0 22v-2m9-9h2m-22 0h2" />
                      </svg>
                    </div>

                    <h4 className="h6 fw-bold text-dark mb-1">
                      Lenslet Array Phase Discretization
                    </h4>
                    <p className="small text-muted mb-0">
                      Sub-aperture spot displacement mapping on detector matrix
                    </p>

                    {/* TODO: Insert Lenslet Array Working GIF/Video here */}

                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle mt-3 px-3 py-1">
                      Spot-Displacement Visualization
                    </span>
                  </div>

                  <div className="wfs-callout-box w-100 text-start">
                    <strong>λ/1000 rms repeatability:</strong> Single-frame snapshot slope integration freezes mechanical vibrations without pneumatic isolation tables.
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ── SECTION 2: THE CORE PRODUCT GRID (TRANSITION TO COMMERCIAL) ─── */}
          <section className="mb-5 pb-3" id="core-products" aria-labelledby="products-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Instruments Lineup</span>
              <h2 id="products-heading" className="wfs-section-heading">
                Core Shack-Hartmann Wavefront Sensors
              </h2>
              <p className="wfs-section-lead mx-auto">
                SpotOptics flagship wavefront sensors engineered in Padova, Italy — from pocket-sized dual-pass units to high-resolution transmission systems.
              </p>
            </div>

            <div className="row g-4">
              {displayProducts.map((product, index) => {
                const cleanDescription = (product.description || '')
                  .replace(/\\n/g, ' ')
                  .replace(/\s+/g, ' ')
                  .trim();

                const productLink = `/all-products/${product.id}`;

                return (
                  <div className="col-12 col-md-6 col-lg-3" key={product.id || index}>
                    <div className="card h-100 shadow-sm border rounded-4 overflow-hidden d-flex flex-column">
                      
                      {/* Product Image */}
                      <div className="bg-light p-3 text-center position-relative" style={{ minHeight: '180px' }}>
                        <Image
                          src={product.image ? `/${product.image.replace(/^\//, '')}` : '/assets/images/products/1.png'}
                          alt={product.name || 'SpotOptics Wavefront Sensor'}
                          width={240}
                          height={170}
                          className="img-fluid object-fit-contain"
                          style={{ maxHeight: '160px', width: 'auto' }}
                        />
                      </div>

                      {/* Card Content */}
                      <div className="card-body d-flex flex-column p-4">
                        <h3 className="h6 fw-bold text-dark mb-2">
                          <Link href={productLink} className="text-decoration-none text-dark hover-primary">
                            {product.name}
                          </Link>
                        </h3>

                        {/* Max 3-line Description */}
                        <p
                          className="small text-muted mb-4 flex-grow-1"
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: '1.5',
                          }}
                        >
                          {cleanDescription}
                        </p>

                        {/* Explore Details Button */}
                        <div className="mt-auto">
                          <Link
                            href={productLink}
                            className="btn btn-outline-primary w-100 py-2 fw-semibold rounded-pill small"
                          >
                            Explore Details →
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-4">
              <Link href="/all-products" className="btn btn-primary px-4 py-2 rounded-pill fw-semibold shadow-sm">
                Browse Complete Product Catalog →
              </Link>
            </div>
          </section>

          {/* ── SECTION 3: MASTER SPECIFICATION COMPARISON TABLE ─────────────── */}
          <section className="mb-5 pb-3" id="master-specifications" aria-labelledby="specs-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Model Matrix</span>
              <h2 id="specs-heading" className="wfs-section-heading">
                Master Specification Comparison
              </h2>
              <p className="wfs-section-lead mx-auto">
                Side-by-side selection matrix benchmarking SpotOptics core wavefront sensors across key metrological criteria.
              </p>
            </div>

            <div className="wfs-table-card mb-4 shadow-sm">
              <div className="table-responsive">
                <table className="wfs-table table table-hover mb-0" aria-label="Master Specification Selection Matrix">
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '22%' }}>Sensor Model</th>
                      <th scope="col" style={{ width: '22%' }}>Wavelength Range</th>
                      <th scope="col" style={{ width: '24%' }}>Accuracy &amp; Repeatability</th>
                      <th scope="col" style={{ width: '12%' }}>Speed</th>
                      <th scope="col" style={{ width: '20%' }}>Primary Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {masterSpecs.map((spec) => (
                      <tr key={spec.model}>
                        <th scope="row" className="fw-bold text-dark">
                          <Link href={spec.link} className="text-decoration-none text-primary">
                            {spec.model}
                          </Link>
                        </th>
                        <td>{spec.wavelength}</td>
                        <td className="wfs-cell-highlight">{spec.accuracy}</td>
                        <td>{spec.speed}</td>
                        <td className="small text-muted">{spec.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── SECTION 4: TECHNICAL SEO FAQ & APPLICATIONS ──────────────────── */}
          <section className="mb-5 pb-3" id="technical-faq" aria-labelledby="faq-heading">
            <div className="text-center max-w-2xl mx-auto mb-4">
              <span className="wfs-section-tag">Engineering Knowledge</span>
              <h2 id="faq-heading" className="wfs-section-heading">
                Technical FAQ &amp; Applications Reference
              </h2>
              <p className="wfs-section-lead mx-auto">
                Authoritative answers synthesized directly from SpotOptics technical validation studies and industrial deployments.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              
              {/* Primary Comparison FAQ */}
              <details className="wfs-faq-details" open>
                <summary className="wfs-faq-summary">
                  <h3 className="h6 fw-bold mb-0 text-dark">
                    Why Choose Shack-Hartmann over Interferometers?
                  </h3>
                  <span className="text-primary fw-bold ms-2">+</span>
                </summary>
                <div className="wfs-faq-body">
                  <p className="mb-2">
                    Independent cross-validation studies against high-resolution <strong>Zygo GPIxp HR</strong> and <strong>Veeco</strong> Fizeau interferometers demonstrate that SpotOptics Shack-Hartmann sensors achieve spatial phase agreement within <strong>2 nm rms (approx. λ/300)</strong>.
                  </p>
                  <p className="mb-0">
                    Unlike traditional interferometers, which rely on delicate phase-shifting across multiple temporal frames and are severely susceptible to shop-floor vibrations and thermal air currents, SpotOptics Shack-Hartmann instruments operate via single-frame snapshot slope integration. This delivers complete vibration immunity without pneumatic isolation tables, handles large continuous dynamic ranges up to ±50λ, and operates across broadband spectra from 193 nm to 10.6 µm.
                  </p>
                </div>
              </details>

              {/* FAQ 2: Lenslet Array Mechanics */}
              <details className="wfs-faq-details">
                <summary className="wfs-faq-summary">
                  <h3 className="h6 fw-bold mb-0 text-dark">
                    How does a Shack-Hartmann sensor achieve higher sensitivity than classical Hartmann screens?
                  </h3>
                  <span className="text-primary fw-bold ms-2">+</span>
                </summary>
                <div className="wfs-faq-body">
                  <p className="mb-0">
                    As documented in our technical knowledge base, the classical Hartmann test placed an opaque perforated screen in front of the optic, causing over 95% light loss and diffuse diffraction spots. Shack-Hartmann technology replaces the opaque mask with a continuous micro-lenslet array in the transferred pupil, concentrating light into high-intensity focal spots. This yields higher signal-to-noise ratios, sub-pixel centroiding precision, and λ/1000 rms measurement repeatability.
                  </p>
                </div>
              </details>

              {/* FAQ 3: Automotive & HUD Testing */}
              <details className="wfs-faq-details">
                <summary className="wfs-faq-summary">
                  <h3 className="h6 fw-bold mb-0 text-dark">
                    How are SpotOptics sensors applied in Head-Up Display (HUD) and automotive quality control?
                  </h3>
                  <span className="text-primary fw-bold ms-2">+</span>
                </summary>
                <div className="wfs-faq-body">
                  <p className="mb-0">
                    SpotOptics developed automated HUD metrology stations for automotive production lines. The OMI wavefront sensor and SenSoft software interface directly with production line controllers via a closed-loop remote communication module, setting acquisition parameters, measuring optical transmission across windshields, and extracting Zernike coefficients to ensure distortion-free projection.
                  </p>
                </div>
              </details>

              {/* FAQ 4: Astronomical Active Optics */}
              <details className="wfs-faq-details">
                <summary className="wfs-faq-summary">
                  <h3 className="h6 fw-bold mb-0 text-dark">
                    What is SpotOptics heritage in astronomical active optics and telescope mirror testing?
                  </h3>
                  <span className="text-primary fw-bold ms-2">+</span>
                </summary>
                <div className="wfs-faq-body">
                  <p className="mb-0">
                    Shack-Hartmann active optics originated at the ESO 3.5m New Technology Telescope (NTT). SpotOptics instruments such as Puntino apply this astronomical heritage to measure primary mirror support stress and alignment aberrations. Because astronomical telescopes have central obscurations, SenSoft implements Annular Zernike polynomials alongside Standard Zernike and Seidel representations, detecting surface deformations as minute as 268 nm Peak-to-Valley.
                  </p>
                </div>
              </details>

            </div>
          </section>

          {/* ── SECTION 5: GLOBAL CTA COMPONENT ─────────────────────────────── */}
          <div className="mt-5">
            <Cta />
          </div>

        </div>
      </main>
    </>
  );
}
