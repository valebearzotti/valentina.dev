export interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  prerelease: boolean;
  draft: boolean;
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}
