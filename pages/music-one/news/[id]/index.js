import Layout from '../../../../components/MusicOne/Layout';
import { useRouter } from 'next/router';
import ViewButton from '../../../../components/MusicOne/View-Button';
import { server } from '../../../../config'


function index({ newsDetail }) {

  const router = useRouter();
  const { id } = router.query;
  console.log("router ? ", id)

  return (
    <Layout>

      <div className="container flex justify-center">

        <div className="md:w-3/4 md:mt-10 mt-5">
          <div className="mb-5">
            <h2>News - Id: {id}: </h2>
          </div>

          <div className="border p-5 mt-5">
            <div>Date: {newsDetail.date}</div>
            <h2>title: {newsDetail.event}</h2>
            <div>{Detail.venue}</div>
          </div>


          <ViewButton link="/music-one/music-one-news" name="Back" />


        </div>

      </div>

    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/music-one/news/${context.params.id}`)

  const newsDetail = await res.json()

  return {
    props: {
      newsDetail,
    },
  }
}

export const getStaticPaths = async () => {

  const res = await fetch(`${server}/api/music-one/news/`)

  const newsDetails = await res.json()

  const ids = newsDetails.map((item) => item.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }

}


export default index