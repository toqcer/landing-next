import Link from 'next/link';
import React from 'react';

export default function NavLink({ href = '/', title, active }) {
  return (
    <li>
      <Link href={href} passHref>
        <span
          className={`text-solid-brown capitalize cursor-pointer ${
            active ? 'font-semibold' : ''
          }`}
        >
          {title}
        </span>
      </Link>
    </li>
  );
}
