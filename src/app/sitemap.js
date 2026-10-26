// src/app/sitemap.js
import siteData from "@/data/site.json";
import productsData from "@/data/products.json";
import knowledgeData from "@/data/knowledge.json";

function slugify(value = '') {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'product';
}

export default function sitemap() {
  const baseUrl = siteData?.site?.url || "https://www.spotoptics.com";
  const now = new Date();

  // ── Static pages ──────────────────────────────────────────────────────────
  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/wavefront-sensors/`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${baseUrl}/all-products/`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/knowledge/`, priority: 0.85, changeFrequency: 'weekly' },
    { url: `${baseUrl}/applications/`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/all-products/wavefront-sensor-software`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/faq/`, priority: 0.75, changeFrequency: 'monthly' },
    { url: `${baseUrl}/accessories/`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/about-us-spotoptics/`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/technology/`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/contact/`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/downloads/`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/terms-and-conditions/`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/privacy-policy/`, priority: 0.3, changeFrequency: 'yearly' },
  ].map(p => ({ ...p, lastModified: now }));

  // ── Dynamic product pages (from products.json) ────────────────────────────
  const productPages = (productsData?.items || []).map((item, index) => ({
    url: `${baseUrl}/all-products/${item.id || slugify(item.name || `product-${index + 1}`)}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // ── Dynamic knowledge article pages (from knowledge.json) ─────────────────
  const knowledgePages = (knowledgeData?.articles || [])
    .filter(article => article.url)
    .map(article => ({
      url: `${baseUrl}${article.url}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  return [...staticPages, ...productPages, ...knowledgePages];
}