import "../css/LeftSideBar.css";
import { IoCarSportSharp } from "react-icons/io5"; // Cars
import { MdScience, MdSportsVolleyball, MdMoreHoriz } from "react-icons/md"; // Science
import { GrTechnology } from "react-icons/gr"; // Technology
import { BiCodeAlt, BiSolidPlanet } from "react-icons/bi"; // Programming

const LeftSidebar = () => {
  return (
    <>
      <aside className="leftBar">
        <nav className="leftBar_menu">
          <h4>Blogs on Different Categories</h4>
          <ul style={{ listStyle: "none" }}>
            <li>
              <span className="link2">
                <h6><IoCarSportSharp style={{ color: "black", fontSize: "30px" }} />CARS</h6>
              </span>
              <span className="link2">
                <h6>< MdScience style={{ color: "blue", fontSize: "30px" }} />SCIENCE</h6>
              </span>
              <span className="link2">
                <h6><GrTechnology style={{ color: "red", fontSize: "30px" }} />TECHNOLOGY</h6>
              </span>
              <span className="link2">
                <h6><MdSportsVolleyball style={{ color: "black", fontSize: "30px" }} />SPORTS</h6>
              </span>
              <span className="link2">
                <h6><MdMoreHoriz style={{ color: "red", fontSize: "30px" }} />..MORE</h6>
              </span>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default LeftSidebar;
