import "./card.scss";

interface ICard {
  title: string;
  secondaryTitle: string;
  text: string;
  img_url: string;
}

export default function Card({ card }: { card: ICard }) {
  return (
    <div className="card">
      <h4>{card.secondaryTitle}</h4>
      <h3>{card.title}</h3>
      <span>{card.text}</span>
      <button className="button--learn-more">Learn more</button>
      <img src={card.img_url} />
    </div>
  );
}
