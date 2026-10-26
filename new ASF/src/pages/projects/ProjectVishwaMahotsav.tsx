import PageBanner from '../../components/ui/PageBanner'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProjectVishwaMahotsav() {
  return (
    <>
      <PageBanner eyebrow="Our Projects" title="Bhagavadgita Vishwa Mahotsav" subtitle="The project bringing the Bhagavadgita's 18 chapters to at least 18 countries and 18 languages." breadcrumbs={[{ label: 'Our Projects', href: '/projects' }, { label: 'Vishwa Mahotsav' }]} image="/images/bh3.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow text-gold-antique mb-3">Project Overview</p>
              <h2 className="font-serif text-3xl text-maroon font-semibold mb-5">A Global Journey of Wisdom</h2>
              <p className="text-gray-700 font-sans leading-relaxed mb-4">The Bhagavadgita Vishwa Mahotsav aspires to bring together scholars, students, educators, artists, cultural institutions, spiritual practitioners, youth and communities from around the world in a shared celebration of the Gita's wisdom.</p>
              <p className="text-gray-700 font-sans leading-relaxed mb-6">Rooted in the sacred dialogue between Lord Sri Krishna and Arjuna, the initiative seeks to create a shared experience of reflection, devotion and learning across geographical and linguistic boundaries.</p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-amber-800 font-sans text-xs font-medium">The 18-country vision is presented as ASF's aspiration. Country participation will be formally announced as confirmed.</p>
              </div>
              <Link to="/campaigns/vishwa-mahotsav" className="btn-primary">View Campaign Details <ArrowRight size={14} /></Link>
            </div>
            <div className="space-y-4">
              <img src="/images/18-countries-map.png" alt="18 Countries" className="rounded-xl shadow-lg w-full" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80' }} />
              <img src="/images/bh1.png" alt="Gita Mahotsav" className="rounded-xl shadow-lg w-full h-48 object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1592519765050-ef38ee0c0b7d?w=700&q=80' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
