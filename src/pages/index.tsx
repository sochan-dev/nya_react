import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Styles from '../../styles/sass/test.module.scss';

const Home: NextPage = () => {
  return (
    <div className={Styles.test}>
      <p>test</p>
    </div>
  );
};
export default Home;
