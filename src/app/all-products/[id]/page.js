// ─── Server Component — page.js ──────────────────────────────────────────────
// generateMetadata and JSON-LD runs on the server; the UI is rendered by AllProductsPage (AllProductsClient.js)
import productsData from '@/data/products.json';
import siteData from '@/data/site.json';
import AllProductsPage from './AllProductsClient';

function slugifyMeta(value = '') {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'product';
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const items = productsData?.items || [];
  const baseUrl = siteData?.site?.url || 'https://www.spotoptics.com';

  const product = items.find((item, index) => {
    const slug = item.id || slugifyMeta(item.name || `product-${index + 1}`);
    return slug === id;
  });

  if (!product) {
    return {
      title: 'Product Not Found | SpotOptics',
      description:
        'The requested optical instrument could not be found. Browse our full range of Shack-Hartmann wavefront sensors.',
      alternates: { canonical: `${baseUrl}/all-products` },
    };
  }

  const specs = (product.quickSpecifications || product.specifications || []).slice(0, 3);
  const specSnippet = specs.map((s) => `${s.label}: ${s.value}`).join(' | ');
  const descBase = (product.description || '').replace(/\n/g, ' ').trim();
  const description = specSnippet
    ? `${descBase.slice(0, 85)} — ${specSnippet}`.slice(0, 155)
    : descBase.slice(0, 155);

  const canonicalSlug = product.id || slugifyMeta(product.name);
  const canonicalUrl = `${baseUrl}/all-products/${canonicalSlug}`;
  const imageUrl = product.image
    ? `${baseUrl}/${product.image.replace(/^\//, '')}`
    : `${baseUrl}/assets/icons/favicon.png`;

  return {
    title: {
      absolute: `${product.name} | High-Accuracy Shack-Hartmann Wavefront Sensor | SpotOptics`,
    },
    description,
    alternates: { canonical: canonicalUrl },
    keywords: [
      product.name,
      'Shack-Hartmann wavefront sensor',
      'high-accuracy wavefront sensor',
      'optical metrology instrument',
      'wavefront measurement',
      'SpotOptics',
    ],
    openGraph: {
      title: `${product.name} | High-Accuracy Shack-Hartmann Wavefront Sensor`,
      description,
      url: canonicalUrl,
      siteName: 'SpotOptics',
      images: [{ url: imageUrl, width: 800, height: 600, alt: product.name }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | SpotOptics Wavefront Sensor`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const items = productsData?.items || [];
  const baseUrl = siteData?.site?.url || 'https://www.spotoptics.com';

  const product = items.find((item, index) => {
    const slug = item.id || slugifyMeta(item.name || `product-${index + 1}`);
    return slug === id;
  });

  const canonicalSlug = product ? (product.id || slugifyMeta(product.name)) : id;
  const canonicalUrl = `${baseUrl}/all-products/${canonicalSlug}`;
  const imageUrl = product?.image
    ? `${baseUrl}/${product.image.replace(/^\//, '')}`
    : `${baseUrl}/assets/icons/favicon.png`;

  const rawSpecs = product ? (product.quickSpecifications || product.specifications || []) : [];
  const additionalProperties = rawSpecs.map((s) => ({
    '@type': 'PropertyValue',
    name: s.label,
    value: s.value,
  }));

  const productSchema = product
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        '@id': `${canonicalUrl}#product`,
        name: product.name,
        description: (product.description || '').replace(/\n/g, ' ').trim(),
        image: imageUrl,
        url: canonicalUrl,
        brand: {
          '@type': 'Brand',
          name: 'SpotOptics',
        },
        manufacturer: {
          '@type': 'Organization',
          '@id': `${baseUrl}/#organization`,
          name: 'SpotOptics S.r.l.',
          url: baseUrl,
        },
        category: 'Optical Metrology Instruments',
        additionalProperty: additionalProperties,
        offers: {
          '@type': 'Offer',
          url: `${baseUrl}/contact`,
          priceCurrency: 'EUR',
          price: '0',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: {
            '@type': 'Organization',
            name: 'SpotOptics',
          },
        },
      }
    : null;

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      <AllProductsPage />
    </>
  );
}
