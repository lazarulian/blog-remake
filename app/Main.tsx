import Link from '@/components/Link'
import Rocket from '@/components/animations/Rocket'
import siteMetadata from '@/data/siteMetadata'
import HomeList from '@/components/lists/HomeList'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const filteredPosts = posts.filter((post) => !post.tags.includes('notes') && post.draft != true)
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I'm Apurva Shah
            </h1>
            <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
              From developing projects for my community to one bagging around the world, I hope this
              journey through the highs and lows of my life can lend you some cheat codes for your
              own.
            </h2>
          </div>
        </div>
        <div className="space-y-2  pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
        </div>
      </div>
      <HomeList posts={filteredPosts} MAX_DISPLAY={MAX_DISPLAY} />
      {filteredPosts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
