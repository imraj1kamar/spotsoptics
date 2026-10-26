// ─── FAQ Page SEO Metadata (Server Component) ──────────────────────────────
import FaqClient from './FaqClient';

export const metadata = {
  title: 'Shack-Hartmann Wavefront Sensor FAQ | SpotOptics',
  description:
    'Technical FAQs on Shack-Hartmann wavefront sensors: accuracy, interferometer comparison, wavelength range, M² measurement, and telescope alignment.',
  alternates: { canonical: 'https://www.spotoptics.com/faq/' },
  openGraph: {
    title: 'Shack-Hartmann Wavefront Sensor FAQ | SpotOptics',
    description: 'Answers to the most common engineering questions about Shack-Hartmann wavefront sensors, accuracy, and interferometer comparison.',
    url: 'https://www.spotoptics.com/faq/',
    siteName: 'SpotOptics S.r.l.',
    type: 'website',
  },
};

export default function FaqPage() {
  return <FaqClient />;
}