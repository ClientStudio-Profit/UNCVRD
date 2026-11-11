// FAQ content. Answers are clearly-labelled PLACEHOLDERS — they are not official
// UNCVRD policy, pricing, or timelines. Replace each answer before launch.

export const faqCategories = [
  { id: "general", label: "General", icon: "chat" },
  { id: "services", label: "Services", icon: "camera" },
  { id: "process", label: "Process", icon: "clap" },
  { id: "budget", label: "Project & Budget", icon: "coins" },
  { id: "collaboration", label: "Collaboration", icon: "handshake" },
];

const placeholder = (hint) => `Placeholder answer — ${hint} Replace this text with the studio's confirmed answer.`;

export const faqs = [
  { category: "general", question: "What is UNCVRD?", answer: placeholder("a short description of the studio and the kind of work it makes.") },
  { category: "general", question: "Where is UNCVRD based?", answer: placeholder("the studio's location and whether it travels for shoots.") },
  { category: "services", question: "What services do you offer?", answer: placeholder("a summary of the service list, linking to the Services page.") },
  { category: "services", question: "Can UNCVRD handle the entire production?", answer: placeholder("whether end-to-end production is offered and what that covers.") },
  { category: "process", question: "How does the production process work?", answer: placeholder("the stages from brief to delivery.") },
  { category: "process", question: "How long does a typical project take?", answer: placeholder("typical timelines by project type. No durations are stated yet.") },
  { category: "budget", question: "How is the project budget determined?", answer: placeholder("the factors that shape a quote. No pricing is stated yet.") },
  { category: "budget", question: "Can I request a custom quotation?", answer: placeholder("how to request a quote and what information to include.") },
  { category: "collaboration", question: "Can we collaborate on a custom project?", answer: placeholder("how custom or co-produced projects are approached.") },
  { category: "collaboration", question: "Do you work with external talent or partners?", answer: placeholder("how the studio works with freelancers, agencies, and partners.") },
];
