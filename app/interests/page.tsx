import { EntryList } from "@/components/entry-list";
import { interests } from "@/data/interests";

export default function Interests() {
  return (
    <>
      <h1 className="text-title">Interests</h1>
      <EntryList entries={interests} />
    </>
  );
}
