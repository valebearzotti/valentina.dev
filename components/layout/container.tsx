import { Navigation } from "./navigation";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-dvh">
      <Navigation />
      <main className="flex-1 p-8 overflow-y-auto pl-64">
        <div className="max-w-2xl flex flex-col gap-4">{children}</div>
      </main>
    </div>
  );
};
