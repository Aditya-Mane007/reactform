import React, { useContext, useState } from "react"
import Mobile from "./assets/images/bg-sidebar-mobile.svg"
import Desktop from "./assets/images/bg-sidebar-desktop.svg"
import Form from "./components/Form"
import { formContext } from "./context/formContext"
import { Link } from "react-router-dom"

function App() {
  const { submitHandler, step } = useContext(formContext)
  return (
    <div className="container">
      <div className="wrapper">
        <div className="backgroundImage">
          <picture>
            <source media="(min-width:769px)" srcSet={Desktop} />
            <img src={Mobile} alt="" />
          </picture>
        </div>
        <div className="formDiv">
          <h2>{!step == 5 && "Personal Info"}</h2>
          <form onSubmit={submitHandler}>
            <Form />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
