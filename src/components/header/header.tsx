import "./header.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Header() {
  return (
    <header className="top-header">
      <div className="info">
        <div>About</div>
        <div>Doctors</div>
        <div>Contact</div>
        <div>FAQ</div>
      </div>
      <div className="contact">
        <div>
          <FaPhoneAlt />
          +48517300252
        </div>
        <div>
          <IoMdMail />
          j.urbaniak@moodup.team
        </div>
      </div>
    </header>
  );
}
