interface ICardText {
  title: string;
  secondaryTitle: string;
  text: string;
}

export default function Carusel({ cardText }: { cardText: ICardText }) {
  return (
    <div>
      <h4>{cardText.title}</h4>
      <h3>{cardText.secondaryTitle}</h3>
      <span>{cardText.text}</span>
      <span>{cardText.text}</span>
      <button>Learn more</button>
    </div>
  );
}
