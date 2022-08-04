import Image from 'next/image';
import React from 'react';
import { FIX_HEIGHT_NAVBAR } from '../config';
import NavLink from './NavLink';

export default function Navbar() {
  return (
    <nav
      style={{
        height: FIX_HEIGHT_NAVBAR,
      }}
      className="flex items-center px-20"
    >
      <div className="relative w-48 h-full ">
        <Image
          objectFit="contain"
          layout="fill"
          src="/images/logo.png"
          alt="img"
        />
      </div>
      <ul className="lg:ml-[72px] lg:flex lg:gap-x-7">
        <NavLink title="home" />
        <NavLink title="services" />
        <NavLink title="product" />
        <NavLink title="portofolio" />
        <NavLink title="client" />
        <NavLink title="about" />
        <NavLink title="contact us" />
      </ul>
    </nav>
  );
}
