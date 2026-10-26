import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import GoldDivider from '../../components/ui/GoldDivider'
import QuoteBlock from '../../components/ui/QuoteBlock'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CampaignEnvironment() {
  const vision = ['Protect the Earth', 'Respect Water', 'Nurture Life', 'Use Energy Responsibly', 'Preserve the Living Environment']
  const initiatives = ['Tree plantation', 'Water conservation', 'Sustainable villages', 'Environmental education', 'Waste awareness', 'Biodiversity awareness', 'Community gardens', 'Heritage ecology']
  return (
    <>
      <PageBanner eyebrow="Our Campaigns" title="Earth Is Not Our Property. It Is Our Trust." subtitle="The Pancha Mahabhuta framework gives ASF a natural foundation for environmental responsibility — respecting and protecting the natural world." breadcrumbs={[{ label: 'Our Campaigns', href: '/campaigns' }, { label: 'Environment' }]} image="/images/p5.jpg" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-gold-antique mb-4">Our Environmental Vision</p>
          <h2 className="font-serif text-3xl text-maroon font-semibold mb-5">Earth, Water, Fire, Air and Space Are Not Merely Resources</h2>
          <p className="text-gray-700 font-sans leading-relaxed mb-4">They are part of the larger order in which life exists. The Pancha Mahabhuta reminds us that we are not owners of nature — we are its caretakers, entrusted with its protection for present and future generations.</p>
        </div>
      </section>
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Environmental Vision" title="Five Environmental Commitments" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
            {vision.map((v, i) => (
              <div key={v} className="element-card bg-green-900 text-cream-50">
                <span className="text-4xl font-serif text-white/10 font-bold block mb-2">{String(i+1).padStart(2,'0')}</span>
                <p className="font-serif text-lg font-semibold">{v}</p>
              </div>
            ))}
          </div>
          <SectionHeader eyebrow="Potential Initiatives" title="Eight Areas of Environmental Action" subtitle="Envisioned initiatives to nurture and protect the natural world in communities across India." />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {initiatives.map(initiative => (
              <div key={initiative} className="card-premium p-4 text-center">
                <span className="text-gold-antique text-lg mb-2 block">◆</span>
                <p className="font-sans text-gray-700 text-sm">{initiative}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoldDivider />
      <QuoteBlock quote="What sustains us deserves our protection." />
      <section className="py-12 bg-cream-50 text-center">
        <Link to="/about/pancha-mahabhuta#prthivi" className="btn-primary">Explore Prthivi — Earth <ArrowRight size={14} /></Link>
      </section>
    </>
  )
}
