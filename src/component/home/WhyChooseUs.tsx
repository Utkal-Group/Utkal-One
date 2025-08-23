import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import {
  construct,
  local,
  master,
  procure,
  service1,
  service2,
  startup,
  sustain,
  tech,
} from "../../../public/assets/home";
import Image from "next/image";
type NewsArticle = {
  title: string;
  date: string;
  comments: number;
  summary: string;
  content: string;
  image: string;
};

const newsData: NewsArticle[] = [
  {
    title: "BluPine Energy Signs PPA with Amazon for 99 MW Wind Project",
    date: "Feb 5, 2025",
    comments: 3,
    summary: "BluPine Energy has entered into a Power Purchase Agreement (PPA) with Amazon to supply 99 MW of wind energy...",
    content: "BluPine Energy and Amazon have signed a PPA to boost renewable energy in India's construction sector...",
    image: construct.src,
  },
  {
    title: "Ceigall India Secures Contract for Ludhiana Bypass",
    date: "Feb 2, 2025",
    comments: 1,
    summary: "Ceigall India has been awarded a contract to construct a 25.24 km stretch of the Ludhiana bypass...",
    content: "The project aims to enhance connectivity and reduce traffic congestion in Ludhiana...",
    image: local.src,
  },
  {
    title: "DP World Launches Rail Service Linking Gujarat and NCR",
    date: "Jan 28, 2025",
    comments: 5,
    summary: "DP World has launched a new rail service between Gujarat and the National Capital Region (NCR)...",
    content: "This move is set to improve cargo movement and trade efficiency across India...",
    image: procure.src,
  },
  {
    title: "Adani Green Secures $2 Billion Loan for Renewable Expansion",
    date: "Jan 20, 2025",
    comments: 2,
    summary: "Adani Green Energy has secured a $2 billion loan to expand its renewable energy capacity...",
    content: "The funding will be used to develop solar and wind projects across multiple states...",
    image: construct.src,
  },
  {
    title: "L&T Bags $1.2 Billion Contract for Smart City Project",
    date: "Jan 15, 2025",
    comments: 4,
    summary: "Larsen & Toubro has won a $1.2 billion contract to develop smart city infrastructure...",
    content: "The project includes AI-driven traffic management and sustainable energy solutions...",
    image: local.src,
  },
  {
    title: "Tata Steel Inaugurates Green Hydrogen Plant",
    date: "Jan 10, 2025",
    comments: 6,
    summary: "Tata Steel has inaugurated its first green hydrogen plant to support sustainable steel production...",
    content: "The plant will significantly reduce carbon emissions and promote cleaner manufacturing...",
    image: procure.src,
  },
  {
    title: "Delhi Metro Expands with AI-Powered Train Control System",
    date: "Jan 5, 2025",
    comments: 3,
    summary: "Delhi Metro introduces an AI-powered control system for improved efficiency...",
    content: "The system aims to reduce delays and enhance passenger experience with real-time monitoring...",
    image: construct.src,
  },
  {
    title: "Indian Railways Electrifies 90% of Tracks",
    date: "Dec 28, 2024",
    comments: 5,
    summary: "Indian Railways achieves 90% electrification, moving closer to carbon neutrality...",
    content: "This marks a major step in India's goal to eliminate diesel-based locomotives...",
    image: local.src,
  },
  {
    title: "JioFiber Expands 5G Connectivity to 200 Cities",
    date: "Dec 20, 2024",
    comments: 7,
    summary: "Reliance Jio announces the expansion of 5G connectivity to over 200 cities...",
    content: "This will enhance internet speed and improve digital infrastructure nationwide...",
    image: procure.src,
  },
  {
    title: "Vedanta Plans $1 Billion Investment in Semiconductor Manufacturing",
    date: "Dec 15, 2024",
    comments: 4,
    summary: "Vedanta announces a $1 billion investment in India's semiconductor industry...",
    content: "This move aims to reduce dependency on chip imports and boost domestic production...",
    image: construct.src,
  },
  {
    title: "India’s First Hyperloop Test Track Construction Begins",
    date: "Dec 10, 2024",
    comments: 6,
    summary: "India begins construction of its first hyperloop test track for high-speed travel...",
    content: "The test track will be a significant leap in future transportation technology...",
    image: local.src,
  },
  {
    title: "Mumbai Airport Adopts AI-Powered Baggage Handling System",
    date: "Dec 5, 2024",
    comments: 2,
    summary: "Mumbai Airport upgrades to an AI-based baggage handling system for faster processing...",
    content: "This new system is expected to reduce waiting times and improve efficiency...",
    image: procure.src,
  },
];
const services = [
  {
    title: "Financing & Equity Investment",
    description:
      "In addition to building some of the world's modern marvels, BuildPlus plays an important role in developing and financing projects.",
    image: service2,
  },
  {
    title: "Engineering",
    description:
      "We rely on advanced technology to deliver engineering and construction projects to our customers in any given location.",
    image: service1,
  },
  {
    title: "Master Planning",
    description:
      "The key to a successful project often depends on what happens in its earliest phase. Before any work commences, there is an idea, a vision.",
    image: master,
  },
  {
    title: "Procurement",
    description:
      "BuildPlus’s supply chain organization provides our customers with global procurement and contracts services that are unsurpassed in the industry.",
    image: procure,
  },
  {
    title: "Sustainability solutions",
    description:
      "We have delivered highly complex projects, in some of the most challenging environments, contributing to the evolution of the engineering industry.",
    image: sustain,
  },
  {
    title: "Local capacity development",
    description:
      "BuildPlus brings an optimize-and-maximize approach when beginning work in a particular country, tailoring the approach to local conditions.",
    image: local,
  },
  {
    title: "Construction",
    description:
      "BuildPlus has the resources and knowledge to undertake just about any job. With projects, people, and offices in more than 40 countries.",
    image: construct,
  },
  {
    title: "Startup & Operations",
    description:
      "BuildPlus offers startup programs, management and operations, and maintenance support roles for facilities all around the world.",
    image: startup,
  },
  {
    title: "Technology licensing & consulting",
    description:
      "Technology drives our business—it speeds schedules, cuts costs, improves productivity, ensures quality, and delivers long-term value for our customers.",
    image: tech,
  },
];

