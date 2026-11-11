"use client";
import { useCallback, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollContext } from "@/context/ScrollProvider";
import { navigation, site } from "@/data/site";
import Icon from "@/components/ui/Icon";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useContext(ScrollContext);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const solid = scrollY > 40 && !open;

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${solid ? "border-b hairline bg-ink/85 backdrop-blur-md" : "border-b border-transparent"}`}>
        <div className="mx-auto flex h-[4.5rem] w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <Link href="/" aria-label={`${site.name} — home`} className="-ml-3 block">
            <Image src={site.logo} alt={site.name} width={3334} height={1134} priority sizes="150px" className="h-12 w-auto" />
          </Link>
          <DesktopNav items={navigation} pathname={pathname} />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 grid h-12 w-12 place-items-center lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={26} />
          </button>
        </div>
      </header>
      <MobileNav items={navigation} pathname={pathname} open={open} onClose={close} />
    </>
  );
}
