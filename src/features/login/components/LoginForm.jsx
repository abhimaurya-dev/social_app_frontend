import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import validateEmail from "../../../utils/validateEmail";
import axios from "../../../config/axios";
import { login } from "../../../redux/reducers/authSlice";

// eslint-disable-next-line react/prop-types
const LoginForm = ({ createNewAccountHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
    if (error.email) {
      delete error.email;
    }
  };
  const passwordInputHandler = (e) => {
    if (error.password) {
      delete error.password;
    }
    setPassword(e.target.value);
  };

  const emailInputBlurHandler = () => {
    if (!validateEmail(email)) {
      setError((error) => ({
        ...error,
        email: "Enter a valid email.",
      }));
      if (email.length === 0) {
        delete error.email;
      }
    }
  };

  const onLoginHandler = async (e) => {
    e.preventDefault();
    if (error.email || error.password) {
      return;
    }
    if (email.length === 0) {
      return setError((error) => ({
        ...error,
        email: "Email cannot be empty",
      }));
    }
    if (password.length === 0) {
      return setError((error) => ({
        ...error,
        password: "Password cannot be empty",
      }));
    }
    if (password.length < 7) {
      console.log("he");
      return setError((error) => ({
        ...error,
        password: "Password must be atleast 7 characters long",
      }));
    }
    try {
      const response = await axios({
        method: "post",
        url: "/login",
        data: {
          email,
          password,
        },
        withCredentials: true,
      });
      if (response.data) {
        dispatch(login(response.data));
        navigate("/feed", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[25rem] rounded-lg shadow-lg bg-white mt-9">
      <div className="px-4 flex flex-col items-center">
        <div className="w-[100%]">
          <input
            className={`text-md px-3 py-3 mt-4 rounded-md w-[100%] border border-r-2 ${
              error.email
                ? "border-red-600 focus:border-red-600 focus:shadow-outline-red-600"
                : "focus:border-primary-color focus:shadow-outline-primary-color"
            } focus:shadow-sm focus:outline-none`}
            type="email"
            value={email}
            onChange={emailInputHandler}
            onBlur={emailInputBlurHandler}
            placeholder="Email address"
          />
          {error.email && (
            <p className=" text-sm text-red-600 text-left mt-1 ml-2 ">
              {error.email}
            </p>
          )}
        </div>
        <div className="w-[100%]">
          <input
            className={`text-md px-3 py-3 mt-4 rounded-md w-[100%] border border-r-2 ${
              error.password
                ? "border-red-600 focus:border-red-600 focus:shadow-outline-red-600"
                : "focus:border-primary-color focus:shadow-outline-primary-color"
            } focus:shadow-sm focus:outline-none`}
            type="password"
            value={password}
            onChange={passwordInputHandler}
            placeholder="Password"
          />
          {error.password && (
            <p className=" text-sm text-red-600 text-left mt-1 ml-2 ">
              {error.password}
            </p>
          )}
        </div>
        <button
          className="bg-primary-color w-[100%] text-white text-2xl font-semibold py-2 px-8 rounded-md mt-4"
          onClick={onLoginHandler}
        >
          Log in
        </button>
        <button className="text-primary-color mt-4 text-md mb-6">
          Forgotten password?
        </button>
        <hr className="border-t-[1px] w-[100%] border-gray-300" />
        <button
          className="bg-[#36a420] py-[0.60rem] px-4 text-lg rounded-md text-white font-semibold mt-7 mb-6"
          onClick={createNewAccountHandler}
        >
          Create new account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
