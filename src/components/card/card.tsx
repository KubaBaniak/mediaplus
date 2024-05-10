import { IconType } from "react-icons";
import "./card.scss";
import { FaLongArrowAltRight } from "react-icons/fa";

interface ICard {
  title: string;
  secondaryTitle: string;
  text: string;
  icon: IconType;
}

export default function Card({ card }: { card: ICard }) {
  return (
    <div className="card">
      <h4>{card.secondaryTitle}</h4>
      <h3>{card.title}</h3>
      <span>{card.text}</span>
      <button className="button--learn-more">
        Learn more
        <FaLongArrowAltRight />
      </button>
      <card.icon className="icon" />
    </div>
  );
}
