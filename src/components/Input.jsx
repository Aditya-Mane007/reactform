/* eslint-disable react/prop-types */
// import { useRef, useState } from "react";

function Input({ label, value, textarea, error, type, pattern, ...props }) {
  const handleKeyPress = (e, patternText) => {
    const char = e.key;
    console.log(char);
    const regex = new RegExp(patternText);
    console.log(regex.test(char));

    if (e.keyCode !== 8) {
      if (!regex.test(char)) {
        e.preventDefault();
      }
    }
  };
  return (
    <div className="inputDiv">
      <label htmlFor={value}>{label}</label>
      {textarea ? (
        <textarea type="text" name={value} value={value} {...props} />
      ) : (
        <input
          type={type ? type : "text"}
          name={value}
          pattern={pattern}
          value={value}
          onKeyDown={(e) => handleKeyPress(e, pattern)}
          {...props}
        />
      )}
      <div className={error ? "inputError active" : "inputError"}>
        {error && error}
      </div>
    </div>
  );
}

export default Input;
