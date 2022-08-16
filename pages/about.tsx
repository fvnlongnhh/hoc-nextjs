import { useRouter } from 'next/router';
import * as React from 'react';

export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {
  const router = useRouter()
  console.log(router.query);

  return (
    <main>
      <p>Đây là page about</p>
    </main>
  );
}
