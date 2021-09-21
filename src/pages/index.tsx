import React, { FC } from 'react';
import Head from 'next/head';

const Home: FC = () => (
  <div>
    <Head>
      <title>Yieldly</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <h1>Hello, Yieldly.</h1>
  </div>
);

export default Home;
