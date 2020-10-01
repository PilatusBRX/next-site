import Layout from "../components/Layout";
import Head from "next/head";
import styled from "styled-components";
import Posts from "../components/Posts";
const Blog = () => {
  return (
    <Layout>
      <Head>
        <title>Knoxx - Blog</title>
      </Head>
      <Title>Our Blog</Title>
      <Posts />
    </Layout>
  );
};

export default Blog;

export const Title = styled.h1`
  font-size: 48px;
  margin-top: 150px;
  letter-spacing: 8px;
`;
