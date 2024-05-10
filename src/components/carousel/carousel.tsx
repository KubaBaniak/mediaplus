import "./carousel.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel__arrow--left">
        <IoIosArrowBack />
      </div>
      <div className="carousel__arrow--right">
        <IoIosArrowForward />
      </div>
      <div className="carousel__main">
        <h2>
          Main <span className="key__word">text</span> lorem
        </h2>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
        <div className="carousel__buttons">
          <button className="button--blue">Get appointment </button>
          <button className="button">Contact us</button>
        </div>
      </div>
    </div>
  );
}
