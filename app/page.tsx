import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import WhyLearnSection from '@/components/home/WhyLearnSection';
import JsonLd from '@/components/seo/JsonLd';
import { getFeaturedPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'AI Gyani — Apni Bhasha Mein AI Seekho',
  description: 'AI Gyani par seekho Artificial Intelligence, Machine Learning, Deep Learning aur Generative AI — bilkul Hinglish mein. Free tutorials by Tarun. Beginners se Advanced tak.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AI Gyani — Apni Bhasha Mein AI Seekho',
    description: 'Free AI tutorials in Hinglish — beginners ke liye. AI, ML, Deep Learning, GenAI sab ek jagah.',
    url: 'https://www.aigyani.in',
  },
};

const websiteSchema = {
  name: 'AI Gyani',
  url: 'https://www.aigyani.in',
  description: 'AI tutorials in Hinglish for Indian learners',
  author: { '@type': 'Person', name: 'Tarun' },
  inLanguage: 'hi-IN',
};

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(6);
  return (
    <>
      <JsonLd type="WebSite" data={websiteSchema} />
      <HeroSection />
      <CategoryGrid />
      <FeaturedPosts posts={featuredPosts} />
      <WhyLearnSection />
    </>
  );
}
