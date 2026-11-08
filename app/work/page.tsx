import { EntryList } from "@/components/entry-list";
import { work } from "@/data/work";

export default function Work() {
  return (
    <>
      <h1 className="text-title">Work</h1>
      <EntryList entries={work} />
    </>
  );
}
