import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import DefaultSEO from '@/components/seo/DefaultSEO'
import kebabCase from '@/lib/utils/kebabCase'

export const POSTS_PER_PAGE = 100

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const featuredPosts = posts.filter(
    (post) => post.draft !== true && !post.tags.map((t) => kebabCase(t)).includes('notes')
  )
  const initialDisplayPosts = featuredPosts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(featuredPosts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination, featuredPosts } }
}

export default function Blog({ featuredPosts, posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <DefaultSEO title="All Blogs | CheatCodes" description="All of the blogs on CheatCodes." />
      <ListLayout
        posts={featuredPosts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
