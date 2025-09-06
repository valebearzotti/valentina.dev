import { GitHubRelease } from "@/types/github";
import getChangelogReleases from "./actions";
import { ChangelogCard } from "@/components/changelog/card";
import Link from "next/link";

export default async function ChangelogPage() {
  const releases = await getChangelogReleases();

  return (
    <>
      <h1 className="display">changelog</h1>
      <p className="body">
        days since last update:{" "}
        {Math.floor(
          (new Date().getTime() -
            new Date(releases[0].published_at).getTime()) /
            (1000 * 60 * 60 * 24)
        )}
      </p>
      {releases.map((release: GitHubRelease) => (
        <ChangelogCard key={release.id} {...release} />
      ))}
      <p className="body">
        go back to{" "}
        <Link href="/" className="underline">
          homepage
        </Link>
      </p>
    </>
  );
}
