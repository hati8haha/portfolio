// import styles from './post.module.css'
import { getPostById, getAllPosts } from '@/lib/api'

// Generate the post, note that this is a "react server component"! it is
// allowed to be async
export default async function Post({
  params: { id },
}: {
  params: { id: string }
}) {
  const { html, title, date } = await getPostById(id)
  return (
    <main className={`px-8 py-16 flex flex-col w-screen items-center xs:px-24 `}>
    <article className='xl:max-w-3xl max-w-8/12' >
      <h1 className='text-3xl font-bold mb-4'>{title}</h1>
      {date && date !== 'undefined' && <h4>{date}</h4>}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
    </main>

  )
}

// This function can statically allow nextjs to find all the posts that you
// have made, and statically generate them
export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map(post => ({
    id: post.id,
  }))
}

// Set the title of the page to be the post title, note that we no longer use
// e.g. next/head in app dir, and this can be async just like the server
// component
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string }
}) {
  const { title } = await getPostById(id)
  return {
    title,
  }
}