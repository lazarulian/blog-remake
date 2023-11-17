import Link from '@/components/Link'
import ProjectCard from '@/components/cards/ProjectCard'
import siteMetadata from '@/data/siteMetadata'
import HomeList from '@/components/lists/HomeList'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import PageTitle from '@/components/PageTitle'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const filteredPosts = posts.filter((post) => !post.tags.includes('notes') && post.draft != true)
  const featuredPosts = posts.filter((post) => post.tags.includes('featured') && post.draft != true)
  return (
    <>
      <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
        <div className="pt-6">
          <h1 className="inline-block pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi, I'm Apurva Shah
          </h1>
          <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
            From developing projects for my community to one bagging around the world, I hope this
            journey through the highs and lows of my life can lend you some cheat codes for your
            own.
          </h2>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 md:space-y-5 ">
          <PageTitle>Featured</PageTitle>
          <br></br>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 pt-4 md:grid-cols-3">
          {featuredPosts.slice(0, 3).map((featuredPost) => {
            const { slug, date, title, summary, tags, thumbnail } = featuredPost
            return (
              <ul className="pb-10" key={slug}>
                <ProjectCard
                  summary={summary}
                  tags={tags}
                  slug={slug}
                  date={date}
                  title={title}
                  thumbnail={thumbnail}
                />
              </ul>
            )
          })}
        </div>
      </div>
      <div className='dark:divide-gray-700" divide-y divide-gray-200'>
        <div className="space-y-2   md:space-y-5 ">
          <PageTitle>Latest</PageTitle>
          <br></br>
        </div>
        <HomeList posts={filteredPosts} MAX_DISPLAY={MAX_DISPLAY} />
      </div>
      {filteredPosts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
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
