"use client";

import { useEffect, useSyncExternalStore } from "react";

const storageKey = "grid-overlay";
const columnCount = 12;
const isDevelopment = process.env.NODE_ENV === "development";

const isToggleShortcut = (event: KeyboardEvent) =>
  event.ctrlKey && !event.metaKey && event.key.toLowerCase() === "g";

const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getIsVisible = () => localStorage.getItem(storageKey) === "visible";

const getServerIsVisible = () => false;

const toggleVisibility = () => {
  localStorage.setItem(storageKey, getIsVisible() ? "hidden" : "visible");
  listeners.forEach((listener) => listener());
};

export const GridOverlay = () => {
  const isVisible = useSyncExternalStore(
    subscribe,
    getIsVisible,
    getServerIsVisible,
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isToggleShortcut(event)) return;
      event.preventDefault();
      toggleVisibility();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          aria-hidden
          className="layout-grid pointer-events-none fixed inset-y-0 left-0 z-50"
        >
          {Array.from({ length: columnCount }, (_, index) => (
            <div
              key={index}
              className="bg-(--grid-overlay) [&:nth-child(n+5)]:hidden md:[&:nth-child(n+5)]:block"
            />
          ))}
        </div>
      )}
      {isDevelopment && (
        <button
          type="button"
          onClick={toggleVisibility}
          aria-pressed={isVisible}
          className="text-caption text-muted hover:text-foreground fixed right-4 bottom-4 z-50 cursor-pointer"
        >
          Grid ⌃G
        </button>
      )}
    </>
  );
};
