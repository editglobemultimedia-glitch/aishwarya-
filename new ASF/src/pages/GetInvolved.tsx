import PageBanner from '../components/ui/PageBanner'
import SectionHeader from '../components/ui/SectionHeader'
import GoldDivider from '../components/ui/GoldDivider'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Heart, Star, Share2 } from 'lucide-react'

export default function GetInvolved() {
  const ways = [
    { icon: <BookOpen size={32} />, title: 'Know', subtitle: 'Learn & Understand', desc: 'Engage with the Bhagavadgita, explore ASF\'s knowledge programmes, attend events and deepen your understanding of Dharma, Seva and the Pancha Mahabhuta framework.', cta: 'Explore Knowledge', href: '/about/bhagavadgita' },
    { icon: <Heart size={32} />, title: 'Serve', subtitle: 'Volunteer & Seva', desc: 'Join ASF\'s Seva initiatives — community service, educational programmes, environmental projects and humanitarian support. Translate your values into meaningful action.', cta: 'Seva Opportunities', href: '/campaigns/seva' },
    { icon: <Star size={32} />, title: 'Support', subtitle: 'Donate & Fund', desc: 'Support ASF\'s campaigns and projects financially. Help us carry the wisdom of the Bhagavadgita to more people, support Seva initiatives and build lasting knowledge resources.', cta: 'Support Us', href: '/support-us' },
    { icon: <Share2 size={32} />, title: 'Share', subtitle: 'Spread the Word', desc: 'Share ASF\'s vision, campaigns and initiatives with your network. Help us reach scholars, students, educators, volunteers and communities who care about Dharma and Seva.', cta: 'Contact Us', href: '/contact' },
  ]
  return (
    <>
      <PageBanner eyebrow="Get Involved" title="Be Part of the Journey" subtitle="Know. Serve. Support. Share. — Four ways to contribute to a world rooted in Dharma, Jnana and Seva." breadcrumbs={[{ label: 'Get Involved' }]} image="/images/bh1.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Four Ways to Contribute" title="How You Can Be Part of ASF" subtitle="The vision of Aishwarya Sarvahith Foundation calls for the participation of scholars, educators, volunteers, community leaders and responsible partners." />
          <div className="grid sm:grid-cols-2 gap-6">
            {ways.map(w => (
              <div key={w.title} className="card-premium p-8 flex gap-6 group hover:border-gold-antique/50 transition-all">
                <div className="w-16 h-16 rounded-full bg-maroon/8 flex items-center justify-center flex-shrink-0 text-maroon group-hover:bg-maroon/15 transition-colors">{w.icon}</div>
                <div className="flex-1">
                  <h3 className="font-serif text-maroon text-2xl font-semibold mb-0.5">{w.title}</h3>
                  <p className="text-gold-antique text-xs font-sans italic mb-3">{w.subtitle}</p>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4">{w.desc}</p>
                  <Link to={w.href} className="inline-flex items-center gap-1 text-maroon text-sm font-medium hover:text-maroon-dark transition-colors">{w.cta} <ArrowRight size={14} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoldDivider />
      <section className="py-16 bg-maroon-dark text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-serif text-cream-50 text-2xl font-medium mb-3">Join us in carrying the wisdom of the Bhagavadgita across borders</p>
          <p className="text-cream-300/70 font-sans text-sm mb-8">nurturing the values of Sanatana Dharma and building a future grounded in knowledge, compassion and collective wellbeing.</p>
          <Link to="/contact" className="btn-primary bg-gold-antique hover:bg-gold-dark text-navy font-semibold">Get in Touch <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  )
}
