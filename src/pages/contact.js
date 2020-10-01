import Layout from "../components/Layout";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Knoxx - Contact</title>
      </Head>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
