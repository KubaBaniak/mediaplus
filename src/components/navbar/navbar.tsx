import "./navbar.scss";
import "../../reusables/buttons.scss";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/img/logo.png";

export default function Navbar() {
  return (
    <nav className="navigation">
      <img src={logo} alt="" />
      <div className="nav-menu">
        <div>
          Home
          <IoIosArrowDown />
        </div>
        <div>Doctors</div>
        <div>Services</div>
        <div>
          Pages
          <IoIosArrowDown />
        </div>
        <div>
          Blogs
          <IoIosArrowDown />
        </div>
        <div>Contact Us</div>
      </div>
      <button className="button--blue">Book Appointment</button>
    </nav>
  );
}
