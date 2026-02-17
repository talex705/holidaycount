import type { Metadata } from 'next';
import { generateLandingMetadata, LandingPage } from '@/lib/pages/landing';

export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return generateLandingMetadata('en');
}

export default function HomePage() {
  return <LandingPage locale="en" />;
}
