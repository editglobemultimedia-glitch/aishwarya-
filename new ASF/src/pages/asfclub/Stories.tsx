import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import GoldDivider from '../../components/ui/GoldDivider'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const storyPlaceholders = [
  { category: 'Seva Story', title: 'Story Title — Coming Soon', summary: 'This is a placeholder for an approved story from ASF members or community. Stories will be published once reviewed and approved by the Foundation.', date: 'To be published' },
  { category: 'Youth Leadership', title: 'Story Title — Coming Soon', summary: 'This placeholder represents a story from ASF Club — a young leader\'s journey from learning to serving. Stories will be published once reviewed and approved.', date: 'To be published' },
  { category: 'Community Impact', title: 'Story Title — Coming Soon', summary: 'A placeholder for a community impact story from ASF\'s Seva and project initiatives. Real stories to be added once approved by the Foundation.', date: 'To be published' },
]

export default function Stories() {
  return (
    <>
      <PageBanner eyebrow="ASF Club" title="Living Dharma Through Seva" subtitle="Stories of wisdom, service and transformation from the ASF community." breadcrumbs={[{ label: 'ASF Club', href: '/asf-club' }, { label: 'Stories' }]} image="/images/p4.jpg" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Stories" title="Every Journey Matters" subtitle="Real stories of learning, service and transformation from the ASF community — to be published once approved by the Foundation." />
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10 text-center max-w-2xl mx-auto">
            <p className="text-amber-800 font-sans text-sm"><strong>Note:</strong> This page is a layout template. Stories will be published once they are reviewed and approved by Aishwarya Sarvahith Foundation. No testimonials or personal details have been invented.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {storyPlaceholders.map((s, i) => (
              <div key={i} className="card-premium overflow-hidden group">
                <div className="bg-cream-300 h-44 flex items-center justify-center border-b border-cream-300">
                  <div className="text-center">
                    <p className="text-gold-antique/50 font-serif text-4xl mb-2">✦</p>
                    <p className="text-gray-400 font-sans text-xs italic">Image — to be added</p>
                  </div>
                </div>
                <div className="p-6">
                  <span className="bg-maroon/8 text-maroon text-xs font-sans px-2 py-1 rounded">{s.category}</span>
                  <h3 className="font-serif text-maroon text-lg font-semibold mt-3 mb-2 italic">{s.title}</h3>
                  <p className="text-gray-500 font-sans text-sm leading-relaxed mb-3">{s.summary}</p>
                  <p className="text-gold-antique text-xs font-sans">{s.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoldDivider />
      <section className="py-12 bg-cream-200 text-center">
        <h3 className="font-serif text-2xl text-maroon font-semibold mb-4">Share Your Story</h3>
        <p className="text-gray-600 font-sans text-sm mb-6 max-w-md mx-auto">Have a story of Seva, learning or transformation to share with the ASF community? We would love to hear from you.</p>
        <Link to="/contact" className="btn-primary">Contact Us <ArrowRight size={14} /></Link>
      </section>
    </>
  )
}
