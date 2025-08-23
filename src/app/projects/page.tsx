

import CommonBreadcrumb from '@/component/commoncomponent/CommonBreadcrumb';
import Design from '@/component/projects/Design';


import React from 'react';
import { design2 } from '../../../public/assets/project';

// const inter = Inter({ subsets: ["latin"] });

const data = {
  cont1: "PROJECTS",
  cont2: "Home >> Projects",
  cont3: "Explore our latest projects.",
  cont4: "We bring innovation to reality.",
  bgImage: design2.src,
};

export default function Page() {
  return (
    <div>
      {/* Breadcrumb Component */}
      <CommonBreadcrumb data={data} />

      {/* Design Component */}
      <Design />
    </div>
  );
}
