import Link from 'next/link'

function ViewButton({ link, name }) {
  return (

    <div className="w-24 text-center py-1 px-2 border-2 border-gray-700" >
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </div>


  )
}

export default ViewButton
