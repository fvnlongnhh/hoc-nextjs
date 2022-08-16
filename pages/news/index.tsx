import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export interface NewsPageProps {
}


export const getStaticProps = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return{
    props: {coders:data},

  }
}

export default function NewsPage ({coders}) {
  return (
    <>
    <Head>
      <title>Load API post</title>
    </Head>
    <main>
      <h1>đây là list news page</h1>
      <ul className='list_news'>
        {coders.map((coders) => (
          <Link href={"/news/"+coders.id} key={coders.id}>
            <li>
              <a>
                <span>{coders.name}</span>
              </a>
            </li>
          </Link>
        ))}
      </ul>
      


    </main>
    </>
  );
}
