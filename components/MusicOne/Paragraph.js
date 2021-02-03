import Link from 'next/link'
import ViewButton from './View-Button';

function Paragraph({ title, body, date, link, linkname }) {
  return (
    <div>
      <div className="mb-10">{date}</div>
      <div className="mb-3" dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  )
}

export default Paragraph
