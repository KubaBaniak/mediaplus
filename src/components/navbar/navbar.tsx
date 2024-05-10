import "./navbar.scss";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="navigation">
      <img
        src="https://cdn.7tv.app/emote/613937fcf7977b64f644c0d2/4x.webp"
        alt=""
      />
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
      <button>Book Appointment</button>
    </nav>
  );
}
