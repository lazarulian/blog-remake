import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import formatDate from '@/lib/utils/formatDate'

const FeaturedPostCard = ({ slug, date, title, thumbnail }) => (
  <div className="shadow-lg relative h-64">
    <div className="mr-10">
      <article className="p-10">
        <div className="space-y-2 grid gap-2">
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
          <div>
            <Link href={`/blog/${slug}`} className="w-full xl:w-auto">
              <Image
                className="rounded object-cover cursor-pointer"
                layout="responsive"
                width={640}
                height={400}
                src={thumbnail}
                alt="PostThumbnail"
              />
            </Link>
          </div>
        </div>
      </article>
    </div>
  </div>
)

export default FeaturedPostCard
