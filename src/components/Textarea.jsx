import React from "react"

function Textarea({ label, value, error, ...props }) {
  return (
    <div className="inputDiv">
      <label htmlFor={value}>{label}</label>
      <textarea type="text" name={value} value={value} {...props} />
      <div className={error ? "inputError active" : "inputError"}>
        {error && error}
      </div>
    </div>
  )
}

export default Textarea
