import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import PageTitle from '@/components/PageTitle'
import ProjectCard from '@/components/cards/ProjectCard'

export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const filteredPosts = posts.filter((post) => !post.tags.includes('notes') && post.draft != true)
  return (
    <div>
      <PageTitle>All Blogs</PageTitle>
      <p className="py-2">
        All of the blogs excluding class notes. If you want those, please take a look at the classes
        tag into the tag section.
      </p>
      <br />
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        {filteredPosts.map((filteredPost) => {
          const { slug, date, title, summary, tags, thumbnail } = filteredPost
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
  )
}