const whyChooseUsData = [
  {
    title: "Supersonic demo installation",
    description:
      "No more time wasting in data import. We rocket its speed by improving the progress: all the pictures will be downloaded first, then copied to content by folders, and finally other data. This strikingly reduces your waiting time.",
  },
  {
    title: "Effortless customization",
    description:
      "There are many people run into trouble when customize their website due to the complexity of their template. This absolutely will not happen with BuildPlus as we created it with a mindset of ease your process.",
  },
  {
    title: "Powerful shortcodes",
    description:
      "In establishing process, there may be some complicated tasks. But no worry as all of those have been solved by BuildPlus’s effective shortcodes system, helping you save time and create your site quickly.",
  },
  {
    title: "Dedicated customer support",
    description:
      "We focus on our customers and listen to all of their problems which will be quickly handled by our experienced developers. You will never have any difficulty building your site as you got us. Save time worrying and focus on your business.",
  },
];


export default function WhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const itemsPerPage = 2; // Show 2 services at a time
  const [ ] = useState<NewsArticle | null>(null);
  const [ ] = useState(false);
  
  
  

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= services.length ? 0 : prevIndex + itemsPerPage
    );
  };

  // Function to handle previous set of services
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? services.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-b italic from-[#24211e] via-gray-400 to-blue-800 flex flex-col md:flex-row gap-8 p-6">
      <div className="w-full flex flex-col my-8 gap-6  main-container">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-3xl font-mono font-semibold text-blue-700">Recent News</h1>
          <div className="h-[1.5px] w-full bg-gray-400"></div>
          <div className="flex text-blue-700 space-x-2">
            <ArrowCircleLeftIcon className="cursor-pointer text-2xl" onClick={handlePrev} />
            <ArrowCircleRightIcon className="cursor-pointer text-2xl" onClick={handleNext} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsData.slice(currentIndex, currentIndex + itemsPerPage).map((news, index) => (
            <div key={index} className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col relative group transition-opacity duration-700">
              <div className="relative w-full h-56 overflow-hidden">
                <Image src={news.image} width={300} height={0} alt={news.title} className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-sm" />
              </div>
              <div className="h-full relative bg-gray-900 text-white p-5">
                <h3 className="text-lg font-bold text-orange-400">{news.title}</h3>
                <p className="text-gray-300 mt-3">{news.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex gap-8 flex-col mt-10">
        <div className="flex items-center gap-4">
          <p className="text-lg font-bold text-blue-600">Why Choose Us</p>
          <span className="h-[1.5px] w-full bg-gray-400"></span>
        </div>
        <div className="w-full space-y-4">
          {whyChooseUsData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left py-3 flex justify-between italic items-center px-4 transition-all duration-500 ${
                  activeIndex === index ? "bg-blue-100 text-blue-700" : "bg-white text-gray-800"
                } hover:bg-blue-200`}
              >
                <span className="text-lg font-semibold">{item.title}</span>
                <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
              </button>
              <div
                className={`transition-all overflow-hidden duration-500 ${
                  activeIndex === index ? "max-h-40 opacity-100 py-2 px-4 bg-gray-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 italic">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
