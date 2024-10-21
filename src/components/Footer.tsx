import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" text-gray-300 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-end justify-center">
          <p className="text-sm">Made with by ❤️ Sibil Sarjam Soren</p>
          <p className="text-xs">Design by Oskar Frantti Glen</p>
          <p className="text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
