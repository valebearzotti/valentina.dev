import { EntryList } from "@/components/entry-list";
import { type RecordKind, recordKinds, records } from "@/data/records";

const kinds = Object.keys(recordKinds) as RecordKind[];

export default function Records() {
  const groups = kinds
    .map((kind) => ({
      kind,
      entries: records.filter((record) => record.kind === kind),
    }))
    .filter((group) => group.entries.length > 0);

  return (
    <>
      <h1 className="text-title">Records</h1>
      {groups.length === 0 && <EntryList entries={[]} />}
      {groups.map((group) => (
        <section key={group.kind} className="flex flex-col gap-3">
          <h2 className="text-caption text-muted">{recordKinds[group.kind]}</h2>
          <EntryList entries={group.entries} />
        </section>
      ))}
    </>
  );
}
