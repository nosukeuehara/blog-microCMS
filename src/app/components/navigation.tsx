import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className=" flex justify-start">
      <Link href="/article">home</Link>
    </nav>
  );
};

export default Navigation;
