'use client';

import React, { Suspense, useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import productsData from '@/data/products.json';
import ProductGallery from '@/components/common/ProductGallery';
import ProductFeatures from '@/components/common/ProductFeatures';
import Button from '@/components/common/Button';
import BrochuresList from '@/components/common/BrochuresList';
import PageTopBar from '@/components/common/PageTopBar';
import '../../../../public/assets/css/all-products.css';

function slugify(value = '') {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'product';
}

function AllProductsContent() {
  const router = useRouter();
  const params = useParams();
  const items = productsData?.items || [];
  const totalItems = items.length;

  const rawSlug = params?.id || '';
  const matchedIndex = items.findIndex((item, index) => {
    const slug = slugify(item.name || `product-${index + 1}`);
    return slug === rawSlug || String(index) === rawSlug;
  });

  const productIndex = matchedIndex >= 0 ? matchedIndex : 0;
  const singleProduct = items[productIndex] || null;

  const navigateToProduct = (targetIndex) => {
    if (totalItems === 0) return;
    const safeIndex = (targetIndex + totalItems) % totalItems;
    const nextProduct = items[safeIndex];
    const slug = slugify(nextProduct?.name || `product-${safeIndex + 1}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(`/all-products/${slug}`, { scroll: false });
  };

  const prevIndex = (productIndex - 1 + totalItems) % totalItems;
  const nextIndex = (productIndex + 1) % totalItems;

  const prevProduct = items[prevIndex];
  const nextProduct = items[nextIndex];

  const productFamily = singleProduct?.productFamily || singleProduct?.product_family || [];

  const defaultFamilyIdx = useMemo(() => {
    const idx = productFamily.findIndex((item) => item.active);
    return idx !== -1 ? idx : 0;
  }, [productFamily]);

  const [selectedFamilyIndex, setSelectedFamilyIndex] = useState(defaultFamilyIdx);
  const [hasUserChangedFamily, setHasUserChangedFamily] = useState(false);

  // Reset when navigating to another product
  useEffect(() => {
    setSelectedFamilyIndex(defaultFamilyIdx);
    setHasUserChangedFamily(false);
  }, [productIndex, defaultFamilyIdx]);

  const selectedFamily = productFamily[selectedFamilyIndex] || null;

  // Dynamic specifications based on active family variant
  const displaySpecs = useMemo(() => {
    if (selectedFamily?.specifications?.length > 0) {
      return selectedFamily.specifications;
    }
    return singleProduct?.quickSpecifications || singleProduct?.specifications || [];
  }, [selectedFamily, singleProduct]);

  // Compute dynamic features based on selected family specifications
  const dynamicFeatures = useMemo(() => {
    const baseFeatures = singleProduct?.features || [];
    if (!hasUserChangedFamily || !selectedFamily?.specifications?.length) {
      return baseFeatures;
    }

    const specs = selectedFamily.specifications || [];
    const findSpec = (label) => {
      const item = specs.find(
        (s) => s.label && s.label.trim().toLowerCase() === label.toLowerCase()
      );
      return item ? item.value : null;
    };

    const accuracyVal = findSpec('Accuracy');
    const repeatabilityVal = findSpec('Repeatability');
    const wavelengthVal = findSpec('Wavelength Range');

    return baseFeatures.map((feat) => {
      if (typeof feat !== 'string') return feat;
      let text = feat;

      // 1. Repeatability & Accuracy update
      if (accuracyVal && repeatabilityVal && /repeatability.*?accuracy/i.test(text)) {
        text = text.replace(
          /((?:high\s+)?repeatability\s*)\([^)]*\)(\s*and\s*accuracy\s*)\([^)]*\)/i,
          `$1(${repeatabilityVal})$2(${accuracyVal})`
        );
      } else if (accuracyVal && /accuracy\s*\([^)]*\)/i.test(text)) {
        text = text.replace(/(accuracy\s*)\([^)]*\)/i, `$1(${accuracyVal})`);
      } else if (repeatabilityVal && /repeatability\s*\([^)]*\)/i.test(text)) {
        text = text.replace(/(repeatability\s*)\([^)]*\)/i, `$1(${repeatabilityVal})`);
      }

      // 2. Wavelength Range update
      if (wavelengthVal && /wavelength\s*range\s*\([^)]*\)/i.test(text)) {
        text = text.replace(
          /((?:large\s+)?wavelength\s*range\s*)\([^)]*\)/i,
          `$1(${wavelengthVal})`
        );
      }

      return text;
    });
  }, [singleProduct?.features, selectedFamily, hasUserChangedFamily]);

  const productSchema = singleProduct
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: singleProduct.name || '',
        description: singleProduct.description || '',
        image: singleProduct.image || '',
        category: 'Optical Measurement Instruments',
        brand: {
          '@type': 'Brand',
          name: 'SpotOptics',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          price: '0',
          priceCurrency: 'USD',
        },
      }
    : null;

  return (
    <main className="spotoptics-main">
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}

      <section  className="page-section accessories-page-wrapper py-5">
      <div className="container mt-5">
          {singleProduct && totalItems > 0 ? (
            <>
            

                <PageTopBar
                            breadcrumbs={[
                               { label: 'All Products', href: '/all-products' },
                    { label: singleProduct.name || 'Product' },
                            ]}
                           showCounter={true}
                           counterValue={`${productIndex + 1} / ${totalItems}`}
                          />

              <div className="product-detail-wrapper">
                
                <ProductGallery
                  images={singleProduct.images || []}
                  image={singleProduct.image || ''}
                  name={singleProduct.name || ''}
                  product_family={productFamily}
                  specifications={displaySpecs}
                  applications={singleProduct.applications || []}
                  show_thumbnails={false}
                  selectedFamilyIndex={selectedFamilyIndex}
                  onFamilyChange={(index) => {
                    setSelectedFamilyIndex(index);
                    setHasUserChangedFamily(true);
                  }}
                />

                <div className="product-detail-content">
                
                  <h1 className="product-detail-title">{singleProduct.name}</h1>
               

                  <span className="section-label d-block fw-bold text-uppercase text-primary-blue mb-2">
                    PRODUCT DETAILS
                  </span>

                  <p className="product-detail-description lead">
                   {(singleProduct.description || '').split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      
    </React.Fragment>
  ))}
                  </p>

                  <ProductFeatures
                    features={dynamicFeatures}
                    className="mb-4"
                  />

                  <div className="product-detail-actions mb-4">
                    <Button
                    className="w-100 btn btn-primary-custom px-2 px-sm-4 py-2 fw-bold d-inline-flex align-items-center justify-content-center gap-1 gap-sm-2 text-nowrap"
                      text="REQUEST A QUOTE"
                      url="/contact"
                      // variant="detail-primary"
                      icon="arrow"
                    />
                  </div>

                  <div className="mb-4">
                    <BrochuresList
                      items={singleProduct.brochures || []}
                      label="MORE INFO & BROCHURES"
                    />
                  </div>
                   <div className="product-nav-wrapper d-flex justify-content-between pt-3 border-top mb-4">
                    <Link
                      href={prevProduct ? `/all-products/${slugify(prevProduct.name || `product-${prevIndex + 1}`)}` : '/all-products'}
                      onClick={(event) => {
                        if (!prevProduct) return;
                        event.preventDefault();
                        navigateToProduct(prevIndex);
                      }}
                      className="product-nav-btn product-nav-prev btn btn-link d-inline-flex align-items-center gap-2 text-decoration-none p-0"
                    >
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      <span>PREVIOUS</span>
                    </Link>

                    <Link
                      href={nextProduct ? `/all-products/${slugify(nextProduct.name || `product-${nextIndex + 1}`)}` : '/all-products'}
                      onClick={(event) => {
                        if (!nextProduct) return;
                        event.preventDefault();
                        navigateToProduct(nextIndex);
                      }}
                      className="product-nav-btn product-nav-next btn btn-link d-inline-flex align-items-center gap-2 text-decoration-none p-0"
                    >
                      <span>NEXT</span>
                      <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="product-not-found text-center py-5">
              <h2>No Products Found</h2>
              <p className="text-muted">Unable to load product data. Please try again later.</p>
              <Link href="/" className="btn btn-primary mt-3">
                BACK TO HOME
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default function AllProductsPage() {
  return (
    <Suspense fallback={<div className="text-center py-5">Loading product...</div>}>
      <AllProductsContent />
    </Suspense>
  );
}