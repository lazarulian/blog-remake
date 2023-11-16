import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import PageTitle from '@/components/PageTitle'
import ProjectCard from '@/components/cards/ProjectCard'

export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  return (
    <div>
      <PageTitle>All Blogs</PageTitle>
      <br />
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        {posts.map((post) => {
          const { slug, date, title, summary, tags, thumbnail } = post
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
