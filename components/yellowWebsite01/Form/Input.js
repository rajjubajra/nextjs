

function Input({ name, placeholder }) {
  return (
    <input
      className="border border-gray-400 px-4 py-2 w-full focus:outline-none focus:border-teal-400"
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
    />
  )
}

export default Input
