import type { Entry } from "@/components/entry-list";

export const recordKinds = {
  post: "Posts",
  "x-post": "X posts",
  talk: "Talks",
} as const;

export type RecordKind = keyof typeof recordKinds;

export type RecordEntry = Entry & { kind: RecordKind; href: string };

export const records: RecordEntry[] = [];
