
import React, { useState } from 'react'
import { z } from 'zod'

function Contact() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: ""
  })

  const [errors, setErrors] = useState({})

  const schema = z.object({
    username: z.string()
      .min(3, {
        message: "Username should be at least 3 characters long"
      })
      .regex(/.*[^0-9].*/, {
        message: "Username cannot contain only digits"
      }),
    email: z.string().email({
      message: "Invalid email address"
    }),
    number: z.string().regex(/^\d{10}$/, {
      message: "Invalid phone number"
    })
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const result = schema.safeParse(formData)

    if (!result.success) {
      const newErrors = {}

      result.error.issues.forEach((issue) => {
        newErrors[issue.path[0]] = issue.message
      })

      setErrors(newErrors)
      return
    }

    setErrors({})
    console.log("Form Submitted:", result.data)
    alert("Form submitted successfully!")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}  
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Phone Number
            </label>

            <input
              type="text"
              name="number"
              placeholder="Enter 10-digit number"
              value={formData.number}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.number}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>

        </form>

      </div>
    </div>
  )
}

export default Contact
