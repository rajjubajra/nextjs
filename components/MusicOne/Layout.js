import Meta from './Meta';
import Navbar from './Navbar';

function Layout({ children, title, keywords, description }) {
  return (
    <>
      <Meta title={title} keywords={keywords} description={description} />
      <div className="container">
        <Navbar />
        {children}
      </div>
    </>
  )
}

export default Layout
