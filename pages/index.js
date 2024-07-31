import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col justify-center h-screen'>
        <p className='m-auto text-bcWhite text-6xl'>Coming soon...</p>
        <div className=''>
         <img src="/logo.jpeg" alt="mainLogo" />
        </div>
      </main>
    </div>
  );
}
