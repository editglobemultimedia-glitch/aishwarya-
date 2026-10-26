import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import CampaignCard from '../../components/ui/CampaignCard'

const campaigns = [
  { image: '/images/bh3.png', eyebrow: 'Global Initiative', title: 'Bhagavadgita Vishwa Mahotsav', description: '18 Countries. 18 Chapters. 18 Languages. A global platform for sharing the wisdom of the Gita across boundaries.', href: '/campaigns/vishwa-mahotsav', tag: 'Campaign' },
  { image: '/images/bh4.png', eyebrow: 'Knowledge', title: 'Vishwa Gita Research Centre', description: 'A proposed centre for research, translation, documentation, education and dialogue on the Bhagavadgita.', href: '/campaigns/research-centre', tag: 'Campaign' },
  { image: '/images/p3.jpg', eyebrow: 'Compassion', title: 'Seva — Service to All', description: 'Expressing gratitude through selfless service — education, healthcare, humanitarian support and community development.', href: '/campaigns/seva', tag: 'Campaign' },
  { image: '/images/p4.jpg', eyebrow: 'Youth & Education', title: 'Education & Youth', description: 'From information to transformation — developing character, wisdom and responsible leadership in young people.', href: '/campaigns/education-youth', tag: 'Campaign' },
  { image: '/images/p5.jpg', eyebrow: 'Environment', title: 'Environment — Honouring Prthivi', description: 'Earth is not our property. It is our trust. Protecting the natural world through the lens of the Pancha Mahabhuta.', href: '/campaigns/environment', tag: 'Campaign' },
]

export default function CampaignsLanding() {
  return (
    <>
      <PageBanner eyebrow="Our Campaigns" title="Wisdom in Action" subtitle="Each campaign is an expression of Dharma, Jnana and Seva — translating ancient wisdom into meaningful service for society and the world." breadcrumbs={[{ label: 'Our Campaigns' }]} image="/images/bh1.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Five Campaigns" title="Our Areas of Focus" subtitle="Rooted in the Pancha Mahabhuta framework, our campaigns address knowledge, movement, transformation, compassion and the earth." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map(c => <CampaignCard key={c.href} {...c} />)}
          </div>
        </div>
      </section>
    </>
  )
}
