import PageBanner from '../../components/ui/PageBanner'
import GoldDivider from '../../components/ui/GoldDivider'
import QuoteBlock from '../../components/ui/QuoteBlock'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Vision() {
  return (
    <>
      <PageBanner eyebrow="About Us" title="A Harmonious World Rooted in Dharma" subtitle="Our vision for humanity, creation and the future — guided by timeless wisdom." breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: 'Our Vision' }]} image="/images/bh5.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-gold-antique mb-5">Our Vision</p>
          <div className="bg-cream-200 rounded-2xl p-10 border border-cream-300 mb-10">
            <p className="font-serif text-2xl md:text-3xl text-maroon leading-relaxed font-medium">"To inspire a world where timeless wisdom guides responsible living, compassionate Seva and respect for all creation — nurturing individuals, communities and a sustainable future."</p>
          </div>
          <p className="text-gray-700 font-sans leading-relaxed mb-6">This vision is not merely an aspiration. It is a call to action — for scholars, educators, volunteers, communities, and individuals who believe that wisdom and service can shape a better world.</p>
          <p className="text-gray-700 font-sans leading-relaxed mb-8">ASF seeks to be a bridge — between ancient wisdom and contemporary challenges, between individual transformation and collective welfare, between India's civilisational heritage and the aspirations of a changing world.</p>
        </div>
      </section>
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { title: '18 Countries', desc: 'Aspired reach of the Bhagavadgita Vishwa Mahotsav — a truly global vision.' },
              { title: '5 Elements', desc: 'The Pancha Mahabhuta framework guiding ASF\'s social and environmental initiatives.' },
              { title: 'One Message', desc: 'Sarvahith — the welfare of all creation, every being, every community.' },
            ].map((s) => (
              <div key={s.title} className="p-6">
                <p className="font-serif text-4xl text-gold-antique font-semibold mb-2">{s.title}</p>
                <p className="text-cream-300/70 font-sans text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoldDivider />
      <QuoteBlock quote="18 Countries. 18 Chapters. A Shared Journey of Wisdom." />
      <section className="py-12 bg-cream-50 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/about/mission" className="btn-primary">Read Our Mission <ArrowRight size={14} /></Link>
          <Link to="/campaigns/vishwa-mahotsav" className="btn-ghost">Explore Vishwa Mahotsav <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  )
}
