import { useState, useMemo } from 'react';
import SectionHeader from '../ui/SectionHeader';
import TeamCard from './TeamCard';
import ProfileModal from './ProfileModal';
import { teamMembers, TeamMember } from '../../data/teamData';
import { Users, Award, ShieldCheck } from 'lucide-react';

interface TeamSectionProps {
  showTitle?: boolean;
  limit?: number;
}

export default function TeamSection({ showTitle = true, limit }: TeamSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'directors' | 'leadership'>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredMembers = useMemo(() => {
    let list = teamMembers;
    if (activeCategory !== 'all') {
      list = list.filter((m) => m.category === activeCategory);
    }
    if (limit && limit > 0) {
      list = list.slice(0, limit);
    }
    return list;
  }, [activeCategory, limit]);

  const currentIndex = useMemo(() => {
    if (!selectedMember) return -1;
    return teamMembers.findIndex((m) => m.id === selectedMember.id);
  }, [selectedMember]);

  const handleNext = () => {
    if (currentIndex === -1) return;
    const nextIdx = (currentIndex + 1) % teamMembers.length;
    setSelectedMember(teamMembers[nextIdx]);
  };

  const handlePrev = () => {
    if (currentIndex === -1) return;
    const prevIdx = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
    setSelectedMember(teamMembers[prevIdx]);
  };

  return (
    <div className="w-full">
      {showTitle && (
        <div className="mb-10 text-center">
          <SectionHeader
            eyebrow="Leadership & Stewards"
            title="Meet Our Team"
            subtitle="Distinguished leaders, creative visionaries, and seasoned entrepreneurs dedicated to Dharma, Jnana, and Seva for the Bhagavadgita Vishwa Mahotsav 2027."
          />
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        <button
          id="team-tab-all"
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
            activeCategory === 'all'
              ? 'bg-maroon text-cream-50 shadow-md border border-maroon'
              : 'bg-white text-gray-700 hover:bg-cream-200 border border-cream-300'
          }`}
        >
          <Users size={15} />
          <span>All Profiles ({teamMembers.length})</span>
        </button>

        <button
          id="team-tab-directors"
          onClick={() => setActiveCategory('directors')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
            activeCategory === 'directors'
              ? 'bg-maroon text-cream-50 shadow-md border border-maroon'
              : 'bg-white text-gray-700 hover:bg-cream-200 border border-cream-300'
          }`}
        >
          <ShieldCheck size={15} />
          <span>Board of Directors ({teamMembers.filter((m) => m.category === 'directors').length})</span>
        </button>

        <button
          id="team-tab-leadership"
          onClick={() => setActiveCategory('leadership')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
            activeCategory === 'leadership'
              ? 'bg-maroon text-cream-50 shadow-md border border-maroon'
              : 'bg-white text-gray-700 hover:bg-cream-200 border border-cream-300'
          }`}
        >
          <Award size={15} />
          <span>Key Leadership & Partners ({teamMembers.filter((m) => m.category === 'leadership').length})</span>
        </button>
      </div>

      {/* Responsive Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {filteredMembers.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
            onReadMore={(m) => setSelectedMember(m)}
          />
        ))}
      </div>

      {/* Complete Profile Modal */}
      <ProfileModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
