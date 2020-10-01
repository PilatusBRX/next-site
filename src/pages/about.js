import Layout from "../components/Layout";
import Head from "next/head";
import styled from "styled-components";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Knoxx - Blog</title>
      </Head>
      <Container>
        <Title>About Konxx.</Title>
        <Paragraph>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget
          urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default About;

export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  color: maroon;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  margin-top: 250px;
  padding: 20px 32px;
  background-color: #ebebeb;
`;

export const Paragraph = styled.p`
  font-size: 15px;
  line-height: 25px;
  color: slategrey;
`;
