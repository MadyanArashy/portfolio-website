// components/MDXContent.tsx
import { MDXProvider } from '@mdx-js/react'
import * as runtime from 'react/jsx-runtime'
import { compile } from '@mdx-js/mdx'

export default async function MDXContent({ source }: { source: string }) {
  const compiled = await compile(source, { outputFormat: 'function-body', development: false })
  const { default: Content } = await import(
    /* webpackIgnore: true */ `data:text/javascript,${compiled.value}`
  )
  return (
    <article className="prose max-w-full">
      <MDXProvider components={{}}>
        <Content {...runtime} />
      </MDXProvider>
    </article>
  )
}
