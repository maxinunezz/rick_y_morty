import React from "react";
import "./form.css";
import { useState } from "react";
import validation from "../Validation/Validation";
import { ButtonA } from "../../button";
const Form = ({ login }) => {
  const [errors, setErrors] = useState({});

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          placeholder="ID PLEASE"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="SECRET PASS"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <ButtonA onClick={handleSubmit}>Submit</ButtonA>
        <h2>ACCESS TO C-137 DIMENSION !!</h2>
      </form>
    </div>
  );
};
export default Form;
