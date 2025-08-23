
import Image from "next/image";
import React from "react";
import { member1, member2, member3, member4, member5, member6 } from "../../../public/assets/aboutus";

const leaders = [
  {
    name: "Riley Bechtel",
    title: "Chairman of the Board",
    description:
      "Mr. Bechtel is a Fellow of the American Academy of Arts and Sciences, an Honorary Fellow of the American Society of Civil Engineers, and an Honorary Lifetime member of the American Society of Safety Engineers.",
    image: member1.src, // Update the path
  },
  {
    name: "Lana Winter",
    title: "Chief Executive Officer",
    description:
      "Lana Winter is chief executive officer of Bechtel Group. Dudley holds a Bachelor of Science degree in civil engineering from Purdue University and a master's degree in business administration from the University of Houston.",
    image: member2.src, // Update the path
  },
  {
    name: "Brendan Bechtel",
    title: "President & Chief Operating Officer",
    description:
      "Brendan graduated with a Bachelor of Arts degree in geography from Middlebury College in Vermont. He also completed dual master’s degrees at Stanford University in business and construction engineering.",
    image: member3.src, // Update the path
  },
  {
    name: "Peter Dawson",
    title: "Chief Financial Officer",
    description:
      "Peter Dawson is chief financial officer (CFO) of Bechtel Group, Inc., responsible for leading the Finance organization, which includes the Controller, Treasury, and Tax functions. He also serves as executive sponsor.",
    image: member4.src, // Update the path
  },
  {
    name: "Michael Bailey",
    title: "General Counsel",
    description:
      "Bailey earned his law degree from the University of Toronto and was a partner in the law firm of Borden Ladner Gervais, LLP before joining Bechtel in 1994. He serves on the board of directors of Transparency International.",
    image: member5.src, // Update the path
  },
  {
    name: "Jim Ivany",
    title: "Manager EPC Functions",
    description:
      "Ivany earned Bachelor of Science and Master of Science degrees in civil engineering from Rensselaer Polytechnic Institute in New York and has been a registered professional engineer in five states.",
    image: member6.src, // Update the path
  },
];

export default function Leadership() {
  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-semibold text-gray-900">Leadership</h2>
      <p className="text-gray-600 mt-2">
        Bechtel is one of the most respected global engineering, construction,
        and project management companies. Together with our customers, we
        deliver landmark projects that foster long-term progress and economic
        growth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {leaders.map((leader, index) => (
          <div key={index} className="text-center">
            <Image
            width={400}   // Adjust width as needed
            height={300}
              src={leader.image}
              alt={leader.name}
              className="w-full h-56 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-semibold">{leader.name}</h3>
            <p className="text-gray-500">{leader.title}</p>
            <p className="mt-2 text-gray-600 text-sm">{leader.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
