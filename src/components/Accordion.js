import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ObjectAllKeys } from "../utils/ObjectAllKeys";
import keyGenerator from "../utils/keyGenerator";
import { Link } from "react-router-dom";


const AccordionItem = ({ catagory, items, isOpen, onClick }) => {
   
  const contentHeight = useRef();
  return (
    <div className="text-[#fffd] text-base relative block a-transition overflow-hidden w-full cursor-pointer catagory-container">
      <button
        className={`w-full ${isOpen ? "active" : ""} flex justify-between p-4`}
        onClick={onClick}
      >
        <p className="">{catagory}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""} text-2xl`} />
      </button>

      <div
        ref={contentHeight}
        className="items-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="">{items.map(item => (<Link to={`/${item}`} key={keyGenerator()} className="block px-7 py-2 text-sm hover:bg-[#16191f]">{item}</Link>))}</p>
      </div>
    </div>
  );
};

const Accordion = ({data}) => {
  console.log(data)
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const keys = ObjectAllKeys(data);

  return (
    <div className="container">
        {/* {console.log(data[0][item], index, item)} */}
      {keys.map((item, index) => (
        <AccordionItem
          key={index}
          catagory={item}
          items={data[0][item]}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;