// Site-wide configuration.
// Contact details and social URLs are PLACEHOLDERS — replace with the real ones here.
import { services } from "./services";

export const site = {
  name: "UNCVRD",
  tagline: "A Film Production Studio",
  logo: "/assets/images/logo_tr.png",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  { label: "Journal", href: "/journal" },
  { label: "Collabs", href: "/collaborations" },
  { label: "Contact", href: "/contact" },
  { label: "Info", href: "/faq" },
];

export const contact = {
  isPlaceholder: true,
  email: "hello@example.com",
  phone: "+00 000 0000 0000",
  location: "City, Country",
  address: "Studio address placeholder — street, district, postal code",
  directionsUrl: "#",
};

export const socials = [
  { label: "Instagram", icon: "instagram", href: "#" },
  { label: "YouTube", icon: "youtube", href: "#" },
  { label: "Vimeo", icon: "vimeo", href: "#" },
];

// Optional media. Leave a value as null until the file exists in /public.
export const media = {
  homeHeroLoop: null, // "/assets/videos/home/home-hero-loop.mp4"
  showreel: "/assets/videos/home/home-showreel.mp4",
  showreelPoster: "/assets/images/home/home-showreel-poster.jpg",
};
