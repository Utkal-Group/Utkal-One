"use client"
import Breadcrumb from '@/component/home/Breadcrumb'
import OurClients from '@/component/home/OurClients'
import Projects from '@/component/home/Projects'
import Services from '@/component/home/Services'
import Testimonials from '@/component/home/Testimonials'
import WhoWeAre from '@/component/home/WhoWeAre'
import WhyChooseUs from '@/component/home/WhyChooseUs'
import React from 'react'

export default function page() {
  return (
    <div>
      <Breadcrumb/>
      <Services/>
      <Projects/>
      <WhoWeAre/>
      <Testimonials/>
      <WhyChooseUs/>
      <OurClients/>
    </div>
  )
}
