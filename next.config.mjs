import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// 自定义域名 ydesign.dev 发布在站点根路径，不要加 /ydesign-docs。
const basePath = '';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default withMDX(config);
