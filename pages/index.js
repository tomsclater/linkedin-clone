import { signOut } from 'next-auth/react';
import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
    </div>
  );
}
