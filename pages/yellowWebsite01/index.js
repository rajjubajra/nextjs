import PageContent from './PageContent'
import PageLinks from './PageLinks'



function YellowWebsite() {




  return (
    <div className="h-screen flex flex-col justify-center  items-center">
      <PageContent />
      {/** BUTTONS */}
      <PageLinks />
    </div>
  )
}

export default YellowWebsite