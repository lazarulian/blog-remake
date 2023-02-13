import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import { BlogNewsletterForm } from '@/components/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="flex flex-col items-center my-6 xl:flex-row gap-x-12 xl:mb-12">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I'm Apurva Shah
            </h1>
            <h2 className="text-lg prose text-gray-600 dark:text-gray-400">
              {`Welcome to my blog - ${siteMetadata.description}. I am the co-founder of Cylynx, a data
            scientist by profession and economist by training. In my free time, I like developing `}
              <Link href="/projects">side projects</Link>
              {' and '}
              <Link href="/blog">blogging</Link>
              {' about them. Have a good read!'}
            </h2>
          </div>
          <div className="flex items-center justify-center mx-2 my-12 w-96">
            <BlogNewsletterForm title="Stay updated, receive the latest post straight to your mailbox" />
          </div>
        </div>
        <h2 className="flex pb-6 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, thumbnail } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 grid  xl:grid-cols-4 xl:grid-flow-col xl:space-y-0 gap-2 xl:gap-4">
                    <div className="xl:row-span-2">
                      <Link href={`/blog/${slug}`} className="w-full xl:w-auto">
                        <Image
                          className="rounded object-cover"
                          layout="responsive"
                          width={640}
                          height={400}
                          src={thumbnail}
                          alt="cheeks"
                        />
                      </Link>
                    </div>
                    <div className="order-first xl:order-none xl:col-span-2 space-y-6">
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
                    <div className="xl:row-span-1 xl:col-span-2">
                      <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                        {summary}
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
