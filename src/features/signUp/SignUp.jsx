import { useState } from "react";
import { toast } from "react-toastify";
import SignUpForm from "./components/SignUpForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import { register } from "../../redux/reducers/authSlice";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const genderInputHandler = (e) => {
    if (error.gender) {
      delete error.gender;
    }
    if (e.target.value === "Male") {
      setGender("Male");
      return;
    }
    if (e.target.value === "Female") {
      setGender("Female");
      return;
    }
    if (e.target.value === "Others") {
      setGender("Others");
      return;
    }
  };
  const firstNameInputHandler = (e) => {
    if (error.firstName) {
      delete error.firstName;
    }
    setFirstName(e.target.value);
  };
  const lastNameInputHandler = (e) => {
    if (error.lastName) {
      delete error.lastName;
    }
    setLastName(e.target.value);
  };
  const emailInputHandler = (e) => {
    if (error.email) {
      delete error.email;
    }
    setEmail(e.target.value);
  };
  const passwordInputHandler = (e) => {
    if (error.password) {
      delete error.password;
    }
    setPassword(e.target.value);
  };
  const dayInputHandler = (e) => {
    if (error.day) {
      delete error.day;
    }
    setDay(e.target.value);
  };
  const monthInputHandler = (e) => {
    if (error.month) {
      delete error.month;
    }
    setMonth(e.target.value);
  };
  const yearInputHandler = (e) => {
    if (error.year) {
      delete error.year;
    }
    setYear(e.target.value);
  };

  const errorHandler = () => {
    if (error.firstName) {
      return toast.error(error.firstName);
    }
    if (error.lastName) {
      return toast.error(error.lastName);
    }
    if (error.email) {
      return toast.error(error.email);
    }
    if (error.password) {
      return toast.error(error.password);
    }
    if (error.day) {
      return toast.error(error.day);
    }
    if (error.month) {
      return toast.error(error.month);
    }
    if (error.year) {
      return toast.error(error.year);
    }
    if (error.gender) {
      return toast.error(error.gender);
    }
  };
  const signUpHandler = async (e) => {
    e.preventDefault();
    if (firstName.length === 0) {
      return setError((error) => {
        return {
          ...error,
          firstName: "Enter first name",
        };
      });
    }
    if (lastName.length === 0) {
      return setError((error) => {
        return {
          ...error,
          lastName: "Enter last name",
        };
      });
    }
    if (email.length === 0) {
      return setError((error) => {
        return {
          ...error,
          email: "Enter valid email",
        };
      });
    }
    if (password.length === 0) {
      return setError((error) => {
        return {
          ...error,
          password: "Enter valid password",
        };
      });
    }
    if (password.length < 7) {
      return setError((error) => {
        return {
          ...error,
          password: "Password must be of atleast 7 characters long",
        };
      });
    }
    if (day.length === 0) {
      return setError((error) => {
        return {
          ...error,
          day: "Select your date of birth",
        };
      });
    }
    if (month.length === 0) {
      return setError((error) => {
        return {
          ...error,
          month: "Select your date of birth",
        };
      });
    }
    if (year.length === 0) {
      return setError((error) => {
        return {
          ...error,
          year: "Select your date of birth",
        };
      });
    }
    if (gender.length === 0) {
      return setError((error) => {
        return {
          ...error,
          gender: "Select your gender",
        };
      });
    }
    const name = `${firstName} ${lastName}`;
    const dob = `${day}-${month}-${year}`;
    const response = await axios({
      method: "post",
      url: "/signIn",
      data: {
        name,
        email,
        password,
        dob,
        gender,
      },
      withCredentials: true,
    });
    if (response.data.success) {
      dispatch(register(response.data));
      navigate("/feed", { replace: true });
    }
  };

  return (
    <div>
      <SignUpForm
        firstNameInputHandler={firstNameInputHandler}
        lastNameInputHandler={lastNameInputHandler}
        emailInputHandler={emailInputHandler}
        passwordInputHandler={passwordInputHandler}
        dayInputHandler={dayInputHandler}
        monthInputHandler={monthInputHandler}
        yearInputHandler={yearInputHandler}
        genderInputHandler={genderInputHandler}
        signUpHandler={signUpHandler}
        errorHandler={errorHandler}
        error={error}
      />
    </div>
  );
};

export default SignUp;
