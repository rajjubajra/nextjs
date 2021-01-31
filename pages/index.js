import Head from 'next/head'
import YellowWebsite from './yellowWebsite01/index';
import CopyRightFooter from '../components/CopyRightFooter.js/CopyRightFooter';


export default function Home() {
  return (
    <div className="container px-10">
      <Head>
        <title>Web Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <YellowWebsite />


      {/** copyright */}
      <CopyRightFooter />

    </div>
  )
}
