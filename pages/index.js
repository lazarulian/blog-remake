import Link from '@/components/Link'
import DefaultSEO from '@/components/seo/DefaultSEO'
import Tag from '@/components/Tag'
import { BlogNewsletterForm } from '@/components/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import kebabCase from '@/lib/utils/kebabCase'
import Image from 'next/image'
import Rocket from '@/components/Rocket'
import FeaturedPosts from '@/components/FeaturedPosts'
import FeaturedPostCard from '@/components/FeaturedPostCard'

const MAX_DISPLAY = 4

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const featuredPosts = posts.filter(
    (post) =>
      post.draft !== true &&
      post.tags.map((t) => kebabCase(t)).includes('featured') &&
      post.title.length < 39
  )

  return { props: { posts, featuredPosts } }
}

export default function Home({ posts, featuredPosts }) {
  const test = 'Financial Advice for your 18th Birthday'
  const title = 'CheatCodes | Apurva Shah'
  const description = "Sharing the things I've picked up throughout the journey that is life."
  return (
    <>
      <DefaultSEO title={title} description={description} />
      <div>
        <div className="flex flex-col items-center my-6 xl:flex-row gap-x-12 xl:mb-12">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I'm Apurva Shah
            </h1>
            <h2 className="text-lg prose text-gray-600 dark:text-gray-400">
              From developing projects for my community to one bagging around the world, I hope this
              journey through the highs and lows of my life can lend you some cheat codes for your
              own.
            </h2>
          </div>
          <div className="invisible xl:visible items-center justify-center mx-2 my-12 w-96 pt-5">
            {/* <BlogNewsletterForm title="Stay updated, receive the latest post straight to your mailbox" /> */}
            <Rocket />
          </div>
        </div>
        <h2 className="flex pb-6 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Featured
        </h2>
        <hr className="border-gray-200 dark:border-gray-700 py-3" />
        <FeaturedPosts featuredPosts={featuredPosts} />
        <h2 className="flex pb-6 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {/* {!posts.length && 'No posts found.'} */}
          {!posts.length && 'No posts found.'}
          {/* {posts.slice(0, MAX_DISPLAY).map((frontMatter) => { */}
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
                          alt="PostThumbnail"
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
