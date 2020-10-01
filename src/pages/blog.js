import Layout from "../components/Layout";
import Head from "next/head";
import styled from "styled-components";
import Posts from "../components/Posts";
import fetch from "isomorphic-unfetch";
const Blog = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Knoxx - Blog</title>
      </Head>
      <Title>Our Blog</Title>
      <Posts posts={posts} />
    </Layout>
  );
};

Blog.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1/posts");
  const posts = await res.json();
  return { posts };
};

export default Blog;

export const Title = styled.h1`
  font-size: 48px;
  margin-top: 150px;
  letter-spacing: 8px;
`;
