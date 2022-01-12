import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/Layout";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Boilerplate | Index</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Howdy!</h1>
      </Layout>
    </>
  );
};

export default IndexPage;
