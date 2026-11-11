import Link from "next/link";
import Icon from "./Icon";

// Text link with a nudging arrow. variant: "text" | "ring" | "button".
export default function ArrowLink({ href, children, variant = "text", icon = "arrowUpRight", className = "" }) {
  if (variant === "button") {
    return (
      <Link href={href} className={`btn group ${className}`}>
        {children}
        <Icon name="arrow" size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
      </Link>
    );
  }
  if (variant === "ring") {
    return (
      <Link href={href} className={`group inline-flex min-h-11 items-center gap-4 label ${className}`}>
        <span className="grid h-12 w-12 place-items-center rounded-full border border-bone/70 transition-colors duration-500 group-hover:border-ember group-hover:bg-ember">
          <Icon name="arrow" size={16} />
        </span>
        {children}
      </Link>
    );
  }
  return (
    <Link href={href} className={`group inline-flex min-h-11 items-center gap-2 label transition-colors duration-300 hover:text-ember ${className}`}>
      <span className="border-b border-current/40 pb-1">{children}</span>
      <Icon name={icon} size={14} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
