import Image from 'next/image'

function PageContent() {
  return (
    <div className="w-full xl:w-1/3 lg:w-1/2 md:w-3/5 lg:py-5">
      <div className="md:grid md:grid-flow-col">
        <div className="flex justify-center md:border-r">
          <div className="sm:mb-4">
            <Image
              src={`/yellow-website-logo-square.png`}
              alt="yellow-website logo"
              width={100}
              height={100} />
          </div>
        </div>

        <div className="lg:col-start-2 
                        md:pl-8 md:mt-8 
                        flex justify-center flex-col">

          {/** MAIN TITLE */}
          <h1 className="text-5xl tracking-tighter text-center md:text-left">Yellow-Website</h1>

          {/** TEXT BODY */}
          <div className="h-300 mt-10 flex align-middle justify-center">
            <div>
              <h2 className="leading-loose">Hi,</h2>
              <h2 className="leading-loose font-thin">I am a web designer</h2>
              <div className="text-2xl leading-loose">
                <p>Welcome to my website</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageContent
