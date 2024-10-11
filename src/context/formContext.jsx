import { createContext, useState } from "react"

export const formContext = createContext()

const FormContextProvider = ({ children }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dob: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
  })
  const stepForward = () => {
    setStep((prev) => prev + 1)
  }
  const stepBackWard = () => {
    setStep((prev) => prev - 1)
  }

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const storeDataToLocalStroage = (data) => {
    const exitingArray = localStorage.getItem("UserTable")
      ? JSON.parse(localStorage.getItem("UserTable"))
      : []
    const arr = [...exitingArray]

    arr.push(data)

    localStorage.setItem("UserTable", JSON.stringify(arr))
  }
  const submitHandler = () => {
    storeDataToLocalStroage(formData)
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      dob: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
    })
  }

  const resetSteps = () => {
    setStep(1)
  }

  const formValues = {
    step,
    stepForward,
    stepBackWard,
    formData,
    changeHandler,
    submitHandler,
    resetSteps,
  }
  return (
    <formContext.Provider value={formValues}>{children}</formContext.Provider>
  )
}

export default FormContextProvider
