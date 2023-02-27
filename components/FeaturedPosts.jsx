import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import FeaturedPostCard from './FeaturedPostCard'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1600 },
    items: 5,
  },
  normalDesktop: {
    breakpoint: { max: 1600, min: 1400 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1400, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}

const FeaturedPosts = ({ featuredPosts }) => {
  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-indigo-600 opacity-60 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  )

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-indigo-600 opacity-60 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  )

  return (
    <div className="mb-8">
      <Carousel
        infinite
        containerClass="container"
        customLeftArrow={customLeftArrow}
        customRightArrow={customRightArrow}
        autoPlay={true}
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
