import Image from "next/image";
import Link from "next/link";
import { navigation, site } from "@/data/site";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t hairline bg-ink">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-14">
        <div className="flex flex-col gap-8 py-12 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" aria-label={`${site.name} — home`} className="-ml-3 block w-fit">
            <Image src={site.logo} alt={site.name} width={3334} height={1134} sizes="170px" className="h-14 w-auto" />
          </Link>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="label inline-flex min-h-11 items-center text-bone/85 transition-colors duration-300 hover:text-ember">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks className="-ml-3 lg:ml-0" />
        </div>
        <div className="flex flex-col gap-2 border-t hairline py-6 text-xs text-bone/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
