import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import GoldDivider from '../../components/ui/GoldDivider'

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CampaignSeva() {
  const areas = ['Education', 'Healthcare', 'Humanitarian assistance', 'Women and child welfare', 'Elderly support', 'Village development', 'Livelihoods', 'Environment', 'Youth empowerment', 'Heritage and culture']
  return (
    <>
      <PageBanner eyebrow="Our Campaigns" title="Seva Is Our Expression of Gratitude" subtitle="We serve not because another person is separate from us. We serve because life is interconnected." breadcrumbs={[{ label: 'Our Campaigns', href: '/campaigns' }, { label: 'Seva' }]} image="/images/p3.jpg" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-gold-antique mb-4">The Spirit of Seva</p>
          <h2 className="font-serif text-3xl text-maroon font-semibold mb-5">If the Pancha Mahabhuta teaches us that life is interconnected, Seva becomes a natural expression of that understanding.</h2>
          <p className="text-gray-700 font-sans leading-relaxed mb-8">We serve not because another person is separate from us. We serve because life is interconnected. Seva is not charity alone. Seva is responsibility expressed through action.</p>
        </div>
      </section>
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Envisioned Areas" title="ASF's Seva Areas" subtitle="Our envisioned areas of service span the full spectrum of human need — from education and healthcare to heritage and environment." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area, i) => (
              <div key={area} className="card-premium p-5 text-center group hover:border-gold-antique/50 hover:-translate-y-1 transition-all duration-300">
                <span className="text-2xl font-serif text-gold-antique/20 font-bold block mb-2">{String(i + 1).padStart(2,'0')}</span>
                <p className="font-sans text-gray-700 text-sm font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoldDivider />
      <section className="py-16 bg-navy text-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-2xl md:text-3xl font-medium mb-6">"Seva is not charity alone. Seva is responsibility expressed through action."</p>
          <p className="text-cream-300/70 font-sans text-sm leading-relaxed mb-8">Inspired by the spirit of Karma Yoga, ASF aspires to serve with humility, act with responsibility and pursue outcomes that benefit all of society — from individual transformation to collective progress.</p>
          <Link to="/get-involved" className="btn-primary bg-gold-antique hover:bg-gold-dark text-navy font-semibold">Join Our Seva <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  )
}
