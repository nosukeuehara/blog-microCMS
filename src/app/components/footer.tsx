import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white py-4 border-t text-sm">
      <div className="container mx-auto text-center">
        <div>&copy; {new Date().getFullYear()} WonderCloud</div>
      </div>
    </footer>
  );
};

export default Footer;
