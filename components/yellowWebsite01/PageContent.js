import Image from 'next/image'

function PageContent() {
  return (
    <div className="lg:w-2/5 md:w-full sm:w-full">
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

        <div className="md:col-start-2 md:pl-8 md:mt-8 
        sm:flex sm:justify-center sm:flex-col">
          <h1 className="text-5xl tracking-tighter sm:text-center">Yellow-Website</h1>
          <div className="h-300 mt-10 sm:flex sm:align-middle sm:justify-center sm:flex-col">
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
