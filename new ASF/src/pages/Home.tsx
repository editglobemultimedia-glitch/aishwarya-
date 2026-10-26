import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Flame, Droplets, Wind, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import GoldDivider from '../components/ui/GoldDivider'
import QuoteBlock from '../components/ui/QuoteBlock'
import CampaignCard from '../components/ui/CampaignCard'
import TeamSection from '../components/team/TeamSection'

const heroSlides = [
  {
    image: '/images/hero-slide-1.jpg',
    alt: 'Ancient Wisdom - Sri Krishna and Arjuna on the chariot',
    caption: 'Ancient Wisdom — Sri Krishna and Arjuna on the Chariot',
  },
  {
    image: '/images/hero-slide-2.jpg',
    alt: 'Compassionate Seva - Serving food with gratitude',
    caption: 'Compassionate Seva — Selfless Food Service',
  },
  {
    image: '/images/hero-slide-3.jpg',
    alt: 'Skill in action is Yoga - Serving the welfare of all',
    caption: 'Jnana & Seva — Skill in Action is Yoga',
  },
  {
    image: '/images/hero-slide-4.jpg',
    alt: 'Knowledge & Guidance - Bhagavad Gita wisdom for the next generation',
    caption: 'Education & Youth — Wisdom for Next Generations',
  },
]

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Automatically cycle through background images every 3.5 seconds (within 3 to 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [currentSlide])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <>
      {/* ─── MOBILE VIEW (< lg): Hero Section with Landscape Banner (Fully Visible) ─── */}
      <div className="lg:hidden bg-[#06111C] text-cream-50">
        {/* Full Landscape Aspect-Ratio (16:9) Slider Banner */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-black select-none">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* Subtle gradient vignette at top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* Slide Caption Badge */}
          <div className="absolute top-2.5 left-2.5 right-12 z-20 pointer-events-none">
            <span className="inline-block bg-black/65 backdrop-blur-xs text-gold-champagne text-[10.5px] sm:text-xs font-sans font-medium px-2.5 py-1 rounded-md border border-white/15 truncate max-w-full">
              {heroSlides[currentSlide].caption}
            </span>
          </div>

          {/* Slider Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-maroon text-cream-50 flex items-center justify-center transition-all duration-200 border border-white/20 shadow-lg focus:outline-none cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-maroon text-cream-50 flex items-center justify-center transition-all duration-200 border border-white/20 shadow-lg focus:outline-none cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-3 py-1 rounded-full border border-white/15">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                  idx === currentSlide
                    ? 'w-5 bg-gold-champagne'
                    : 'w-1.5 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Content (Below the landscape banner, 100% readable & uncluttered) */}
        <div className="px-5 sm:px-8 py-7 sm:py-9 text-left">
          <p className="eyebrow text-gold-champagne mb-2 text-xs tracking-[0.22em]">
            AISHWARYA SARVAHITH FOUNDATION
          </p>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 leading-tight mb-3">
            Ancient Wisdom.<br />
            Compassionate Action.<br />
            <span className="text-gold-champagne">A Better World.</span>
          </h1>

          <div className="flex items-center gap-2.5 my-3">
            <div className="w-10 h-0.5 bg-gold-champagne flex-shrink-0" />
            <p className="text-gold-champagne text-[11px] sm:text-xs font-sans font-medium tracking-wider uppercase">
              One Creation. Five Elements. One Shared Responsibility.
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-cream-100 font-sans text-xs sm:text-sm leading-relaxed text-gray-300">
              From Ākāśa, the vastness that gives space to existence, to Pṛthivī, the earth that nourishes
              and sustains life — the Pancha Mahabhuta reminds us of our inseparable relationship with
              the world around us.
            </p>
            <div className="border-l-3 border-gold-antique pl-3 py-1.5 bg-white/5 rounded-r">
              <p className="text-gold-light font-sans text-xs sm:text-sm font-medium leading-relaxed">
                Aishwarya Sarvahith Foundation (ASF) seeks to honour this relationship
                through Dharma, Jnana and Seva.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <Link
              to="/about/vision"
              className="btn-primary bg-gold-antique hover:bg-gold-dark text-navy font-semibold text-xs py-2.5 px-4 justify-center shadow-lg"
            >
              Discover Our Vision <ArrowRight size={14} />
            </Link>
            <Link
              to="/about/pancha-mahabhuta"
              className="btn-outline border-gold-antique text-cream-50 hover:bg-gold-antique hover:text-navy text-xs py-2.5 px-4 justify-center"
            >
              Explore Pancha Mahabhuta
            </Link>
            <Link
              to="/campaigns/seva"
              className="btn-ghost border-cream-100/40 text-cream-100 hover:bg-white/10 text-xs py-2.5 px-4 justify-center"
            >
              Join Our Seva
            </Link>
          </div>
        </div>
      </div>

      {/* ─── DESKTOP VIEW (>= lg): Full-bleed Widescreen Hero ─── */}
      <section className="hidden lg:flex relative min-h-[90vh] items-center overflow-hidden bg-[#06111C] py-16 lg:py-24 text-cream-50">
        {/* Full-bleed Background Slideshow (Spans full width, extends under text) */}
        <div className="absolute inset-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                loading="eager"
                className={`w-full h-full object-cover object-[left_center] md:object-center transition-transform duration-[4000ms] ease-out ${
                  index === currentSlide ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          ))}

          {/* Gradient overlay: Light on the left to keep figures fully visible, smoothly darkening toward the right under the text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/45 via-45% to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Subtle background mandala watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none z-10">
          <div className="w-full h-full rounded-full border-4 border-gold-antique" />
          <div className="absolute inset-8 rounded-full border-2 border-gold-antique" />
          <div className="absolute inset-16 rounded-full border border-gold-antique" />
        </div>

        {/* Content Container: Aligned to the RIGHT so the left side of the image remains unobstructed */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 flex justify-end">
          <div className="w-full max-w-xl lg:max-w-2xl text-left">
            {/* Eyebrow */}
            <p className="eyebrow text-gold-champagne mb-3 tracking-[0.25em] drop-shadow-md">
              AISHWARYA SARVAHITH FOUNDATION
            </p>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-semibold text-cream-50 leading-[1.12] mb-4 drop-shadow-lg">
              Ancient Wisdom.<br />
              Compassionate Action.<br />
              <span className="text-gold-champagne">A Better World.</span>
            </h1>

            {/* Gold line */}
            <div className="flex items-center gap-3 my-4">
              <div className="w-14 h-0.5 bg-gold-champagne flex-shrink-0" />
              <p className="text-gold-champagne text-xs font-sans font-medium tracking-widest uppercase drop-shadow-sm">
                One Creation. Five Elements. One Shared Responsibility.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <p className="text-cream-100 font-sans text-sm sm:text-base leading-relaxed drop-shadow-md">
                From Ākāśa, the vastness that gives space to existence, to Pṛthivī, the earth that nourishes
                and sustains life — the Pancha Mahabhuta reminds us of our inseparable relationship with
                the world around us.
              </p>
              <div className="border-l-4 border-gold-antique pl-4 bg-black/25 backdrop-blur-xs py-2 rounded-r-md">
                <p className="text-gold-light font-sans text-sm font-medium leading-relaxed drop-shadow-sm">
                  Aishwarya Sarvahith Foundation (ASF) seeks to honour this relationship
                  through Dharma, Jnana and Seva.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/about/vision"
                className="btn-primary bg-gold-antique hover:bg-gold-dark text-navy font-semibold text-xs sm:text-sm shadow-xl hover:shadow-gold-antique/20"
              >
                Discover Our Vision <ArrowRight size={15} />
              </Link>
              <Link
                to="/about/pancha-mahabhuta"
                className="btn-outline border-gold-antique text-cream-50 hover:bg-gold-antique hover:text-navy text-xs sm:text-sm backdrop-blur-xs"
              >
                Explore Pancha Mahabhuta
              </Link>
              <Link
                to="/campaigns/seva"
                className="btn-ghost border-cream-100/50 text-cream-100 hover:border-cream-100 hover:bg-white/10 text-xs sm:text-sm backdrop-blur-xs"
              >
                Join Our Seva
              </Link>
            </div>
          </div>
        </div>

        {/* Global Slider Arrows at left and right viewport edges matching reference image */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 sm:w-13 h-11 sm:h-13 rounded-full bg-black/50 hover:bg-maroon text-cream-50 flex items-center justify-center transition-all duration-200 shadow-2xl border border-white/20 hover:border-gold-antique focus:outline-none cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 sm:w-13 h-11 sm:h-13 rounded-full bg-black/50 hover:bg-maroon text-cream-50 flex items-center justify-center transition-all duration-200 shadow-2xl border border-white/20 hover:border-gold-antique focus:outline-none cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators at bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-xs px-4 py-1.5 rounded-full border border-white/15">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                idx === currentSlide
                  ? 'w-7 bg-gold-champagne'
                  : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  )
}



// ─── PHILOSOPHY SECTION ──────────────────────────────────────────────────────
function PhilosophySection() {
  const pillars = [
    { label: 'Dharma', desc: 'Righteous living, ethical values, responsibility and integrity.' },
    { label: 'Jnana', desc: 'Knowledge and awareness — making wisdom accessible to all.' },
    { label: 'Seva', desc: 'Service through compassionate action for the welfare of others.' },
    { label: 'Sarvahith', desc: 'Working towards the welfare and flourishing of all creation.' },
  ]

  const journey = [
    { title: 'Know', desc: 'Seek wisdom and understanding.' },
    { title: 'Reflect', desc: 'Discover the relationship between self, society and creation.' },
    { title: 'Serve', desc: 'Convert compassion into meaningful action.' },
    { title: 'Sustain', desc: 'Protect and nurture the world entrusted to us.' },
  ]

  return (
    <section className="py-20 bg-cream-50 mandala-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Philosophy"
          title="A Journey from Self to Society"
          subtitle="Sanatana Dharma offers a vision of life in which the individual is not isolated from family, society, nature and the larger order of existence."
        />

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {pillars.map((p) => (
            <div key={p.label} className="card-premium p-6 text-center group hover:border-gold-antique/40">
              <div className="w-12 h-12 rounded-full bg-maroon/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-maroon/12 transition-colors">
                <div className="w-2 h-2 rounded-full bg-gold-antique" />
              </div>
              <h3 className="font-serif text-maroon font-semibold text-lg mb-1">{p.label}</h3>
              <p className="text-gray-600 text-xs font-sans leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <GoldDivider />

        {/* Journey 4 cards */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {journey.map((j, i) => (
            <div key={j.title} className="relative card-premium p-6 text-center overflow-hidden group hover:border-gold-antique/50">
              <span className="absolute top-3 right-3 text-5xl font-serif text-gold-antique/8 font-bold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-maroon font-semibold text-xl mb-2">{j.title}</h3>
              <p className="text-gray-600 text-sm font-sans leading-relaxed">{j.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/about/philosophy" className="btn-ghost">
            Read Our Full Philosophy <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── PANCHA MAHABHUTA ────────────────────────────────────────────────────────
function PanchaMahabhutaSection() {
  const elements = [
    {
      name: 'Ākāśa',
      sanskrit: 'आकाश',
      meaning: 'Space',
      color: 'from-navy to-navy-dark',
      text: 'text-cream-50',
      icon: <Globe size={28} />,
      desc: 'Knowledge, dialogue, research and cultural exchange. Space for wisdom to unfold.',
      href: '/about/pancha-mahabhuta#akasa',
    },
    {
      name: 'Vāyu',
      sanskrit: 'वायु',
      meaning: 'Air',
      color: 'from-maroon to-maroon-dark',
      text: 'text-cream-50',
      icon: <Wind size={28} />,
      desc: 'Outreach, communication, volunteerism and movement. Let wisdom move.',
      href: '/about/pancha-mahabhuta#vayu',
    },
    {
      name: 'Agni',
      sanskrit: 'अग्नि',
      meaning: 'Fire',
      color: 'from-gold-antique to-gold-dark',
      text: 'text-navy',
      icon: <Flame size={28} />,
      desc: 'Education, research, leadership and transformation. The light of knowledge.',
      href: '/about/pancha-mahabhuta#agni',
    },
    {
      name: 'Āpaḥ',
      sanskrit: 'आपः',
      meaning: 'Water',
      color: 'from-blue-700 to-blue-900',
      text: 'text-cream-50',
      icon: <Droplets size={28} />,
      desc: 'Compassion, healthcare, nourishment and humanitarian support.',
      href: '/about/pancha-mahabhuta#apah',
    },
    {
      name: 'Pṛthivī',
      sanskrit: 'पृथिवी',
      meaning: 'Earth',
      color: 'from-green-800 to-green-950',
      text: 'text-cream-50',
      icon: <Globe size={28} />,
      desc: 'Environment, agriculture, villages, communities and sustainability.',
      href: '/about/pancha-mahabhuta#prthivi',
    },
  ]

  return (
    <section className="py-20 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pancha Mahabhuta"
          title="Five Elements. One Vision."
          subtitle="ASF's interpretive framework inspired by the dharmic tradition — a journey of space, movement, transformation, nourishment and stability."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {elements.map((el) => (
            <Link
              to={el.href}
              key={el.name}
              className={`element-card bg-gradient-to-b ${el.color} group hover:shadow-2xl`}
            >
              <div className={`${el.text} mb-4 flex justify-center opacity-90`}>{el.icon}</div>
              <p className={`font-serif text-2xl font-semibold ${el.text} mb-0.5`}>{el.name}</p>
              <p className={`text-sm opacity-60 ${el.text} mb-0.5`}>{el.sanskrit}</p>
              <p className={`text-xs font-sans tracking-widest uppercase opacity-80 ${el.text} mb-3`}>
                {el.meaning}
              </p>
              <p className={`text-xs font-sans leading-relaxed opacity-75 ${el.text}`}>{el.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/about/pancha-mahabhuta" className="btn-ghost">
            Explore the Five Elements <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── BHAGAVADGĪTA SECTION ────────────────────────────────────────────────────
function BhagavadgitaSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="eyebrow text-gold-champagne mb-3">The Wisdom That Guides Our Journey</p>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-gold-antique/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-gold-antique" />
              <div className="w-8 h-px bg-gold-antique/40" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-50 font-semibold leading-tight mb-6">
              The Bhagavadgītā — Timeless Questions for Every Age
            </h2>
            <p className="text-cream-300/80 font-sans text-sm leading-relaxed mb-6">
              The Bhagavadgītā is at the heart of ASF's knowledge and cultural vision.
              It speaks to questions that remain timeless across every generation and culture.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'What is my responsibility?',
                'How should I act?',
                'How do I respond to difficulty?',
                'How can action become selfless service?',
                'How can knowledge transform the individual?',
                'How can individual responsibility contribute to collective welfare?',
              ].map((q) => (
                <div key={q} className="flex items-start gap-2">
                  <span className="text-gold-antique mt-1 flex-shrink-0">◆</span>
                  <p className="text-cream-300/75 font-sans text-xs leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
            <Link to="/about/bhagavadgita" className="btn-primary bg-gold-antique hover:bg-gold-dark text-navy font-semibold">
              Explore the Bhagavadgītā <ArrowRight size={14} />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gold-antique/20">
              <img
                src="/images/bh2.png"
                alt="Bhagavadgita - Wisdom of the Gita"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1592519765050-ef38ee0c0b7d?w=700&q=80'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent rounded-xl" />
            </div>
            {/* Floating quote */}
            <div className="absolute -bottom-5 -left-5 bg-maroon p-4 rounded-lg shadow-xl max-w-xs hidden lg:block">
              <p className="text-cream-50 font-serif text-sm italic leading-relaxed">
                "When wisdom becomes understanding, understanding becomes responsibility,
                and responsibility becomes Seva."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FIVE COMMITMENTS ────────────────────────────────────────────────────────
function FiveCommitmentsSection() {
  const commitments = [
    {
      number: '01',
      title: 'Knowledge',
      desc: 'To preserve and share timeless wisdom across generations and cultures.',
      icon: <BookOpen size={24} />,
    },
    {
      number: '02',
      title: 'Culture',
      desc: 'To honour India\'s civilisational heritage and its universal values.',
      icon: <Globe size={24} />,
    },
    {
      number: '03',
      title: 'Compassion',
      desc: 'To respond to human needs with dignity, care and selfless service.',
      icon: <Droplets size={24} />,
    },
    {
      number: '04',
      title: 'Sustainability',
      desc: 'To respect and protect our natural world for future generations.',
      icon: <Flame size={24} />,
    },
    {
      number: '05',
      title: 'Sarvahith',
      desc: 'To work towards the welfare and flourishing of all creation.',
      icon: <Wind size={24} />,
    },
  ]

  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Five Great Commitments"
          title="What We Stand For"
          subtitle="Five principles that guide every initiative, every campaign and every act of service at Aishwarya Sarvahith Foundation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {commitments.map((c) => (
            <div
              key={c.title}
              className="card-premium p-6 text-center group hover:border-gold-antique/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-maroon/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon/15 transition-colors text-maroon">
                {c.icon}
              </div>
              <span className="text-gold-antique/30 text-4xl font-serif font-bold absolute top-3 right-3">
                {c.number}
              </span>
              <h3 className="font-serif text-maroon font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-gray-600 text-xs font-sans leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FEATURED CAMPAIGNS ──────────────────────────────────────────────────────
function FeaturedSection() {
  const cards = [
    {
      image: '/images/bh3.png',
      eyebrow: 'Global Initiative',
      title: 'Bhagavadgītā Vishwa Mahotsav',
      description: '18 Countries • 18 Chapters • 18 Languages • One Universal Message. A global platform for the wisdom of the Gītā.',
      href: '/campaigns/vishwa-mahotsav',
      tag: 'Campaign',
    },
    {
      image: '/images/bh4.png',
      eyebrow: 'Knowledge',
      title: 'Vishwa Gita Research Centre',
      description: 'A proposed centre for research, translation, documentation and education on the Bhagavadgītā.',
      href: '/campaigns/research-centre',
      tag: 'Campaign',
    },
    {
      image: '/images/p3.jpg',
      eyebrow: 'Compassion',
      title: 'Seva — Service to All',
      description: 'ASF\'s envisioned humanitarian, educational and community service inspired by the Pancha Mahabhuta.',
      href: '/campaigns/seva',
      tag: 'Campaign',
    },
    {
      image: '/images/p4.jpg',
      eyebrow: 'Youth',
      title: 'Education & Youth',
      description: 'From information to transformation — developing character, wisdom and leadership in the next generation.',
      href: '/campaigns/education-youth',
      tag: 'Campaign',
    },
    {
      image: '/images/p5.jpg',
      eyebrow: 'Environment',
      title: 'Environment — Honouring Pṛthivī',
      description: 'Earth is not our property. It is our trust. Protecting and sustaining the natural world.',
      href: '/campaigns/environment',
      tag: 'Campaign',
    },
    {
      image: '/images/p6.jpg',
      eyebrow: 'Project',
      title: 'Organic Farming',
      description: 'Sustainable, dharmic agriculture reconnecting communities to the earth and healthy living.',
      href: '/projects/organic-farming',
      tag: 'Project',
    },
  ]

  return (
    <section className="py-20 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Campaigns & Projects"
          title="Wisdom in Action"
          subtitle="Every initiative at ASF is an expression of Dharma, Jnana and Seva — translating ancient wisdom into meaningful service."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <CampaignCard key={card.href} {...card} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/campaigns" className="btn-primary">
            All Campaigns <ArrowRight size={14} />
          </Link>
          <Link to="/projects" className="btn-ghost">
            All Projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── TEAM SECTION ─────────────────────────────────────────────────────────────
function TeamHomeSection() {
  return (
    <section className="py-20 bg-cream-100 mandala-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TeamSection showTitle={true} />
        <div className="mt-12 text-center">
          <Link to="/team" className="btn-outline">
            View Complete Team Overview <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── SIGNATURE / CLOSING ─────────────────────────────────────────────────────
function SignatureSection() {
  return (
    <>
      <QuoteBlock
        quote="When we understand that we are part of creation, Seva becomes our responsibility."
        dark={false}
      />

      <section className="py-16 bg-maroon-dark text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/images/asf-logo.png"
            alt="ASF Logo"
            className="h-16 w-auto mx-auto mb-5 opacity-90"
          />
          <p className="font-serif text-cream-50 text-2xl md:text-3xl font-medium mb-2">
            Aishwarya Sarvahith Foundation
          </p>
          <p className="font-sans text-gold-champagne text-sm tracking-widest uppercase mb-8">
            Rooted in Dharma. Dedicated to Seva. Committed to Society.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/support-us" className="btn-primary bg-gold-antique hover:bg-gold-dark text-navy font-semibold">
              Support Us <ArrowRight size={14} />
            </Link>
            <Link to="/get-involved" className="btn-outline border-gold-antique text-gold-champagne hover:bg-gold-antique hover:text-navy">
              Join Our Mission <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <PhilosophySection />
      <PanchaMahabhutaSection />
      <BhagavadgitaSection />
      <FiveCommitmentsSection />
      <FeaturedSection />
      <TeamHomeSection />
      <SignatureSection />
    </>
  )
}
