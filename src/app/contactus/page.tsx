
import CommonBreadcrumb from '@/component/commoncomponent/CommonBreadcrumb';
import GetInTouch from '@/component/contact/GetInTouch';
import SendUsMessage from '@/component/contact/SendUsMessage';

import React from 'react'
import { design2 } from '../../../public/assets/project';
// const inter = Inter({ subsets: ["latin"] });

const data = {
  cont1: "PROJECTS",
  cont2: "Home >> Contact Us",
  cont3: "We Take Care Of Everthing",
  cont4: "We bring innovation to reality.",
  bgImage: design2.src,
};
export default function page() {
  return (
    <div>
        <CommonBreadcrumb data={data} />
   <GetInTouch/>
   <SendUsMessage/>
   </div>
  )
}
