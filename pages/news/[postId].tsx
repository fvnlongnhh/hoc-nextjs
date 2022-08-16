import { useRouter } from 'next/router';
import * as React from 'react';
import Head from 'next/head';
// export interface PostDetailPostProps {
// }


// export async function getStaticPaths() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

  
//   return {
//     paths: [
//       { params: [id: coder.id.toString()] }
//     ],
//     fallback: false
//   }

// }


// export const getStaticProps = async(context) => {
//   const id = context.params.id;
//   const res = await fetch("https://jsonplaceholder.typicode.com/users" + id);
//   const data = await res.json();

//   return{
//     props: { coder : data},
//   }
// }

// export default function PostDetailPost ({props : coder}) {
  
//   return (
//     <>
//     <Head>
//       <title>Load API post</title>
//     </Head>

//     <main>
//       <h1>đây là PostDetailPost</h1>
//           <p>ID :{coder.id}</p>
//           <p>Name : {coder.name}</p>
//           <p>UserName : {coder.username}</p>
//           <p>Email : {coder.email}</p>
//           <p>Address : {coder.address.street} - {coder.address.city}</p>
//           <p>Phone : {coder.phone}</p>
//           <p>Company: {coder.company.name}</p>
//     </main>
//     </>
//   );
// }
