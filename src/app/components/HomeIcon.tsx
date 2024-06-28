import Link from "next/link";
import React from "react";

interface HomeIconProps {
  src: string;
}

const HomeIcon = () => {
  return (
    <Link
      href="/home"
      className=" flex font-bold text-lg text-blue-700 p-4 transition-colors duration-150 hover:text-blue-500"
    >
      Wonder Cloud
    </Link>
  );
};

export default HomeIcon;
