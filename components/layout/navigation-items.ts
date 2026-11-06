export const navigationItems = [
  { label: "About", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Records", href: "/records" },
  { label: "Interests", href: "/interests" },
];

export const isActivePath = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);
