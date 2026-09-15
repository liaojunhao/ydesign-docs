import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// Docusaurus baseUrl: '/repo/'。项目站 https://user.github.io/repo/ 需要前缀；
// 本地、用户站（user.github.io）或自定义域名不需要。
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const basePath =
  process.env.GITHUB_ACTIONS && repo && !repo.endsWith('.github.io') ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath ? { basePath } : {}),
};

export default withMDX(config);
