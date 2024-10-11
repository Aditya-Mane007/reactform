import React, { useRef, useState } from "react"

function Input({ label, value, textarea, error, type, ...props }) {
  return (
    <div className="inputDiv">
      <label htmlFor={value}>{label}</label>
      {textarea ? (
        <textarea
          type="text"
          name={value}
          value={value}
          onChange={checkIfEmppty}
          {...props}
        />
      ) : (
        <input
          type={type ? type : "text"}
          name={value}
          value={value}
          {...props}
        />
      )}
      <div className={error ? "inputError active" : "inputError"}>
        {error && error}
      </div>
    </div>
  )
}

export default Input
