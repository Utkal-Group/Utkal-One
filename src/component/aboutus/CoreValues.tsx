import React from 'react'

export default function CoreValues() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      <div className='flex flex-col'>
        <p className='text-2xl font-semibold'>Quality</p>
        <p className='text-gray-600'>We are passionate about excellence and doing our work right the first time. Our reputation depends on our delivered value in the eyes of every customer and community.</p>
      </div>
      <div className='flex flex-col'>
        <p className='text-2xl font-semibold'>People</p>
        <p className='text-gray-600'>We inspire each other with important work full of purpose, challenging development opportunities, and rewarding careers. We aspire to be the employer of choice in our industry.</p>
      </div>
      <div className='flex flex-col'>
        <p className='text-2xl font-semibold'>Culture</p>
        <p className='text-gray-600'>We actively build a diverse, inclusive, and collaborative work environment where all views are welcomed, openness is encouraged, and teamwork and merit are cornerstones.</p>
      </div>
      <div className='flex flex-col'>
        <p className='text-2xl font-semibold'>Relationships</p>
        <p className='text-gray-600'>We build positive, long-term relationships with our customers, joint-venture partners, subcontractors, suppliers, and colleagues that are built on trust, respect, and collaboration.</p>
      </div>
    </div>
  )
}
