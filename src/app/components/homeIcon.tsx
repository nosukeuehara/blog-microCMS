import Link from "next/link";
import React from "react";
import Image from "next/image";

interface HomeIconProps {
  src: string;
}

const HomeIcon = () => {
  return (
    <Link href="/article" className=" flex font-bold text-lg text-blue-700 p-4">
      Wonder Cloud
    </Link>
  );
};

export default HomeIcon;
