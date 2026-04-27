interface Props {
  type: 'Article' | 'BreadcrumbList' | 'WebSite' | 'WebPage';
  data: Record<string, unknown>;
}

export default function JsonLd({ type, data }: Props) {
  const schema = { '@context': 'https://schema.org', '@type': type, ...data };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper: Article schema
export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  author: string;
}) {
  return {
    headline: post.title,
    description: post.description,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'AI Gyani', url: 'https://www.aigyani.in' },
    url: `https://www.aigyani.in/blog/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.aigyani.in/blog/${post.slug}` },
    inLanguage: 'hi-IN',
  };
}

// Helper: BreadcrumbList schema
export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://www.aigyani.in${item.href}`,
    })),
  };
}
