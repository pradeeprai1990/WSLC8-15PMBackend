import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function App() {
  let [studentList, setStudentList] = useState([])
  let saveEnquiry = (e) => {
    e.preventDefault()

    let insertObj = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phone: e.target.phone.value
    }
    axios.post(`http://localhost:8000/student/insert`, insertObj)
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes);
        getStudentList()
        e.target.reset()
      })
      .catch((err) => {
        console.log(err);

      })



  }


  let getStudentList = () => {
    axios.get(`http://localhost:8000/student/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          setStudentList(finalRes.data)
        }

      })
  }

  useEffect(() => {
    getStudentList()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Student Enquiry</h1>

        <div className="flex flex-col gap-4 md:flex-row">
          {/* Left: Enquiry Form (30%) */}
          <div className="w-full md:w-[30%]">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="text-lg font-medium text-gray-800 mb-3">Enquiry Form</h2>
              <form onSubmit={saveEnquiry} className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Full Name</label>
                  <input type="text" placeholder="Enter full name" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" name="fullName" />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Email</label>
                  <input type="email" placeholder="name@example.com" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" name="email" />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Phone</label>
                  <input type="tel" placeholder="9876543210" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" name="phone" />
                </div>

                <div className="pt-1">
                  <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Table (70%) */}
          <div className="w-full md:w-[70%]">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-800">Enquiries</h2>
                <input type="text" placeholder="Search" className="w-48 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
              </div>
              <div className="overflow-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50 text-gray-700">
                      <th className="px-3 py-2 font-medium">#</th>
                      <th className="px-3 py-2 font-medium">Name</th>
                      <th className="px-3 py-2 font-medium">Email</th>
                      <th className="px-3 py-2 font-medium">Phone</th>

                      <th className="px-3 py-2 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      studentList.length >= 1
                        ?
                        studentList.map((obj, index) => {
                          return (
                            <tr className="border-b last:border-0">
                              <td className="px-3 py-2 text-gray-600">
                                {index+1}
                              </td>
                              <td className="px-3 py-2 text-gray-800">
                                {obj.fullName}
                              </td>
                              <td className="px-3 py-2 text-gray-600">{obj.email}</td>
                              <td className="px-3 py-2 text-gray-600">
                              {obj.phone}
                              </td>

                              <td className="px-3 py-2 text-gray-600">
                                <button className="bg-red-500 text-white p-2 mr-3">Delete</button>
                                <button className="bg-red-500  text-white  p-2">Edit</button>
                              </td>
                            </tr>
                          )
                        })

                        :
                        <tr>
                          <td colSpan={5}> No Data Found</td>
                        </tr>
                    }


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
