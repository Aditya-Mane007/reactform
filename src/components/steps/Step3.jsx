import React, { useContext, useState } from "react"
import Input from "../Input"
import { formContext } from "../../context/formContext"
import Select from "../Select"

function Step3() {
  const CountryOptions = ["India"]
  const { stepBackWard, stepForward, formData, changeHandler, submitHandler } =
    useContext(formContext)
  const [error, setErrors] = useState([])

  const { country, state, city, zipCode } = formData

  const validateFields = (e) => {
    e.preventDefault()

    if (!country) {
      setErrors((prev) => ({
        ...prev,
        country: "Country cannot be empty",
      }))
    }
    if (!state) {
      setErrors((prev) => ({
        ...prev,
        state: "State cannot be empty",
      }))
    }
    if (!city) {
      setErrors((prev) => ({
        ...prev,
        city: "City cannot be empty",
      }))
    }

    if (!zipCode) {
      setErrors((prev) => ({
        ...prev,
        zipCode: "Zip code cannot be empty",
      }))
    }
    setTimeout(() => {
      setErrors([])
    }, 2000)

    if (country && state && city && zipCode) {
      stepForward()
      submitHandler()
    }
  }
  return (
    <>
      <Select
        options={CountryOptions}
        onChange={changeHandler}
        name="country"
        value={country}
        error={error && error.country ? error.country : ""}
      />

      <Select
        options={["Maharashtra"]}
        onChange={changeHandler}
        name="state"
        value={state}
        error={error && error.state ? error.state : ""}
      />

      <Select
        options={["Mumbai"]}
        onChange={changeHandler}
        name="city"
        value={city}
        error={error && error.city ? error.city : ""}
      />

      <Select
        options={["400104"]}
        onChange={changeHandler}
        name="zipCode"
        value={zipCode}
        error={error && error.zipCode ? error.zipCode : ""}
      />
      <div className="btns">
        <button className="back" type="button" onClick={() => stepBackWard()}>
          Back
        </button>
        <button type="submit" onClick={validateFields}>
          Submit
        </button>
      </div>
    </>
  )
}

export default Step3
