import Layout from '../../components/MusicOne/Layout';
import Link from 'next/link';



function MusicOneTour({ tourdata }) {



  return (
    <Layout title="Yellow-website - Tour">
      <div className="mx-10 p-10">
        <h2>Tour Programme</h2>
      </div>
      <div className="container px-10">
        {tourdata &&
          tourdata.map(item => (
            <div className="flex flex-col border mb-5 lg:m-10 lg:flex-row">

              <div className="w-full p-3 lg:w-1/4">
                {item.date}
              </div>

              <div className="w-full p-3 lg:border-l lg:border-r font-thin">
                <h3>{item.event}</h3>
                <p>{item.venue}</p>
                <p>{item.city}</p>
              </div>

              <div className="w-full lg:w-1/4 flex border-t lg:border-t-0">
                <div className="w-1/2 p-3 border-r">
                  <Link href='/music-one/music-one-tour/[id]' as={`/music-one/music-one-tour/${item.id}`}><a>Detail</a></Link>
                </div>
                <div className="w-1/2 p-3">
                  <Link href="#"><a>Buy Ticket</a></Link>
                </div>
              </div>

            </div>
          ))}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/music-one/tour`)
  const tourdata = await res.json()

  return {
    props: {
      tourdata,
    },
  }
}


export default MusicOneTour
