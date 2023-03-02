import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import FeaturedPostCard from './FeaturedPostCard'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1600 },
    items: 3,
  },
  normalDesktop: {
    breakpoint: { max: 1600, min: 1400 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1400, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}

const FeaturedPosts = ({ featuredPosts }) => {
  return (
    <div className="mb-8">
      <Carousel
        infinite
        containerClass="container"
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={6000}
        responsive={responsive}
        itemClass="px-4"
      >
        {!featuredPosts.length && 'No posts found.'}
        {featuredPosts.map((frontMatter) => {
          const { slug, date, title, thumbnail } = frontMatter
          return (
            <div key={title}>
              <FeaturedPostCard
                key={title}
                slug={slug}
                date={date}
                title={title}
                thumbnail={thumbnail}
              />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default FeaturedPosts
