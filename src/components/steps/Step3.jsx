import React, { useContext, useState } from "react"
import Input from "../Input"
import { formContext } from "../../context/formContext"
import Select from "../Select"

function Step3() {
  const CountryOptions = ["India"]
  const { stepBackWard, stepForward, formData, changeHandler, submitHandler } =
    useContext(formContext)
  const [errors, setErrors] = useState()

  const { country, state, city, zipCode } = formData

  const validateFields = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!country) {
      newErrors.country = "Country cannot be empty"
    }

    if (!state) {
      newErrors.state = "State cannot be empty"
    }
    if (!city) {
      newErrors.city = "City cannot be empty"
    }

    if (!zipCode) {
      newErrors.zipCode = "Zip code cannot be empty"
    }

    setErrors(newErrors)
    if (country && state && city && zipCode) {
      console.log(country, state, city, zipCode)
      submitHandler()
      stepForward()
    }
  }
  return (
    <>
      <Select
        options={CountryOptions}
        onChange={changeHandler}
        name="country"
        value={country}
        error={errors && errors.country ? errors.country : ""}
      />

      <Select
        options={["Maharashtra"]}
        onChange={changeHandler}
        name="state"
        value={state}
        error={errors && errors.state ? errors.state : ""}
      />

      <Select
        options={["Mumbai"]}
        onChange={changeHandler}
        name="city"
        value={city}
        error={errors && errors.city ? errors.city : ""}
      />

      <Select
        options={["400104"]}
        onChange={changeHandler}
        name="zipCode"
        value={zipCode}
        error={errors && errors.zipCode ? errors.zipCode : ""}
      />
      <div className="btns">
        <button className="back" type="button" onClick={() => stepBackWard()}>
          Back
        </button>
        <button type="button" onClick={validateFields}>
          Submit
        </button>
      </div>
    </>
  )
}

export default Step3
