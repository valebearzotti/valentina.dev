"use client";

import { Dialog } from "@base-ui/react/dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isActivePath, navigationItems } from "./navigation-items";

const desktopQuery = "(width >= 48rem)";
const itemStaggerMs = 40;

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <span aria-hidden className="relative block size-3">
    <span
      className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ease-out-strong motion-reduce:transition-none ${
        isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"
      }`}
    />
    <span
      className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ease-out-strong motion-reduce:transition-none ${
        isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-2"
      }`}
    />
  </span>
);

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
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-16 bg-background/80 backdrop-blur-md ${className ?? ""}`}
      >
        <div className="layout-grid h-full items-center">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="col-span-3 justify-self-start no-underline"
          >
            Valentina Bearzotti
          </Link>
          <Dialog.Trigger
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="-me-3.5 flex size-11 cursor-pointer items-center justify-center justify-self-end"
          >
            <MenuIcon isOpen={isOpen} />
          </Dialog.Trigger>
        </div>
      </header>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-x-0 top-16 bottom-0 z-40 bg-overlay backdrop-blur-[2px] transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 md:hidden" />
        <Dialog.Popup className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-background outline-none transition-[clip-path] duration-300 ease-out-strong [clip-path:inset(0_0_0_0)] data-ending-style:[clip-path:inset(0_0_100%_0)] data-starting-style:[clip-path:inset(0_0_100%_0)] motion-reduce:transition-none md:hidden">
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <Dialog.Close className="sr-only">Close menu</Dialog.Close>
          <nav aria-label="Main" className="layout-grid pt-2.5 pb-10">
            <ul className="col-span-full flex flex-col gap-2.5">
              {navigationItems.map((item, index) => (
                <li
                  key={item.href}
                  style={{ animationDelay: `${index * itemStaggerMs}ms` }}
                  className="motion-safe:animate-nav-item-in"
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
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
