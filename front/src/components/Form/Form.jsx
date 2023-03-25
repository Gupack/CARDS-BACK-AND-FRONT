/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

const Form = ({ Login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErros);
  };
  const [errors, setErros] = useState({
    username: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    Login(userData);
  };

  return (
    <div className={style.container_Form}>
      <div className={style.container}>
        <h2>LOGIN</h2>
        <form onSubmit={submitHandler}>
          <div className={style.divs}>
            <span className={style.icon}>
              <ion-icon name="mail"></ion-icon>
            </span>
            <label htmlFor="username">Usurname:</label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
            />
            <p>{errors.username}</p>
          </div>
          <div className={style.divs}>
            <span className={style.icon}>
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <p>{errors.password}</p>
          </div>
          <div className={style.remember}>
            <label>
              <input type="checkbox" />
              Remerber me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button className={style.button}>SUBMIT</button>
          <div className={style.login}>
            <p>
              Don't have an account?
              <a href="#" className={style.registrer}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
