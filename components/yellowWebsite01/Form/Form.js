import Label from './Label'
import Input from './Input'

function Form() {
  return (
    <div>
      <form className="px-4 rounded mx-auto max-w-3xl w-full my-32 inputs space-y-6">
        <div>
          <h5 className="text-2xl font-thin">Please send your enquiry</h5>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <Label text="Name" />
            <Input name="name" />
          </div>
          <div className="w-1/2">
            <Label text="Email" />
            <Input name="email" />
          </div>
        </div>
        <div>
          <Label text="Project Brief" />
          <Input name="project-brief" />
        </div>


        <div>
          <Label text="Budget" />
          <div className="flex w-1/4">
            <div className="flex text-white items-center px-4 bg-gray-400">£</div>
            <Input name="budget" placeholder="0.00" />
          </div>
        </div>
        <div>
          <button className="w-1/4 px-4 py-2 border font-light bg-gray-200">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Form
