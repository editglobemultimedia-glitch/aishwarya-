import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import { Play } from 'lucide-react'

const videoPlaceholders = [
  { title: 'Bhagavadgita Vishwa Mahotsav — Event Recording', desc: 'Recording to be added once available.', category: 'Campaigns', thumbnail: '/images/bh3.png' },
  { title: 'ASF Knowledge Session — Pancha Mahabhuta', desc: 'Knowledge session recording to be added once available.', category: 'Knowledge', thumbnail: '/images/bh2.png' },
  { title: 'Seva Initiative — Community Highlights', desc: 'Video documentation to be added once available.', category: 'Seva', thumbnail: '/images/p3.jpg' },
]

export default function Videos() {
  return (
    <>
      <PageBanner eyebrow="Media" title="Videos" subtitle="Knowledge sessions, event recordings and community highlights from ASF's initiatives." breadcrumbs={[{ label: 'Media', href: '/media' }, { label: 'Videos' }]} image="/images/bh1.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Video Library" title="Watch. Learn. Be Inspired." />
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-center max-w-2xl mx-auto">
            <p className="text-amber-800 font-sans text-sm">Videos will be added once recordings and verified content are provided by the Foundation. No placeholder video URLs have been used.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoPlaceholders.map((v, i) => (
              <div key={i} className="card-premium overflow-hidden group">
                <div className="relative h-44 overflow-hidden bg-cream-300">
                  <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover opacity-80"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=70' }} />
                  <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center">
                      <Play size={22} className="text-white ml-1" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-maroon text-cream-50 text-xs font-sans px-2 py-1 rounded">{v.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-maroon text-base font-semibold mb-2 italic">{v.title}</h3>
                  <p className="text-gray-500 font-sans text-xs leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
