import { GridOverlay } from "./grid-overlay";
import { Navigation } from "./navigation";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="layout-grid min-h-dvh content-start gap-y-10 py-10 md:items-start">
        <Navigation className="col-span-full md:sticky md:top-10 md:col-span-3" />
        <main className="col-span-full flex flex-col gap-6 md:col-span-9">
          {children}
        </main>
      </div>
      <GridOverlay />
    </>
  );
};
