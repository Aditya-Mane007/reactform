import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function UserData() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = () => {
    setLoading(true)
    setData(JSON.parse(localStorage.getItem("UserTable")))
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <h1 style={{ textAlign: "center", margin: "5rem 0" }}>Loading...</h1>
  }

  if (data.length < 1) {
    return (
      <h1 style={{ textAlign: "center", margin: "5rem 0" }}>
        No Data Available
      </h1>
    )
  }
  return (
    <div className="tableContainer">
      <h1
        style={{
          width: "100%",
          margin: "1rem auto",
          color: "#333333",
        }}
      >
        <Link to="/">User Table</Link>
      </h1>
      <div className="table">
        <table>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Date Of Birth</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Zip Code</th>
          </tr>
          {data.map((item) => (
            <tr>
              <th>{item.firstName}</th>
              <th>{item.middleName}</th>
              <th>{item.lastName}</th>
              <th>{item.email}</th>
              <th>{item.phoneNumber}</th>
              <th>{item.dob}</th>
              <th>{item.country}</th>
              <th>{item.state}</th>
              <th>{item.city}</th>
              <th>{item.zipCode}</th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default UserData
