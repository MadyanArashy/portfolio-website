import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGfm], rehypePlugins: [] },
});

const nextConfig = withMDX({
  pageExtensions: ['js','jsx','ts','tsx','md','mdx'],
});

export default nextConfig;
