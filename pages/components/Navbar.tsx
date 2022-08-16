import * as React from 'react';
import Link from 'next/link';

export interface NavbarProps {
}

export default function Navbar (props: NavbarProps) {
  return (
    <nav className='navbar'>
        <ul>
            <li><Link href={'/'}><a>Home</a></Link></li>
            <li><Link href={'/about'}><a>About</a></Link></li>
            <li><Link href={'/news/'}><a>News</a></Link></li>
            <li><Link href={'/news/post'}><a>News Detail</a></Link></li>
        </ul>
    </nav>
  );
}
