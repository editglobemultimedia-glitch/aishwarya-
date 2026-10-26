import PageBanner from '../../components/ui/PageBanner'

import GoldDivider from '../../components/ui/GoldDivider'
import QuoteBlock from '../../components/ui/QuoteBlock'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Wind, Flame, Droplets } from 'lucide-react'

const elements = [
  {
    id: 'akasa',
    name: 'Akasa',
    nameDevanagari: 'Akasha',
    meaning: 'Space',
    bgClass: 'bg-navy',
    textClass: 'text-cream-50',
    icon: <Globe size={32} />,
    tagline: 'Where there is space for understanding, there is space for harmony.',
    desc: 'Akasa represents the vastness in which existence unfolds. For ASF, it inspires the creation of space for knowledge, dialogue, research and understanding.',
    expressions: ['Knowledge', 'Dialogue', 'Research', 'Cultural Exchange'],
    detail: 'We envision spaces where scholars can exchange ideas, young minds can learn, cultures can meet, questions can be explored, and knowledge can be preserved and shared.',
  },
  {
    id: 'vayu',
    name: 'Vayu',
    nameDevanagari: 'Vayu',
    meaning: 'Air',
    bgClass: 'bg-maroon',
    textClass: 'text-cream-50',
    icon: <Wind size={32} />,
    tagline: 'Let wisdom move. Let compassion reach.',
    desc: 'Vayu reminds us of movement, vitality and circulation. Knowledge should not remain confined. Compassion should not remain an emotion. Ideas should move.',
    expressions: ['Outreach', 'Communication', 'Volunteerism', 'Movement'],
    detail: 'ASF seeks to carry wisdom across generations, knowledge across languages, Seva across communities and values across cultures.',
  },
  {
    id: 'agni',
    name: 'Agni',
    nameDevanagari: 'Agni',
    meaning: 'Fire',
    bgClass: 'bg-gradient-to-br from-amber-700 to-amber-900',
    textClass: 'text-cream-50',
    icon: <Flame size={32} />,
    tagline: 'May the light of knowledge transform the journey of life.',
    desc: 'Agni represents illumination, energy and transformation. For ASF, Agni becomes a powerful metaphor for Jnana — knowledge that transforms life.',
    expressions: ['Education', 'Research', 'Leadership', 'Transformation'],
    detail: 'We envision Bhagavadgita learning, scholarly research, youth education, leadership programmes, knowledge dissemination and intellectual dialogue.',
  },
  {
    id: 'apah',
    name: 'Apah',
    nameDevanagari: 'Apah',
    meaning: 'Water',
    bgClass: 'bg-blue-800',
    textClass: 'text-cream-50',
    icon: <Droplets size={32} />,
    tagline: 'May compassion flow where it is needed most.',
    desc: 'Water sustains life. It flows, connects, nourishes and gives without discrimination. For ASF, Apah inspires the spirit of compassionate Seva.',
    expressions: ['Compassion', 'Healthcare', 'Nourishment', 'Humanitarian Support'],
    detail: 'Our envisioned areas include healthcare support, food and essential assistance, humanitarian relief, community wellbeing and support for vulnerable people.',
  },
  {
    id: 'prthivi',
    name: 'Prthivi',
    nameDevanagari: 'Prithivi',
    meaning: 'Earth',
    bgClass: 'bg-green-900',
    textClass: 'text-cream-50',
    icon: <Globe size={32} />,
    tagline: 'What sustains us deserves our protection.',
    desc: 'Prthivi is the ground upon which life flourishes. The earth is not merely something to use. It is something to respect, protect and nurture.',
    expressions: ['Environment', 'Agriculture', 'Villages', 'Communities & Sustainability'],
    detail: 'ASF aspires to support environmental responsibility, tree plantation, sustainable communities, village development, livelihood opportunities and heritage preservation.',
  },
]

export default function PanchaMahabhuta() {
  return (
    <>
      <PageBanner eyebrow="About Us" title="Pancha Mahabhuta — Five Elements" subtitle="ASF interpretive framework inspired by the dharmic tradition — a journey of space, movement, transformation, nourishment and stability." breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: 'Pancha Mahabhuta' }]} image="/images/bh3.png" />
      <section className="py-16 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-gold-antique mb-4">AKASA - VAYU - AGNI - APAH - PRTHIVI</p>
          <h2 className="font-serif text-3xl md:text-4xl text-maroon font-semibold mb-5">The Five Elements — One Framework</h2>
          <p className="text-gray-700 font-sans leading-relaxed mb-3">Rather than presenting the five elements as five unrelated environmental topics, ASF interprets them as a journey of space, movement, transformation, nourishment and stability.</p>
          <p className="text-gray-700 font-sans leading-relaxed">This is an ASF interpretive framework inspired by the dharmic tradition. The Gita's seventh chapter explicitly places earth, water, fire, air and ether within the Lord's eightfold material energy — providing a strong textual bridge for this theme.</p>
        </div>
      </section>
      {elements.map((el, i) => (
        <section key={el.id} id={el.id} className={`py-20 ${i % 2 === 0 ? 'bg-cream-100' : 'bg-cream-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <div className={`${el.bgClass} rounded-2xl p-10 text-center shadow-xl`}>
                  <div className={`${el.textClass} flex justify-center mb-4 opacity-80`}>{el.icon}</div>
                  <p className={`font-serif text-4xl font-semibold ${el.textClass} mb-1`}>{el.name}</p>
                  <p className={`text-sm font-sans tracking-widest uppercase opacity-70 ${el.textClass} mb-6`}>{el.meaning}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {el.expressions.map(exp => (
                      <span key={exp} className="bg-white/10 text-white text-xs font-sans px-3 py-1 rounded-full border border-white/20">{exp}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={i % 2 !== 0 ? 'lg:col-start-1' : ''}>
                <p className="eyebrow text-gold-antique mb-3">{el.meaning} — Our Expression</p>
                <h3 className="font-serif text-2xl md:text-3xl text-maroon font-semibold mb-4">{el.name} — {el.meaning}</h3>
                <p className="text-gray-700 font-sans leading-relaxed mb-4">{el.desc}</p>
                <p className="text-gray-600 font-sans text-sm leading-relaxed mb-5">{el.detail}</p>
                <div className="gold-border-left">
                  <p className="font-serif text-maroon italic text-base">{el.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <GoldDivider />
      <QuoteBlock quote="From individual wellbeing to family wellbeing. From family wellbeing to community wellbeing. From community wellbeing to universal wellbeing." />
      <section className="py-12 bg-cream-50 text-center">
        <Link to="/about/bhagavadgita" className="btn-primary">Explore the Bhagavadgita Connection <ArrowRight size={14} /></Link>
      </section>
    </>
  )
}
