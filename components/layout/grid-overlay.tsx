"use client";

import { useEffect, useState } from "react";

const storageKey = "grid-overlay";
const columnCount = 12;
const isDevelopment = process.env.NODE_ENV === "development";

const isToggleShortcut = (event: KeyboardEvent) =>
  event.ctrlKey && !event.metaKey && event.key.toLowerCase() === "g";

export const GridOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(localStorage.getItem(storageKey) === "visible");
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, isVisible ? "visible" : "hidden");
  }, [isVisible]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isToggleShortcut(event)) return;
      event.preventDefault();
      setIsVisible((visible) => !visible);
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
          onClick={() => setIsVisible((visible) => !visible)}
          aria-pressed={isVisible}
          className="text-caption text-muted hover:text-foreground fixed right-4 bottom-4 z-50 cursor-pointer"
        >
          Grid ⌃G
        </button>
      )}
    </>
  );
};
