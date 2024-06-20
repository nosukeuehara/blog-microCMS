import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className=" text-green-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">WonderCloud</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
