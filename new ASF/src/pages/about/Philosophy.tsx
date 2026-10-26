import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import GoldDivider from '../../components/ui/GoldDivider'
import QuoteBlock from '../../components/ui/QuoteBlock'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Philosophy() {
  const pillars = [
    { title: 'Dharma', subtitle: 'Righteous Living', desc: 'Upholding ethical values, responsibility and integrity in all that we do. Dharma guides the individual toward purposeful, virtuous action in service of the larger good.' },
    { title: 'Jnana', subtitle: 'Knowledge and Awareness', desc: 'Making wisdom accessible and encouraging learning, reflection and research. True knowledge illuminates the relationship between self, society and creation.' },
    { title: 'Seva', subtitle: 'Service Through Action', desc: 'Transforming compassion into purposeful service. Inspired by Karma Yoga, Seva is not an act of charity alone — it is responsibility expressed through action.' },
    { title: 'Sarvahith', subtitle: 'Welfare of All', desc: "Working towards the flourishing of all beings. Sarvahith reflects ASF's deepest aspiration: that knowledge and service ultimately serve the welfare of the whole." },
  ]
  const journey = [
    { step: '01', title: 'Know', desc: 'Seek wisdom and understanding.' },
    { step: '02', title: 'Reflect', desc: 'Discover the relationship between self, society and creation.' },
    { step: '03', title: 'Serve', desc: 'Convert compassion into meaningful action.' },
    { step: '04', title: 'Sustain', desc: 'Protect and nurture the world entrusted to us.' },
  ]
  return (
    <>
      <PageBanner eyebrow="About Us" title="A Journey from Self to Society" subtitle="Our philosophy rooted in Sanatana Dharma, the Bhagavadgita and the timeless vision of individual and collective wellbeing." breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: 'Our Philosophy' }]} image="/images/bh2.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-gold-antique mb-4">Our Foundation</p>
          <p className="font-serif text-2xl text-maroon leading-relaxed font-medium mb-6">Sanatana Dharma offers a vision of life in which the individual is not isolated from family, society, nature and the larger order of existence.</p>
          <p className="text-gray-700 font-sans leading-relaxed">The Bhagavadgita teaches us to perform our responsibilities with wisdom, discipline and dedication, while the broader dharmic tradition continually reminds us of the harmony between human life and the natural world. ASF seeks to translate these timeless insights into contemporary initiatives.</p>
        </div>
      </section>
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Guiding Principles" title="The Four Pillars of ASF" />
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="card-premium p-8 flex gap-5">
                <div className="w-16 h-16 rounded-full bg-maroon flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-gold-antique text-xl font-bold">{p.title[0]}</span>
                </div>
                <div>
                  <h3 className="font-serif text-maroon text-xl font-semibold mb-0.5">{p.title}</h3>
                  <p className="text-gold-antique text-xs font-sans italic mb-2">{p.subtitle}</p>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Four Dimensions" title="Our Journey Has Four Steps" subtitle="From individual aspiration to collective welfare." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {journey.map((j) => (
              <div key={j.title} className="card-premium p-6 text-center hover:border-gold-antique/50 transition-all duration-300">
                <span className="text-5xl font-serif text-gold-antique/20 font-bold block mb-3">{j.step}</span>
                <h3 className="font-serif text-maroon text-2xl font-semibold mb-2">{j.title}</h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoldDivider />
      <section className="py-16 bg-cream-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-gold-antique mb-3">Vasudhaiva Kutumbakam</p>
          <h2 className="font-serif text-3xl md:text-4xl text-maroon font-semibold mb-4">The World as One Family</h2>
          <p className="text-gray-700 font-sans leading-relaxed mb-4">For ASF, this principle bridges Sanatana Dharma and contemporary global citizenship. Our vision is not to separate people by geography, language or culture.</p>
          <p className="text-gray-700 font-sans leading-relaxed mb-8">It is to create opportunities for knowledge, dialogue, cooperation and service — from individual wellbeing to universal wellbeing.</p>
          <Link to="/about/vision" className="btn-primary">Explore Our Vision <ArrowRight size={14} /></Link>
        </div>
      </section>
      <QuoteBlock quote="We envision a world where spiritual wisdom inspires practical solutions and service becomes a shared responsibility." />
    </>
  )
}
