import { signOut } from 'next-auth/react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
    </div>
  );
}
