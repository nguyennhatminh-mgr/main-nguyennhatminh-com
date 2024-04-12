import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hydra invinci</title>
        <meta name="description" content="Hydra invinci" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <Link href="/portfolio">
          <a className="text-primary block">Go go portfolio page</a>
        </Link>
        <Link href="/shop-by-color">
          <a className="text-primary block">Go go shop by color page</a>
        </Link>
      </div>
      <div
        style={{
          position: 'relative',
          width: 500,
          height: 300,
          backgroundColor: 'red',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 200,
            height: 200,
            backgroundColor: 'green',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            width: 100,
            height: 100,
            right: 0,
            backgroundColor: 'yellow',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
