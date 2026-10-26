import { useEffect, useRef } from 'react';
import { X, Award, Briefcase, Sparkles, ChevronLeft, ChevronRight, CheckCircle2, Building2 } from 'lucide-react';
import { TeamMember } from '../../data/teamData';

interface ProfileModalProps {
  member: TeamMember | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function ProfileModal({ member, onClose, onNext, onPrev }: ProfileModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!member) return;

    // Prevent background scrolling
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Keyboard listener for Escape, Left, Right
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Focus container
    modalRef.current?.focus();

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose, onNext, onPrev]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-navy-dark/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeInUp"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-member-name"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-4xl bg-cream-50 border-2 border-gold-antique/40 rounded-2xl shadow-2xl overflow-hidden my-auto focus:outline-none max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-cream-50/95 backdrop-blur-md border-b border-cream-300 px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={member.image}
              alt={member.name}
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-gold-antique/60 flex-shrink-0 ${member.objectPosition || 'object-center'}`}
            />
            <div className="min-w-0">
              <h2 className="font-serif text-maroon font-bold text-base sm:text-lg truncate">
                {member.name}
              </h2>
              <p className="text-xs font-sans text-gold-dark truncate">
                {member.designation}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {onPrev && (
              <button
                onClick={onPrev}
                className="p-1.5 sm:p-2 text-gray-500 hover:text-maroon hover:bg-cream-200 rounded-lg transition-colors"
                title="Previous profile"
                aria-label="Previous profile"
              >
                <ChevronLeft size={18} />
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="p-1.5 sm:p-2 text-gray-500 hover:text-maroon hover:bg-cream-200 rounded-lg transition-colors"
                title="Next profile"
                aria-label="Next profile"
              >
                <ChevronRight size={18} />
              </button>
            )}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-sans font-medium text-maroon hover:text-white bg-maroon/10 hover:bg-maroon rounded-lg transition-all ml-1 border border-maroon/20"
              aria-label="Close profile"
            >
              <span>Close Profile</span>
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-4 sm:px-8 py-6 space-y-8 flex-1">
          {/* Hero Profile Summary */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start bg-gradient-to-br from-cream-100 to-cream-200/80 p-5 sm:p-7 rounded-xl border border-cream-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-gold-antique/10 to-transparent pointer-events-none" />

            {/* Photo with Elegant Gold Frame */}
            <div className="relative flex-shrink-0 group">
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white relative z-10">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${member.objectPosition || 'object-center'}`}
                />
              </div>
              <div className="absolute -inset-2 rounded-2xl border-2 border-gold-antique/40 -rotate-3 pointer-events-none" />
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-20">
                <span className="bg-maroon text-cream-50 text-[10px] tracking-wider uppercase font-sans font-bold px-3 py-0.5 rounded-full shadow-md whitespace-nowrap border border-gold-champagne/40">
                  {member.badge}
                </span>
              </div>
            </div>

            {/* Profile Intro Details */}
            <div className="flex-1 text-center md:text-left space-y-2.5">
              <div className="inline-block">
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.18em] text-gold-dark bg-gold-champagne/15 px-2.5 py-1 rounded">
                  {member.categoryLabel}
                </span>
              </div>
              <h1 id="modal-member-name" className="font-serif text-2xl sm:text-3xl md:text-4xl text-maroon font-bold leading-tight">
                {member.name}
              </h1>
              <p className="font-sans text-sm sm:text-base text-gray-700 font-medium">
                {member.designation}
              </p>

              {/* Role in Mahotsav pill */}
              <div className="pt-1 flex flex-wrap gap-2 justify-center md:justify-start">
                <div className="inline-flex items-center gap-1.5 bg-maroon-50 text-maroon-dark border border-maroon/20 px-3 py-1 rounded-md text-xs font-sans font-medium">
                  <Sparkles size={13} className="text-gold-antique" />
                  <span>Bhagavadgita Vishwa Mahotsav 2027: <strong>{member.roleInMahotsav}</strong></span>
                </div>
              </div>

              {/* Headline */}
              <p className="font-serif text-maroon-dark/90 italic text-base sm:text-lg pt-1 border-t border-cream-300/80">
                "{member.headline}"
              </p>
            </div>
          </div>

          {/* Quick Metrics & Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {member.stats.map((st, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-gold-antique/20 shadow-xs text-center flex flex-col justify-center"
              >
                <div className="font-serif text-maroon text-lg sm:text-xl font-bold tracking-tight">
                  {st.value}
                </div>
                <div className="font-sans text-[11px] text-gray-600 mt-0.5 font-medium leading-snug">
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          {/* Full Professional Biography */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 border-b border-gold-antique/30 pb-2">
              <Briefcase size={18} className="text-gold-antique" />
              <h3 className="font-serif text-xl sm:text-2xl text-maroon font-bold">
                Professional Biography
              </h3>
            </div>
            <div className="space-y-3 text-gray-700 font-sans text-sm sm:text-[15px] leading-relaxed">
              {member.biography.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* Areas of Expertise */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gold-antique/30 pb-2">
              <Award size={18} className="text-gold-antique" />
              <h3 className="font-serif text-xl sm:text-2xl text-maroon font-bold">
                Areas of Expertise & Skills
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {member.expertise.map((exp, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl border border-cream-300 hover:border-gold-antique/50 transition-colors shadow-2xs"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-gold-antique text-sm mt-0.5">◆</span>
                    <div>
                      <h4 className="font-serif text-base text-maroon font-bold mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience & Career Milestones */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gold-antique/30 pb-2">
              <Briefcase size={18} className="text-gold-antique" />
              <h3 className="font-serif text-xl sm:text-2xl text-maroon font-bold">
                Career History & Work Experience
              </h3>
            </div>
            <div className="space-y-4">
              {member.experience.map((exp, i) => (
                <div
                  key={i}
                  className="bg-white p-4 sm:p-5 rounded-xl border-l-4 border-l-gold-antique border-y border-r border-cream-300 shadow-2xs space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-serif text-maroon text-base sm:text-lg font-bold">
                      {exp.role}
                    </h4>
                    {exp.period && (
                      <span className="text-xs font-sans font-medium text-gold-dark bg-cream-100 px-2.5 py-0.5 rounded-full border border-cream-300 self-start sm:self-auto">
                        {exp.period}
                      </span>
                    )}
                  </div>
                  {exp.organization && (
                    <p className="text-xs sm:text-sm font-sans font-semibold text-gray-800">
                      {exp.organization}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="pt-1.5 space-y-1.5">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 font-sans">
                          <CheckCircle2 size={13} className="text-gold-antique flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Key Achievements (if any) */}
          {member.achievements && member.achievements.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-gold-antique/30 pb-2">
                <Award size={18} className="text-gold-antique" />
                <h3 className="font-serif text-xl sm:text-2xl text-maroon font-bold">
                  Key Achievements & Accomplishments
                </h3>
              </div>
              <div className="space-y-4">
                {member.achievements.map((ach, ai) => (
                  <div key={ai} className="bg-white p-4 sm:p-5 rounded-xl border border-cream-300 shadow-2xs">
                    <h4 className="font-serif text-maroon text-base sm:text-lg font-bold mb-2.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold-antique" />
                      {ach.category}
                    </h4>
                    <ul className="space-y-2">
                      {ach.items.map((it, ii) => (
                        <li key={ii} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 font-sans leading-relaxed">
                          <span className="text-gold-antique text-xs mt-1 flex-shrink-0">◆</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Business Ventures (for entrepreneurs) */}
          {member.ventures && member.ventures.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-gold-antique/30 pb-2">
                <Building2 size={18} className="text-gold-antique" />
                <h3 className="font-serif text-xl sm:text-2xl text-maroon font-bold">
                  Business Ventures & Leadership Responsibilities
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {member.ventures.map((ven, vi) => (
                  <div key={vi} className="bg-white p-3.5 rounded-xl border border-cream-300">
                    <h4 className="font-serif text-maroon font-bold text-sm sm:text-base mb-1">
                      {ven.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed">
                      {ven.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Dedicated Section: Role in Bhagavadgita Vishwa Mahotsav 2027 */}
          <section className="bg-gradient-to-br from-maroon-dark to-maroon text-cream-50 p-5 sm:p-7 rounded-2xl shadow-lg relative overflow-hidden border border-gold-antique/40">
            <div className="absolute top-0 right-0 w-60 h-60 bg-radial from-gold-champagne/15 to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 text-gold-champagne text-xs uppercase tracking-[0.2em] font-sans font-semibold">
                <Sparkles size={14} />
                <span>Bhagavadgita Vishwa Mahotsav 2027</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-cream-50">
                {member.mahotsavContribution.role}
              </h3>
              <p className="font-sans text-sm sm:text-base text-cream-100/90 leading-relaxed">
                {member.mahotsavContribution.summary}
              </p>
              <ul className="space-y-2 pt-2 border-t border-gold-antique/20">
                {member.mahotsavContribution.points.map((pt, pi) => (
                  <li key={pi} className="flex items-start gap-2.5 text-xs sm:text-sm text-cream-50/95 font-sans">
                    <CheckCircle2 size={15} className="text-gold-champagne mt-0.5 flex-shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Key Takeaway / Quote Footer */}
          <div className="text-center py-2 px-4 bg-cream-100/80 rounded-xl border border-cream-300">
            <p className="font-serif italic text-maroon text-sm sm:text-base">
              "{member.keyTakeaway}"
            </p>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="sticky bottom-0 z-20 bg-cream-100/95 backdrop-blur-md border-t border-cream-300 px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-sans text-gray-500 hidden sm:block">
            Use keyboard <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-[10px]">ESC</kbd> to close, <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-[10px]">→</kbd> to browse
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="w-full sm:w-auto btn-primary py-2.5 px-6 text-sm font-medium shadow-md"
            >
              Close Profile / Return to Team Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
