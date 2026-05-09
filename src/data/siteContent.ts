// ─────────────────────────────────────────────────────
// Site Content — All copy lives here for easy updates
// ─────────────────────────────────────────────────────

export const siteContent = {
  brand: {
    name: "Chu-Chi Saunders",
    org: "Chuchismilkshake Events",
    phone: "(347) 972-9467",
    phoneHref: "tel:3479729467",
    eyebrow: "Curator · Podcaster · Community Builder",
    tagline: "Amplifying Art · Elevating Voices · Serving Community",
  },

  hero: {
    headline: "Amplifying Artists. Feeding Communities. Building Culture.",
    subheadline:
      "Led by Chu-Chi Saunders, Chuchismilkshake Events supports emerging artists, curates community-centered showcases, creates media platforms, and gives back through nonprofit outreach.",
    ctas: [
      { label: "Join the Artist Community", href: "#showcase", variant: "default" as const },
      { label: "Explore the Podcast", href: "#podcast", variant: "outline" as const },
      { label: "Support the Mission", href: "#nonprofit", variant: "secondary" as const },
    ],
  },

  missionCards: [
    {
      id: "showcase",
      icon: "🎤",
      title: "Artist Showcase",
      description:
        "Performance opportunities, artist development, branding guidance, networking events, and workshops focused on music business fundamentals.",
      accent: "gold",
      href: "#showcase",
    },
    {
      id: "podcast",
      icon: "🎙️",
      title: "Podcast & Media",
      description:
        "Real conversations with artists, community leaders, entrepreneurs, and cultural voices shaping the community.",
      accent: "berry",
      href: "#podcast",
    },
    {
      id: "nonprofit",
      icon: "💜",
      title: "Nonprofit Outreach",
      description:
        "Committed to serving people in need through food distribution, community-centered action, and supporting the homeless.",
      accent: "sage",
      href: "#nonprofit",
    },
  ],

  overview: {
    headline: "More Than Events — A Movement",
    body: [
      "Chu-Chi Saunders is building more than events — she is building a movement.",
      "Through Chuchismilkshake Events, she creates opportunities for emerging artists, amplifies community voices through media, and gives back through nonprofit outreach focused on feeding and supporting the homeless.",
      "From artist showcases and podcast conversations to street team promotion and direct community care, Chu-Chi's work connects creativity, culture, and service.",
    ],
  },

  artistShowcase: {
    label: "Chuchismilkshake Events",
    title: "Where Emerging Artists Rise",
    intro: [
      "Chuchismilkshake Events supports emerging and independent artists by providing performance opportunities, artist development, branding guidance, networking events, collaborative projects, creative spaces, and workshops focused on music business fundamentals.",
      "Artist development is in our DNA. We don't just book shows — we invest in the people who make music with purpose. Every showcase is paired with networking access, branding mentorship, and music business education.",
    ],
    stats: [
      { value: "01", label: "Nonprofit Founded" },
      { value: "∞", label: "Artists Supported" },
      { value: "NYC", label: "Based & Community-Rooted" },
    ],
    services: [
      {
        title: "Live Showcases",
        description:
          "Performance opportunities designed to put emerging artists in front of real audiences and industry professionals who can make a difference.",
      },
      {
        title: "Artist Development",
        description:
          "Branding guidance, image consulting, and strategic coaching to help artists present themselves with confidence and clarity.",
      },
      {
        title: "Networking Events",
        description:
          "Curated rooms where connections are made, collaborations are born, and careers take a turn for the better.",
      },
      {
        title: "Creative Spaces",
        description:
          "Access to collaborative environments where artists can create, workshop new material, and build with like-minded creatives.",
      },
      {
        title: "Business Workshops",
        description:
          "Education-focused sessions on music business fundamentals — royalties, publishing, licensing, brand deals, and more.",
      },
      {
        title: "Community Access",
        description:
          "Become part of a growing movement of empowered, purposeful artists who lift as they climb.",
      },
    ],
  },

  podcast: {
    label: "On The Spot with Chu",
    title: "The Conversation Continues Here",
    description:
      "On The Spot with Chu creates space for real conversations with artists, community leaders, entrepreneurs, organizers, and cultural voices. Through interviews and storytelling, Chu-Chi highlights the people, movements, and creative journeys shaping the community.",
    tags: ["Music Industry", "Artist Stories", "Community", "Empowerment"],
    episodes: [
      {
        number: "01",
        title: "The Independent Artist in 2025: Navigating Without a Label",
        description:
          "From distribution deals to sync licensing — what every unsigned artist needs to know right now.",
        tag: "Music Business",
      },
      {
        number: "02",
        title: "Building Community Before the Clout",
        description:
          "Why grassroots connection always outlasts viral moments — and how to build something that lasts.",
        tag: "Community",
      },
      {
        number: "03",
        title: "When Your Art Becomes Your Nonprofit",
        description:
          "Chu-Chi's story: from curator to founder, and the moment the mission became bigger than the show.",
        tag: "Founder Story",
      },
      {
        number: "04",
        title: "Feeding the Body, Feeding the Soul: Art Meets Outreach",
        description:
          "How Chuchismilkshake Events bridges the gap between creative empowerment and direct community service.",
        tag: "Nonprofit",
      },
    ],
  },

  nonprofit: {
    label: "Chu-Chi Saunders Networking Organization",
    title: "Art That Feeds the World",
    description:
      "The Chu-Chi Saunders Networking Organization is committed to serving people in need through nonprofit outreach, food distribution, and community-centered action. The organization works to support the homeless and strengthen local neighborhoods.",
    quote:
      "This is more than just an opportunity — it is a movement centered around empowerment, collaboration, and long-term success.",
    founderLetter: [
      "The Chu-Chi Saunders Networking Organization was founded on the belief that every person — housed or unhoused, signed or unsigned, established or just beginning — deserves dignity, support, and access to opportunity.",
      "We recognize the challenges that upcoming artists face, from limited resources and exposure to the need for professional development and networking. And we recognize that those same systemic barriers live in our streets.",
      "Our work ties these truths together. When you attend one of our showcases, contribute to our mission, or spread the word about what we do — you are directly contributing to a world where talent is nurtured and no one is left behind.",
    ],
    impactItems: [
      "Feeding and supporting unhoused members of our community through direct outreach and resource distribution",
      "Providing a platform where emerging artists can access real opportunities without financial barriers",
      "Bridging the gap between creative communities and underserved neighborhoods through multicultural outreach",
      "Offering education, mentorship, and development support to artists who lack industry access",
      "Hosting events that invite everyone — regardless of background, language, or means — to participate and belong",
    ],
    getInvolved: [
      {
        title: "Volunteer",
        description:
          "Join our street team or help with community outreach events. We welcome people from all backgrounds and languages.",
      },
      {
        title: "Donate",
        description:
          "Every contribution goes directly toward feeding unhoused community members and supporting emerging artist programs.",
      },
      {
        title: "Partner With Us",
        description:
          "Event planners, venues, local businesses, and brands — let's build something that matters together.",
      },
    ],
  },

  streetTeam: {
    label: "Grassroots Engagement",
    title: "The Bridge Between Events & Community",
    description:
      "The Street Team serves as the bridge between event organizers and the community. Through direct outreach, multicultural communication, multilingual engagement, local business outreach, and neighborhood promotion, the team helps increase event visibility, attendance, and community participation.",
    tags: [
      "Community Liaison",
      "Multicultural Outreach",
      "Event Promotion",
      "Multilingual",
      "Grassroots Engagement",
      "Neighborhood Promotion",
      "Local Business Outreach",
    ],
    services: [
      {
        title: "Direct Community Outreach",
        description:
          "Personally connecting with neighborhoods, residents, and local organizations to drive real community engagement for every event.",
      },
      {
        title: "Multicultural Communication",
        description:
          "Reaching diverse communities through culturally sensitive, multilingual outreach that ensures everyone feels welcome and informed.",
      },
      {
        title: "Local Business Partnerships",
        description:
          "Building bridges with local businesses to create mutual support networks that benefit both events and the surrounding community.",
      },
      {
        title: "Event Visibility & Promotion",
        description:
          "Boots-on-the-ground promotion that goes beyond social media — real people sharing real opportunities with real neighbors.",
      },
    ],
  },

  contact: {
    label: "Get In Touch",
    title: "Let's Build Something Together",
    description:
      "Whether you're an artist looking for opportunities, a podcaster with a story, a volunteer ready to serve, or a partner with a vision — we want to hear from you.",
    interests: [
      "Artist Development",
      "Podcast Feature",
      "Nonprofit / Volunteering",
      "Street Team Services",
      "Partnership",
    ],
  },

  footer: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Showcase", href: "#showcase" },
      { label: "Podcast", href: "#podcast" },
      { label: "Nonprofit", href: "#nonprofit" },
      { label: "Street Team", href: "#street-team" },
      { label: "Contact", href: "#contact" },
    ],
  },
};
