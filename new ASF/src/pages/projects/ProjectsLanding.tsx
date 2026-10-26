import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'
import CampaignCard from '../../components/ui/CampaignCard'

const projects = [
  { image: '/images/bh3.png', eyebrow: 'Global Initiative', title: 'Bhagavadgita Vishwa Mahotsav', description: 'An international initiative for collective recitation, multilingual participation and cultural connection across at least 18 countries.', href: '/projects/vishwa-mahotsav', tag: 'Project' },
  { image: '/images/bh4.png', eyebrow: 'Knowledge', title: 'Vishwa Gita Research Centre', description: 'A proposed knowledge centre for the deep study, research, translation and dissemination of Bhagavadgita wisdom.', href: '/projects/research-centre', tag: 'Project' },
  { image: '/images/p6.jpg', eyebrow: 'Sustainability', title: 'Organic Farming', description: 'Sustainable, dharmic agriculture reconnecting communities to the earth, healthy food and responsible land stewardship.', href: '/projects/organic-farming', tag: 'Project' },
  { image: '/images/p8.jpg', eyebrow: 'Wellbeing', title: 'Healthy Living Carnival India', description: 'A community initiative promoting holistic wellbeing, healthy lifestyles and awareness of natural living across India.', href: '/projects/healthy-living-carnival', tag: 'Project' },
]

export default function ProjectsLanding() {
  return (
    <>
      <PageBanner eyebrow="Our Projects" title="Initiatives in Motion" subtitle="From global knowledge initiatives to grassroots community programmes — ASF's projects are expressions of dharmic responsibility in action." breadcrumbs={[{ label: 'Our Projects' }]} image="/images/bh1.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Four Projects" title="Where Wisdom Meets Action" subtitle="Each project is grounded in ASF's guiding principles of Dharma, Jnana and Seva." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {projects.map(p => <CampaignCard key={p.href} {...p} />)}
          </div>
        </div>
      </section>
    </>
  )
}
