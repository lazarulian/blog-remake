import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Tag from '../Tag'
import { formatDate } from 'pliny/utils/formatDate'

const HomeList = ({ posts, MAX_DISPLAY }) => {
  if (!MAX_DISPLAY) {
    MAX_DISPLAY = 1000
  }
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {!posts.length && 'No posts found.'}
      {posts.slice(0, MAX_DISPLAY).map((post) => {
        const { slug, date, title, summary, tags, thumbnail } = post
        return (
          <li key={slug} className="py-12">
            <article>
              <div className="grid gap-2 space-y-2 xl:grid-flow-col xl:grid-cols-4 xl:gap-4 xl:space-y-0">
                <div className="xl:row-span-2">
                  <Link href={`/blog/${slug}`} className="w-full xl:w-auto">
                    <img
                      className="aspect-[8/5] w-full rounded-md object-cover"
                      src={thumbnail}
                      alt={thumbnail}
                    />
                  </Link>
                </div>
                <div className="order-first space-y-6 xl:order-none xl:col-span-2">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                        {title}
                      </Link>
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                      <dd className="mr-3 text-sm font-medium uppercase text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-1">
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
                  <div className="text-base font-medium leading-6">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      aria-label={`Read "${title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </li>
        )
      })}
    </ul>
  )
}

export default HomeList
