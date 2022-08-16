import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();

  function goToDetail(){
    router.push({
      pathname: 'news/[postId].tsx',
      query: {
        postID : 123,
        ref: 'social'
      },
    })
  }

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Đây là page test NextJS</title>
        <meta name="description" content="Đây là page test NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hế lô bạn Next.js!
        </h1>

        <button onClick={goToDetail}>Go to post page</button>

        <Link href={'/about'}>
        <h2 className={styles.title}><a>Go to about nhe</a></h2>
        </Link>
        
      </main>

      <footer className={styles.footer}></footer>
    </div>
    </>
  )
}

export default Home
