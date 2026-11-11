// PLACEHOLDER DATA — sample entries for layout testing only.
// These are not real UNCVRD projects. Replace every entry (and the image/video
// paths) with real work; the pages read everything from this file.

const img = (file) => `/assets/images/${file}`;
const vid = (file) => `/assets/videos/${file}`;

export const projectCategories = ["Film", "Commercial", "Documentary", "Photography"];

const defaultProcess = [
  { title: "Concept", text: "Placeholder: how the idea was found and shaped.", image: img("projects/project-alpha-bts-02.jpg") },
  { title: "Script", text: "Placeholder: writing, treatment, and planning.", image: img("projects/project-alpha-bts-03.jpg") },
  { title: "Production", text: "Placeholder: the shoot, crew, and locations.", image: img("projects/project-alpha-bts-01.jpg") },
  { title: "Post Production", text: "Placeholder: edit, grade, sound, and delivery.", image: img("projects/project-alpha-bts-04.jpg") },
];

const defaultCredits = [
  { role: "Director", name: "Name Placeholder" },
  { role: "Producer", name: "Name Placeholder" },
  { role: "Cinematographer", name: "Name Placeholder" },
  { role: "Editor", name: "Name Placeholder" },
  { role: "Music", name: "Name Placeholder" },
  { role: "Production", name: "UNCVRD" },
];

const defaultGallery = [1, 2, 3, 4].map((n) => img(`projects/project-alpha-bts-0${n}.jpg`));

const make = (p) => ({
  placeholder: true,
  client: "Client Placeholder",
  duration: "00 min",
  heroImage: img("projects/project-alpha-hero.jpg"),
  posterImage: img("projects/project-alpha-poster.jpg"),
  video: vid("projects/project-alpha-film.mp4"),
  trailer: vid("projects/project-alpha-trailer.mp4"),
  gallery: defaultGallery,
  process: defaultProcess,
  credits: defaultCredits,
  ...p,
});

export const projects = [
  make({
    slug: "kita-di-nanti",
    title: "Kita, Di Nanti",
    category: "Film",
    format: "Short Film",
    year: 2024,
    featured: true,
    cardImage: img("works/works-featured-01.jpg"),
    headline: "A story about waiting, hope, and what comes next.",
    description:
      "Sample synopsis. A quiet short film about someone who keeps waiting — not just for a person, but for the moment to finally move forward. Replace this text with the real project overview.",
  }),
  make({
    slug: "langit-jingga",
    title: "Langit Jingga",
    category: "Film",
    format: "Short Film",
    year: 2023,
    cardImage: img("works/works-project-01.jpg"),
    heroImage: img("works/works-project-01.jpg"),
    headline: "The last light of an ordinary day.",
    description: "Sample synopsis. Placeholder copy describing the story, its tone, and why it was made.",
  }),
  make({
    slug: "pulang",
    title: "Pulang",
    category: "Documentary",
    format: "Documentary",
    year: 2024,
    cardImage: img("works/works-project-02.jpg"),
    heroImage: img("works/works-project-02.jpg"),
    headline: "The long road back to where it started.",
    description: "Sample synopsis. Placeholder copy describing the subject, the access, and the approach.",
  }),
  make({
    slug: "merekam-waktu",
    title: "Merekam Waktu",
    category: "Commercial",
    format: "Commercial",
    year: 2023,
    cardImage: img("works/works-project-03.jpg"),
    heroImage: img("works/works-project-03.jpg"),
    headline: "A campaign about keeping the moments that matter.",
    description: "Sample synopsis. Placeholder copy describing the brief, the idea, and the result.",
  }),
  make({
    slug: "di-balik-layar",
    title: "Di Balik Layar",
    category: "Documentary",
    format: "Documentary",
    year: 2022,
    cardImage: img("works/works-project-04.jpg"),
    heroImage: img("works/works-project-04.jpg"),
    headline: "The crew, the chaos, and the craft behind a shoot.",
    description: "Sample synopsis. Placeholder copy describing the people and process on screen.",
  }),
  make({
    slug: "samudra",
    title: "Samudra",
    category: "Film",
    format: "Short Film",
    year: 2022,
    cardImage: img("works/works-project-05.jpg"),
    heroImage: img("works/works-project-05.jpg"),
    headline: "Facing something bigger than yourself.",
    description: "Sample synopsis. Placeholder copy describing the story and its visual language.",
  }),
  make({
    slug: "ruang-sunyi",
    title: "Ruang Sunyi",
    category: "Photography",
    format: "Photo Series",
    year: 2023,
    cardImage: img("works/works-project-06.jpg"),
    heroImage: img("works/works-project-06.jpg"),
    headline: "A still series about quiet rooms.",
    description: "Sample description. Placeholder copy for a photography series.",
  }),
  make({
    slug: "garis-waktu",
    title: "Garis Waktu",
    category: "Commercial",
    format: "Brand Film",
    year: 2022,
    cardImage: img("works/works-project-01.jpg"),
    heroImage: img("works/works-project-01.jpg"),
    headline: "A brand film told across three generations.",
    description: "Sample synopsis. Placeholder copy describing the brief, the idea, and the result.",
  }),
  make({
    slug: "wajah-kota",
    title: "Wajah Kota",
    category: "Photography",
    format: "Photo Series",
    year: 2022,
    cardImage: img("works/works-project-04.jpg"),
    heroImage: img("works/works-project-04.jpg"),
    headline: "Portraits of a city that never sits still.",
    description: "Sample description. Placeholder copy for a photography series.",
  }),
  make({
    slug: "sebelum-pagi",
    title: "Sebelum Pagi",
    category: "Documentary",
    format: "Documentary",
    year: 2021,
    cardImage: img("works/works-project-05.jpg"),
    heroImage: img("works/works-project-05.jpg"),
    headline: "The hours of work nobody sees.",
    description: "Sample synopsis. Placeholder copy describing the subject and the approach.",
  }),
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getAdjacentProjects = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    previous: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
};

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
