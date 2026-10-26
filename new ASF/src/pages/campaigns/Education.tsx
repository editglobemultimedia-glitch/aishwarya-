import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import GoldDivider from '../../components/ui/GoldDivider'
import QuoteBlock from '../../components/ui/QuoteBlock'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CampaignEducation() {
  const values = ['Character', 'Discipline', 'Compassion', 'Responsibility', 'Leadership', 'Wisdom']
  const programmes = [
    { title: 'Gita for Every Generation', desc: 'Making the wisdom of the Bhagavadgita accessible to all age groups through appropriate learning formats and approaches.' },
    { title: 'Value-Based Learning', desc: 'Integrating dharmic values into educational contexts — developing moral clarity, ethical decision-making and personal integrity.' },
    { title: 'Youth Leadership', desc: 'Equipping young people with the skills, confidence and values to lead responsibly in their families, communities and professions.' },
    { title: 'Gita Learning Circles', desc: 'Community-based study groups for collaborative exploration of the Bhagavadgita and its contemporary relevance.' },
    { title: 'Research & Knowledge Programmes', desc: 'Supporting deeper inquiry into the Bhagavadgita, Sanatana Dharma and related traditions through academic and community initiatives.' },
    { title: 'Cultural Education', desc: "Preserving and transmitting India's civilisational heritage — through arts, languages, classical knowledge and cultural traditions." },
  ]
  return (
    <>
      <PageBanner eyebrow="Our Campaigns" title="From Information to Transformation" subtitle="Education should develop more than knowledge. It should develop character, compassion, responsibility and wisdom." breadcrumbs={[{ label: 'Our Campaigns', href: '/campaigns' }, { label: 'Education & Youth' }]} image="/images/p4.jpg" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Belief" title="What Education Should Develop" subtitle="ASF believes education should do more than transfer information. It should nurture the whole person." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {values.map((v) => (
              <div key={v} className="card-premium p-5 text-center hover:border-gold-antique/50 transition-all">
                <div className="w-10 h-10 rounded-full bg-maroon/8 flex items-center justify-center mx-auto mb-2">
                  <span className="text-gold-antique text-sm font-serif">{v[0]}</span>
                </div>
                <p className="font-serif text-maroon font-semibold text-sm">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Envisioned Programmes" title="Six Educational Initiatives" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((p, i) => (
              <div key={p.title} className="card-premium p-6">
                <span className="text-3xl font-serif text-gold-antique/15 font-bold block mb-2">{String(i+1).padStart(2,'0')}</span>
                <h3 className="font-serif text-maroon text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoldDivider />
      <QuoteBlock quote="From information to transformation — education that builds wisdom, not just knowledge." />
      <section className="py-12 bg-cream-50 text-center">
        <Link to="/asf-club" className="btn-primary">Explore ASF Club <ArrowRight size={14} /></Link>
      </section>
    </>
  )
}
