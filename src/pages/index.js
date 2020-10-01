import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import Hero from "../components/Hero";

import {
  AiFillChrome,
  AiFillUnlock,
  AiFillGitlab,
  AiFillWindows,
} from "react-icons/ai";

const icon1 = <AiFillChrome />;
const icon2 = <AiFillUnlock />;
const icon3 = <AiFillGitlab />;
const icon4 = <AiFillWindows />;

const Home = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "title 1", desc: "description 1", icon: icon1 },
    { id: 2, title: "title 2", desc: "description 2", icon: icon2 },
    { id: 3, title: "title 3", desc: "description 3", icon: icon3 },
    { id: 4, title: "title 4", desc: "description 4", icon: icon4 },
  ]);
  return (
    <Layout>
      <Head>
        <title>Knoxx - Home</title>
      </Head>
      <Hero />
      <Cards cards={cards} />
    </Layout>
  );
};

export default Home;
