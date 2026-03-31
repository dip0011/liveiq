// ============================================================
// NAVIGATION
// ============================================================

export const NAV_LINKS_LANDING = [
  { label: "Agencies", href: "/agency" },
  { label: "Setup", href: "#ideas" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
];

export const NAV_LINKS_AGENCY = [
  { label: "Businesses", href: "/" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

// ============================================================
// LANDING PAGE — HERO
// ============================================================

export const LANDING_HERO = {
  headline: "The AI front desk built to grow Medical, Fitness, & Wellness franchises",
  subtitle: "Handles all calls + texts. Books appointments. Grows your business.",
  ctaPrimary: "See it in action",
  ctaSecondary: "Book a demo",
  features: [
    "HIPAA compliant",
    "Multi-location support",
    "Books from services",
    "Custom routing flows",
    "Speaks 20+ languages",
  ],
  personas: [
    {
      name: "Madison",
      role: "Receptionist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      color: "#7161a0",
      tags: [
        { label: "Call handled", icon: "PhoneCall" },
        { label: "Booked in EMR", icon: "CalendarCheck" },
      ],
    },
    {
      name: "Lucas",
      role: "Analyst",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      color: "#616ca0ff",
      tags: [
        { label: "Revenue up 30%", icon: "TrendingUp" },
        { label: "Report ready", icon: "BarChart3" },
      ],
    },
    {
      name: "Ava",
      role: "Marketer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      color: "#2d6d8aff",
      tags: [
        { label: "Campaign launched", icon: "Rocket" },
        { label: "Lead converted", icon: "Check" },
      ],
    },
  ],
};

// ============================================================
// LANDING PAGE — LOGOS
// ============================================================

export const LOGOS = [
  "iFlex",
  "PrimeHealth",
  "Bellatox",
  "Sequel",
  "Hand & Stone",
];

// ============================================================
// LANDING PAGE — TESTIMONIAL
// ============================================================

export const TESTIMONIAL = {
  title: "LiveIQ handled bookings, lead conversions, and upsells on its own.",
  quote: "\"Hear how a multi-unit VIO franchisee achieved >9x ROI for his business with LiveIQ\"",
  attribution: "Stanton",
  attributionRole: "VIO, MedSpa",
  youtubeId: "zSPp4E-gZtM",
};

// ============================================================
// LANDING PAGE — COMPARISON TABLE
// ============================================================

export const COMPARISON_TABLE = {
  headline: "Best-in-Industry AI",
  columns: ["Feature", "LiveIQ", "Competitors"],
  rows: [
    {
      feature: "Deep Integrations",
      description: "Booking system, CRM, web dashboards",
      liveiq: true,
      competitor: "limited",
    },
    {
      feature: "Powerful Customization",
      description: "Service-specific responses, customized intros, interaction style",
      liveiq: true,
      competitor: "limited",
    },
    {
      feature: "Intelligent Upselling",
      description: "AI-recommended upsells based on client history",
      liveiq: true,
      competitor: false,
    },
    {
      feature: "Omni-Channel",
      description: "Phone calls, SMS, chat",
      liveiq: true,
      competitor: "limited",
    },
    {
      feature: "Flexible Campaigns",
      description: "Book appointments, sell memberships, post-visit follow-up",
      liveiq: true,
      competitor: false,
    },
    {
      feature: "Seamless Human Interaction",
      description: "Smooth handoff to human staff when needed",
      liveiq: true,
      competitor: false,
    },
    {
      feature: "Multi-Location Tools",
      description: "Analytics, reporting, white-labelling",
      liveiq: true,
      competitor: false,
    },
  ],
};

// ============================================================
// LANDING PAGE — SETUP STEPS
// ============================================================

export const SETUP_STEPS = {
  headline: "5-Minute Setup",
  subtitle: "Onboard your new employee effortlessly in 3 easy steps",
  steps: [
    {
      number: "01",
      title: "Connect to your EMR / CRM",
      description:
        "Easily connect to your EMR & CRM via our easy 'sign in with Google' or direct API integration.",
    },
    {
      number: "02",
      title: "Tell the AI agents about your business",
      description:
        "Upload your service menu, brand guidelines, and FAQs so the AI can represent your business perfectly.",
    },
    {
      number: "03",
      title: "Launch your Campaigns",
      description:
        "Activate your outbound campaigns to re-engage past clients, fill cancellations, and watch the bookings flow in.",
    },
  ],
  integrationNote: "100+ integrations. New integrations ready in days.",
  integrationLogos: ["Hubspot", "Mindbody", "Boulevard", "Google Ads", "Facebook Ads", "Nextech", "Snowflake"],
};

// ============================================================
// LANDING PAGE — REVENUE CARDS
// ============================================================

export const REVENUE_CARDS = [
  {
    title: "Turn missed calls into profit",
    description:
      "Missed calls are often overlooked, but can have a huge impact on revenue, our AI makes sure no client goes unanswered",
    icon: "PhoneIncoming",
  },
  {
    title: "Convert leads into clients",
    description:
      "Convert new leads from your CRM, with automatic follow-ups and sales tactics to get them booked",
    icon: "UserPlus",
  },
  {
    title: "Fill cancellations",
    description:
      "Automatically find and fill cancelled slots on your calendar",
    icon: "CalendarCheck",
  },
  {
    title: "Re-activate existing clients",
    description:
      "Target past clients with special promos to get them back in the door",
    icon: "RefreshCw",
  },
  {
    title: "Sell membership plans",
    description:
      "Target frequent clients to upgrade them to membership plans",
    icon: "CreditCard",
  },
  {
    title: "Collect reviews & feedback",
    description:
      "Improve your reviews, and collect post-visit feedback, written straight into your EMR",
    icon: "Star",
  },
];

// ============================================================
// LANDING PAGE — FAQ
// ============================================================

export const LANDING_FAQ = {
  headline: "FAQ",
  subtitle:
    "Not sure if the AI front desk is right for you? Let's find a solution for your business",
  items: [
    {
      question: "Can I train the AI agents for my business?",
      answer:
        "Absolutely. LiveIQ learns your services, pricing, brand voice, and protocols during onboarding. You can continuously refine responses and add custom scripts for specific scenarios.",
    },
    {
      question: "What kind of privacy features are taken with my business's data?",
      answer:
        "We are fully HIPAA compliant with end-to-end encryption, SOC 2 Type II certified infrastructure, and strict data access controls. Your patient and client data is never shared or used for training.",
    },
    {
      question: "Can the AI receptionist conduct private consultations?",
      answer:
        "The AI can handle initial intake and screening conversations privately and securely. For sensitive medical discussions, it seamlessly transfers to your human staff with full context.",
    },
    {
      question: "Can I have conversations my AI agents are having, and step in when needed?",
      answer:
        "Yes. Our live dashboard lets you monitor all active conversations in real-time. You can jump into any conversation at any point, and the AI will smoothly hand off to you.",
    },
    {
      question: "How long does the setup take?",
      answer:
        "Most businesses are fully live within 5 minutes. Connect your CRM, upload your service info, and launch. Our team handles the heavy lifting during onboarding at no extra cost.",
    },
  ],
};

// ============================================================
// LANDING PAGE — PRICING
// ============================================================

export const PRICING_TIERS = [
  {
    name: "Starter",
    description: "Best suited single-location businesses",
    cta: "Get a quote",
    featured: false,
  },
  {
    name: "Enterprise",
    description: "For multi-location businesses",
    cta: "Get a quote",
    featured: true,
  },
  {
    name: "Whitelabel",
    description: "For marketing agencies, business consultancies, and educators",
    cta: "Get a quote",
    featured: false,
  },
];

// ============================================================
// AGENCY PAGE — HERO
// ============================================================

export const AGENCY_HERO = {
  headline: "Scale your agency with a world-class AI Concierge",
  subtitle: "Convert leads. Track attribution. Win and retain more clients.",
  ctaPrimary: "Take my agency to new heights",
  features: [
    "Schedules leads over phone + text",
    "Integrates with client booking systems",
    "Measures ROAS against client revenue",
    "Runs end-to-end attribution",
    "Qualifies and closes like a human",
  ],
  persona: {
    name: "Hi, I'm Peter",
    role: "The Ultimate Agency Concierge",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
};

// ============================================================
// AGENCY PAGE — TRUST BAR
// ============================================================

export const AGENCY_TRUST = {
  headline:
    "Trusted by Forward-Thinking Agencies across Fitness, Aesthetics, Dental, Chiropractic, Weight Loss, and more",
  subtitle: "Serving over 1,000+ businesses together",
};

// ============================================================
// AGENCY PAGE — SUPER POWERS COMPARISON
// ============================================================

export const AGENCY_COMPARISON = {
  headline: "Give your agency super powers",
  rows: [
    {
      point: "Speed to Lead",
      withLiveIQ: "Immediately reach out to all leads over call, text, or email",
      without: "Let leads fall through the crack",
    },
    {
      point: "Sales Expertise",
      withLiveIQ: "Qualify, nurture, and handle objections like a human",
      without: "Employ expensive human reps, not augmented by AI tools",
    },
    {
      point: "Booking Setup",
      withLiveIQ: "Schedule directly into clients' booking system",
      without: "Book into separate calendar, frustrating clients",
    },
    {
      point: "Analytics",
      withLiveIQ: "Use direct integrations to map attribution, ROI, and LTV",
      without: "Require manual data entry, causing painful and inaccurate reporting",
    },
    {
      point: "Pricing Model",
      withLiveIQ:
        "Can use a commission model, automatically charging clients using revenue data",
      without: "Always require an upfront fixed rate, missing out on potential clients",
    },
    {
      point: "Ticket Price",
      withLiveIQ: "Automatically upsell high-ticket items to increase revenue",
      without: "Stick to basic promo offer",
    },
  ],
};

// ============================================================
// AGENCY PAGE — FAQ
// ============================================================

export const AGENCY_FAQ = {
  headline: "FAQ",
  subtitle: "Not sure if the AI Concierge is right for your agency?",
  items: [
    {
      question: "Can I train the AI agents to close leads how I'd like?",
      answer:
        "Yes. You fully control the sales scripts, objection handling, and closing strategies. The AI adapts to your proven playbook while learning from every interaction to improve conversion rates.",
    },
    {
      question: "Is the AI concierge industry-specific?",
      answer:
        "LiveIQ is built specifically for service-based industries like fitness, aesthetics, dental, chiropractic, and more. The AI understands industry terminology, booking workflows, and client expectations.",
    },
    {
      question: "Can the AI concierge live in my CRM?",
      answer:
        "Absolutely. LiveIQ integrates directly with your existing CRM and booking systems. All conversations, bookings, and client data sync seamlessly, no separate platform to manage.",
    },
    {
      question:
        "Can I use this alongside my humans, to scale my concierge business?",
      answer:
        "That's exactly how most agencies use it. The AI handles the volume, first-touch, follow-ups, after-hours, while your human team focuses on high-value consultations and relationship building.",
    },
  ],
};

// ============================================================
// FOOTER
// ============================================================

export const FOOTER = {
  copyright: "\u00A9 2025 MedAcquire Inc. d/b/a LiveIQ AI. All rights reserved.",
  address: "199 Chrystie St, New York, NY 10002, United States",
  hours: "9:00AM-5:00PM",
  phone: "(646) 808-7383",
  policies: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "End-User License Agreement", href: "/eula" },
    { label: "Fulfillment Policy", href: "/fulfillment" },
    { label: "TCPA Policy", href: "/tcpa" },
    { label: "HIPAA Policy", href: "/hipaa" },
    { label: "Cybersecurity Policy", href: "/cybersecurity" },
    { label: "Spam Policy", href: "/spam" },
  ],
};
