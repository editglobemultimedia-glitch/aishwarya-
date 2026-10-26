import PageBanner from '../../components/ui/PageBanner'
import SectionHeader from '../../components/ui/SectionHeader'

export default function Newsletter() {
  const issues = [
    { title: 'Newsletter Issue — Coming Soon', date: 'To be published', desc: 'This is a placeholder for the ASF newsletter archive. Issues will be listed here once they are published by the Foundation.', fileUrl: null },
  ]
  return (
    <>
      <PageBanner eyebrow="Media" title="ASF Newsletter" subtitle="Stay informed with ASF's latest news, knowledge initiatives and campaign updates." breadcrumbs={[{ label: 'Media', href: '/media' }, { label: 'Newsletter' }]} image="/images/bh1.png" />
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Newsletter Archive" title="Knowledge Worth Sharing" subtitle="Our newsletter archive will be updated as issues are published by the Foundation." />
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-center">
            <p className="text-amber-800 font-sans text-sm">Newsletter issues will appear here once published. Subscribe below to receive updates directly.</p>
          </div>
          {issues.map((issue, i) => (
            <div key={i} className="card-premium p-6 mb-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-maroon text-lg font-semibold italic">{issue.title}</h3>
                <p className="text-gold-antique text-xs font-sans mt-1">{issue.date}</p>
                <p className="text-gray-500 font-sans text-sm mt-2">{issue.desc}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-gray-400 font-sans text-xs border border-gray-300 px-3 py-1.5 rounded">Awaiting publication</span>
              </div>
            </div>
          ))}
          <div className="mt-12 bg-cream-200 rounded-xl p-8 text-center">
            <h3 className="font-serif text-maroon text-xl font-semibold mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 font-sans text-sm mb-4">Newsletter subscription will be available once the email service is configured by the Foundation.</p>
            <div className="flex max-w-md mx-auto gap-3">
              <input type="email" placeholder="Your email address" className="form-input flex-1" disabled />
              <button className="btn-primary opacity-60 cursor-not-allowed" disabled>Subscribe</button>
            </div>
            <p className="text-gray-400 font-sans text-xs mt-2">Subscription form will be enabled once a real email backend is configured.</p>
          </div>
        </div>
      </section>
    </>
  )
}
