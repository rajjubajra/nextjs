import BounceArrow from '../../components/yellowWebsite01/BounceArrow'
import PageContent from '../../components/yellowWebsite01/PageContent'
import PageLinks from '../../components/yellowWebsite01/PageLinks'
import From from '../../components/yellowWebsite01/Form/Form'
import { useInView } from 'react-intersection-observer'
import Layout from '../../components/yellowWebsite01/Layout'



function YellowWebsite() {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  console.log(inView);

  return (
    <Layout>

      <div className="min-h-screen flex flex-col justify-center  items-center">

        <PageContent />
        <PageLinks />

      </div>



      {/** boundinc arrow down */}
      <div className={`${inView && 'hidden'}`}>
        <div className="hidden md:flex justify-center -mt-12">
          <BounceArrow />
        </div>
      </div>


      {/** contact form */}
      <div ref={ref}>
        <From />
      </div>

    </Layout>
  )
}

export default YellowWebsite