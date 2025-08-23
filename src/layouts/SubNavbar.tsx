// import  {logo}  from "../../public/assets/subnavbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/projects" },
  { title: "Our Services", link: "/ourservice" },
  { title: "About Us", link: "/about" },
  // { title: "Blog", link: "/blog" },
  // { title: "Shop", link: "/shop" },
  { title: "Contact", link: "/contactus" },
];

export default function SubNavbar() {
  return (
<nav className="bg-red-200 z-50 shadow  flex justify-between items-stretch relative custom-clip  
  before:content-[''] before:absolute before:-top-6 before:left-0 before:w-10 before:h-4 
  before:border-l-[300px] before:border-r-[50px] before:border-b-[30px] 
  before:border-l-red-200 before:border-r-transparent before:border-b-red-200
  after:content-[''] after:absolute after:-bottom-5 after:left-0 after:w-10 after:h-4 
  after:border-l-[300px] after:border-r-[50px] after:border-t-[30px] 
  after:border-l-red-200 after:border-r-transparent after:border-t-red-200">
    <div className="flex justify-between items-center w-full px-4 md:px-8 py-2">
      {/* Logo */}
      <Link href="/">
      <Image src="/assets/subnavbar/utkalone.png" width={140} height={100} alt="Logo"  />
      </Link>
      {/* Nav Items */}
      <ul className="flex justify-center items-center space-x-10 h-14 text-lg">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={item.link}
              className="text-gray-800 hover:text-orange-500 transition duration-300"
            >
              {item.title}
            </a>
            {/* Hover Animation Line */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}
