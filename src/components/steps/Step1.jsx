import { useContext, useState } from "react"
import Input from "../Input"
import { formContext } from "../../context/formContext"

function Step1() {
  const { stepForward, formData, changeHandler } = useContext(formContext)
  const [error, setErrors] = useState()

  const { firstName, lastName, middleName } = formData

  const validate = (e) => {
    const newErrors = {}
    e.preventDefault()

    if (!firstName) {
      newErrors.firstName = "first name cannot be empty"
    }
    if (!middleName) {
      newErrors.middleName = "Middle name cannot be empty"
    }
    if (!lastName) {
      newErrors.lastName = "Last name cannot be empty"
    }

    setErrors(newErrors)
    if (firstName && middleName && lastName) {
      stepForward()
    }
  }

  return (
    <>
      <Input
        name="firstName"
        label="First Name"
        placeholder="e.g. Harry"
        pattern="[A-Za-z]+"
        value={firstName}
        onChange={changeHandler}
        error={error && error.firstName ? error.firstName : ""}
      />
      <Input
        name="middleName"
        label="Middle Name"
        placeholder="e.g. James"
        pattern="[A-Za-z]+"
        value={middleName}
        onChange={changeHandler}
        error={error && error.middleName ? error.middleName : ""}
      />
      <Input
        name="lastName"
        label="Last Name"
        placeholder="e.g. Potter"
        pattern="[A-Za-z]+"
        value={lastName}
        onChange={changeHandler}
        error={error && error.lastName ? error.lastName : ""}
      />
      <button type="button" onClick={validate}>
        Next
      </button>
    </>
  )
}

export default Step1
