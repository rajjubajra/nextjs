import React from 'react'

function Textarea({ name, placeholder }) {
  return (
    <textarea
      className="border border-gray-400 px-4 py-2 w-full focus:outline-none focus:border-teal-400"
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}>

    </textarea>
  )
}

export default Textarea
