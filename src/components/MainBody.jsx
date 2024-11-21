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
];

export default function MainBody() {
  return (
    <div className="mainbody">
      <SideMenu></SideMenu>
      <PlaylistSection></PlaylistSection>
      <Carousel items={data}></Carousel>
    </div>
  );
}
