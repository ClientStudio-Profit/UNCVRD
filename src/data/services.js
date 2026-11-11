// Service catalogue. Copy is realistic PLACEHOLDER text — it describes the kind
// of work, not verified company claims. Edit freely.

const img = (file) => `/assets/images/services/${file}`;

const detailImages = {
  heroImage: img("service-detail-hero.jpg"),
  overviewImage: img("service-detail-overview.jpg"),
  capabilitiesImage: img("service-detail-capabilities.jpg"),
  closingImage: img("service-detail-closing.jpg"),
};

const stages = (items) =>
  items.map(([title, text], i) => ({ title, text, image: img(`service-detail-process-0${i + 1}.jpg`) }));

export const workflow = [
  { title: "Brief", text: "Understand your goal and vision.", icon: "bulb" },
  { title: "Concept", text: "Develop the idea and creative direction.", icon: "pen" },
  { title: "Production", text: "Bring the concept to life on set.", icon: "camera" },
  { title: "Post Production", text: "Edit, grade, and refine the story.", icon: "sliders" },
  { title: "Delivery", text: "Hand over the finished production.", icon: "play" },
];

export const services = [
  {
    slug: "film-production",
    number: "01",
    title: "Film Production",
    titleLines: ["Film", "Production"],
    subtitle: "End-to-end film production that turns ideas into cinematic stories.",
    description: "Full-scale film production, from development to final cut.",
    image: img("service-film-production.jpg"),
    overviewTitle: "From concept to screen.",
    overview:
      "We handle the production journey from early development and creative planning through the shoot and final delivery. Short film, branded film, or long-form narrative — the approach stays focused on story and craft.",
    deliverables: [
      { title: "Narrative Film", text: "Short film, feature, series" },
      { title: "Branded Film", text: "Brand story, campaign film" },
      { title: "Documentary", text: "Real stories, people, culture" },
    ],
    capabilities: [
      "Development & concepting",
      "Scriptwriting & screenplay",
      "Pre-production (casting, locations, scheduling)",
      "Production (shooting & directing)",
      "Post-production (editing, color, sound)",
      "Final delivery in multi-platform formats",
    ],
    process: stages([
      ["Develop", "Shape the idea and build the story."],
      ["Pre-Production", "Plan, prepare, and set everything in motion."],
      ["Production", "Bring the story to life on location or in studio."],
      ["Post-Production", "Edit, grade, and craft the final film."],
    ]),
    relatedCategories: ["Film", "Documentary"],
    closingTitle: "Let's create your next film.",
    ...detailImages,
  },
  {
    slug: "commercial-advertising",
    number: "02",
    title: "Commercial & Advertising",
    titleLines: ["Commercial &", "Advertising"],
    subtitle: "Commercials, brand films, and campaigns built to connect with audiences.",
    description: "Commercials, brand films, and digital campaigns that connect with audiences.",
    image: img("service-commercial.jpg"),
    overviewTitle: "Ideas that sell the story.",
    overview:
      "From a single hero spot to a full campaign toolkit, we translate a brand brief into films people actually want to watch — then cut them for every platform they need to live on.",
    deliverables: [
      { title: "TV & Digital Commercial", text: "Hero spots and cutdowns" },
      { title: "Brand Film", text: "Long-form brand stories" },
      { title: "Social Campaign", text: "Vertical and short-form sets" },
    ],
    capabilities: [
      "Creative response to brief",
      "Storyboard & treatment",
      "Casting & talent coordination",
      "Product and tabletop shooting",
      "Edit, grade, and sound mix",
      "Platform-specific versions",
    ],
    process: stages([
      ["Brief", "Clarify the objective, audience, and message."],
      ["Treatment", "Pitch the idea, look, and storyboard."],
      ["Shoot", "Capture the campaign with the right crew."],
      ["Finish", "Edit, grade, and version for each platform."],
    ]),
    relatedCategories: ["Commercial"],
    closingTitle: "Let's create your next campaign.",
    ...detailImages,
  },
  {
    slug: "creative-development",
    number: "03",
    title: "Creative Development",
    titleLines: ["Creative", "Development"],
    subtitle: "Ideation, scripting, and creative direction that give a project its shape.",
    description: "Ideation, concept creation, scripting, and creative direction to shape compelling stories.",
    image: img("service-creative-development.jpg"),
    overviewTitle: "Find the story first.",
    overview:
      "Before a camera comes out, the idea has to hold. We work through research, concept, and writing so that the production that follows has a clear point of view.",
    deliverables: [
      { title: "Concept & Treatment", text: "The idea, on paper" },
      { title: "Script & Storyboard", text: "Scene by scene" },
      { title: "Creative Direction", text: "Look, tone, references" },
    ],
    capabilities: [
      "Research & insight",
      "Concept development",
      "Scriptwriting",
      "Storyboards & shot lists",
      "Visual references & moodboards",
      "Creative direction through production",
    ],
    process: stages([
      ["Discover", "Listen, research, and find the angle."],
      ["Concept", "Develop routes and choose one."],
      ["Write", "Script, storyboard, and plan the look."],
      ["Direct", "Carry the idea through to the shoot."],
    ]),
    relatedCategories: ["Film", "Commercial"],
    closingTitle: "Let's develop your next idea.",
    ...detailImages,
  },
  {
    slug: "photography",
    number: "04",
    title: "Photography",
    titleLines: ["Photography"],
    subtitle: "Commercial, editorial, and behind-the-scenes photography with a cinematic touch.",
    description: "Commercial, editorial, and behind-the-scenes photography with a cinematic touch.",
    image: img("service-photography.jpg"),
    overviewTitle: "Stills with a film eye.",
    overview:
      "Photography shot with the same attention to light and story as our film work — for campaigns, editorials, portraits, and unit stills on set.",
    deliverables: [
      { title: "Campaign Stills", text: "Key visuals and product" },
      { title: "Editorial & Portrait", text: "People and places" },
      { title: "Unit Stills", text: "Behind the scenes on set" },
    ],
    capabilities: [
      "Art direction & shot planning",
      "Studio and location shooting",
      "Portrait and product lighting",
      "On-set unit photography",
      "Retouching & color",
      "Delivery for print and digital",
    ],
    process: stages([
      ["Plan", "References, shot list, and locations."],
      ["Prepare", "Styling, lighting, and setup."],
      ["Shoot", "Capture the frames that matter."],
      ["Retouch", "Select, grade, and deliver."],
    ]),
    relatedCategories: ["Photography"],
    closingTitle: "Let's create your next shoot.",
    ...detailImages,
  },
  {
    slug: "post-production",
    number: "05",
    title: "Post Production",
    titleLines: ["Post", "Production"],
    subtitle: "Editing, color grading, sound design, and finishing.",
    description: "Editing, color grading, sound design, and finishing to bring the story to its best form.",
    image: img("service-post-production.jpg"),
    overviewTitle: "Where the film is found.",
    overview:
      "The edit is where a story finds its rhythm. We take footage — ours or yours — through offline edit, color, sound, and final mastering.",
    deliverables: [
      { title: "Offline & Online Edit", text: "Structure and polish" },
      { title: "Color Grading", text: "Look development and finish" },
      { title: "Sound Design & Mix", text: "Dialogue, music, effects" },
    ],
    capabilities: [
      "Offline editing",
      "Color grading",
      "Sound design & mixing",
      "Motion graphics & titles",
      "Subtitles & versioning",
      "Mastering & delivery specs",
    ],
    process: stages([
      ["Assemble", "Organise footage and build the first cut."],
      ["Refine", "Shape pacing, structure, and performance."],
      ["Finish", "Grade the picture and mix the sound."],
      ["Deliver", "Master and export every format."],
    ]),
    relatedCategories: ["Film", "Commercial", "Documentary"],
    closingTitle: "Let's finish your next project.",
    ...detailImages,
  },
  {
    slug: "other-services",
    number: "06",
    title: "Other Services",
    titleLines: ["Other", "Services"],
    subtitle: "Additional production support for projects that don't fit a single box.",
    description: "Documentary production, music videos, event documentation, and content series.",
    image: img("service-other.jpg"),
    overviewTitle: "Whatever the story needs.",
    overview:
      "Some projects sit between categories. If it involves a camera and a story, tell us what you have in mind and we will work out the right shape for it.",
    deliverables: [
      { title: "Documentary Production", text: "Short and long form" },
      { title: "Music Video", text: "Concept to final cut" },
      { title: "Event Documentation", text: "Coverage and highlights" },
      { title: "Content Series", text: "Episodic digital film" },
    ],
    capabilities: [
      "Documentary production",
      "Music video",
      "Event documentation",
      "Content series & digital film",
      "Aerial cinematography",
      "Custom production support",
    ],
    process: stages([
      ["Scope", "Define what the project actually needs."],
      ["Plan", "Build the team and schedule around it."],
      ["Produce", "Shoot with the right-sized crew."],
      ["Deliver", "Finish and hand over the final files."],
    ]),
    relatedCategories: ["Documentary", "Film"],
    closingTitle: "Let's create your next project.",
    ...detailImages,
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
