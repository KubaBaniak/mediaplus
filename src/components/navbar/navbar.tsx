import "./navbar.scss";
import "../../reusables/buttons.scss";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/img/logo.png";
import { useState } from "react";
import DropdownMenu from "../dropdownMenu/dropdownMenu";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuVisable, setIsMenuVisable] = useState(false);

  const handleNavMenuClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  console.log(isMenuVisable);
  return (
    <nav className="navigation">
      <img src={logo} alt="" />
      <div
        className={`nav-menu ${
          isMenuVisable ? "nav-menu--active" : "nav-menu--inactive"
        }`}
      >
        <div
          onClick={() => handleNavMenuClick("Home")}
          className={`nav-item ${activeItem === "Home" ? "active" : ""}`}
        >
          Home
          <IoIosArrowDown />
        </div>
        <div
          onClick={() => handleNavMenuClick("Doctors")}
          className={`nav-item ${activeItem === "Doctors" ? "active" : ""}`}
        >
          Doctors
        </div>
        <div
          onClick={() => handleNavMenuClick("Services")}
          className={`nav-item ${activeItem === "Services" ? "active" : ""}`}
        >
          Services
        </div>

        <div className="nav-dropbox">
          <div
            onClick={() => handleNavMenuClick("Pages")}
            className={`nav-item ${activeItem === "Pages" ? "active" : ""}`}
          >
            Pages
            <IoIosArrowDown />
          </div>
          {activeItem === "Pages" && (
            <DropdownMenu
              menuItems={[
                { url: "test", name: "strig" },
                { url: "test2", name: "number" },
              ]}
            />
          )}
        </div>

        <div className="nav-dropbox">
          <div
            onClick={() => handleNavMenuClick("Blogs")}
            className={`nav-item ${activeItem === "Blogs" ? "active" : ""}`}
          >
            Blogs
            <IoIosArrowDown />
          </div>
          {activeItem === "Blogs" && (
            <DropdownMenu menuItems={[{ url: "test", name: "blog" }]} />
          )}
        </div>

        <div
          onClick={() => handleNavMenuClick("Contact Us")}
          className={`nav-item ${activeItem === "Contact Us" ? "active" : ""}`}
        >
          Contact Us
        </div>
      </div>
      <button className="button--blue">Book Appointment</button>
      <span
        className="mobile-menu-toggle"
        onClick={() => setIsMenuVisable((prev) => !prev)}
      >
        <GiHamburgerMenu />
      </span>
    </nav>
  );
}
