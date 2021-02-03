import Layout from '../../components/MusicOne/Layout'


function MusicOneTour({ newsdata }) {
  return (
    <Layout>
      <div>
        music one news
      </div>
    </Layout>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`http://localhost:3000/api/music-one/news`)
//   const newsdata = await res.json()

//   return {
//     props: {
//       newsdata,
//     },
//   }

// }

export default MusicOneTour
