// ─── FAQ Page SEO Metadata & Schema (Server Component) ──────────────────
import FaqClient from './FaqClient';
import faqData from '@/data/faq.json'; // JSON data import karein for dynamic schema

export const metadata = {
  title: 'Shack-Hartmann Wavefront Sensor FAQ | SpotOptics',
  description:
    'Technical FAQs on Shack-Hartmann wavefront sensors: accuracy, interferometer comparison, wavelength range, M² measurement, and telescope alignment.',
  alternates: { canonical: 'https://www.spotoptics.com/faq' },
  openGraph: {
    title: 'Shack-Hartmann Wavefront Sensor FAQ | SpotOptics',
    description: 'Answers to the most common engineering questions about Shack-Hartmann wavefront sensors, accuracy, and interferometer comparison.',
    url: 'https://www.spotoptics.com/faq',
    siteName: 'SpotOptics',
    type: 'website',
  },
};

export default function FaqPage() {
  // Dynamically generate Google FAQ Schema from your JSON file
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData?.faqs?.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer, // Google requires plain text or basic HTML here
      },
    })) || [],
  };

  return (
    <>
      {/* Google SEO JSON-LD Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      
      {/* Your Existing UI Component */}
      <FaqClient />
    </>
  );
}