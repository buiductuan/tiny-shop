import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { Button, version } from 'antd';
import Compoments from './components';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Compoments.Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Tiny shop
        </h1>
        <Button type="primary">Click me</Button>
      </main>
      <Compoments.Footer />
    </div>
  )
}

export default Home
