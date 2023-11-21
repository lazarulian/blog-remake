import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Browse',
  openGraph: { images: '/static/img/seo/Tags.png' },
})

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  return (
    <>
      <div className="px-2">
        <ListLayout posts={posts} title="All Posts" />
      </div>
    </>
  )
}
