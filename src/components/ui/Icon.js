// Minimal line icons (24×24, 1.5 stroke). Decorative by default.
const paths = {
  arrow: "M4 12h16M14 6l6 6-6 6",
  arrowLeft: "M20 12H4M10 6l-6 6 6 6",
  arrowUpRight: "M7 17 17 7M8 7h9v9",
  chevron: "m6 9 6 6 6-6",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  close: "M6 6l12 12M18 6 6 18",
  menu: "M3 8h18M3 16h18",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM20 20l-4-4",
  check: "M4 5h16v14H4zM8 12l3 3 5-6",
  grid: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  mail: "M3 6h18v12H3zM3 7l9 7 9-7",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1Z",
  pin: "M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.3 1 2.1h5c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3Z",
  layers: "m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5",
  camera: "M3 8h12v10H3zM15 11l6-3v10l-6-3M6 8V5h5v3",
  play: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM10 8.5v7l6-3.5-6-3.5Z",
  pen: "M4 20l1-4L16 5l3 3L8 19l-4 1ZM14 7l3 3",
  sliders: "M4 7h10M18 7h2M4 17h2M10 17h10M16 5v4M8 15v4",
  users: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 11a3 3 0 1 0-1-5.8M17 14c2.4.5 4 2.7 4 6",
  star: "m12 3 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8L12 3Z",
  heart: "M12 20s-8-4.7-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.3 12 20 12 20Z",
  bolt: "M13 3 5 13h6l-1 8 8-10h-6l1-8Z",
  clap: "M3 10h18v10H3zM3 10l1-4 16-2 1 3M8 5.5l2 3.5M13 4.8l2 3.6",
  chat: "M4 5h16v11H9l-5 4V5ZM8 9h8M8 12h5",
  coins: "M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3ZM4 7v5c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5",
  handshake: "M3 8l4-2 5 2 5-2 4 2v7l-4 2-5 3-5-3-4-2V8ZM12 8l-3 4 3 2 3-2",
  instagram: "M4 4h16v16H4zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17 7h.01",
  youtube: "M3 7.5C3 6 4 5 5.5 5h13C20 5 21 6 21 7.5v9c0 1.5-1 2.5-2.5 2.5h-13C4 19 3 18 3 16.5v-9ZM10 9v6l5-3-5-3Z",
  vimeo: "M3 9l2-2c2-1.5 3.5-1 4 2l1.5 6c.5 1.5 1 1.5 2 0 2-3 3-5 2.5-6-.5-1-1.5-1-2.5-.5C13.5 5 16 3.5 18.5 4c2.5.5 3 3 1.5 6-2 4-6 9-9 9-2 0-3-2-4-6L6 9.5c-.5-1-1-1-2 0L3 9Z",
};

export default function Icon({ name, size = 20, className = "", strokeWidth = 1.5 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[name] || paths.arrow} />
    </svg>
  );
}
