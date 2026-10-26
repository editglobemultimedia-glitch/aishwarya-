export interface TeamMember {
  id: string;
  name: string;
  fullName?: string;
  designation: string;
  roleInMahotsav: string;
  category: 'directors' | 'leadership';
  categoryLabel: string;
  image: string;
  objectPosition?: string;
  badge: string;
  shortIntro: string;
  stats: { label: string; value: string }[];
  headline: string;
  biography: string[];
  expertise: { title: string; desc: string }[];
  experience: {
    role: string;
    organization?: string;
    period?: string;
    description: string;
    highlights?: string[];
  }[];
  achievements?: {
    category: string;
    items: string[];
  }[];
  ventures?: {
    name: string;
    description: string;
  }[];
  mahotsavContribution: {
    role: string;
    summary: string;
    points: string[];
  };
  keyTakeaway: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'daitha-susheel-kumar',
    name: 'Daitha Susheel Kumar',
    fullName: 'Daitha Susheel Kumar Raja',
    designation: 'Director & Senior Healthcare Marketing Professional',
    roleInMahotsav: 'Communications & Marketing',
    category: 'directors',
    categoryLabel: 'Board of Directors',
    image: '/images/team/daitha_susheel_kumar.png',
    objectPosition: 'object-center',
    badge: 'Communications & Marketing',
    shortIntro:
      'With 25 years of experience in healthcare sales, marketing, and business development, he brings structured planning, persuasive communication, content creation, event design, and administrative excellence.',
    headline: 'A senior healthcare professional with a communication-first marketing mindset.',
    stats: [
      { value: '25 Years', label: 'Healthcare Sales & Marketing Experience' },
      { value: 'Strategic Planning', label: 'Business Growth & Structured Execution' },
      { value: 'Communication', label: 'Stakeholder & Audience Engagement' },
      { value: 'Mahotsav 2027', label: 'Communications & Marketing Role' },
    ],
    biography: [
      'A long-standing healthcare commercial professional combining sales and marketing expertise with strategic communication, content development, presentation design, event thinking, and administration.',
      'His combination of healthcare sales experience and communication capabilities enables him to understand the audience, shape the message, and support execution—bringing a practical commercial perspective to marketing.',
      'Over a 25-year career spanning pharmaceuticals and nutraceuticals, he has consistently driven territory growth, strategic partnerships, customer relationships, team leadership, and revenue development.',
    ],
    expertise: [
      {
        title: 'Strategic Planning',
        desc: 'Bringing structured planning and business-development thinking to marketing initiatives, communications, and event requirements.',
      },
      {
        title: 'Professional Communication',
        desc: 'Experienced in translating complex business objectives into clear, persuasive stakeholder and customer communication.',
      },
      {
        title: 'Content Creation',
        desc: 'Developing content for campaigns, presentations, promotional material, event narratives, and audience engagement.',
      },
      {
        title: 'Presentations & Design',
        desc: 'Combining content and visual thinking to create polished presentations, event concepts, and marketing-facing material.',
      },
      {
        title: 'Marketing Strength',
        desc: 'Practical commercial perspective applied to modern audience reach and campaign management.',
      },
    ],
    experience: [
      {
        role: 'Senior Healthcare Sales & Marketing Professional',
        period: '25 Years Professional Career',
        description:
          'Extensive experience across healthcare sales, marketing, and business development, supported by strategic planning, communication, and commercial execution.',
        highlights: [
          'Territory growth and customer relationship management',
          'Strategic partnerships and revenue development',
          'Team leadership and sales operational systems',
        ],
      },
      {
        role: 'Communications, Content & Presentations Specialist',
        description:
          'Content creation, presentation development, and communication support across marketing, stakeholder dialogues, and business initiatives.',
      },
      {
        role: 'Event Design & Administration',
        description:
          'Contributing to event design, planning requirements, presentation material, and administrative coordination for large-scale platforms.',
      },
    ],
    mahotsavContribution: {
      role: 'Communications & Marketing — Bhagavadgita Vishwa Mahotsav 2027',
      summary:
        'Building clarity, consistency, and reach for a major spiritual-cultural platform by bringing structure, professional communication, and marketing discipline to the Mahotsav’s public-facing presence and stakeholder engagement.',
      points: [
        'Supporting the Mahotsav through clear messaging, presentation design, and marketing planning.',
        'Connecting healthcare commercial discipline with cultural outreach to ensure sustainable stakeholder partnerships.',
        'Overseeing audience-facing creative execution and event narrative coherence.',
      ],
    },
    keyTakeaway:
      '25 years of professional maturity and commercial discipline applied to modern communication and cultural service.',
  },
  {
    id: 'godawarthy-sasidhar',
    name: 'Godawarthy Sasidhar',
    fullName: 'Godawarthy Sasidhar',
    designation: 'Director & Senior Media Professional | Event Head',
    roleInMahotsav: 'Event Head — Bhagavadgita Vishwa Mahotsav 2027',
    category: 'directors',
    categoryLabel: 'Board of Directors',
    image: '/images/team/godawarthy_sasidhar.jpg',
    objectPosition: 'object-[center_16%]',
    badge: 'Media & Creative Direction',
    shortIntro:
      'Senior media professional with over 30 years of leadership across television, new media, programming, and creative direction, leading television channels, international animation, and major devotional productions.',
    headline: 'Three decades of media, storytelling & service.',
    stats: [
      { value: '30+ Years', label: 'Media & Creative Leadership' },
      { value: '104 Episodes', label: 'International Animation Produced (24 min)' },
      { value: 'Executive Roles', label: 'VP SVBC (TTD), VP Color Chips, CEO Siva Sakthi Sai' },
      { value: 'Event Head', label: 'Bhagavadgita Vishwa Mahotsav 2027' },
    ],
    biography: [
      'A senior media professional with leadership experience spanning more than 30 years across television, new media, programming, creative, content, and marketing.',
      'A leadership profile bringing together television, creative production, programming, marketing, and devotional/spiritual content initiatives. His career bridges mainstream television, international animation, channel leadership, marketing, and a long-standing body of spiritual and heritage storytelling.',
      'He has coordinated concept development, pre-production, production, and post-production for national broadcasters, devotional networks, and government endowment departments across India and internationally.',
    ],
    expertise: [
      {
        title: 'Program Strategy & Creative Direction',
        desc: 'Conceptualizing, producing, and directing full-spectrum broadcast television series, documentaries, and spiritual formats.',
      },
      {
        title: 'Broadcast Channel Leadership',
        desc: 'Serving as Vice President, Chief Executive Officer, and Chief Editor across major satellite and regional devotional channels.',
      },
      {
        title: 'Animation & International Media',
        desc: 'Produced 104 episodes of 24 minutes each for global markets on BBC Entertainment, Nick, Cartoon Network, Star Sports, and ESPN.',
      },
      {
        title: 'Heritage & Spiritual Storytelling',
        desc: 'Directing landmark documentaries on the 12 Jyotirlingas, 18 Shaktipeethas, 108 Divya Desams, and state temple master plans.',
      },
    ],
    experience: [
      {
        role: 'Vice President (Programs) & Creative Head',
        organization: 'Color Chips New Media Limited',
        description:
          'Handled national and international animation episodes broadcast on ESPN, Star Sports, CNNC, ToonZ, Penta TV, Cartoon Network, Star TV, TV9, Sun Network, and MAA TV.',
        highlights: [
          'Produced 104 episodes of 24 minutes each for overseas animation markets',
          'Aired on BBC Entertainment, Nick, Cartoon Network, Hungama TV, Zee Telugu, and Sun Network',
        ],
      },
      {
        role: 'Vice President (Programs)',
        organization: 'Sri Venkateswara Bhakti Channel (SVBC), TTD',
        description:
          'Coordinated concept development, pre-production, production, and post-production activities; responsible for EPC, finalization of concepts, and selection of cast for Tirumala Tirupati Devasthanams.',
      },
      {
        role: 'Creative Head',
        organization: 'OM Channel (CVR Spiritual), Hyderabad',
        description:
          'Aimed to create awareness of Sri Vasishtadvaita philosophy. Executed discourse series on Sri Vachana Bhooshanam, Sri Guna Ratna Kosham, Sri Gurupampara Vaibhavam, Alwaar Vaibhavam, Mukundamala, Stotra Ratnam, and Sri Sudarsana Shathakam.',
      },
      {
        role: 'Chief Executive Officer',
        organization: 'Siva Sakthi Sai TV, Hyderabad',
        description:
          'Responsible for production and telecast of all Peetam events, including major events at Bhongir and Shirdi during Karthika Masam and Maha Shivaratri.',
      },
      {
        role: 'Chief Editor & Marketing Head',
        organization: 'Jaya Sankara TV & 9TV',
        description:
          'Held overall channel editorial responsibility at Jaya Sankara TV; led the marketing division and generated sponsorships and ad revenues at 9TV.',
      },
    ],
    achievements: [
      {
        category: 'Television Programs — Devotional',
        items: [
          'Krishnaveni — 14-episode daily program on TV9 for Krishna Pushkaralu, in association with Sri Veturi Sundara Ramamurthy.',
          'Annavaram Devasthanam for Gemini TV; Sri Yadagirigutta Narasimha Swamy Temple for Teja TV.',
          'Ashta Dasa Shakti Peethalu for SVBC; 108 Vaishnava Divya Desalu for SVBC; Dwadasha Jyothirlingalu.',
        ],
      },
      {
        category: 'Documentaries & Films — India & Abroad',
        items: [
          'Dwadasa Jyothirlingalu — covered all 12 temples from Kedarnath (Himalayas) to Rameshwaram (Tamil Nadu).',
          'Ashta Dasa Shakti Peethalu — 18 Shaktipeethas across India and Sri Lanka (Colombo).',
          '108 Divya Tirupatulu — important Vaishnava temples across India and Nepal.',
          'Pancha Kedar, Pancha Badri, and Pancha Prayaga — five sacred pilgrimage sites each in Uttarakhand.',
          'Pancharamalu — five sacred Shiva temples in Andhra Pradesh.',
          '3D virtual walk-through presentation for NHAI for a Hon’ble Prime Minister’s program.',
          '3D walk-through for a commercial showroom in Saudi Arabia.',
          'Promotional activities for the prestigious TANA Conference, Washington, DC.',
        ],
      },
      {
        category: 'Government Projects — Endowments Department',
        items: [
          'Documentary and multimedia presentation with 3D CGI for Master Plan implementation, and promotional film, for Sri Bhramaramba Mallikarjuna Swamy Devasthanam, Srisailam.',
          'Documentaries on Sri Venkateswara Swamy Devasthanam (Dwaraka Tirumala), Annavaram Devasthanam, Sri Varasidhi Vinayaka Swamy Devasthanam (Kanipakam), and Yadagirigutta Temple.',
          'Promotional film on Ahobilam Narasimha Swamy Devasthanam.',
          '3D virtual walk-through on Yadagirigutta Temple for Master Plan implementation.',
        ],
      },
    ],
    mahotsavContribution: {
      role: 'Event Head — Bhagavadgita Vishwa Mahotsav 2027',
      summary:
        'Leading the entire event-facing role with a blend of media, creative direction, and program-management experience to produce a spiritually profound, globally broadcast gathering.',
      points: [
        'Directing overall program architecture, ceremonial sequences, and stage storytelling.',
        'Coordinating live television broadcasts, digital streaming, and multi-camera international feeds.',
        'Aligning spiritual authenticity with state-of-the-art multimedia presentation.',
      ],
    },
    keyTakeaway:
      'A lifetime dedicated to bridging mainstream broadcasting, spiritual culture, and sacred storytelling.',
  },
  {
    id: 'k-satya-prasad',
    name: 'K. Satya Prasad',
    fullName: 'K. Satya Prasad',
    designation: 'Entrepreneur & Business Leader',
    roleInMahotsav: 'Business Leadership & Partnerships',
    category: 'leadership',
    categoryLabel: 'Key Leadership & Partners',
    image: '/images/team/k_satya_prasad.jpg',
    objectPosition: 'object-center',
    badge: 'Entrepreneurship & Infrastructure',
    shortIntro:
      'A diversified entrepreneur with a builder’s mindset since 2004, spanning infrastructure development, civil contracting, industrial ventures, digital media, technology, energy, and organized social welfare.',
    headline: 'A diversified entrepreneur with a builder’s mindset.',
    stats: [
      { value: 'Since 2004', label: 'Infrastructure-Sector Experience' },
      { value: 'Since 2020', label: 'Independent Civil Contracting' },
      { value: '10+', label: 'Business & Social Initiatives' },
      { value: 'Multi-Sector', label: 'Infrastructure to Digital Innovation' },
    ],
    biography: [
      'Entrepreneur, infrastructure professional and business leader with a professional journey spanning infrastructure development, civil contracting, mining and crushing, digital media, creative studios, energy exploration, food ventures, technology-enabled services, and social welfare.',
      'Satya Prasad’s career began with multinational infrastructure development companies in 2004 and evolved into independent contracting, industrial ventures, digital media, technology, energy, food-related enterprise, and social service.',
      'His profile adds an important entrepreneurial and business-development dimension to the team—connecting infrastructure experience, diversified enterprise, digital innovation, and social service with the larger vision of the Mahotsav.',
    ],
    expertise: [
      {
        title: 'Infrastructure Development',
        desc: 'Professional association with multinational infrastructure development companies, building a solid foundation in large-scale operations and project environments.',
      },
      {
        title: 'Civil Contracting & Operations',
        desc: 'Undertaking civil contracting activities across multiple states of India and managing complex site logistics and workforce demands.',
      },
      {
        title: 'Industrial & Resource Operations',
        desc: 'Established mining and crusher plant ventures in Telangana, supporting core construction and infrastructure supply chains.',
      },
      {
        title: 'Digital Media & Studio Production',
        desc: 'Spearheading online media, video communication, and miniature studios through SK Magic Creations, Wise Monkeys Media, and Bumble Bee.',
      },
      {
        title: 'Social Responsibility',
        desc: 'Translating business success into grassroots welfare through Mana Niswardh Seva Foundation.',
      },
    ],
    experience: [
      {
        role: 'Multinational Infrastructure Development',
        period: '2004 – 2020',
        description:
          'Deep operational association with multinational infrastructure companies, gaining rigorous experience in civil execution, project monitoring, and quality standards.',
      },
      {
        role: 'Independent Civil Contracting & Industrial Operations',
        period: '2020 – Present',
        description:
          'Entered independent civil contracting across multiple Indian states, expanding into resource-based operations including mining and crusher plants in Telangana.',
      },
      {
        role: 'Ventures in Media, Technology & Energy',
        period: 'Recent Years',
        description:
          'Founded and co-founded diverse enterprises in digital content creation, creative studios, renewable energy exploration, culinary brands, and mobile platforms.',
      },
    ],
    ventures: [
      {
        name: 'Civil Contracting',
        description: 'Independent contracting activities across various states of India.',
      },
      {
        name: 'Mining & Crusher Plants',
        description: 'Resource-based operations in Telangana supporting regional construction and infrastructure.',
      },
      {
        name: 'SK Magic Creations',
        description: 'Digital media, video production, and creative communication venture.',
      },
      {
        name: 'Wise Monkeys Media',
        description: 'Popular YouTube and content-led digital communication channel.',
      },
      {
        name: 'Bumble Bee',
        description: 'Kids miniature studio and specialized model shoot studio in Telangana.',
      },
      {
        name: 'Varenya Energy Technologies',
        description: 'Energy exploration and technological innovation initiative established in Telangana.',
      },
      {
        name: 'SK Magic Recipes Pvt. Ltd.',
        description: 'Food and culinary business initiative focused on Andhra Pradesh.',
      },
      {
        name: 'Bhiksha Mobile App',
        description: 'Service-based mobile application reflecting a commitment to practical digital solutions.',
      },
      {
        name: 'Mana Niswardh Seva Foundation',
        description: 'Social-welfare initiative focused on organized service, community relief, and social empowerment.',
      },
      {
        name: 'Real Business Matrix',
        description: 'Co-Founder, contributing to strategic business development, collaboration, and high-value partnerships.',
      },
    ],
    mahotsavContribution: {
      role: 'Business Leadership & Partnerships — Bhagavadgita Vishwa Mahotsav 2027',
      summary:
        'A diversified entrepreneur’s network and execution mindset supporting the Mahotsav through business relationships, strategic partnerships, resource coordination, and long-term ecosystem building.',
      points: [
        'Mobilizing corporate and industrial partners to support the Mahotsav’s infrastructure requirements.',
        'Providing strategic guidance on site civil works, vendor management, and logistics.',
        'Connecting digital media channels and outreach initiatives to amplify national visibility.',
      ],
    },
    keyTakeaway:
      'Building businesses. Creating opportunities. Serving society through visionary leadership.',
  },
  {
    id: 'malladi-anand',
    name: 'Malladi Anand',
    fullName: 'Malladi Anand',
    designation: 'Founder & Director — First Looks Events Pvt. Ltd.',
    roleInMahotsav: 'Event Strategy, Management & Marketing',
    category: 'leadership',
    categoryLabel: 'Key Leadership & Partners',
    image: '/images/team/malladi_anand.png',
    objectPosition: 'object-center',
    badge: 'Events & Live Experiences',
    shortIntro:
      '14 years experienced Events & Creative Professional and Founder of First Looks Events, having completed over 1,500+ successful projects and corporate and cultural productions nationwide.',
    headline: 'Creative thinking. Event discipline. Memorable execution.',
    stats: [
      { value: '14 Years', label: 'Events & Creative Experience' },
      { value: '1500+', label: 'Projects Completed' },
      { value: '1400+', label: 'Happy & Satisfied Clients' },
      { value: 'Mahotsav 2027', label: 'Event Strategy & Operations' },
    ],
    biography: [
      'A hands-on events professional combining strategy, creative planning, management, and on-ground execution across a broad range of live experiences.',
      'As Founder & Director of First Looks Events Pvt. Ltd., he brings a strong entrepreneurial approach and event discipline to the team, with a proven track record across high volumes of complex projects and diverse formats.',
      'His client-focused philosophy is built around reliable coordination, innovative production solutions, and smooth, flawless on-ground delivery.',
    ],
    expertise: [
      {
        title: 'Event Strategy & Concept Design',
        desc: 'Formulating end-to-end event concepts, stage visual architecture, attendee journey mapping, and creative branding.',
      },
      {
        title: 'Live Event Operations & Execution',
        desc: 'Leading on-ground logistics, security protocols, technical staging, audiovisual systems, and vendor orchestration.',
      },
      {
        title: 'Artist & Celebrity Management',
        desc: 'Coordinating high-profile artists, spiritual dignitaries, performers, and keynote speakers seamlessly.',
      },
      {
        title: 'Attendee & Crowd Management',
        desc: 'Handling hospitality, registration workflows, and crowd flow for massive gatherings and celebrations.',
      },
    ],
    experience: [
      {
        role: 'Founder & Director',
        organization: 'FIRST LOOKS EVENTS PVT. LTD.',
        period: '14 Years Leadership',
        description:
          'Directing comprehensive event planning, creative designing, production, and technical operations. Coordinated social events, corporate summits, musical festivals, fashion spectacles, and mega carnivals.',
        highlights: [
          'Organized end-to-end event planning, designing, and development',
          'Handled artist, dignitary, and celebrity management',
          'Managed complex attendee workflows and on-site hospitality',
          'Led multi-disciplinary production crews and operational teams',
        ],
      },
    ],
    achievements: [
      {
        category: 'Event Portfolio Highlights',
        items: [
          'Center Stage Mega Productions',
          'High-Profile New Year Galas & Festivities',
          'Large-Scale Cultural Holi Carnivals',
          'Celebrity & Dignitary Events',
          'Prestigious Social & Corporate Gatherings',
          'Nationwide Musical Concerts & Fashion Shows',
        ],
      },
    ],
    mahotsavContribution: {
      role: 'Event Strategy, Management & Marketing — Bhagavadgita Vishwa Mahotsav 2027',
      summary:
        'Bringing event planning, creative direction, operational coordination, and marketing experience to guarantee a world-class spiritual-cultural gathering.',
      points: [
        'Architecting venue layout, stage infrastructure, and audio-visual spatial flow for lakhs of pilgrims.',
        'Implementing strict operational disciplines and emergency-response safety protocols.',
        'Managing promotional activations and experiential marketing to engage global attendees.',
      ],
    },
    keyTakeaway:
      'Adding entrepreneurial energy and proven event-management discipline to translate grandeur into reality.',
  },
  {
    id: 'pyreddy-krishna-reddy',
    name: 'Pyreddy Krishna Reddy',
    fullName: 'Pyreddy Krishna Reddy',
    designation: 'Entrepreneur (Propel Forge) | Business Development',
    roleInMahotsav: 'Concept & IP, Relationship Management',
    category: 'leadership',
    categoryLabel: 'Key Leadership & Partners',
    image: '/images/team/pyreddy_krishna_reddy.jpg',
    objectPosition: 'object-center',
    badge: 'Business Development & IP',
    shortIntro:
      'An entrepreneur leading Propel Forge with over 14 years of expertise across business development, client relationships, creative thinking, and strategic execution.',
    headline: 'Business thinking with creative execution.',
    stats: [
      { value: '14+ Years', label: 'Professional Experience' },
      { value: 'Propel Forge', label: 'Entrepreneurial Leadership' },
      { value: 'Concept & IP', label: 'Strategic Ideation & Framing' },
      { value: 'Mahotsav 2027', label: 'Relationship Management & IP' },
    ],
    biography: [
      'A relationship-driven entrepreneur bringing more than a decade of experience in business development, client management, creative thinking, and execution.',
      'As head of Propel Forge, he specializes in identifying strategic opportunities, developing meaningful business alliances, and translating ambitious concepts into actionable initiatives.',
      'He brings an entrepreneurial mindset that connects visionary ideas with the people and resources required to build sustained momentum for transformative platforms.',
    ],
    expertise: [
      {
        title: 'Business Development',
        desc: 'Identifying market opportunities, forging strategic institutional relationships, and structuring collaborative growth models.',
      },
      {
        title: 'Relationship Management',
        desc: 'Building meaningful stakeholder and partner relationships with an emphasis on trust, transparency, and enduring collaboration.',
      },
      {
        title: 'Creative Thinking & IP',
        desc: 'Bringing an innovative perspective to intellectual-property development, program naming, and brand architecture.',
      },
      {
        title: 'Execution Discipline',
        desc: 'Combining strategic clarity with practical operational coordination to move concepts from planning into tangible outcomes.',
      },
    ],
    experience: [
      {
        role: 'Entrepreneur & Leader',
        organization: 'Propel Forge',
        period: '14+ Years Track Record',
        description:
          'Leading Propel Forge across client acquisitions, brand partnerships, strategic IP structuring, and operational execution for diverse corporate and cultural ventures.',
        highlights: [
          'Conceptualization and IP design for landmark events',
          'Institutional client engagement and stakeholder negotiations',
          'Operational roadmap creation and cross-functional team alignment',
        ],
      },
    ],
    mahotsavContribution: {
      role: 'Concept & IP, Relationship Management — Bhagavadgita Vishwa Mahotsav 2027',
      summary:
        'Driving conceptual thinking and intellectual-property development while building and managing key relationships for the historic gathering.',
      points: [
        'Protecting and standardizing the intellectual property and core messaging of the Vishwa Mahotsav.',
        'Cultivating relationships with corporate sponsors, cultural foundations, and patron networks.',
        'Aligning partner initiatives with the sacred purpose and global outreach goals of the event.',
      ],
    },
    keyTakeaway:
      'Connecting ideas, people, and execution to build lasting momentum for high-impact initiatives.',
  },
  {
    id: 'vemuri-shravani',
    name: 'Vemuri Shravani',
    fullName: 'Vemuri Sravani',
    designation: 'Director & Senior Anchor & Artist',
    roleInMahotsav: 'Content & Communications',
    category: 'directors',
    categoryLabel: 'Board of Directors',
    image: '/images/team/vemuri_shravani.png',
    objectPosition: 'object-center',
    badge: 'Content & Communications',
    shortIntro:
      'Senior media professional with 22 years of experience as a Senior Anchor and Artist, renowned for her devotional and cultural programming across leading television networks including Zee and Maa TV.',
    headline: 'A seasoned on-screen communicator with deep devotional media experience.',
    stats: [
      { value: '22 Years', label: 'Media Industry Experience' },
      { value: 'Senior Anchor', label: 'On-Screen Presentation & Programme Hosting' },
      { value: 'Devotional Media', label: 'Signature Work on Zee & Maa TV' },
      { value: 'Mahotsav 2027', label: 'Content & Communications' },
    ],
    biography: [
      'A senior media professional with 22 years of experience as a Senior Anchor and Artist, with a strong and celebrated body of work in devotional programming across leading television channels including Zee and Maa TV.',
      'Her profile combines anchoring, voice-over, content curation, and presentations—capabilities uniquely suited to devotional programming and audience-facing spiritual communication.',
      'Her signature strength is the ability to harmonize vocal cadence, stage presence, scriptural authenticity, and audience warmth for sacred cultural platforms.',
    ],
    expertise: [
      {
        title: 'Television & Live Anchoring',
        desc: 'Experienced as a Senior Anchor and Artist, bringing confident presentation, dignity, and audience connection to television broadcasting.',
      },
      {
        title: 'Voice Over & Narration',
        desc: 'Distinguished voice-over artistry for programme narration, sacred recitations, and documentaries, supporting clear and engaging delivery.',
      },
      {
        title: 'Devotional Content Curation',
        desc: 'Content-oriented media experience with deep sensitivity to devotional traditions, scriptural narratives, and audience communication.',
      },
      {
        title: 'Presentations & Ceremonial Hosting',
        desc: 'High-impact presentation skills honed through extensive television episodes, festive broadcasts, and live spiritual conferences.',
      },
    ],
    experience: [
      {
        role: 'Senior Anchor & Artist',
        organization: 'Leading Television Channels (Zee, Maa TV, Regional Broadcasters)',
        period: '22 Years Professional Career',
        description:
          'Hosted and anchored premier devotional, cultural, and spiritual series. Served as primary on-screen presenter and narrator for major religious festivities and televised discourses.',
        highlights: [
          'Anchored signature devotional episodes broadcast to millions across Zee and Maa TV',
          'Delivered narrative voice-overs for sacred temple documentaries and cultural epics',
          'Curated audience-facing content that resonates with multi-generational spiritual seekers',
        ],
      },
    ],
    achievements: [
      {
        category: 'Signature Strengths & Portfolio',
        items: [
          'Over two decades of continuous, acclaimed on-screen presence in devotional broadcasting.',
          'Specialist in sacred ceremonial commentary and live festive broadcast anchoring.',
          'Brings voice, presence, content, and emotional depth together for devotional and spiritual media.',
        ],
      },
    ],
    mahotsavContribution: {
      role: 'Content & Communications — Bhagavadgita Vishwa Mahotsav 2027',
      summary:
        'Contributing 22 years of media experience to the Content & Communications function—bringing expertise in anchoring, voice-over, scriptural narratives, and presentations to the Mahotsav.',
      points: [
        'Steering the devotional tone, spoken scripts, and on-stage presentation for all Mahotsav sessions.',
        'Hosting keynote addresses, sacred recitations, and broadcast media segments.',
        'Ensuring that every communication conveys the profound philosophical depth of the Bhagavadgita.',
      ],
    },
    keyTakeaway:
      '22 years of media experience and artistic mastery distilled into one powerful, reverent communication voice.',
  },
];
