import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { addCategory} from "../services/operations/authAPI"
import { apiConnector } from "../services/apiConnector"
import { categories } from "../services/apis"
const {ADD_CATEGORIES_API} = categories

function CreateCategory() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name : "",
    description : "",
  })

  const { name, description } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    console.log("first")
    const response = await apiConnector("POST", ADD_CATEGORIES_API, {
      name,
      description,
    })
    console.log(response)
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-1/2 flex-col gap-y-4 content-center "
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Category Name <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="name"
          value={name}
          onChange={handleOnChange}
          placeholder="Enter Category Name"
          className="form-style w-full"
        />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Description <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          name="description"
          value={description}
          onChange={handleOnChange}
          placeholder="Enter Description"
          className="form-style w-full !pr-10"
        />
        </label>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
       Create Course
      </button>
    </form>
  )
}

export default CreateCategory
