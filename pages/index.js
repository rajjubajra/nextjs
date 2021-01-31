import Head from 'next/head'
import YellowWebsite from './yellowWebsite01/index';
import Image from 'next/image'


export default function Home() {
  return (
    <div className="container px-10">
      <Head>
        <title>Web Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <YellowWebsite />




      <footer className="py-10">
        <a
          href="https://yellow-website.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex"
        >
          Powered by{' '}
          <Image
            src="/yellow-website-square.svg"
            alt="yellow-website Logo"
            width={80}
            height={80} />
        </a>
      </footer>
    </div>
  )
}
