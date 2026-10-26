import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navItems } from '../../data/navigation'

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    onClose()
  }, [location.pathname])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div className="fixed right-0 top-0 bottom-0 h-full w-full max-w-xs bg-cream-50 shadow-2xl flex flex-col z-10 animate-fadeInUp">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-cream-300 bg-white/70">
          <Link to="/" onClick={onClose} className="flex items-center gap-3">
            <img src="/images/asf-logo.png" alt="ASF Logo" className="h-10 w-auto object-contain" />
            <div>
              <div className="font-serif text-navy font-semibold text-sm sm:text-base leading-tight">
                Aishwarya Sarvahith Foundation
              </div>
              <div className="font-sans text-gold-antique text-[8.5px] sm:text-[9.5px] tracking-[0.14em] uppercase font-medium mt-0.5">
                ROOTED IN DHARMA. DEDICATED TO SEVA.
              </div>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-maroon rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-maroon/20"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-5 py-4 divide-y divide-cream-200">
          <div className="py-2 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-sm font-sans transition-colors ${
                    isActive
                      ? 'bg-maroon/10 text-maroon font-semibold border-l-4 border-maroon'
                      : 'text-gray-800 hover:text-maroon hover:bg-cream-100 font-medium'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Quick contact / info in mobile menu */}
          <div className="pt-4 text-xs text-gray-600 space-y-2">
            <p className="font-sans italic text-gold-antique font-medium">
              Rooted in Dharma. Dedicated to Seva. Committed to Society.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <Link to="/contact" onClick={onClose} className="hover:text-maroon transition-colors">
                Contact
              </Link>
              <span className="text-gold-antique/40">•</span>
              <Link to="/media/newsletter" onClick={onClose} className="hover:text-maroon transition-colors">
                Newsletter
              </Link>
            </div>
          </div>
        </nav>

        {/* Bottom CTA Button */}
        <div className="p-5 border-t border-cream-200 bg-white/60">
          <Link
            to="/support-us"
            onClick={onClose}
            className="w-full group inline-flex items-center justify-between bg-maroon hover:bg-maroon-dark text-white rounded-full pl-5 pr-2 py-2.5 text-sm font-sans font-medium shadow-sm transition-all duration-200"
          >
            <span>Support Us</span>
            <span className="w-7 h-7 rounded-full bg-white text-maroon flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight size={14} className="stroke-[2.5]" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-50/98 backdrop-blur-md shadow-sm border-b border-cream-300'
            : 'bg-cream-50/95 backdrop-blur-sm border-b border-cream-200'
        }`}
      >
        {/* Main Header Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Foundation Logo & Wordmark */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0 group py-1 mr-4 xl:mr-8">
              <img
                src="/images/asf-logo.png"
                alt="Aishwarya Sarvahith Foundation Logo"
                className="h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
              <div className="flex flex-col">
                <span className="font-serif text-navy font-semibold text-base sm:text-lg xl:text-[20px] leading-tight tracking-normal whitespace-nowrap">
                  Aishwarya Sarvahith Foundation
                </span>
                <span className="font-sans text-gold-antique text-[8.5px] sm:text-[9.5px] xl:text-[10.5px] tracking-[0.15em] uppercase font-medium mt-0.5 whitespace-nowrap">
                  ROOTED IN DHARMA. DEDICATED TO SEVA.
                </span>
              </div>
            </Link>

            {/* Center/Right: Desktop Single-Row Horizontal Navigation */}
            <nav
              className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `relative py-2 text-[13px] xl:text-[14px] 2xl:text-[15px] font-sans font-medium transition-colors duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-antique rounded ${
                      isActive
                        ? 'text-maroon font-semibold'
                        : 'text-gray-700 hover:text-maroon'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gold-antique after:transition-all after:duration-200 ${
                      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: CTA Button (Inspired by Reference Image 1) + Mobile Menu Toggle */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                to="/support-us"
                className="group hidden sm:inline-flex items-center gap-2.5 bg-maroon hover:bg-maroon-dark text-white rounded-full pl-5 pr-2 py-2 text-xs xl:text-sm font-sans font-medium shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Support Us</span>
                <span className="w-6 h-6 rounded-full bg-white text-maroon flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 shadow-xs">
                  <ArrowRight size={13} className="stroke-[2.5]" />
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-gray-700 hover:text-maroon rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-maroon/20"
                aria-label="Open navigation menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
