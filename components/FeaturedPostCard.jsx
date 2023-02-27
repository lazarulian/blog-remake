import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedPostCard = ({ slug, date, title, thumbnail }) => (
  <div className="relative h-64 transition: duration-500 hover:opacity-60">
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">
        {moment(date).format('MMM DD, YYYY')}
      </p>
      <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{title}</p>
    </div>
    <Link passHref href="/">
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
)

export default FeaturedPostCard
