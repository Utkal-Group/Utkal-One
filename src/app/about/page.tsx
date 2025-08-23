
import OurCompany from '@/component/aboutus/OurCompany'
import OurHistory from '@/component/aboutus/Ourhistory';
import CommonBreadcrumb from '@/component/commoncomponent/CommonBreadcrumb';
import React from 'react'
import { design2 } from '../../../public/assets/project';
const data = {
    cont1: "PROJECTS",
    cont2: "Home >> About Us",
    cont3: "We Take Care Of Everthing",
    cont4: "We bring innovation to reality.",
    bgImage: design2.src,
  };
export default function page() {
  return (
    <div>
        <CommonBreadcrumb data={data} />
   <OurCompany/>
   
   <OurHistory/>
   </div>
  )
}
