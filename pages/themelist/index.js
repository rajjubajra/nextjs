import Card from '../../components/ThemeList/Card';
import Layout from '../../components/yellowWebsite01/Layout';

const themeList = [
  {
    "id": "1",
    "title": "Theme One",
    "description": "Business Theme - 1",
    "image": "-",
    "link": "/music-one"
  },
  {
    "id": "2",
    "title": "Theme Two",
    "description": "Business Theme - 2",
    "image": "-",
    "link": "/"
  },
  {
    "id": "3",
    "title": "Theme Three",
    "description": "Business Theme - 3 ",
    "image": "-",
    "link": "/"
  },
  {
    "id": "4",
    "title": "Theme Four",
    "description": "Business Theme - 4",
    "image": "-",
    "link": "/"
  }

]

function Index() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div>
          <h2 className="w-full text-center mt-8">Theme List</h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-4">
            {
              themeList.map((item, index) => {
                return <Card key={index} item={item} />
              })
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index