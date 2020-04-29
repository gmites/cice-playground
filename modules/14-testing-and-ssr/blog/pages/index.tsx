import Link from 'next/link'
import Head from 'next/head'
import { Page } from '../components/page'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'
import { Post } from '../models/post'

const Home: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        {posts.map(post => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <a>{post.title}</a>
          </Link>
        ))}
      </Page>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData()
  return {
    props: {
      posts
    }
  }
}

export default Home
