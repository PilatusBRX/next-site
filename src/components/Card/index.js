import { ListItem, Icon, Title, Desc } from "./style";

const Card = ({ card }) => {
  return (
    <ListItem>
      <Icon>{card.icon}</Icon>
      <Title>{card.title}</Title>
      <Desc>{card.desc}</Desc>
    </ListItem>
  );
};

export default Card;
