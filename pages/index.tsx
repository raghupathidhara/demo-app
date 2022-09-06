import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next.Js Demo</title>
      </Head>
      <h2>Home Page</h2>
      <div>
        <Link href='/users'>
          <button>Users Page</button>
        </Link>
        {"  "}
        <Link href='/posts'>
          <button>Posts Page</button>
        </Link>
        {"  "}
        <Link href='/comments'>
          <button>Comments Page</button>
        </Link>
        <Link href='/login'>
          <button>Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
