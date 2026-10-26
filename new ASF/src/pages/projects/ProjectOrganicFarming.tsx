import PageBanner from '../../components/ui/PageBanner'

import GoldDivider from '../../components/ui/GoldDivider'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProjectOrganicFarming() {
  return (
    <>
      <PageBanner eyebrow="Our Projects" title="Organic Farming — Rooted in Prthivi" subtitle="Sustainable, dharmic agriculture reconnecting communities to the earth, healthy food and responsible land stewardship." breadcrumbs={[{ label: 'Our Projects', href: '/projects' }, { label: 'Organic Farming' }]} image="/images/p6.jpg" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow text-gold-antique mb-3">Project Vision</p>
              <h2 className="font-serif text-3xl text-maroon font-semibold mb-5">Honouring the Earth That Sustains Us</h2>
              <p className="text-gray-700 font-sans leading-relaxed mb-4">Inspired by the Pancha Mahabhuta principle of Prthivi — Earth — ASF's organic farming initiative seeks to reconnect communities with sustainable, natural and dharmic approaches to agriculture.</p>
              <p className="text-gray-700 font-sans leading-relaxed mb-4">The initiative recognises that food, land and community wellbeing are deeply connected. When we farm responsibly, we honour the earth and protect the health of present and future generations.</p>
              <p className="text-gray-700 font-sans leading-relaxed mb-6">Details of this project will be updated as the initiative develops. The project is part of ASF's wider environmental and community responsibility vision.</p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-amber-800 font-sans text-xs">Project details and implementation status to be confirmed by the Foundation.</p>
              </div>
            </div>
            <div>
              <img src="/images/p6.jpg" alt="Organic Farming" className="rounded-xl shadow-lg w-full h-80 object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&q=80' }} />
            </div>
          </div>
        </div>
      </section>
      <GoldDivider />
      <section className="py-12 bg-cream-200 text-center">
        <Link to="/campaigns/environment" className="btn-primary">Explore Our Environment Campaign <ArrowRight size={14} /></Link>
      </section>
    </>
  )
}
