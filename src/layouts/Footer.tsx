
import Image from 'next/image';
import React from 'react'
// import { logo } from '../../public/assets/subnavbar';

const footerContent = {
  description:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  socialLinks: [
    { icon: 'fab fa-facebook', href: '#' },
    { icon: 'fab fa-google', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-youtube', href: '#' },
    { icon: 'fab fa-vimeo', href: '#' },
  ],
  informationLinks: [
    { label: 'Contact Us', href: '/contactus' },
    { label: 'Affiliates & Partners', href: '/about' },
    { label: 'Our Services', href: '/ourservice' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '#' },
    { label: 'Projects', href: '/projects' },
  ],
  officeDetails: [
    { icon: 'fas fa-map-marker-alt', text: 'plot no-HIG-42,Jayadev Vihar, Bhubaneshwar ,Odisha,751013' },
    { icon: 'fas fa-phone', text: '9668862999' },
    { icon: 'fas fa-envelope', text: 'info@utkalone.net' },
    { icon: 'fas fa-fax', text: '8260500784' },
    { icon: 'fas fa-clock', text: 'Mon - Sat: 9:00 - 18:00' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 z-50 shadow flex justify-between items-center relative custom-clip  
    before:content-[''] before:absolute before:-top-7 before:left-0 before:w-10 before:h-4 
    before:border-l-[300px] before:border-r-[50px] before:border-b-[30px] 
    before:border-l-black before:border-r-transparent before:border-b-black ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 main-container">
        {/* Logo and Description */}
        <div>
          <Image src="/assets/subnavbar/utkalone.png" width={100} height={0} alt="Logo" className="h-24 w-auto" />
          <p className="mt-4 text-sm leading-6">{footerContent.description}</p>
          <div className="flex space-x-4 mt-4">
            {footerContent.socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-xl hover:text-yellow-400">
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            {footerContent.informationLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-yellow-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Office Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Office</h3>
          {footerContent.officeDetails.map((detail, index) => (
            <p key={index} className="mb-2">
              <i className={`${detail.icon} text-yellow-400`}></i> {detail.text}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
