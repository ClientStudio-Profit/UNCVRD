// About page content. Team entries and biographies are SAMPLE PLACEHOLDERS —
// confirm names, roles, portraits, and bios before launch.

const img = (file) => `/assets/images/about/${file}`;

export const approach = [
  { title: "Discover", text: "Understand the story and the bigger purpose.", icon: "bulb" },
  { title: "Develop", text: "Shape the idea into a strong creative concept.", icon: "layers" },
  { title: "Produce", text: "Bring the story to life with the right team and craft.", icon: "camera" },
  { title: "Deliver", text: "A meaningful visual experience for the audience.", icon: "play" },
];

export const team = [
  { name: "Vincent Guizot", position: "Director / Founder", portrait: img("about-team-01.jpg"), bio: "Placeholder biography — two lines about background and focus." },
  { name: "Clarisa Vivi", position: "Creative Producer", portrait: img("about-team-02.jpg"), bio: "Placeholder biography — two lines about background and focus." },
  { name: "Marco Adrian", position: "Cinematographer", portrait: img("about-team-03.jpg"), bio: "Placeholder biography — two lines about background and focus." },
  { name: "Jacky Pratama", position: "Post Production Lead", portrait: img("about-team-04.jpg"), bio: "Placeholder biography — two lines about background and focus." },
];

export const values = [
  { title: "Collaboration", text: "Great stories are always a collective effort.", icon: "users" },
  { title: "Creativity", text: "We explore ideas beyond the obvious.", icon: "star" },
  { title: "Impact", text: "We create work that matters and lasts.", icon: "heart" },
];
