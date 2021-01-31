import Image from 'next/image'

function CopyRightFooter() {

  const date = new Date();
  return (
    <footer className="w-full flex justify-center">
      <a
        href="https://yellow-website.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex font-thin"
      >
        &copy; {date.getFullYear()} Design by RD Bajra @ yellow-website.com

        <div className="-mt-2">
          <Image
            src="/yellow-website-square.svg"
            alt="yellow-website Logo"
            width={40}
            height={40} />
        </div>

      </a>
    </footer>
  )
}

export default CopyRightFooter
