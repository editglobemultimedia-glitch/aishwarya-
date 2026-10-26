import { useState } from 'react'
import PageBanner from '../components/ui/PageBanner'
import SectionHeader from '../components/ui/SectionHeader'
import { Mail, MapPin, ArrowRight } from 'lucide-react'

type FormData = { name: string; email: string; subject: string; enquiryType: string; message: string }
type FormErrors = Partial<FormData>

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', enquiryType: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const enquiryTypes = ['General Enquiry', 'Partnership', 'Volunteering', 'Media', 'Knowledge & Research', 'Donation', 'Other']

  function validate(): boolean {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.enquiryType) e.enquiryType = 'Please select an enquiry type'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Please provide a more detailed message'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  return (
    <>
      <PageBanner eyebrow="Contact" title="Connect With ASF" subtitle="We would love to hear from you — whether you have a question, a partnership proposal or simply want to learn more about ASF." breadcrumbs={[{ label: 'Contact' }]} image="/images/bh1.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader eyebrow="Get in Touch" title="Send Us a Message" centered={false} />
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </div>
                  <h3 className="font-serif text-maroon text-xl font-semibold mb-2">Thank You</h3>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4">Your message has been received. Once a backend form service is configured, submissions will be delivered to the ASF team. Please note this form is not yet connected to a live backend.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', enquiryType: '', message: '' }) }} className="btn-ghost text-xs">Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-sans font-medium text-gray-700 mb-1.5">Full Name <span className="text-maroon">*</span></label>
                      <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your full name" className={`form-input ${errors.name ? 'border-red-400' : ''}`} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-medium text-gray-700 mb-1.5">Email Address <span className="text-maroon">*</span></label>
                      <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com" className={`form-input ${errors.email ? 'border-red-400' : ''}`} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-medium text-gray-700 mb-1.5">Enquiry Type <span className="text-maroon">*</span></label>
                    <select name="enquiryType" value={form.enquiryType} onChange={handleChange} className={`form-input ${errors.enquiryType ? 'border-red-400' : ''}`}>
                      <option value="">Select type of enquiry...</option>
                      {enquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.enquiryType && <p className="text-red-500 text-xs mt-1">{errors.enquiryType}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-medium text-gray-700 mb-1.5">Subject <span className="text-maroon">*</span></label>
                    <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Subject of your message" className={`form-input ${errors.subject ? 'border-red-400' : ''}`} />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-sans font-medium text-gray-700 mb-1.5">Message <span className="text-maroon">*</span></label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Your message..." className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <div className="bg-cream-200 rounded-lg p-3">
                    <p className="text-gray-500 font-sans text-xs">This contact form requires a backend service to submit messages. Please configure a form service before going live.</p>
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto justify-center">Send Message <ArrowRight size={14} /></button>
                </form>
              )}
            </div>
            <div>
              <h3 className="font-serif text-maroon text-xl font-semibold mb-5">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <div className="card-premium p-5 flex gap-3">
                  <Mail size={18} className="text-gold-antique flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-sans font-medium text-gray-500 uppercase tracking-wide mb-1">Email</p>
                    <p className="font-sans text-sm text-gray-700">contact@aishwaryasarvahith.org</p>
                    <p className="text-gray-400 text-xs font-sans italic mt-0.5">To be updated with verified address</p>
                  </div>
                </div>
                <div className="card-premium p-5 flex gap-3">
                  <MapPin size={18} className="text-gold-antique flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-sans font-medium text-gray-500 uppercase tracking-wide mb-1">Address</p>
                    <p className="font-sans text-sm text-gray-700">India</p>
                    <p className="text-gray-400 text-xs font-sans italic mt-0.5">Registered address to be provided</p>
                  </div>
                </div>
              </div>
              <div className="bg-maroon rounded-xl p-6 text-center">
                <p className="font-serif text-cream-50 text-lg font-medium mb-2">Rooted in Dharma.</p>
                <p className="font-serif text-gold-champagne text-lg font-medium mb-2">Dedicated to Seva.</p>
                <p className="font-serif text-cream-50/70 text-base">Committed to Society.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
