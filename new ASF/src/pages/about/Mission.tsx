import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import GoldDivider from '../../components/ui/GoldDivider'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Mission() {
  const pillars = [
    { title: 'Research & Knowledge', desc: 'Establish the Vishwa Gita Research Centre — a dedicated centre for study, research, interpretation, documentation and dissemination of the Bhagavadgita, subject to institutional partnerships and resources.' },
    { title: 'Global Gita Awareness', desc: 'Encourage meaningful engagement with the Bhagavadgita through educational programmes, public discourses, publications, translations and digital learning initiatives.' },
    { title: 'Bhagavadgita Vishwa Mahotsav', desc: 'Build an international platform for collective recitation, cultural exchange and the celebration of the Bhagavadgita across at least 18 countries.' },
    { title: 'Tradition & Contemporary Life', desc: 'Explore the relevance of Gita philosophy to ethics, leadership, education, personal responsibility, social harmony and community wellbeing.' },
    { title: 'Wisdom into Seva', desc: 'Apply the principles of selfless action and universal welfare through initiatives in healthcare, education, humanitarian support and community development.' },
    { title: 'Youth & Communities', desc: 'Nurture the next generation of dharmic leaders through education, values-based learning, leadership programmes and the ASF Club.' },
    { title: 'Nature & Environment', desc: 'Respect and protect the natural world — honouring Prthivi as the foundation of all life and human responsibility.' },
    { title: 'Sarvahith', desc: 'Work towards the welfare and flourishing of all — every human being, every community, every living creature, the entire creation.' },
  ]
  return (
    <>
      <PageBanner eyebrow="About Us" title="From Wisdom to Seva. From Seva to Sarvahith." subtitle="Our mission — promoting the knowledge of Sanatana Dharma and the Bhagavadgita through research, education, cultural dialogue and meaningful Seva." breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: 'Our Mission' }]} image="/images/bh1.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-gold-antique mb-5">Our Mission Statement</p>
          <div className="bg-maroon rounded-2xl p-10 mb-10">
            <p className="font-serif text-xl md:text-2xl text-cream-50 leading-relaxed font-medium">To promote the knowledge of Sanatana Dharma and the Bhagavadgita through research, education, cultural dialogue and meaningful Seva, while nurturing youth, supporting communities, respecting nature and working towards the welfare of all.</p>
          </div>
          <div className="bg-cream-200 rounded-xl p-6 border-l-4 border-gold-antique">
            <p className="font-serif text-lg text-maroon italic leading-relaxed">"When wisdom becomes understanding, understanding becomes responsibility, and responsibility becomes Seva — we move closer to Sarvahith."</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Aspire To" title="Eight Pillars of Our Mission" subtitle="Our long-term aspiration is to build a lasting knowledge legacy through which the Bhagavadgita can be studied deeply, understood meaningfully and shared responsibly." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <div key={p.title} className="card-premium p-6">
                <span className="text-3xl font-serif text-gold-antique/20 font-bold block mb-2">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-maroon text-base font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 font-sans text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoldDivider />
      <section className="py-12 bg-cream-50 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/campaigns" className="btn-primary">Our Campaigns <ArrowRight size={14} /></Link>
          <Link to="/get-involved" className="btn-ghost">Get Involved <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  )
}
