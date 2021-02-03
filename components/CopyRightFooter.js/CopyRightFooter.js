import Image from 'next/image'

function CopyRightFooter() {

  const date = new Date();
  return (
    <footer className="w-full flex flex-col md:flex-row justify-center">

      <div className="order-2 md:order-1 text-center md:text-left font-thin">
        &copy; {date.getFullYear()} Design by
      </div>

      <div className="hidden md:flex md:order-2 font-thin"> - </div>

      <div className="order-3 md:order-2 text-center md:text-left">
        <a
          href="https://yellow-website.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-thin"
        >yellow-website.com</a>
      </div>

      <div className="-mt-2 order-1 md:order-3 text-center md:text-left">
        <Image
          src="/yellow-website-square.svg"
          alt="yellow-website Logo"
          width={40}
          height={40} />
      </div>

    </footer>
  )
}

export default CopyRightFooter
