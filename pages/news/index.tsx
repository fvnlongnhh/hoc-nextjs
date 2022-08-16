import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export interface NewsPageProps {
}


// export const getStaticProps = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   return{
//     props: {coder:data},

//   }
// }

export default function NewsPage (props: NewsPageProps) {
  return (
    <main>
      <p>đây là news post</p>
    </main>
  );
}


// export default function NewsPage ({props: NewsPageProps}) {
//   return (
//     <>
//     <Head>
//       <title>Load API post</title>
//     </Head>
//     <main>
//       <h1>đây là list news page</h1>
//       {/* <ul className='list_news'>
//         {coder.map((coder) => (
//           <Link href={"/news/"+coder.id} key={coder.id}>
//             <li>
//               <a>
//                 <span>{coder.name}</span>
//               </a>
//             </li>
//           </Link>
//         ))}
//       </ul> */}
      


//     </main>
//     </>
//   );
// }
