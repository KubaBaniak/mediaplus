import { useState } from "react";
import "./carousel.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(1);

  const changeCarouselImage = (nextImage: boolean) => {
    setCurrentImage((prev) => {
      console.log(prev);
      if (nextImage) {
        return ((prev + 1) % 3) + 1;
      } else {
        return ((prev - 1) % 3) + 1;
      }
    });
  };

  const imageUrl = new URL(
    `/src/assets/img/slider${currentImage}.jpg`,
    import.meta.url,
  );
  const currentImageBackground = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="carousel" style={currentImageBackground}>
      <div
        className="carousel__arrow--left"
        onClick={() => changeCarouselImage(false)}
      >
        <IoIosArrowBack />
      </div>
      <div
        className="carousel__arrow--right"
        onClick={() => changeCarouselImage(true)}
      >
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
