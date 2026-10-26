import PageBanner from '../../components/ui/PageBanner'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProjectResearchCentre() {
  return (
    <>
      <PageBanner eyebrow="Our Projects" title="Vishwa Gita Research Centre" subtitle="A proposed centre for knowledge, research and global understanding of the Bhagavadgita." breadcrumbs={[{ label: 'Our Projects', href: '/projects' }, { label: 'Research Centre' }]} image="/images/bh4.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-gold-antique mb-4 text-center">Project Overview</p>
          <h2 className="font-serif text-3xl text-maroon font-semibold mb-5 text-center">From Ancient Wisdom to Contemporary Understanding</h2>
          <p className="text-gray-700 font-sans leading-relaxed mb-4">The Vishwa Gita Research Centre is envisioned as a long-term mission to preserve knowledge, encourage inquiry and make the Bhagavadgita accessible to present and future generations.</p>
          <p className="text-gray-700 font-sans leading-relaxed mb-6">The centre will provide opportunities for scholars, educators, students, spiritual thinkers and interested communities to engage with the Gita through rigorous study and accessible learning.</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
            <p className="text-amber-800 font-sans text-xs">This is a proposed initiative. Its establishment will be developed progressively through partnerships, expertise and available resources.</p>
          </div>
          <div className="text-center">
            <Link to="/campaigns/research-centre" className="btn-primary">View Campaign Details <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
