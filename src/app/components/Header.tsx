import React from "react";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className=" bg-gray-50 flex justify-between mb-4 border-b border-gray-300">
      {children}
    </header>
  );
};

export default Header;
