import Layout from '../../components/MusicOne/Layout'
import { server } from '../../config'


function MusicOneTour({ newsdata }) {


  return (
    <Layout>
      <div>
        {

          newsdata.length > 0
          && newsdata.map((item, index) => (

            <section key={index} className="font-sans container m-auto flex flex-col md:flex-row py-8 max-w-3xl px-6 lg:px-0">
              <div className="w-full md:w-1/2 border-b md:border-0 mb-6 md:mb-0 pb-6 md:pb-0 pr-8 flex justify-center items-start flex-col">
                <label for="" className="font-bold">Date: {item.date}</label>
                <h2 className="leading-normal mt-4 md:pr-2">
                  {item.title}</h2>
              </div>
              <div className="w-full md:w-1/2 leading-normal md:border-l md:pl-6 border-0">
                <div dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            </section>
          ))
        }
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/music-one/news`)
  const newsdata = await res.json()

  return {
    props: {
      newsdata,
    },
  }
}


export default MusicOneTour
