"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./mobile-menu";
import { isActivePath, navigationItems } from "./navigation-items";

export const Navigation = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <nav className={className}>
      <MobileMenu className="md:hidden" />
      <ul className="hidden flex-col gap-1 md:flex">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={
                isActivePath(pathname, item.href) ? "page" : undefined
              }
              className="text-muted no-underline hover:text-foreground aria-[current=page]:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
