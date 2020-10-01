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
    {
      id: 1,
      title: "Fermentum Lorem Pellentesque",
      desc: "Sed posuere consectetur est at lobortis.",
      icon: icon1,
    },
    {
      id: 2,
      title: "Egestas Bibendum Nibh",
      desc: "Nullam id dolor id nibh ultricies vehicula ut id .",
      icon: icon2,
    },
    {
      id: 3,
      title: "Tristique Sit Cursus",
      desc: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam.",
      icon: icon3,
    },
    {
      id: 4,
      title: "Cras Inceptos Tortor",
      desc: "Donec id elit non mi porta gravida at eget metus.",
      icon: icon4,
    },
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
