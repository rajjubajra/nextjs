import Head from 'next/head';
import Navbar from './Navbar';

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Navbar />
        {children}
      </div>
    </>
  )
}

export default Layout
