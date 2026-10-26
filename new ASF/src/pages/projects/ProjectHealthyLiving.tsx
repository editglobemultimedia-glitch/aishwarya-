import PageBanner from '../../components/ui/PageBanner'
import GoldDivider from '../../components/ui/GoldDivider'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProjectHealthyLiving() {
  const pillars = ['Holistic Wellbeing', 'Healthy Nutrition', 'Natural Living', 'Physical Fitness', 'Mental Wellness', 'Community Health']
  return (
    <>
      <PageBanner eyebrow="Our Projects" title="Healthy Living Carnival India" subtitle="A community initiative promoting holistic wellbeing, healthy lifestyles and awareness of natural living across India." breadcrumbs={[{ label: 'Our Projects', href: '/projects' }, { label: 'Healthy Living Carnival' }]} image="/images/p8.jpg" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-gold-antique mb-4 text-center">Project Vision</p>
          <h2 className="font-serif text-3xl text-maroon font-semibold mb-5 text-center">Celebrating Life, Health and Wholeness</h2>
          <p className="text-gray-700 font-sans leading-relaxed mb-4 text-center">The Healthy Living Carnival India is envisioned as a community-centred initiative that brings people together to explore, celebrate and adopt healthier, more balanced ways of living — drawing on both traditional wisdom and contemporary understanding.</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10 text-center">
            <p className="text-amber-800 font-sans text-xs">Project details and implementation status to be confirmed by the Foundation.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {pillars.map(p => (
              <div key={p} className="card-premium p-5 text-center">
                <span className="text-gold-antique text-lg mb-2 block">◆</span>
                <p className="font-sans text-gray-700 text-sm font-medium">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoldDivider />
      <section className="py-12 bg-cream-200 text-center">
        <Link to="/campaigns/seva" className="btn-primary">Explore Our Seva Campaign <ArrowRight size={14} /></Link>
      </section>
    </>
  )
}
