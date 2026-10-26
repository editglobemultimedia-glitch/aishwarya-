import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import GoldDivider from '../../components/ui/GoldDivider'
import QuoteBlock from '../../components/ui/QuoteBlock'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Star, Heart, Lightbulb, Users } from 'lucide-react'

export default function ASFClub() {
  const pillars = [
    { icon: <BookOpen size={28} />, title: 'Learn', desc: 'Study wisdom traditions, the Bhagavadgita and the principles of Sanatana Dharma in an accessible, engaging way.' },
    { icon: <Star size={28} />, title: 'Lead', desc: 'Develop responsible leadership grounded in dharmic values, ethical decision-making and service to society.' },
    { icon: <Heart size={28} />, title: 'Serve', desc: 'Participate in community initiatives and Seva projects — translating values into meaningful action.' },
    { icon: <Lightbulb size={28} />, title: 'Create', desc: 'Develop innovative solutions for social challenges — using wisdom as the foundation for creative thinking.' },
    { icon: <Users size={28} />, title: 'Connect', desc: 'Build a network of young changemakers united by shared values, purpose and commitment to Sarvahith.' },
  ]
  const themes = ['Dharma', 'Gita', 'Leadership', 'Seva', 'Environment', 'Culture']
  return (
    <>
      <PageBanner eyebrow="ASF Club" title="The Next Generation of Dharmic Leaders" subtitle="Learn with Purpose. Lead with Values. Serve with Heart." breadcrumbs={[{ label: 'ASF Club' }]} image="/images/p4.jpg" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-gold-antique mb-4">A Youth Movement</p>
          <h2 className="font-serif text-3xl text-maroon font-semibold mb-5">Inspired by Dharma. Built for Tomorrow.</h2>
          <p className="text-gray-700 font-sans leading-relaxed mb-4">ASF Club is envisioned as a youth movement inspired by the timeless principles of Dharma, the Bhagavadgita, leadership, Seva, environmental responsibility and cultural heritage.</p>
          <p className="text-gray-700 font-sans leading-relaxed mb-8">It is a space for young people who want to learn with purpose, lead with integrity and serve with genuine care for society and the world.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {themes.map(t => <span key={t} className="bg-maroon/8 text-maroon text-sm font-sans font-medium px-4 py-2 rounded-full border border-maroon/20">{t}</span>)}
          </div>
        </div>
      </section>
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Five Pillars" title="What ASF Club Members Do" subtitle="Five dimensions of a meaningful youth journey — from knowledge to action." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="card-premium p-6 text-center group hover:border-gold-antique/50 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-maroon/8 flex items-center justify-center mx-auto mb-4 text-maroon group-hover:bg-maroon/15 transition-colors">{p.icon}</div>
                <h3 className="font-serif text-maroon text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-600 font-sans text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GoldDivider />
      <QuoteBlock quote="Learn with Purpose. Lead with Values. Serve with Heart." />
      <section className="py-12 bg-cream-50 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/asf-club/stories" className="btn-primary">Read Stories <ArrowRight size={14} /></Link>
          <Link to="/get-involved" className="btn-ghost">Join the Movement <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  )
}
