interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      {eyebrow && (
        <div className={`${centered ? 'flex flex-col items-center' : ''}`}>
          <p className={`eyebrow mb-2 ${light ? 'text-gold-champagne' : 'text-gold-antique'}`}>
            {eyebrow}
          </p>
          {/* Ornament */}
          <div className={`flex items-center gap-2 mb-4 ${centered ? 'justify-center' : ''}`}>
            <div className="w-8 h-px bg-gold-antique/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold-antique" />
            <div className="w-8 h-px bg-gold-antique/40" />
          </div>
        </div>
      )}
      <h2 className={`section-heading ${light ? 'text-cream-50' : 'text-maroon'} ${centered ? 'mx-auto' : ''} max-w-3xl`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 ${light ? 'text-cream-300/80' : 'text-gray-600'} font-sans text-base leading-relaxed ${centered ? 'mx-auto' : ''} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
