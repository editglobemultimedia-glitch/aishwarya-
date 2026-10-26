import PageBanner from '../../components/ui/PageBanner'

import GoldDivider from '../../components/ui/GoldDivider'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Bhagavadgita() {
  const questions = [
    'What is my responsibility?',
    'How should I act?',
    'How do I respond to difficulty?',
    'How can action become selfless service?',
    'How can knowledge transform the individual?',
    'How can individual responsibility contribute to collective welfare?',
  ]
  return (
    <>
      <PageBanner eyebrow="About Us" title="The Wisdom That Guides Our Journey" subtitle="The Bhagavadgita is at the heart of ASF's knowledge and cultural vision — a source of timeless guidance for every age." breadcrumbs={[{ label: 'About Us', href: '/about' }, { label: 'Bhagavadgita' }]} image="/images/bh4.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow text-gold-antique mb-3">Timeless Questions</p>
              <h2 className="font-serif text-3xl text-maroon font-semibold mb-5">Questions That Remain Relevant Across Every Age</h2>
              <p className="text-gray-700 font-sans leading-relaxed mb-6">The Bhagavadgita is a sacred dialogue between Lord Sri Krishna and Arjuna on the battlefield of Kurukshetra. Yet its questions transcend time, culture and geography.</p>
              <div className="space-y-3">
                {questions.map((q) => (
                  <div key={q} className="flex items-start gap-3 card-premium p-4">
                    <span className="text-gold-antique mt-0.5 flex-shrink-0 text-lg">◆</span>
                    <p className="text-gray-700 font-sans text-sm leading-relaxed font-medium">{q}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden mb-8 shadow-xl">
                <img src="/images/bh1.png" alt="Bhagavadgita" className="w-full h-72 object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1592519765050-ef38ee0c0b7d?w=700&q=80' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </div>
              <p className="eyebrow text-gold-antique mb-3">ASF's Commitment</p>
              <h3 className="font-serif text-2xl text-maroon font-semibold mb-4">Study, Understanding and Wider Awareness</h3>
              <p className="text-gray-700 font-sans text-sm leading-relaxed mb-3">ASF seeks to encourage the study, understanding, translation, research and wider awareness of the Bhagavadgita. We believe its wisdom remains deeply relevant to contemporary challenges of ethics, leadership, service and social harmony.</p>
              <p className="text-gray-700 font-sans text-sm leading-relaxed">The Gita's seventh chapter explicitly places earth, water, fire, air and ether within the Lord's eightfold material energy — providing a strong textual bridge for ASF's Pancha Mahabhuta theme.</p>
            </div>
          </div>
        </div>
      </section>
      <GoldDivider />
      <section className="py-16 bg-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl text-maroon font-semibold mb-4">From the Gita to the World</h3>
          <p className="text-gray-700 font-sans leading-relaxed mb-8">ASF's Bhagavadgita Vishwa Mahotsav aspires to carry the timeless message of the Gita to at least 18 countries — bringing together scholars, students, artists and communities in a shared journey of wisdom.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/campaigns/vishwa-mahotsav" className="btn-primary">Explore Vishwa Mahotsav <ArrowRight size={14} /></Link>
            <Link to="/campaigns/research-centre" className="btn-ghost">Research Centre <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
