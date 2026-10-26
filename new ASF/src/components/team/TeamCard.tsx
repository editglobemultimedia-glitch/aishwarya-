import { ArrowRight, Sparkles } from 'lucide-react';
import { TeamMember } from '../../data/teamData';

interface TeamCardProps {
  member: TeamMember;
  onReadMore: (member: TeamMember) => void;
}

export default function TeamCard({ member, onReadMore }: TeamCardProps) {
  return (
    <div className="card-premium group h-full flex flex-col justify-between overflow-hidden border border-cream-300 hover:border-gold-antique/70 hover:shadow-xl transition-all duration-300 bg-cream-50 hover:-translate-y-1.5 rounded-2xl relative">
      {/* Top subtle gold accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold-antique to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Card Content Container */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col items-center text-center">
        {/* Category Pill Tag */}
        <div className="mb-4">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.18em] text-gold-dark bg-gold-champagne/15 px-3 py-1 rounded-full border border-gold-antique/25">
            {member.categoryLabel}
          </span>
        </div>

        {/* Profile Photo with Elegant Double Gold Frame */}
        <div className="relative mb-5 flex-shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-white relative z-10 transition-transform duration-500 group-hover:scale-105">
            <img
              src={member.image}
              alt={member.name}
              className={`w-full h-full object-cover ${member.objectPosition || 'object-center'}`}
              loading="lazy"
            />
          </div>
          {/* Subtle rotated decorative ring */}
          <div className="absolute -inset-1.5 rounded-full border border-gold-antique/50 -rotate-6 transition-transform duration-500 group-hover:rotate-0" />
        </div>

        {/* Full Name */}
        <h3 className="font-serif text-maroon text-xl sm:text-2xl font-bold mb-1.5 group-hover:text-maroon-dark transition-colors line-clamp-2">
          {member.name}
        </h3>

        {/* Professional Designation */}
        <p className="text-gold-antique text-xs sm:text-[13px] font-sans font-semibold tracking-wide uppercase mb-3 line-clamp-2">
          {member.designation}
        </p>

        {/* Mini Gold Divider */}
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold-antique/50 to-transparent mx-auto mb-3.5" />

        {/* Role in Mahotsav Snippet */}
        <div className="mb-3.5 inline-flex items-center gap-1.5 bg-cream-200/70 border border-gold-antique/20 px-3 py-1 rounded-md text-[11px] font-sans text-maroon font-medium">
          <Sparkles size={11} className="text-gold-antique flex-shrink-0" />
          <span className="truncate max-w-[220px]">Mahotsav: {member.roleInMahotsav}</span>
        </div>

        {/* Short Introduction (2-3 lines summarizing background and contribution) */}
        <p className="text-gray-600 text-xs sm:text-sm font-sans leading-relaxed line-clamp-3 text-center mb-4 flex-1">
          {member.shortIntro}
        </p>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 pt-0 mt-auto w-full">
        <button
          id={`read-more-${member.id}`}
          onClick={() => onReadMore(member)}
          className="w-full btn-outline py-2.5 px-4 text-xs sm:text-sm font-sans font-medium flex items-center justify-center gap-2 group-hover:bg-maroon group-hover:text-cream-50 group-hover:border-maroon transition-all duration-200 shadow-2xs cursor-pointer"
          aria-label={`Read more about ${member.name}`}
        >
          <span>Read More</span>
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
