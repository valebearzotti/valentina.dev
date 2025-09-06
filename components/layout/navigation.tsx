import Link from "next/link";

const navigationItems = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "readme",
    href: "/readme",
  },
  {
    label: "blog",
    href: "/blog",
  },
  {
    label: "contact",
    href: "/contact",
  },
  {
    label: "changelog",
    href: "/changelog",
  },
];

export const Navigation = () => {
  return (
    <aside className="w-64 min-h-dvh p-8 pt-2">
      <nav className="flex flex-col gap-4">
        {navigationItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
