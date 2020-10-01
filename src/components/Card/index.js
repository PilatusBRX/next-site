const Card = ({ card }) => {
  return (
    <li>
      <span>{card.icon}</span>
      <h3>{card.title}</h3>
      <p>{card.desc}</p>
    </li>
  );
};

export default Card;
