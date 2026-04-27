import Link from 'next/link';
import { BreadcrumbItem } from '@/lib/types';

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.href} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {index > 0 && <span className="sep" aria-hidden="true">›</span>}
            {isLast ? (
              <span className="current" aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
