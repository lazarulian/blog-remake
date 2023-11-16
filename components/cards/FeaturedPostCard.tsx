import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from 'pliny/utils/formatDate'

const FeaturedPostCard = ({ slug, date, title, thumbnail }) => (
  <div className="relative h-auto w-auto max-w-sm border shadow-lg">
    <div className="mr-10">
      <article className="p-10">
        <div className="grid gap-2 space-y-2">
          <div className="order-first space-y-6">
            <div className="w-full">
              <p className="text-md text-ellipsis font-bold leading-tight  text-black dark:text-white">
                <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                  {title}
                </Link>
              </p>
              <div className="flex flex-wrap">
                <dd className="mr-3 text-sm font-medium uppercase text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date)}</time>
                </dd>
              </div>
            </div>
          </div>
          <Link href={`/blog/${slug}`} className="">
            <Image
              height="640"
              width="480"
              className="h-64 w-96 rounded object-cover"
              src={thumbnail}
              alt="PostThumbnail"
            />
          </Link>
        </div>
      </article>
    </div>
  </div>
)

export default FeaturedPostCard
