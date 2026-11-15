import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type Entry = {
  title: string;
  description?: string;
  meta?: string;
  href?: string;
  image?: { src: StaticImageData; alt: string };
};

const EntryTitle = ({ title, href }: Pick<Entry, "title" | "href">) =>
  href ? <Link href={href}>{title}</Link> : <span>{title}</span>;

export const EntryList = ({ entries }: { entries: Entry[] }) => {
  if (entries.length === 0) {
    return <p className="text-muted">Nothing here yet.</p>;
  }

  return (
    <ul className="flex flex-col gap-6">
      {entries.map((entry) => (
        <li key={entry.title} className="flex flex-col gap-1">
          <div className="flex items-baseline justify-between gap-4">
            <EntryTitle title={entry.title} href={entry.href} />
            {entry.meta && (
              <span className="text-caption text-muted shrink-0">
                {entry.meta}
              </span>
            )}
          </div>
          {entry.description && (
            <p className="text-muted text-pretty">{entry.description}</p>
          )}
          {entry.image && (
            <Image
              src={entry.image.src}
              alt={entry.image.alt}
              placeholder="blur"
              className="mt-2 h-auto w-full"
            />
          )}
        </li>
      ))}
    </ul>
  );
};
