import PageBanner from '../components/ui/PageBanner'
import SectionHeader from '../components/ui/SectionHeader'
import GoldDivider from '../components/ui/GoldDivider'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const partnerCategories = [
  {
    category: 'Concept & IP',
    partners: [{ name: 'Propel Forge', logo: '/images/WEBSITE LOGOS.png', desc: 'Concept and Intellectual Property partner for the Bhagavadgita Vishwa Mahotsav initiative.' }],
  },
  {
    category: 'Project Head',
    partners: [{ name: 'Sree Media Vision Pvt Ltd', logo: '/images/WEBSITE LOGOS.png', desc: 'Project Head for the Bhagavadgita Vishwa Mahotsav.' }],
  },
  {
    category: 'International Partner',
    partners: [{ name: 'Kalabhairav Dhyan Peeth Foundation — UK & Russia', logo: null, desc: 'International partner supporting the global reach of the Bhagavadgita Vishwa Mahotsav.' }],
  },
]

export default function Partners() {
  return (
    <>
      <PageBanner eyebrow="Our Partners" title="Building Together" subtitle="ASF acknowledges the partners, collaborators and supporters who share our vision of a harmonious world rooted in Dharma." breadcrumbs={[{ label: 'Our Partners' }]} image="/images/bh1.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Partners" title="A Growing Network of Purpose" subtitle="We are grateful to all partners and collaborators who support ASF's vision. Partner information will be updated as relationships are formalised." />
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10 text-center max-w-2xl mx-auto">
            <p className="text-amber-800 font-sans text-sm"><strong>Note:</strong> Partner logos and profiles are displayed only with authorisation from the respective organisations. This page will be updated as partnerships are confirmed.</p>
          </div>
          {partnerCategories.map(cat => (
            <div key={cat.category} className="mb-12">
              <h3 className="font-serif text-xl text-maroon font-semibold mb-5 flex items-center gap-3">
                <span className="text-gold-antique">◆</span> {cat.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.partners.map(p => (
                  <div key={p.name} className="card-premium p-6 text-center">
                    <div className="h-16 flex items-center justify-center mb-4">
                      {p.logo ? (
                        <img src={p.logo} alt={p.name} className="h-12 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display='none' }} />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-cream-300 flex items-center justify-center">
                          <span className="text-gold-antique/50 font-serif text-xl">{p.name[0]}</span>
                        </div>
                      )}
                    </div>
                    <h4 className="font-serif text-maroon font-semibold mb-2">{p.name}</h4>
                    <p className="text-gray-600 font-sans text-xs leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <GoldDivider />
      <section className="py-16 bg-cream-200 text-center">
        <h3 className="font-serif text-2xl text-maroon font-semibold mb-4">Partner With Us</h3>
        <p className="text-gray-700 font-sans text-sm leading-relaxed mb-6 max-w-xl mx-auto">ASF welcomes partnerships with organisations, institutions and individuals who share our commitment to Dharma, knowledge and service.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/get-involved" className="btn-primary">Get Involved <ArrowRight size={14} /></Link>
          <Link to="/contact" className="btn-ghost">Contact Us <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  )
}
