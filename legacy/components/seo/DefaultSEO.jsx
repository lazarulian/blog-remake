import React from 'react'
import { author } from '@/data/siteMetadata'
import { NextSeo } from 'next-seo'

const DefaultSEO = ({ title, description }) => {
  const thumbnail = '/static/img/BlogThumbnail.png'
  return (
    <head>
      <NextSeo
        title={title}
        description={description}
        twitter={{
          handle: '@apurvashahhh',
          site: '@apurvashahhh',
          cardType: 'summary_large_image',
        }}
      />
      <meta property="og:image" content={thumbnail} />
      <meta name="twitter:image" content={thumbnail} />
    </head>
  )
}

export default DefaultSEO
