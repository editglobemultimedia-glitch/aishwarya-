import { Link } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="font-serif text-8xl text-gold-antique/30 font-bold mb-0">404</p>
        <h1 className="font-serif text-3xl text-maroon font-semibold mb-3">Page Not Found</h1>
        <p className="text-gray-600 font-sans text-sm leading-relaxed mb-8">The page you are looking for may have been moved or does not exist. Let us guide you back to what matters.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary"><Home size={14} /> Return Home</Link>
          <Link to="/about" className="btn-ghost">About ASF <ArrowRight size={14} /></Link>
          <Link to="/contact" className="btn-ghost">Contact Us <ArrowRight size={14} /></Link>
        </div>
        <div className="mt-10 pt-8 border-t border-cream-300">
          <p className="font-serif text-maroon italic text-base">"Yoga is the journey of the self, through the self, to the self."</p>
          <p className="text-gold-antique text-xs font-sans mt-2">— Bhagavadgita</p>
        </div>
      </div>
    </div>
  )
}
