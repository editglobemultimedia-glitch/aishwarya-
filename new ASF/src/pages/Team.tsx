import PageBanner from '../components/ui/PageBanner';
import GoldDivider from '../components/ui/GoldDivider';
import TeamSection from '../components/team/TeamSection';
import { Sparkles, HeartHandshake, BookOpen, Compass } from 'lucide-react';

export default function Team() {
  return (
    <>
      <PageBanner
        eyebrow="Our Team"
        title="The People & Leadership Behind ASF"
        subtitle="Dedicated leaders, creative visionaries, and seasoned entrepreneurs united by a shared commitment to Dharma, Jnana, and Seva."
        breadcrumbs={[{ label: 'Our Team' }]}
      />

      {/* Main Team Profiles Section */}
      <section className="py-16 md:py-24 bg-cream-100 mandala-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeamSection showTitle={true} />
        </div>
      </section>

      <GoldDivider />

      {/* Guiding Principles of Our Team */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow">Guiding Values</span>
            <h2 className="section-heading mt-2">United in Service & Vision</h2>
            <p className="mt-4 text-gray-700 font-sans text-base leading-relaxed">
              Every team member brings their individual discipline and industry expertise into harmony with timeless spiritual principles, guiding both grassroots seva and global cultural initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-cream-300 shadow-sm text-center space-y-3 hover:border-gold-antique/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-cream-100 flex items-center justify-center text-maroon border border-gold-antique/30">
                <BookOpen size={26} />
              </div>
              <h3 className="font-serif text-xl font-bold text-maroon">Rooted in Dharma</h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                Anchored in universal ethical responsibility, spiritual integrity, and authentic reverence for timeless Vedic wisdom.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-cream-300 shadow-sm text-center space-y-3 hover:border-gold-antique/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-cream-100 flex items-center justify-center text-maroon border border-gold-antique/30">
                <HeartHandshake size={26} />
              </div>
              <h3 className="font-serif text-xl font-bold text-maroon">Dedicated to Seva</h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                Channeling professional accomplishments into selfless community empowerment, healthcare support, education, and cultural preservation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-cream-300 shadow-sm text-center space-y-3 hover:border-gold-antique/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-cream-100 flex items-center justify-center text-maroon border border-gold-antique/30">
                <Compass size={26} />
              </div>
              <h3 className="font-serif text-xl font-bold text-maroon">Committed to Society</h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                Executing scalable cultural platforms like the Bhagavadgita Vishwa Mahotsav 2027 that unite communities across nations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mahotsav 2027 Leadership Banner */}
      <section className="py-16 bg-gradient-to-r from-maroon-dark via-maroon to-navy-dark text-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-mandala-pattern opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 bg-gold-antique/20 text-gold-champagne px-4 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wider uppercase border border-gold-champagne/30">
            <Sparkles size={14} />
            <span>Flagship Global Gathering</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Bhagavadgita Vishwa Mahotsav 2027
          </h2>
          <p className="font-sans text-base md:text-lg text-cream-100/90 max-w-3xl mx-auto leading-relaxed">
            Our leadership team unites media directors, event strategists, communications experts, and industrial leaders to bring the world's most revered scripture to global audiences through a historic multi-day celebration.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <a href="/campaigns/vishwa-mahotsav" className="btn-primary bg-gold-antique hover:bg-gold-dark text-white font-medium border border-gold-light/40">
              Explore Mahotsav 2027
            </a>
            <a href="/get-involved" className="btn-outline border-cream-100 text-cream-50 hover:bg-white hover:text-maroon">
              Get Involved as a Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* Join Our Mission CTA */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-maroon font-semibold mb-3">
            Join Our Mission
          </h2>
          <p className="text-gray-700 font-sans leading-relaxed mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Aishwarya Sarvahith Foundation welcomes scholars, educators, volunteers, community leaders, and corporate partners who share our commitment to Dharma, Jnana, and Seva.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/get-involved" className="btn-primary">
              Volunteer With Us
            </a>
            <a href="/contact" className="btn-outline">
              Contact Leadership
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
