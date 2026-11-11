// PLACEHOLDER DATA — sample editorial entries for layout testing.
// These are not published UNCVRD articles. Body copy is filler written to
// exercise every content block type the article template supports:
// heading, paragraph, image, quote, list, video.

const img = (file) => `/assets/images/journal/${file}`;

export const articleCategories = ["Film", "Creative", "Production", "Behind The Scenes"];

const body = (topic) => [
  { type: "heading", text: "Where it starts" },
  { type: "paragraph", text: `Sample paragraph about ${topic}. This text stands in for the real article and exists so the layout, measure, and rhythm of long-form reading can be judged properly.` },
  { type: "paragraph", text: "A second sample paragraph. Real articles will go into more depth here: decisions made, things that went wrong, and what the team would do differently next time." },
  { type: "image", src: img("journal-article-01.jpg"), caption: "Placeholder caption — describe the frame and credit the photographer." },
  { type: "heading", text: "What we pay attention to" },
  { type: "list", items: ["Sample point about story and intention.", "Sample point about light, lens, and movement.", "Sample point about the people in front of and behind the camera."] },
  { type: "quote", text: "Placeholder pull quote — one memorable line from the piece.", cite: "Name Placeholder, Role" },
  { type: "paragraph", text: "Sample paragraph leading into a clip from the production." },
  { type: "video", src: "/assets/videos/home/home-showreel.mp4", poster: img("journal-banner.jpg"), caption: "Video embed placeholder." },
  { type: "heading", text: "What stays with us" },
  { type: "paragraph", text: "Closing sample paragraph. Replace the whole body with the real story when it is ready." },
];

const gallery = [img("journal-article-01.jpg"), img("journal-article-02.jpg"), img("journal-article-03.jpg")];

export const articles = [
  {
    slug: "behind-the-making-of-a-short-film",
    title: "Behind The Making of a Short Film",
    category: "Production",
    featured: true,
    excerpt: "A look at the creative journey, challenges, and little moments from the production of a short film.",
    date: "2026-01-12",
    readingTime: 8,
    cover: img("journal-featured.jpg"),
    intro: "Sample introduction. Every film starts as a sentence someone could not stop thinking about. This is a placeholder account of how one gets from that sentence to a finished cut.",
    content: body("the making of a short film"),
    gallery,
  },
  {
    slug: "the-art-of-cinematic-storytelling",
    title: "The Art of Cinematic Storytelling",
    category: "Film",
    excerpt: "How visual language, emotion, and rhythm come together to create a meaningful story.",
    date: "2026-01-05",
    readingTime: 6,
    cover: img("journal-article-01.jpg"),
    intro: "Sample introduction. What makes an image feel like cinema rather than coverage? A placeholder essay on framing, pacing, and restraint.",
    content: body("cinematic storytelling"),
    gallery,
  },
  {
    slug: "a-day-inside-our-production-set",
    title: "A Day Inside Our Production Set",
    category: "Behind The Scenes",
    excerpt: "From setup to final take. A behind-the-scenes look at the workflow on set.",
    date: "2025-12-18",
    readingTime: 5,
    cover: img("journal-article-02.jpg"),
    intro: "Sample introduction. Call time, first setup, the long middle, and the last shot of the day — a placeholder walk through a shooting day.",
    content: body("a day on set"),
    gallery,
  },
  {
    slug: "from-creative-brief-to-final-film",
    title: "From Creative Brief to Final Film",
    category: "Creative",
    excerpt: "How an initial idea evolves into a fully realized film through collaboration and craft.",
    date: "2025-12-02",
    readingTime: 7,
    cover: img("journal-article-03.jpg"),
    intro: "Sample introduction. A brief is a question. This placeholder piece follows one from first meeting to final delivery.",
    content: body("turning a brief into a film"),
    gallery,
  },
];

export const getArticle = (slug) => articles.find((a) => a.slug === slug);

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });

// Plain text used by the journal search.
export const articleSearchText = (a) =>
  [a.title, a.excerpt, a.intro, ...a.content.map((b) => b.text || (b.items || []).join(" ") || "")].join(" ").toLowerCase();
