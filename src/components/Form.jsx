import React, { useContext } from "react"
import Step1 from "./steps/Step1"
import Step2 from "./steps/Step2"
import Step3 from "./steps/Step3"
import ThankYouPage from "./steps/ThankYouPage"
import { formContext } from "../context/formContext"

function Form() {
  const { step } = useContext(formContext)
  switch (step) {
    case 1: {
      return <Step1 />
    }
    case 2: {
      return <Step2 />
    }
    case 3: {
      return <Step3 />
    }
    case 4: {
      return <ThankYouPage />
    }
    default: {
      return <Step1 />
    }
  }
}

export default Form
