import React, { useContext, useState } from "react"
import Input from "../Input"
import Select from "../Select"
import { formContext } from "../../context/formContext"

function Step2() {
  const { stepForward, stepBackWard, formData, changeHandler } =
    useContext(formContext)
  const options = ["Male", "Female", "Others"]
  const [errors, setErrors] = useState()

  console.log(errors)

  const { email, dob, gender, phoneNumber } = formData

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$/

    return pattern.test(email)
  }

  const validate = () => {
    const newErrors = {}
    let isValid = true

    if (!email) {
      newErrors.email = "Email Address cannot be empty"
      isValid = false
    } else if (validateEmail(email) !== true) {
      newErrors.email = "Invalid email address"
      isValid = false
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = "Phone number cannot be empty"
      isValid = false
    } else if (phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone number must be 10 digits"
      isValid = false
    }

    if (!dob) {
      newErrors.dob = "Date of Birth cannot be empty"
      isValid = false
    } else {
      const currentDate = new Date()
      const selectedDate = new Date(dob)
      if (selectedDate > currentDate) {
        newErrors.dob = "Date of Birth cannot be a future date"
        isValid = false
      }
    }

    if (!gender) {
      newErrors.gender = "Gender cannot be empty"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  return (
    <>
      <Input
        name="email"
        label="Email Address"
        placeholder="e.g. harrypotter@hogwarts.com"
        value={email}
        type="email"
        onChange={changeHandler}
        error={errors && errors.email ? errors.email : ""}
      />
      <Input
        name="phoneNumber"
        label="Phone Number"
        placeholder="e.g. +91 9326549507"
        type="text"
        pattern="[0-9]"
        maxLength="10"
        autoComplete="off"
        value={phoneNumber}
        onChange={changeHandler}
        error={errors && errors.phoneNumber ? errors.phoneNumber : ""}
      />

      <Select
        options={options}
        onChange={changeHandler}
        name="gender"
        value={gender}
        error={errors && errors.gender ? errors.gender : ""}
      />

      <Input
        name="dob"
        label="Date of birth"
        placeholder="e.g. Potter"
        value={dob}
        type="date"
        onChange={changeHandler}
        error={errors && errors.dob ? errors.dob : ""}
      />

      <div className="btns">
        <button className="back" type="button" onClick={() => stepBackWard()}>
          Back
        </button>
        <button type="button" onClick={() => validate() && stepForward()}>
          Next
        </button>
      </div>
    </>
  )
}

export default Step2
