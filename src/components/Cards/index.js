import Card from "../Card";
import { CardContainer } from "./style";
const Cards = ({ cards }) => {
  return (
    <CardContainer id='know-more'>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </CardContainer>
  );
};

export default Cards;
