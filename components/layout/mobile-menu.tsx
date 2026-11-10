"use client";

import { Drawer } from "@base-ui/react/drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isActivePath, navigationItems } from "./navigation-items";

const desktopQuery = "(width >= 48rem)";

const pressableClassName =
  "cursor-pointer text-muted transition-transform duration-150 ease-out-strong active:scale-97 hover:text-foreground";

export const MobileMenu = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia(desktopQuery);
    const closeOnDesktop = () => desktop.matches && setIsOpen(false);

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <Drawer.Root swipeDirection="up" open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger className={`${pressableClassName} ${className ?? ""}`}>
        Menu
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Viewport className="fixed inset-0">
          <Drawer.Popup className="group/curtain h-dvh w-full overflow-y-auto border-b border-border overscroll-contain bg-background outline-none [transform:translateY(var(--drawer-swipe-movement-y))] transition-[transform,opacity] duration-400 ease-drawer data-starting-style:[transform:translateY(-100%)] data-ending-style:[transform:translateY(calc(-100%-2px))] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*250ms)] data-swiping:duration-0 data-swiping:select-none motion-reduce:data-starting-style:[transform:none] motion-reduce:data-starting-style:opacity-0 motion-reduce:data-ending-style:[transform:none] motion-reduce:data-ending-style:opacity-0">
            <Drawer.Content className="layout-grid gap-y-10 py-10">
              <Drawer.Title className="sr-only">Menu</Drawer.Title>
              <Drawer.Close
                className={`${pressableClassName} col-span-full justify-self-start`}
              >
                Close
              </Drawer.Close>
              <nav className="col-span-full">
                <ul className="flex flex-col gap-2">
                  {navigationItems.map((item, index) => (
                    <li
                      key={item.href}
                      style={{ "--index": index } as React.CSSProperties}
                      className="transition-[transform,opacity] delay-[calc(100ms+var(--index)*40ms)] duration-300 ease-out-strong group-data-starting-style/curtain:-translate-y-3 group-data-starting-style/curtain:opacity-0 motion-reduce:group-data-starting-style/curtain:translate-y-0"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={
                          isActivePath(pathname, item.href) ? "page" : undefined
                        }
                        className="text-title text-muted no-underline aria-[current=page]:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
