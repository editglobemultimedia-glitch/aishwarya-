import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import { X } from 'lucide-react'

const images = [
  { src: '/images/bh1.png', alt: 'Bhagavadgita Wisdom', category: 'Bhagavadgita' },
  { src: '/images/bh2.png', alt: 'Knowledge Session', category: 'Bhagavadgita' },
  { src: '/images/bh3.png', alt: 'Vishwa Mahotsav', category: 'Campaigns' },
  { src: '/images/bh4.png', alt: 'Research & Study', category: 'Knowledge' },
  { src: '/images/bh5.png', alt: 'Cultural Programme', category: 'Culture' },
  { src: '/images/p1.jpg', alt: 'Community Service', category: 'Seva' },
  { src: '/images/p2.jpg', alt: 'Youth Programme', category: 'Youth' },
  { src: '/images/p3.jpg', alt: 'Seva Initiative', category: 'Seva' },
  { src: '/images/p4.jpg', alt: 'Education Programme', category: 'Education' },
  { src: '/images/p5.jpg', alt: 'Environmental Initiative', category: 'Environment' },
  { src: '/images/p6.jpg', alt: 'Organic Farming', category: 'Projects' },
  { src: '/images/p8.jpg', alt: 'Healthy Living Carnival', category: 'Projects' },
]

const categories = ['All', 'Bhagavadgita', 'Campaigns', 'Knowledge', 'Seva', 'Youth', 'Education', 'Environment', 'Culture', 'Projects']

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCat = searchParams.get('category')
  const [active, setActive] = useState(
    initialCat && categories.includes(initialCat) ? initialCat : 'All'
  )
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat && categories.includes(cat)) {
      setActive(cat)
    } else if (!cat) {
      setActive('All')
    }
  }, [searchParams])

  const handleSelectCategory = (cat: string) => {
    setActive(cat)
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  const filtered = active === 'All' ? images : images.filter(img => img.category === active)


  return (
    <>
      <PageBanner eyebrow="Media" title="Gallery" subtitle="A visual journey through ASF's campaigns, projects and community initiatives." breadcrumbs={[{ label: 'Media', href: '/media' }, { label: 'Gallery' }]} image="/images/bh1.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Photo Gallery" title="Moments of Wisdom and Service" />
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-8 text-center">
            <p className="text-amber-800 font-sans text-sm">Gallery shows available project images. Official approved photography will be added once provided by the Foundation.</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map(cat => (
              <button key={cat} onClick={() => handleSelectCategory(cat)} className={`text-xs font-sans px-4 py-2 rounded-full border transition-all ${active === cat ? 'bg-maroon text-cream-50 border-maroon' : 'border-cream-300 text-gray-600 hover:border-gold-antique hover:text-maroon'}`}>{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img, i) => (
              <button key={i} onClick={() => setLightbox(img.src)} className="group overflow-hidden rounded-lg aspect-square focus:outline-none focus:ring-2 focus:ring-gold-antique">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=70' }} />
              </button>
            ))}
          </div>
        </div>
      </section>
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-navy/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-cream-50 hover:text-gold-champagne p-2" aria-label="Close lightbox"><X size={28} /></button>
          <img src={lightbox} alt="Gallery image" className="max-w-full max-h-full rounded-lg shadow-2xl" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}
