import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageBannerProps {
  eyebrow?: string
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
  image?: string
}

export default function PageBanner({ eyebrow, title, subtitle, breadcrumbs, image }: PageBannerProps) {
  return (
    <section
      className="page-banner"
      style={image ? {
        backgroundImage: `linear-gradient(to right, rgba(8,44,77,0.92) 0%, rgba(8,44,77,0.75) 60%, rgba(8,44,77,0.5) 100%), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      {/* Mandala decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border border-gold-antique/10" />
        <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full border border-gold-antique/8" />
        <div className="absolute right-40 bottom-0 w-48 h-48 rounded-full bg-gold-antique/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-cream-300/60 font-sans mb-4">
            <Link to="/" className="hover:text-gold-champagne transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={11} />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-gold-champagne transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold-champagne">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <p className="eyebrow text-gold-antique mb-3">{eyebrow}</p>
        )}

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-cream-50 leading-tight max-w-3xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-cream-300/80 font-sans text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Gold line */}
        <div className="mt-6 flex items-center gap-3">
          <div className="w-12 h-0.5 bg-gold-antique" />
          <div className="w-3 h-3 rotate-45 border border-gold-antique" />
          <div className="w-6 h-0.5 bg-gold-antique/50" />
        </div>
      </div>
    </section>
  )
}
