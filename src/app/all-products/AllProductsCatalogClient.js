// src/app/all-products/AllProductsCatalogClient.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

import ProductCard from '@/components/common/ProductCard';
import Sidebar from '@/components/common/Sidebar';
import PageTopBar from '@/components/common/PageTopBar';
import Cta from '@/components/common/Cta';
import productsData from '@/data/products.json';
import sidebarData from '@/data/sidebar.json';
import '../../../public/assets/css/all-products.css';
import '../../../public/assets/css/products.css';

function slugify(value = '') {
  return (
    String(value)
      .toLowerCase()
      .trim()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'product'
  );
}

export default function AllProductsCatalogClient() {
  const items = productsData?.items || [];

  const { scrollYProgress } = useScroll();
  const rawY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.03, 0.98]);
  const y = useSpring(rawY, { stiffness: 90, damping: 28, restDelta: 0.001 });
  const scale = useSpring(rawScale, { stiffness: 90, damping: 28, restDelta: 0.001 });

  return (
    <motion.main
      className="spotoptics-main"
      style={{ y, scale, willChange: 'transform' }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <section className="all-products-page">
        <div className="container">

          {/* ── 1. TOP BAR: BREADCRUMBS & COUNTER ─────────────────────────── */}
          <PageTopBar
            breadcrumbs={[
              { label: 'Home', href: '/' },
              { label: 'Products' },
            ]}
            showCounter={true}
            counterValue={items.length || 0}
            counterLabel="MODELS"
          />

          {/* ── 2. HERO BANNER: BRANDED SPOTOPTICS CARD (H1 SEMANTIC TARGET) ─ */}
          <motion.div
            className="knowledge-hero-card mb-4 position-relative overflow-hidden rounded-4 p-4 p-lg-5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="row align-items-center position-relative z-2">
              <div className="col-lg-7 col-md-8">
                
                {/* Brand Tagline Badge with Pulse Dot */}
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill hero-pill-badge mb-3">
                  <span className="hero-pulse-dot" />
                  <span className="text-uppercase small fw-semibold letter-spacing-1 text-white">
                    Shack-Hartmann Optical Metrology
                  </span>
                </div>

                {/* Exactly ONE <h1> tag with target keyword in the first 30 characters */}
                <h1 className="knowledge-hero-title text-white fw-bold mb-3">
                  High-Performance Shack-Hartmann Wavefront Sensors: DUV to LWIR Catalog
                </h1>

                <div className="hero-accent-line mb-3" />

                <p className="knowledge-hero-description text-white text-opacity-75 mb-4 custom-link-text ">
                  SpotOptics manufactures precision Shack-Hartmann wavefront sensors for laboratory transmission metrology,
                  laser beam quality analysis (M²), and production-line quality control. Operating from{' '}
                  <strong className="text-white">193 nm to 10.6 µm</strong> with sub-nanometer{' '}
                  <strong className="text-white">λ/1000 rms repeatability</strong> and{' '}
                  <strong className="text-white">λ/60 absolute accuracy</strong>. For detailed technology benchmarks, explore our{' '}
                  <Link href="/wavefront-sensor" >
                    Wavefront Sensors Technology Hub →
                  </Link>
                </p>

              
              </div>

              {/* Hardware Render Graphic */}
              <div className="col-lg-5 col-md-4 text-end position-relative z-1 d-none d-md-block">
                <div className="hero-3d-lens-wrapper">
                  <Image
                    src="/assets/images/products/1.png"
                    alt="SpotOptics Shack-Hartmann Wavefront Sensors Catalog"
                    width={420}
                    height={320}
                    className="img-fluid rounded object-fit-contain drop-shadow"
                    style={{ maxHeight: '280px' }}
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="hero-card-glow-bg" aria-hidden="true" />
          </motion.div>

          {/* ── 3. PRODUCT CATALOG GRID & SIDEBAR ─────────────────────────── */}
          <div className="row g-4 align-items-start">
            <div className="col-lg-9">
              <div className="row g-4 align-items-stretch">
                {items.map((item, index) => (
                  <div className="col-md-6 col-xl-4" key={`${item.name || 'product'}-${index}`}>
                    <ProductCard
                      index={index}
                      name={item.name || ''}
                      description={item.description || ''}
                      image={item.image || ''}
                      link={`/all-products/${slugify(item.name || `product-${index + 1}`)}`}
                      className="h-100"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-3 pb-1 d-none d-lg-block">
              <div className="sticky-top" style={{ top: '100px' }}>
                <Sidebar
                  title={sidebarData.title || 'Categories'}
                  links={sidebarData.links || []}
                />
              </div>
            </div>
          </div>

         

        </div>
      </section>
    </motion.main>
  );
}
