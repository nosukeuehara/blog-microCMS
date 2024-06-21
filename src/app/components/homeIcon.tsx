import Link from "next/link";
import React from "react";
import Image from "next/image";

interface HomeIconProps {
  src: string
}

const HomeIcon = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className=" flex font-bold text-lg text-blue-700 p-4">
          Wonder Cloud
        </Link>
      </div>
    </nav>
  );
};

export default HomeIcon;
