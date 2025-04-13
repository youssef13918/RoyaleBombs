import Head from 'next/head';
import dynamic from 'next/dynamic';

export default function Home() {
  return (
    <>
      <Head>
        <title>RoyaleBombs</title>
      </Head>
      <main className="w-screen h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-4">Welcome to RoyaleBombs</h1>
        <p>Game logic coming soon...</p>
      </main>
    </>
  );
}