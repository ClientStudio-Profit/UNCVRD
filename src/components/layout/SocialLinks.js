import Icon from "@/components/ui/Icon";
import { socials } from "@/data/site";

export default function SocialLinks({ boxed = false, className = "" }) {
  return (
    <ul className={`flex items-center ${boxed ? "gap-3" : "gap-2"} ${className}`}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            aria-label={s.label}
            className={`grid h-11 w-11 place-items-center transition-colors duration-300 hover:text-ember ${boxed ? "border border-bone/50 hover:border-ember" : ""}`}
          >
            <Icon name={s.icon} size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
