import React from "react"

function Select({ value, onChange, options, error, name }) {
  return (
    <div className="inputDiv">
      <select value={value} onChange={onChange} name={name}>
        <option value="" selected disabled>
          Select {name}
        </option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className={error ? "inputError active" : "inputError"}>
        {error && error}
      </div>
    </div>
  )
}

export default Select
