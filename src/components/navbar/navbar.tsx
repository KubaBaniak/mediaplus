import "./navbar.scss";
import "../../reusables/buttons.scss";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/img/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");

  const handleNavMenuClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <nav className="navigation">
      <img src={logo} alt="" />
      <div className="nav-menu">
        <div
          onClick={() => handleNavMenuClick("Home")}
          className={activeItem === "Home" ? "active" : ""}
        >
          Home
          <IoIosArrowDown />
        </div>
        <div
          onClick={() => handleNavMenuClick("Doctors")}
          className={activeItem === "Doctors" ? "active" : ""}
        >
          Doctors
        </div>
        <div
          onClick={() => handleNavMenuClick("Services")}
          className={activeItem === "Services" ? "active" : ""}
        >
          Services
        </div>
        <div
          onClick={() => handleNavMenuClick("Pages")}
          className={activeItem === "Pages" ? "active" : ""}
        >
          Pages
          <IoIosArrowDown />
        </div>
        <div
          onClick={() => handleNavMenuClick("Blogs")}
          className={activeItem === "Blogs" ? "active" : ""}
        >
          Blogs
          <IoIosArrowDown />
        </div>
        <div
          onClick={() => handleNavMenuClick("Contact Us")}
          className={activeItem === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </div>
      </div>
      <button className="button--blue">Book Appointment</button>
    </nav>
  );
}
