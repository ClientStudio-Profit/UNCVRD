"use client";
import Icon from "@/components/ui/Icon";

export default function ArticleCategoryFilter({ categories, active, onSelect, query, onQuery }) {
  const tabs = ["All Stories", ...categories];
  return (
    <div className="border-y hairline">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 px-5 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-14">
        <nav aria-label="Article categories" className="-mx-1 overflow-x-auto">
          <ul className="flex">
            {tabs.map((t) => (
              <li key={t} className="shrink-0">
                <button
                  type="button"
                  onClick={() => onSelect(t)}
                  aria-pressed={active === t}
                  className={`label relative min-h-12 px-4 transition-colors duration-300 hover:text-ember ${active === t ? "text-ember" : ""}`}
                >
                  {t}
                  {active === t && <span className="absolute inset-x-4 bottom-2 h-0.5 bg-ember" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div role="search" className="relative lg:w-72">
          <label htmlFor="journal-search" className="sr-only">Search articles</label>
          <Icon name="search" size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-bone/70" />
          <input
            id="journal-search"
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search articles…"
            className="h-12 w-full border bg-transparent pl-11 pr-4 text-sm placeholder:text-bone/50 hairline focus:border-ember focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
