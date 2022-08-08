import Image from 'next/image';
import React from 'react';
import { FIX_HEIGHT_NAVBAR } from '../config';
import NavLink from './NavLink';
import { routes } from '../config';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav
      style={{
        height: FIX_HEIGHT_NAVBAR,
      }}
      className="flex bg-transparent fixed z-10 top-0 w-full items-center px-20 border-b-fancy-blue/20 border-b-[1px]"
    >
      <div className="relative w-48 h-full ">
        <Image
          draggable={false}
          objectFit="contain"
          layout="fill"
          src="/images/logo.png"
          alt="img"
        />
      </div>
      <ul className="lg:ml-[72px] lg:flex lg:gap-x-7">
        {routes.map(({ title, route }) => (
          <NavLink
            key={route}
            title={title}
            href={route}
            active={router.pathname === route}
          />
        ))}
      </ul>
    </nav>
  );
}
