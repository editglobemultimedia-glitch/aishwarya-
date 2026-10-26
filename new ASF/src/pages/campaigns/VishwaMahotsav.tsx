import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import GoldDivider from '../../components/ui/GoldDivider'
import QuoteBlock from '../../components/ui/QuoteBlock'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CampaignVishwaMahotsav() {
  const activities = ['Gita recitation', 'Knowledge sessions', 'Scholarly conferences', 'Cultural programmes', 'Multilingual learning', 'Youth engagement', 'Art and literature', 'Global dialogue']
  const participants = ['Scholars', 'Students', 'Educators', 'Artists', 'Cultural institutions', 'Spiritual practitioners', 'Youth', 'Communities']
  return (
    <>
      <PageBanner eyebrow="Our Campaigns" title="From Bharata to the World" subtitle="18 Countries. 18 Chapters. 18 Languages. One Universal Message." breadcrumbs={[{ label: 'Our Campaigns', href: '/campaigns' }, { label: 'Vishwa Mahotsav' }]} image="/images/bh3.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="eyebrow text-gold-antique mb-3">Our Vision</p>
              <h2 className="font-serif text-3xl text-maroon font-semibold mb-5">A Global Platform for the Wisdom of the Gita</h2>
              <p className="text-gray-700 font-sans leading-relaxed mb-4">ASF envisions the Bhagavadgita Vishwa Mahotsav as a global platform for sharing the wisdom of the Gita across geographical, linguistic and cultural boundaries.</p>
              <p className="text-gray-700 font-sans leading-relaxed mb-4">Rooted in the sacred dialogue between Lord Sri Krishna and Arjuna, the Mahotsav seeks to create a shared experience of reflection, devotion and learning, bringing together participants from different countries and linguistic backgrounds.</p>
              <p className="text-gray-700 font-sans leading-relaxed mb-6">By connecting the Bhagavadgita's 18 chapters with participation across at least 18 countries and the richness of different languages, the initiative aims to make this timeless wisdom more accessible to a new generation.</p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-amber-800 font-sans text-xs">The 18-country ambition is presented as ASF's vision. Participating countries will be formally announced as they are confirmed.</p>
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden mb-6 shadow-lg">
                <img src="/images/18-countries-map.png" alt="18 Countries Map" className="w-full h-64 object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80' }} />
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[['18', 'Countries'], ['18', 'Chapters'], ['18', 'Languages']].map(([num, label]) => (
                  <div key={label} className="bg-maroon text-cream-50 rounded-lg p-4">
                    <p className="font-serif text-3xl font-bold text-gold-champagne">{num}</p>
                    <p className="text-xs font-sans mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Mahotsav" title="Who Comes Together & What Happens" />
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-serif text-xl text-maroon font-semibold mb-4">Participants</h3>
              <div className="grid grid-cols-2 gap-3">{participants.map(p => <div key={p} className="card-premium px-4 py-3 text-center text-sm font-sans text-gray-700">{p}</div>)}</div>
            </div>
            <div>
              <h3 className="font-serif text-xl text-maroon font-semibold mb-4">Activities</h3>
              <div className="space-y-2">{activities.map(a => <div key={a} className="flex items-center gap-2"><span className="text-gold-antique">◆</span><span className="text-gray-700 font-sans text-sm">{a}</span></div>)}</div>
            </div>
          </div>
        </div>
      </section>
      <GoldDivider />
      <QuoteBlock quote="One Gita. Many languages. One human family." />
      <section className="py-12 bg-cream-50 text-center">
        <Link to="/projects/vishwa-mahotsav" className="btn-primary">View the Project <ArrowRight size={14} /></Link>
      </section>
    </>
  )
}
