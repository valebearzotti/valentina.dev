import { Navigation } from "./navigation";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center">
      <Navigation />
      <main className="flex-1 p-8">
        <div className="max-w-2xl flex flex-col gap-4 min-h-dvh">
          {children}
        </div>
      </main>
    </div>
  );
};
