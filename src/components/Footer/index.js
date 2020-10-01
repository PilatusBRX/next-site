import { FooterContainer, Paragraph, Link } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <Paragraph>
        &copy; 2020 - All right reserved to
        <Link href='https://portfolio.hellostudio.com.br'>
          {" "}
          Marcelo Anselmo
        </Link>
      </Paragraph>
    </FooterContainer>
  );
};

export default Footer;
