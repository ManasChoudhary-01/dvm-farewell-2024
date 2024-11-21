import React, { useState } from "react";

import "./MainBody.css";
import SideMenu from "./SideMenu";
import Carousel from "./Carousel";
import PlaylistSection from "./PlaylistSection";

const data = [
  {
    name: "manas",
    vertical: "front",
    img: "../",
  },
  {
    name: "manas choudhary",
    vertical: "front",
    img: "../",
  },
];

export default function MainBody() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="mainbody">
      <SideMenu></SideMenu>
      <PlaylistSection prev={handlePrev} next={handleNext} />
      <Carousel items={[data[currentIndex]]} ></Carousel>
    </div>
  );
}
