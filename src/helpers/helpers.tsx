//src/helpers/helpers.tsx
import { Badge } from '@/components/ui/badge'

// --- small helpers -----------------------------------------------------------
export function Logo({ src, alt }: { src?: string; alt: string }) {
    if (!src) return null
    return (
      <div className="flex h-14 w-32 items-center justify-center overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="max-h-[75%] max-w-[75%] object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }
  
  
export function PillList({ items }: { items?: string[] }) {
    if (!items?.length) return null
    return (
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <Badge key={it} variant="outline">
            {it}
          </Badge>
        ))}
      </div>
    )
  }
  
export function BulletList({ items }: { items?: string[] }) {
    if (!items?.length) return null
    return (
      <ul className="list-disc space-y-2 pl-5 text-sm">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    )
  }