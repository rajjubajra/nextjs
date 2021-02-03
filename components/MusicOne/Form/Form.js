import Label from './Label'
import Input from './Input'
import Textarea from './Textarea'

function Form() {
  return (
    <div className="min-h-screen mx-auto">
      <form className="px-4 mx-auto max-w-3xl w-full my-32 inputs space-y-6">
        <div>
          <h5 className="text-2xl font-thin">Contact From</h5>
        </div>
        <div className="flex flex-col md:flex-row  md:space-x-4 ">
          <div className="md:w-1/2 w-full">
            <Label text="Name" />
            <Input name="name" />
          </div>
          <div className="md:w-1/2 w-full">
            <Label text="Email" />
            <Input name="email" />
          </div>
        </div>
        <div>
          <Label text="Message" />
          <Textarea name="Message" />
        </div>

        <div>
          <button className="w-1/2 md:w-1/4 px-4 py-2 border font-light bg-gray-200">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
