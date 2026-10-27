// ─── Server Component — page.js ──────────────────────────────────────────────
// generateMetadata runs on the server; the heavy UI is in AllProductsClient.js
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
        'The requested product could not be found. Browse our full range of Shack-Hartmann wavefront sensors.',
      alternates: { canonical: `${baseUrl}/all-products/` },
    };
  }

  const specs = (product.quickSpecifications || product.specifications || []).slice(0, 2);
  const specSnippet = specs.map((s) => `${s.label}: ${s.value}`).join(' | ');
  const descBase = (product.description || '').replace(/\n/g, ' ');
  const description = specSnippet
    ? `${descBase.slice(0, 80)} — ${specSnippet}`.slice(0, 155)
    : descBase.slice(0, 155);

  const canonicalSlug = product.id || slugifyMeta(product.name);
  const canonicalUrl = `${baseUrl}/all-products/${canonicalSlug}`;
  const imageUrl = product.image
    ? `${baseUrl}/${product.image}`
    : `${baseUrl}/assets/icons/favicon.png`;

  return {
    title: `${product.name} | Shack-Hartmann Wavefront Sensor | SpotOptics`,
    description,
    alternates: { canonical: canonicalUrl },
    keywords: [
      'Shack-Hartmann wavefront sensor',
      product.name,
      'optical metrology',
      'wavefront measurement',
      'SpotOptics',
    ],
    openGraph: {
      title: `${product.name} | SpotOptics Wavefront Sensor`,
      description,
      url: canonicalUrl,
      siteName: 'Shack-Hartmann wavefront sensors',
      images: [{ url: imageUrl, width: 800, height: 600, alt: product.name }],
      type: 'website',
    },
  };
}

// Re-export the client page component as default
export default AllProductsPage;