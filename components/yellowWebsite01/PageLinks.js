import Link from 'next/link'


const links = [
  {
    id: "1",
    name: "Themes",
    link: "/themelist"
  },
  {
    id: "2",
    name: "Free Images",
    link: "/free-images"
  },
  {
    id: "3",
    name: "Web Hosting",
    link: "https://yellow-website.uk"
  },
  {
    id: "4",
    name: "Clients",
    link: "/clients"
  }
]


function PageLinks() {
  return (
    <div className="w-5/6 lg:w-1/3 md:w-2/5 mt-8">
      <div className="grid md:grid-cols-2 md:grid-rows-2  gap-2">
        {
          links.map(item => {
            return <div key={item.id} className="text-center border p-2 font-thin">
              <Link href={item.link}>{item.name}</Link>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default PageLinks