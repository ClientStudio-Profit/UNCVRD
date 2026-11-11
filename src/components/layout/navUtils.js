export const isActive = (pathname, href) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));
