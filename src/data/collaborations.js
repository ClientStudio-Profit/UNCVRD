// PLACEHOLDER DATA — no real clients, collaborators, or partnerships are
// represented here. Swap names and logo files once they are confirmed.
// Logos: transparent SVG/PNG, any proportion — the grid normalises height.

const img = (file) => `/assets/images/collaborations/${file}`;
const pad = (n) => String(n).padStart(2, "0");

export const clients = Array.from({ length: 8 }, (_, i) => ({
  name: `Client ${pad(i + 1)}`,
  logo: img(`clients/client-${pad(i + 1)}.svg`),
}));

export const collaborators = Array.from({ length: 8 }, (_, i) => ({
  name: `Collaborator ${pad(i + 1)}`,
  logo: img(`collaborators/collaborator-${pad(i + 1)}.svg`),
}));

export const featuredCollaborations = [
  {
    title: "Sample Campaign Title",
    category: "Brand Campaign",
    client: "Client 01",
    image: img("collabs-project-01.jpg"),
    description: "Placeholder description of a campaign film and what it set out to do.",
    projectSlug: "merekam-waktu",
  },
  {
    title: "Sample Commercial Title",
    category: "Commercial",
    client: "Client 02",
    image: img("collabs-project-02.jpg"),
    description: "Placeholder description of a digital campaign and the idea behind it.",
    projectSlug: "garis-waktu",
  },
  {
    title: "Sample Documentary Title",
    category: "Documentary",
    client: "Client 03",
    image: img("collabs-project-03.jpg"),
    description: "Placeholder description of a documentary and the people it follows.",
    projectSlug: "pulang",
  },
];

export const pillars = [
  { title: "Creative Storytelling", text: "A strong narrative for real impact.", icon: "clap" },
  { title: "Collaborative Process", text: "We work as a creative partner, not just a vendor.", icon: "users" },
  { title: "Production Excellence", text: "From concept to final delivery, handled with care.", icon: "layers" },
  { title: "Meaningful Results", text: "Visual content that connects and delivers.", icon: "bolt" },
];
