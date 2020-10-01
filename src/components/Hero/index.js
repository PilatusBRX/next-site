import { HeroBg, Title, Button, HeroContainer, Paragraph } from "./style";
const Hero = () => {
  return (
    <HeroBg>
      <HeroContainer>
        <Title>Welcome to Knoxx.</Title>
        <Paragraph>A Nice Place to Live!</Paragraph>
        <Button href='#know-more'>Know more</Button>
      </HeroContainer>
    </HeroBg>
  );
};

export default Hero;
