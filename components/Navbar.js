import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <div className="relative">
        <Image
          height={56}
          width={166}
          objectFit="contain"
          src="/images/image 1.png"
        />
      </div>
      <ul>
        <NavLink>tentang kami</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
