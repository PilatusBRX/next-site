import Layout from "../components/Layout";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Knoxx - Contact</title>
      </Head>
      <h1>Keep In Touch</h1>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
