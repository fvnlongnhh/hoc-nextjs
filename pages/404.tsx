import * as React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export interface NotFoundProps {
}

export default function NotFound (props: NotFoundProps) {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('./')
        }, 3000)
        }, [])


  return (
    <main>
      <h1>404 oopp not found</h1>
    </main>
  );
}
