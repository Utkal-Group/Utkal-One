
import CommonBreadcrumb from '@/component/commoncomponent/CommonBreadcrumb';
import OurAim from '@/component/team/OurAim';
import Teammember from '@/component/team/Teammember'

import React from 'react'
import { design2 } from '../../../public/assets/project';
// const inter = Inter({ subsets: ["latin"] });

const data = {
  cont1: "TEAM  MEMBERS",
  cont2: "Home >> Our Team",
  cont3: "We Take Care Of Everthing",
  cont4: "We bring innovation to reality.",
  bgImage: design2.src,
};
export default function page() {
  return (
    <>
    <CommonBreadcrumb data={data} />
    <Teammember/>
    <OurAim/>
    </>
  )
}
