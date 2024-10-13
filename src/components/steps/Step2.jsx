import React, { useContext, useState } from "react";
import Input from "../Input";
import Select from "../Select";
import { formContext } from "../../context/formContext";

function Step2() {
  const { stepForward, stepBackWard, formData, changeHandler } =
    useContext(formContext);
  const options = ["Male", "Female", "Others"];
  const [error, setErrors] = useState([]);

  const { email, dob, gender, phoneNumber } = formData;

  const validate = () => {
    let value;
    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: "Email Address cannot be empty",
      }));
      value = false;
    } else {
      value = true;
    }

    if (
      email &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setErrors((prev) => ({
        ...prev,
        email: "Invalid email address",
      }));
      value = false;
    } else {
      value = true;
    }
    if (!phoneNumber) {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: "Phone number cannot be empty",
      }));
      value = false;
    } else {
      value = true;
    }

    if (phoneNumber && phoneNumber.length !== 10) {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: "Phone number should be 10 digit",
      }));
      value = false;
    } else {
      value = true;
    }
    if (!gender) {
      setErrors((prev) => ({
        ...prev,
        gender: "Gender cannot be empty",
      }));
      value = false;
    } else {
      value = true;
    }
    if (!dob) {
      setErrors((prev) => ({
        ...prev,
        dob: "DOB cannot be empty",
      }));
      value = false;
    } else if (dob) {
      const date1 = new Date().getTime();
      const date2 = new Date(dob).getTime();

      if (date2 > date1) {
        setErrors((prev) => ({
          ...prev,
          dob: "DOB Cannot be future date",
        }));
        value = false;
      }
    } else {
      value = true;
    }
    setTimeout(() => {
      setErrors([]);
    }, 2000);

    return value;
  };
  return (
    <>
      <Input
        name="email"
        label="Email Address"
        placeholder="e.g. harrypotter@hogwarts.com"
        value={email}
        type="email"
        onChange={changeHandler}
        error={error && error.email ? error.email : ""}
      />
      <Input
        name="phoneNumber"
        label="Phone Number"
        placeholder="e.g. +91 9326549507"
        type="text"
        pattern="[0-9]"
        maxLength="10"
        value={phoneNumber}
        onChange={changeHandler}
        error={error && error.phoneNumber ? error.phoneNumber : ""}
      />

      <Select
        options={options}
        onChange={changeHandler}
        name="gender"
        value={gender}
        error={error && error.gender ? error.gender : ""}
      />

      <Input
        name="dob"
        label="Date of birth"
        placeholder="e.g. Potter"
        value={dob}
        type="date"
        onChange={changeHandler}
        error={error && error.dob ? error.dob : ""}
      />

      <div className="btns">
        <button className="back" type="button" onClick={() => stepBackWard()}>
          Back
        </button>
        <button
          type="button"
          onClick={() => {
            validate() && stepForward();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Step2;
