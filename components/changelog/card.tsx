import { GitHubRelease } from "@/types/github";
import { formatReleaseDate } from "@/utils/format-release-date";

export const ChangelogCard = (release: GitHubRelease) => {
  return (
    <div className="border border-gray-200 p-4 flex flex-col gap-2">
        <p className="body">{release.body}</p>
        <p className="caption">
            {formatReleaseDate(release.published_at)}
        </p>
    </div>
  );
}