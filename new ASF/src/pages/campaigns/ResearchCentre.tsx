import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import GoldDivider from '../../components/ui/GoldDivider'
import QuoteBlock from '../../components/ui/QuoteBlock'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CampaignResearchCentre() {
  const areas = [
    { title: 'Research', desc: 'Encouraging textual study, comparative philosophy, interpretation and interdisciplinary research on the Bhagavadgita and related traditions.' },
    { title: 'Translation', desc: 'Supporting the understanding of the Bhagavadgita across Indian and international languages — making wisdom accessible to diverse communities.' },
    { title: 'Documentation', desc: 'Preserving manuscripts, interpretations, scholarship and oral traditions for present and future generations.' },
    { title: 'Education', desc: 'Developing learning resources, lectures, study programmes and youth engagement initiatives rooted in Gita wisdom.' },
    { title: 'Dialogue', desc: 'Creating opportunities for academic exchange and intercultural conversations on the Gita\'s teachings and contemporary relevance.' },
  ]
  return (
    <>
      <PageBanner eyebrow="Our Campaigns" title="Knowledge Preserved. Wisdom Explored." subtitle="A proposed centre dedicated to the deep study, research, translation and dissemination of Bhagavadgita knowledge." breadcrumbs={[{ label: 'Our Campaigns', href: '/campaigns' }, { label: 'Research Centre' }]} image="/images/bh4.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-gold-antique mb-3">Vishwa Gita Research Centre</p>
          <h2 className="font-serif text-3xl text-maroon font-semibold mb-5">A Living Centre for Knowledge, Research and Global Understanding</h2>
          <p className="text-gray-700 font-sans leading-relaxed mb-4">We envision the Vishwa Gita Research Centre as a dedicated knowledge initiative committed to exploring the Bhagavadgita's philosophical depth, historical and cultural influence, linguistic richness and relevance to contemporary society.</p>
          <p className="text-gray-700 font-sans leading-relaxed mb-6">The proposed centre aims to create opportunities for scholars, educators, students, spiritual thinkers and interested communities to engage with the Gita through rigorous study and accessible learning.</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 font-sans text-xs">The Vishwa Gita Research Centre is a proposed initiative. Its establishment and programmes will be developed progressively through partnerships, expertise and available resources.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Areas of Work" title="Five Pillars of the Research Centre" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {areas.map((a, i) => (
              <div key={a.title} className="card-premium p-6 text-center">
                <span className="text-3xl font-serif text-gold-antique/20 font-bold block mb-2">{String(i + 1).padStart(2,'0')}</span>
                <h3 className="font-serif text-maroon text-lg font-semibold mb-2">{a.title}</h3>
                <p className="text-gray-600 font-sans text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoldDivider />
      <QuoteBlock quote="From Ancient Wisdom to Contemporary Understanding." />
      <section className="py-12 bg-cream-50 text-center">
        <Link to="/projects/research-centre" className="btn-primary">View the Project <ArrowRight size={14} /></Link>
      </section>
    </>
  )
}
