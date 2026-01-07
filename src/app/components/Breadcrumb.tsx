import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;

          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-2">
              {c.href && !isLast ? (
                <Link href={c.href} className="hover:text-white hover:underline">
                  {c.label}
                </Link>
              ) : (
                <span className={isLast ? "text-white" : ""}>{c.label}</span>
              )}

              {!isLast && <span className="text-white/30">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
