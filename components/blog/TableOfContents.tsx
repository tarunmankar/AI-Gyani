import { TocItem } from '@/lib/types';

interface Props {
  items: TocItem[];
}

export default function TableOfContents({ items }: Props) {
  if (!items || items.length === 0) return null;
  return (
    <nav className="toc" aria-label="Table of contents">
      <p className="toc-title">📋 Is Article Mein</p>
      <ol className="toc-list">
        {items.map((item) => (
          <li key={item.id} className={`toc-item level-${item.level}`}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
