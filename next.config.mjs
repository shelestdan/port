const isGitHubPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "github-pages";
const repoName = process.env.NEXT_PUBLIC_REPO_NAME;
const basePath = isGitHubPages && repoName ? `/${repoName}` : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: isGitHubPages,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true
  }
};

export default nextConfig;

