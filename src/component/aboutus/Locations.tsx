
import React from 'react'
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export default function Locations() {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <div className='w-full'>
        <p className='text-3xl'>Bhubaneswar</p>
        <p className='text-gray-600'>Bhubaneswar has a growing, diversified economy with an increasing percentage of professional and business service jobs.</p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.033069523474!2d85.81867477501065!3d20.298898281173987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c2e0a39ec9%3A0xe46791b69959a045!2sGIET%20Bhubaneswar%20Ghangapatana%20City%20Office!5e0!3m2!1sen!2sin!4v1738584502938!5m2!1sen!2sin" 
          width="100%" height="450" 
          className="max-w-full" 
        ></iframe>
      </div>
      
      <div className="flex flex-col items-start justify-between text-start w-full border-gray-200 gap-8" data-aos="fade-up">
        <div className="flex items-center gap-4">
          <FmdGoodIcon className="!text-black bg-red-500 rounded-full w-8 h-8 p-1" />
          <p className="text-sm md:text-base">Plot no-HIG-42, Jayadev Vihar, Bhubaneshwar, Odisha, 751013</p>
        </div>
        <div className="flex items-center gap-4">
          <CallIcon className="!text-black bg-red-500 rounded-full w-8 h-8 p-1" />
          <p className="text-sm md:text-base">9668862999</p>
        </div>
        <div className="flex items-center gap-4">
          <EmailIcon className="!text-black bg-red-500 rounded-full w-8 h-8 p-1" />
          <p className="text-sm md:text-base">info@utkalone.net</p>
        </div>
      </div>
    </div>
  );
}
