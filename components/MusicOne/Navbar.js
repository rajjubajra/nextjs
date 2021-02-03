import React, { useState } from 'react'
import Link from 'next/link'
import NavbarIcon from './NavbarIcon'


const navlist = [
  {
    "id": "1",
    "name": "Home",
    "link": "/music-one"
  },
  {
    "id": "2",
    "name": "Tour",
    "link": "/music-one/music-one-tour"
  },
  {
    "id": "3",
    "name": "News",
    "link": "/music-one/music-one-news"
  },
  {
    "id": "4",
    "name": "About",
    "link": "/music-one/music-one-about"
  },
  {
    "id": "5",
    "name": "Gallery",
    "link": "/music-one/music-one-gallery"
  },
  {
    "id": "6",
    "name": "Music",
    "link": "/music-one/music-one-music"
  },
  {
    "id": "7",
    "name": "Contact",
    "link": "/music-one/music-one-contact"
  },

]

function Navbar() {

  const [open, setOpen] = useState(false);


  return (
    <div className="min-h-16 bg-nav">

      {/** SVG ICON */}
      <div onClick={() => setOpen(open ? false : true)}>
        <NavbarIcon type={open} />
      </div>

      {/** NAVIGATION LIST */}
      <div className={open ? "block" : "hidden md:block"}>
        <ul className="md:flex md:justify-center">
          {
            navlist.map(item => {
              return <li key={item.id} className="mx-3 p-2 font-thin text-nav">
                <Link href={item.link}><a>{item.name}</a></Link>
              </li>
            })
          }
        </ul>
      </div>

    </div>
  )
}

export default Navbar
