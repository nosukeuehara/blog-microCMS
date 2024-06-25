import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-white w-full text-blue-700 py-4 text-xs">
      <div className="container mx-auto text-center">
        <div>&copy; {new Date().getFullYear()} WonderCloud</div>
      </div>
    </footer>
  );
};

export default Footer;
