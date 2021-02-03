import Link from 'next/link';

function Card({ item }) {
  return (
    <div className="border p-20 w-96">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span>
        <Link href={item.link}><a>Veiw</a></Link>
      </span>
    </div>
  )
}

export default Card
