

function BounceArrow() {
  return (
    <button className="flex justify-center flex-col text-gray-400 font-thin">

      <p className="relative top-2">Please send me your enquiry</p>

      <div className="animate-bounce inline-block py-4 px-8 bg-teal-500 text-teal-100 rounded-lg w-full">

        <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>

    </button>
  )
}

export default BounceArrow
