// All programme content lives here so copy can be edited without touching layout code.

export const LINKS = {
  video: "https://chat.whatsapp.com/DsQIKQtU03z1OQUoM64RRj?mode=gi_t",
  automation: "https://chat.whatsapp.com/Jwpr4enxZGZ4zQCU9HK92q?mode=gi_t",
  enquiry: "https://wa.me/2347073533116",
  phoneDisplay: "0707 3533 116",
  phoneTel: "tel:+2347073533116",
  site: "https://mysapif.com",
} as const;

export const START_DATE = "November 23, 2026";

// Price per course. Edit here and the page and the homepage popup update together.
export const PRICE = {
  current: "\u20A610,000",
  original: "\u20A650,000",
  note: "Limited time \u00B7 one-off price",
} as const;

export type TrackId = "video" | "automation";

export type Step = {
  id: string;
  kind: "week" | "final" | "capstone";
  label: string; // short label for the rail, e.g. "Week 1"
  title: string;
  topics?: string[];
  outcomeLabel?: string; // "Practical outcome" | "Practical build"
  outcome?: string;
  extra?: string;
  pipeline?: string[];
  projects?: string[];
  closing?: { title: string; items: string[] };
  abilities?: string[];
};

export type Track = {
  id: TrackId;
  tab: string;
  letter: string;
  title: string;
  subtitle: string;
  facts: string[];
  steps: Step[];
};

export const VIDEO_TRACK: Track = {
  id: "video",
  tab: "AI Video Creation",
  letter: "A",
  title: "AI Video Creation",
  subtitle: "AI Video Creation",
  facts: ["Four weeks"],
  steps: [
    {
      id: "v1",
      kind: "week",
      label: "Week 1",
      title: "AI Prompt Engineering & Video Concept Development",
      topics: [
        "Introduction to AI content and video generation.",
        "AI tools and their applications.",
        "Prompt engineering fundamentals.",
        "Understanding effective prompt structure.",
        "Writing prompts for images and videos.",
        "Using ChatGPT for brainstorming.",
        "Developing video ideas and scripts.",
        "Scene-by-scene planning.",
      ],
      outcomeLabel: "Practical outcome",
      outcome:
        "Develop a video concept, script and prompts for generating AI content.",
    },
    {
      id: "v2",
      kind: "week",
      label: "Week 2",
      title: "AI Image Generation & Character Development",
      topics: [
        "Introduction to AI image generation.",
        "Creating realistic AI-generated images.",
        "Composition, lighting, camera angles and visual styles.",
        "Character consistency and character sheets.",
        "Product images and marketing visuals.",
        "Creating scenes and environments.",
      ],
      outcomeLabel: "Practical outcome",
      outcome:
        "Generate AI images, develop characters and create visual references for video projects.",
    },
    {
      id: "v3",
      kind: "week",
      label: "Week 3",
      title: "AI Video Generation & Animation",
      topics: [
        "Introduction to AI video generation.",
        "Image-to-video and text-to-video generation.",
        "Turning AI images into videos.",
        "Writing motion prompts.",
        "Camera movements and character actions.",
        "Maintaining visual consistency.",
        "Generating short video sequences.",
        "Common AI video generation errors and how to minimize them.",
      ],
      outcomeLabel: "Practical outcome",
      outcome:
        "Transform images into videos, direct movement and create short video sequences.",
    },
    {
      id: "v4",
      kind: "week",
      label: "Week 4",
      title: "AI Video Production, UGC & Brand Commercials",
      topics: [
        "AI-generated UGC content.",
        "Creating UGC videos for businesses.",
        "AI-generated commercials and product advertisements.",
        "Developing concepts and storyboards.",
        "Creating multi-scene advertisements.",
        "Voiceovers, background music and sound effects.",
        "Editing with CapCut.",
        "Transitions, timing, text and video polishing.",
        "Exporting videos for social media.",
      ],
      outcomeLabel: "Practical outcome",
      outcome: "Create AI-generated UGC videos and brand commercials.",
    },
    {
      id: "vf",
      kind: "final",
      label: "Final projects",
      title: "Final Video Creation Projects",
      projects: ["One short AI UGC video.", "One AI brand commercial."],
      extra: "The projects demonstrate the complete creative process.",
      pipeline: [
        "Idea",
        "Prompt",
        "Image Generation",
        "Video Generation",
        "Editing",
      ],
    },
  ],
};

