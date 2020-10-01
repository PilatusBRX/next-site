import Card from "../Card";
const Cards = ({ cards }) => {
  return (
    <ul id='know-more'>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </ul>
  );
};

export default Cards;
