"use client";
import Icon from "@/components/ui/Icon";

export default function FAQCategoryNavigation({ categories, active, onSelect }) {
  return (
    <nav aria-label="FAQ categories" className="border-b hairline">
      <ul className="mx-auto flex w-full max-w-[1400px] overflow-x-auto px-5 sm:px-8 lg:justify-center lg:px-14">
        {categories.map((c) => (
          <li key={c.id} className="shrink-0 lg:border-l lg:hairline lg:first:border-l-0">
            <button
              type="button"
              onClick={() => onSelect(c.id)}
              aria-pressed={active === c.id}
              className={`label relative flex min-h-20 items-center gap-3 px-6 transition-colors duration-300 hover:text-ember lg:flex-col lg:gap-2 lg:px-10 ${active === c.id ? "text-ember" : ""}`}
            >
              <Icon name={c.icon} size={24} strokeWidth={1.2} />
              {c.label}
              {active === c.id && <span className="absolute inset-x-6 bottom-3 h-0.5 bg-ember" />}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
