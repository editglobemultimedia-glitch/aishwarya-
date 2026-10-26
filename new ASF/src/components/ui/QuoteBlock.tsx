interface QuoteBlockProps {
  quote: string
  attribution?: string
  dark?: boolean
}

export default function QuoteBlock({ quote, attribution, dark = false }: QuoteBlockProps) {
  return (
    <div className={`relative py-10 px-6 md:px-12 text-center ${dark ? 'bg-navy' : 'bg-cream-200'}`}>
      {/* Decorative quote marks */}
      <span className={`absolute top-4 left-6 text-7xl font-serif leading-none ${dark ? 'text-gold-antique/20' : 'text-gold-antique/15'}`}>&ldquo;</span>
      <span className={`absolute bottom-4 right-6 text-7xl font-serif leading-none ${dark ? 'text-gold-antique/20' : 'text-gold-antique/15'}`}>&rdquo;</span>

      <blockquote className={`relative font-serif text-xl md:text-2xl lg:text-3xl italic leading-relaxed font-medium ${
        dark ? 'text-cream-50' : 'text-maroon-dark'
      }`}>
        {quote}
      </blockquote>
      {attribution && (
        <p className={`mt-4 text-sm font-sans ${dark ? 'text-gold-champagne' : 'text-gold-antique'} tracking-wide`}>
          — {attribution}
        </p>
      )}
    </div>
  )
}
