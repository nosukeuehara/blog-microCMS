import Link from 'next/link';
import React from 'react'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            home
          </Link>
        </li>
        <li>
          <Link href="/about">
            about
          </Link>
        </li>
        <li>
          <Link href="/services">
            art
          </Link>
        </li>
        <li>
          <Link href="/contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation