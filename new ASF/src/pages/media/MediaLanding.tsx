import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Image, Video } from 'lucide-react'

const sections = [
  { icon: <FileText size={32} />, title: 'Newsletter', desc: 'Stay informed with ASF\'s latest news, updates and knowledge initiatives. Subscribe to receive our newsletter directly in your inbox.', href: '/media/newsletter', cta: 'View Newsletter' },
  { icon: <Image size={32} />, title: 'Gallery', desc: 'Explore photographs from ASF\'s campaigns, projects and community initiatives. A visual journey through our work and mission.', href: '/media/gallery', cta: 'View Gallery' },
  { icon: <Video size={32} />, title: 'Videos', desc: 'Watch recordings, knowledge sessions and event footage from ASF\'s initiatives. A library of wisdom and action.', href: '/media/videos', cta: 'View Videos' },
]

export default function MediaLanding() {
  return (
    <>
      <PageBanner eyebrow="Media" title="Stories of Wisdom and Service" subtitle="Explore ASF's newsletter, gallery and video library — a growing archive of our journey." breadcrumbs={[{ label: 'Media' }]} image="/images/bh1.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Media Hub" title="Our Media Library" subtitle="A growing collection of newsletters, photographs and videos from ASF's campaigns, projects and community initiatives." />
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map(s => (
              <Link key={s.href} to={s.href} className="group card-premium p-8 text-center hover:border-gold-antique/50 hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-maroon/8 flex items-center justify-center mx-auto mb-5 text-maroon group-hover:bg-maroon/15 transition-colors">{s.icon}</div>
                <h3 className="font-serif text-maroon text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-maroon text-sm font-medium group-hover:gap-2 transition-all">{s.cta} <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
