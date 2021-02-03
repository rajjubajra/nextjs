import Layout from '../../../../components/MusicOne/Layout';
import { useRouter } from 'next/router';
import ViewButton from '../../../../components/MusicOne/View-Button';


function index({ tourDetail }) {

  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>

      <div className="container flex justify-center">

        <div className="md:w-3/4 md:mt-10 mt-5">
          <div className="mb-5">
            <h2>Programme Details: </h2>
          </div>

          <div className="border p-5 mt-5">
            <div>Date: {tourDetail.date}</div>
            <div>Event: {tourDetail.event}</div>
            <div>Venue: {tourDetail.venue}</div>
            <div>City: {tourDetail.city}</div>
          </div>


          <div className="border p-5 mt-5 mb-10">
            <h3 className="text-2xl mb-5">Details:</h3>
            <div>{tourDetail.details}</div>
          </div>

          <ViewButton link="/music-one/music-one-tour" name="Back" />


        </div>

      </div>

    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/music-one/tour/${context.params.id}`)

  const tourDetail = await res.json()

  return {
    props: {
      tourDetail,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/music-one/tour/`)

  const tourDetails = await res.json()

  const ids = tourDetails.map((item) => item.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}


export default index