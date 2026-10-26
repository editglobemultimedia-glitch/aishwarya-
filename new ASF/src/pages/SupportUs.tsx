import PageBanner from '../components/ui/PageBanner'
import SectionHeader from '../components/ui/SectionHeader'
import GoldDivider from '../components/ui/GoldDivider'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, BookOpen, Users, Share2 } from 'lucide-react'

export default function SupportUs() {
  const ways = [
    { icon: <Heart size={28} />, title: 'Financial Support', desc: 'Support ASF\'s campaigns, knowledge initiatives and Seva projects. Donation details and official payment methods will be provided once confirmed by the Foundation.', note: true },
    { icon: <BookOpen size={28} />, title: 'Knowledge & Research', desc: 'Support the Vishwa Gita Research Centre initiative through academic collaboration, scholarship, translation or documentation work.' },
    { icon: <Users size={28} />, title: 'Volunteering', desc: 'Join ASF\'s Seva initiatives and community programmes. Volunteer your time, skills and energy for meaningful service.' },
    { icon: <Share2 size={28} />, title: 'Partner With Us', desc: 'Organisations and institutions that share ASF\'s values are welcome to explore partnership and collaboration opportunities.' },
  ]
  return (
    <>
      <PageBanner eyebrow="Support Us" title="Help Carry the Wisdom Forward" subtitle="Every act of support — financial, intellectual or voluntary — brings the vision of Sarvahith closer to reality." breadcrumbs={[{ label: 'Support Us' }]} image="/images/bh1.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Ways to Support" title="How You Can Contribute" subtitle="There are many ways to support ASF — whether through financial contribution, volunteering, knowledge sharing or partnership." />
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {ways.map(w => (
              <div key={w.title} className="card-premium p-8 flex gap-5">
                <div className="w-14 h-14 rounded-full bg-maroon/8 flex items-center justify-center flex-shrink-0 text-maroon">{w.icon}</div>
                <div>
                  <h3 className="font-serif text-maroon text-xl font-semibold mb-2">{w.title}</h3>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">{w.desc}</p>
                  {w.note && <div className="mt-3 bg-amber-50 border border-amber-200 rounded p-3"><p className="text-amber-700 font-sans text-xs">Official donation details and payment gateway will be added once confirmed by the Foundation. No bank details or payment links are displayed until verified.</p></div>}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-maroon-dark rounded-2xl p-10 text-center">
            <p className="font-serif text-cream-50 text-2xl font-medium mb-3">Donate to Aishwarya Sarvahith Foundation</p>
            <p className="text-cream-300/70 font-sans text-sm mb-6 max-w-xl mx-auto">Official donation information, registered details and payment options will be provided here once confirmed by the Foundation. Please contact us directly to discuss how you can support our mission.</p>
            <div className="bg-amber-900/30 border border-amber-600/30 rounded-lg p-4 mb-8 max-w-lg mx-auto">
              <p className="text-amber-300 font-sans text-xs">Donation portal pending setup. Do not send funds without confirmed Foundation banking details.</p>
            </div>
            <Link to="/contact" className="btn-primary bg-gold-antique hover:bg-gold-dark text-navy font-semibold">Contact Us to Donate <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
      <GoldDivider />
      <section className="py-12 bg-cream-200 text-center">
        <p className="font-serif text-2xl text-maroon font-medium mb-4">"From individual transformation to collective progress, from timeless wisdom to meaningful action — our journey is dedicated to the welfare of all."</p>
        <Link to="/get-involved" className="btn-ghost">Get Involved <ArrowRight size={14} /></Link>
      </section>
    </>
  )
}
