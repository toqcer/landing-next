import Link from 'next/link';
import React from 'react';

export default function NavLink({ href = '/', title }) {
  return (
    <li>
      <Link href={href}>
        <span className="capitalize cursor-pointer">{title}</span>
      </Link>
    </li>
  );
}
