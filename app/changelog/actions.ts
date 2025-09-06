import { GitHubRelease } from '@/types/github';

export default async function getChangelogReleases(): Promise<GitHubRelease[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/valebearzotti/valentina.dev/releases`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      }
    );

    if (!response.ok) {
      console.error(`GitHub API responded with status: ${response.status}`);
      return [];
    }

    const releases: GitHubRelease[] = await response.json();
    
    const publishedReleases = releases
      .filter(release => !release.draft && !release.prerelease)
      .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

    return publishedReleases;
  } catch (error) {
    console.error('Error fetching releases:', error);
    return [];
  }
}