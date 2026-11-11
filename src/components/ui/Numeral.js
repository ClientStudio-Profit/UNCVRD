// Numbers set in Agrandir (the display face's digits are too decorative at small sizes).
export default function Numeral({ children, className = "" }) {
  return <span className={`font-sans font-bold tracking-wider ${className}`}>{children}</span>;
}
