import Link from "next/link";
import React from "react";

const NavLink = ({ href = "/", children }) => {
  return (
    <li>
      <Link href={href} className="uppercase">
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
