import { Link } from 'react-router-dom'
import { ArrowRight, Images } from 'lucide-react'

interface CampaignCardProps {
  image: string
  eyebrow?: string
  title: string
  description: string
  href: string
  tag?: string
  galleryHref?: string
}

export default function CampaignCard({
  image,
  eyebrow,
  title,
  description,
  href,
  tag,
  galleryHref,
}: CampaignCardProps) {
  const targetGallery =
    galleryHref ||
    (tag === 'Project'
      ? '/media/gallery?category=Projects'
      : '/media/gallery?category=Campaigns')

  return (
    <div className="group card-premium overflow-hidden flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        {tag && (
          <span className="absolute top-3 left-3 bg-gold-antique text-navy text-xs font-sans font-medium px-2.5 py-1 rounded">
            {tag}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        {eyebrow && <p className="eyebrow text-gold-antique mb-1">{eyebrow}</p>}
        <h3 className="font-serif text-lg text-maroon font-semibold leading-snug mb-2">{title}</h3>
        <p className="text-gray-600 text-sm font-sans leading-relaxed flex-1">{description}</p>
        
        {/* Card footer: Learn more on left, Gallery in marked spot on right */}
        <div className="mt-5 pt-3.5 border-t border-cream-200/80 flex items-center justify-between gap-3">
          <Link
            to={href}
            className="inline-flex items-center gap-1.5 text-maroon text-sm font-sans font-medium hover:text-maroon-dark transition-colors group/link"
          >
            <span>Learn more</span>
            <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
          </Link>

          <Link
            to={targetGallery}
            className="inline-flex items-center gap-1.5 text-gold-antique hover:text-maroon text-xs sm:text-sm font-sans font-medium px-2.5 py-1 rounded hover:bg-cream-200/60 transition-all duration-200 group/gallery"
            title={`View ${title} Gallery`}
          >
            <Images size={15} className="transition-transform group-hover/gallery:scale-110" />
            <span>Gallery</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
