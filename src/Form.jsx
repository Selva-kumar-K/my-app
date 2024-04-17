import { useState } from "react"

import { useSelector, useDispatch } from "react-redux"
import { addData } from "./features/counter/formSlice"

const Form = () => {

    const [formInput, setFormInput] = useState(
        {name : '', email : '', role : ''}
    )

    const formData = useSelector((formInp) => formInp.form)
    const dispatch = useDispatch()
    const onsubmit = () => {

        dispatch(addData(formInput))
        setFormInput({name : '', email : '', role : ''})

    }
    console.log(formData)

  return (

    <div className="bg-zinc-500 h-screen">
        <div className="flex justify-center items-center">
            <div className="flex flex-col border border-purple-400 w-1/3 h-[250px] px-2 py-8 space-y-2 justify-center rounded">
                <input type="text" value={formInput.name} placeholder="Enter your name" className="py-2 outline-none rounded-md" name="name" onChange={(e) => setFormInput({...formInput, name : e.target.value})}/>
                <input type="email" value={formInput.email} placeholder="Enter your email" className="py-2 outline-none rounded-md" name="email" onChange={(e) => setFormInput({...formInput, email : e.target.value})}/>
                <input type="text" value={formInput.role} placeholder="Enter your role" className="py-2 outline-none rounded-md" name="role" onChange={(e) => setFormInput({...formInput, role : e.target.value})}/>
                <button type="submit" className="border border-teal-400 rounded-lg px-4 py-2 text-white font-semibold" onClick={(e) => onsubmit(e)}>Submit</button>
            </div>
        </div>

        {formData.map((d) => (
            <>
            <li>{d.name}</li>
            <li>{d.email}</li>
            <li>{d.role}</li>
            </>
        ))}
    </div>
  )}

export default Form
