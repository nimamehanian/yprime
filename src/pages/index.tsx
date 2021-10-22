import React, { FC } from 'react';
import Head from 'next/head';
// import Header from '@components/header/header';
import Sidebar from '@components/sidebar/sidebar';

// import styled from 'styled-components';
// import { tikTokTextEffect } from '@styles/mixins';

// const YieldlyTitle = styled.div`
//   letter-spacing: 2px;
//   margin-left: 24px;
//   margin-top: 24px;
//   font-weight: bold;
//   ${tikTokTextEffect}
// `;

const Home: FC = () => (
  <div>
    <Head>
      <title>Yieldly</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>

    <Sidebar />
  </div>
);

export default Home;
