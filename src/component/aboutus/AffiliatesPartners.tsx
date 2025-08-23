
import Image from "next/image";
import React from "react";
import { client1, client2, client3, client4, client5 } from "../../../public/assets/home";

const partners = [
  {
    image: client1.src,
    name: "Builder JSC.",
    description:
      "Have previously registered with Dun and Bradstreet and obtained a DUNS number.",
  },
  {
    image: client2.src,
    name: "Structure Multi Media",
    description:
      "Have previously registered with Dun and Bradstreet and obtained a DUNS number.",
  },
  {
    image: client3.src,
    name: "Build Plus JSC.",
    description:
      "Have previously registered with Dun and Bradstreet and obtained a DUNS number.",
  },
  {
    image: client4.src,
    name: "Consult JSC.",
    description:
      "Have previously registered with Dun and Bradstreet and obtained a DUNS number.",
  },
  {
    image: client5.src,
    name: "Theme Move",
    description:
      "Have previously registered with Dun and Bradstreet and obtained a DUNS number.",
  },
  {
    image: client1.src,
    name: "Builder JSC.",
    description:
      "Have previously registered with Dun and Bradstreet and obtained a DUNS number.",
  },
];

export default function AffiliatesPartners() {
  return (
    <div className="py-10 px-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Affiliates & Partners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <Image
            width={400}   // Adjust width as needed
            height={300}
              src={partner.image}
              alt={partner.name}
              className="w-20 h-20 object-contain"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-700">{partner.name}</h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
