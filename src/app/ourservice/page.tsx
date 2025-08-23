
import CommonBreadcrumb from '@/component/commoncomponent/CommonBreadcrumb'
import AllServices from '@/component/ourservices/AllServices';
import BestServices from '@/component/ourservices/BestServices'

import React from 'react'
import { design2 } from '../../../public/assets/project';
// const inter = Inter({ subsets: ["latin"] });

const data = {
  cont1: "PROJECTS",
  cont2: "Home >> Our Services",
  cont3: "We Take Care Of Everthing",
  cont4: "We bring innovation to reality.",
  bgImage: design2.src,
};
export default function page() {
  return (
    <div>
         {/* Breadcrumb Component */}
         <CommonBreadcrumb data={data} />
   
         {/* Design Component */}
         <BestServices />
         <AllServices/>
       </div>
  )
}
