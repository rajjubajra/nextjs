import Image from 'next/image'

function PageContent() {
  return (
    <div className="lg:w-2/5 md:w-1/2 sm:w-full">
      <div className="grid grid-flow-col grid-col-2">
        <div className="flex justify-center border-r">
          <div>
            <Image
              src={`/yellow-website-logo-square.png`}
              alt="yellow-website logo"
              width={100}
              height={100} />
          </div>
        </div>

        <div className="col-start-2 pl-8">
          <h1 className="text-5xl tracking-tighter">Yellow-Website</h1>
          <div className="h-300 mt-10">
            <h2 className="leading-loose">Hi,</h2>
            <h2 className="leading-loose font-thin">I am a web designer</h2>
            <div className="text-2xl leading-loose">
              <p>Welcome to my website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageContent
