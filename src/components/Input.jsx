/* eslint-disable react/prop-types */
// import { useRef, useState } from "react";

function Input({ label, value, error, type, pattern, ...props }) {
  const handleKeyPress = (e, patternText) => {
    const char = e.key

    const regex = new RegExp(patternText)

    if (e.keyCode !== 8) {
      if (!regex.test(char)) {
        e.preventDefault()
      }
    }
  }
  return (
    <div className="inputDiv">
      <label htmlFor={value}>{label}</label>
      <input
        type={type ? type : "text"}
        name={value}
        pattern={pattern}
        value={value}
        onKeyDown={(e) => handleKeyPress(e, pattern)}
        {...props}
      />
      <div className={error ? "inputError active" : "inputError"}>
        {error && error}
      </div>
    </div>
  )
}

export default Input
