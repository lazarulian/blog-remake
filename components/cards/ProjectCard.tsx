import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import formatDate from 'legacy/lib/utils/formatDate'

function ProjectCard({ slug, date, title, tags, thumbnail, summary }) {
  return (
    <div className="mx-auto flex max-w-sm flex-col md:justify-center" key={slug}>
      {/* Image */}
      <Link
        href={`/blog/${slug}`}
        className={`border-fun-gray hover:border-fun-pink will-change-projectCard relative w-full rounded-xl border p-2 transition hover:-translate-y-2 hover:opacity-75`}
      >
        <img className="h-56 w-full rounded-md object-cover" src={thumbnail} />
      </Link>
      {/* Title */}
      <div className="mt-5 w-full">
        <div className="flex justify-between">
          <Link href={`/blog/${slug}`}>
            <h3 className="text-lg font-bold">{title}</h3>
          </Link>
        </div>
        {/* Description */}
        <p className="text-fun-gray text-left text-sm">{summary}</p>
        {/* Tags */}
        <ul className="-ml-2 mt-2 flex list-none flex-wrap items-center">
          <li className="m-1 rounded-lg bg-slate-600 px-2 py-1 text-sm">{formatDate(date)}</li>
          {tags.map((tag, index) => {
            return (
              <li key={tag}>
                <div className="m-1 rounded-lg bg-slate-800 px-2 py-1 text-sm">{tag}</div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
