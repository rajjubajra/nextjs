import Meta from './Meta';

function Layout({ children, title, keywords, description }) {
  return (
    <>
      <Meta title={title} keywords={keywords} description={description} />
      <div className="container">
        {children}
      </div>
    </>
  )
}

export default Layout
