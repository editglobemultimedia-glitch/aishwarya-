import { Link } from 'react-router-dom'
import { Mail, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  'About Us': [
    { label: 'Our Philosophy', href: '/about/philosophy' },
    { label: 'Pancha Mahabhuta', href: '/about/pancha-mahabhuta' },
    { label: 'Bhagavadgītā', href: '/about/bhagavadgita' },
    { label: 'Our Vision', href: '/about/vision' },
    { label: 'Our Mission', href: '/about/mission' },
  ],
  'Campaigns': [
    { label: 'Vishwa Mahotsav', href: '/campaigns/vishwa-mahotsav' },
    { label: 'Research Centre', href: '/campaigns/research-centre' },
    { label: 'Seva', href: '/campaigns/seva' },
    { label: 'Education & Youth', href: '/campaigns/education-youth' },
    { label: 'Environment', href: '/campaigns/environment' },
  ],
  'Projects': [
    { label: 'Vishwa Mahotsav', href: '/projects/vishwa-mahotsav' },
    { label: 'Research Centre', href: '/projects/research-centre' },
    { label: 'Organic Farming', href: '/projects/organic-farming' },
    { label: 'Healthy Living Carnival', href: '/projects/healthy-living-carnival' },
  ],
  'Connect': [
    { label: 'Our Team', href: '/team' },
    { label: 'ASF Club', href: '/asf-club' },
    { label: 'Our Partners', href: '/partners' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Media', href: '/media' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-cream-100">
      {/* CTA Banner */}
      <div className="border-b border-navy-light bg-maroon-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-serif text-2xl text-cream-50 font-medium">
              "When we understand that we are part of creation,
            </p>
            <p className="font-serif text-2xl text-gold-champagne font-medium italic">
              Seva becomes our responsibility."
            </p>
          </div>
          <Link to="/support-us" className="flex-shrink-0 btn-primary bg-gold-antique hover:bg-gold-dark text-navy font-semibold">
            Support Our Mission <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src="/images/asf-logo.png" alt="ASF Logo" className="h-14 w-auto" />
              <div>
                <div className="font-serif text-cream-50 font-semibold text-base leading-tight">
                  Aishwarya
                </div>
                <div className="font-serif text-gold-champagne text-sm leading-tight">
                  Sarvahith Foundation
                </div>
              </div>
            </Link>
            <p className="text-cream-300/80 text-sm font-sans leading-relaxed mb-4">
              Rooted in Dharma. Dedicated to Seva. Committed to Society.
            </p>
            <p className="text-cream-300/60 text-xs font-sans leading-relaxed mb-6">
              Aishwarya Sarvahith Foundation (ASF) seeks to honour the relationship
              between humanity and creation through Dharma, Jnana and Seva.
            </p>
            {/* Contact details placeholder */}
            <div className="space-y-2 text-xs font-sans text-cream-300/60">
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-gold-antique flex-shrink-0" />
                <span>contact@aishwaryasarvahith.org</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-gold-antique flex-shrink-0" />
                <span>India — Address to be updated</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-serif text-gold-antique text-sm font-semibold uppercase tracking-widest mb-4">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-cream-300/70 hover:text-gold-champagne text-xs font-sans transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-300/50 font-sans">
          <p>© {new Date().getFullYear()} Aishwarya Sarvahith Foundation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-gold-champagne transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gold-antique/40">|</span>
            <Link to="/terms" className="hover:text-gold-champagne transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
