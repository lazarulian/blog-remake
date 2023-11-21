import React from 'react'
import { ArticleJsonLd } from 'next-seo'
import { author } from '@/data/siteMetadata'
import { NextSeo } from 'next-seo'

const BlogSEO = ({ thumbnail, title, excerpt, url }) => {
  return (
    <>
      <NextSeo
        title={title}
        titleTemplate="%s | CheatCodes"
        description={excerpt}
        twitter={{
          handle: '@apurvashahhh',
          site: '@apurvashahhh',
          cardType: 'summary_large_image',
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={url}
        title={title}
        authorName={author}
        description={excerpt}
      />
      <meta property="og:image" content={thumbnail} />
      <meta name="twitter:image" content={thumbnail} />
    </>
  )
}

export default BlogSEO