export const AUTOMATION_TRACK: Track = {
  id: "automation",
  tab: "AI Automation (Make.com)",
  letter: "B",
  title: "AI Automation",
  subtitle: "SAPIF AI Automation Class, Edition 2",
  facts: [
    "Four weeks",
    "One main build per week",
    "All lessons recorded",
    "Hands-on practical training",
    "Final capstone project",
  ],
  steps: [
    {
      id: "a1",
      kind: "week",
      label: "Week 1",
      title: "Automation Foundations",
      topics: [
        "Understanding automation.",
        "Triggers, actions, modules and scenarios.",
        "Getting started with Make.com.",
        "Building and connecting workflows.",
      ],
      outcomeLabel: "Practical build",
      outcome: "Form → Google Sheets → Notification",
      extra:
        "Participants build an automation that captures form responses, stores the information in Google Sheets and sends a notification.",
      pipeline: ["Form", "Google Sheets", "Notification"],
    },
    {
      id: "a2",
      kind: "week",
      label: "Week 2",
      title: "Data and APIs",
      topics: [
        "Webhooks.",
        "JSON.",
        "Data mapping.",
        "Routers.",
        "Filters.",
        "Error handling.",
        "Connecting external data sources.",
      ],
      outcomeLabel: "Practical build",
      outcome: "Pull data from a public API into a Google Sheet.",
      pipeline: ["Public API", "Google Sheet"],
    },
    {
      id: "a3",
      kind: "week",
      label: "Week 3",
      title: "AI in Workflows and AI Agents",
      topics: [
        "Structured prompting.",
        "AI-powered classification.",
        "Information extraction.",
        "Summarization.",
        "Integrating AI into workflows.",
        "AI agents versus fixed workflows.",
        "Agent tools and memory.",
        "Failure handling.",
      ],
      outcomeLabel: "Practical build",
      outcome:
        "An intelligent email triage workflow that categorizes incoming emails and drafts replies.",
      extra:
        "Participants are also introduced to how simple research or customer support agents can be built and used.",
      pipeline: ["Incoming email", "AI categorizes", "Draft reply"],
    },
    {
      id: "a4",
      kind: "week",
      label: "Week 4",
      title: "Sales and Marketing Automation",
      topics: [
        "Lead capture.",
        "Lead enrichment.",
        "Automated follow-up sequences.",
        "Connecting lead information to CRM systems.",
        "Building automated sales and marketing workflows.",
      ],
      outcomeLabel: "Practical build",
      outcome: "A lead-to-CRM pipeline with automated follow-up.",
      pipeline: ["Lead capture", "CRM", "Follow-up"],
    },
    {
      id: "ac",
      kind: "capstone",
      label: "Capstone",
      title: "Capstone Project",
      outcomeLabel: "The project",
      outcome:
        "Each participant automates a real workflow for a real person or business and demonstrates the completed system.",
      closing: {
        title: "The programme concludes with a practical session on",
        items: [
          "Packaging automation services.",
          "Understanding the value of automation solutions.",
          "Pricing automation skills.",
        ],
      },
      abilities: [
        "Connect different applications.",
        "Automate repetitive tasks.",
        "Work with APIs, webhooks and structured data.",
        "Integrate AI into everyday workflows.",
        "Build lead management and follow-up systems.",
        "Understand and build simple AI agents.",
        "Package and price automation solutions.",
      ],
    },
  ],
};

export const TRACKS: Record<TrackId, Track> = {
  video: VIDEO_TRACK,
  automation: AUTOMATION_TRACK,
};

export const MARQUEE = [
  "AI prompt engineering",
  "AI image generation",
  "Character development",
  "AI video generation",
  "Animation and motion",
  "UGC content",
  "Brand commercials",
  "Video editing with CapCut",
  "Webhooks and JSON",
  "AI in workflows",
  "AI agents",
  "Lead-to-CRM pipelines",
];

export const VIDEO_AREAS = [
  "AI prompt engineering",
  "AI image generation",
  "Character development",
  "AI video generation",
  "Animation and motion",
  "UGC content",
  "Brand commercials",
  "Video editing with CapCut",
];

export const AUTOMATION_HIGHLIGHTS = [
  "Four-week training programme",
  "One main build per week",
  "All lessons recorded",
  "Practical projects",
  "Final capstone project",
];

export const BUILD_VIDEO = [
  {
    name: "AI-generated UGC content",
    note: "A short UGC-style video for a business.",
  },
  {
    name: "AI brand commercials",
    note: "A multi-scene advertisement, from storyboard to export.",
  },
];

export const BUILD_AUTOMATION = [
  { name: "Form-to-Google-Sheets automation", flow: ["Form", "Google Sheets", "Notification"] },
  { name: "API-to-Sheets workflow", flow: ["Public API", "Google Sheet"] },
  { name: "AI email triage workflow", flow: ["Email", "AI classifies", "Draft reply"] },
  { name: "Lead-to-CRM pipeline", flow: ["Lead", "CRM", "Follow-up"] },
  { name: "Simple AI agent", flow: ["Request", "Tools + memory", "Response"] },
  { name: "Final real-world automation capstone", flow: ["Real workflow", "Automated", "Demonstrated"] },
];

export const WHY = [
  { k: "Practical", v: "Practical, hands-on learning." },
  { k: "Project-based", v: "Project-based experience." },
  { k: "Real-world", v: "Exposure to real-world AI applications." },
  { k: "By building", v: "Learning by building." },
  { k: "Demonstrable", v: "Skills you can show through real projects." },
  { k: "Creative + technical", v: "Explore both sides of what AI can do." },
];
