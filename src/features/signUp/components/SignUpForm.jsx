/* eslint-disable react/prop-types */
import { days, months, years } from "../../../constants/date";
const SignUpForm = ({
  genderInputHandler,
  firstNameInputHandler,
  lastNameInputHandler,
  emailInputHandler,
  passwordInputHandler,
  dayInputHandler,
  monthInputHandler,
  yearInputHandler,
  signUpHandler,
  errorHandler,
  error,
}) => {
  if (Object.keys(error).length !== 0) {
    errorHandler();
    Object.keys(error).forEach((key) => delete error[key]);
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold">Sign Up</h1>
      <p className="text-sm mt-1 mb-3 text-gray-700">
        It&apos;s quick and easy.
      </p>
      <hr className="border-t-[1px] mb-5 w-[100%] border-gray-300" />

      <form>
        <div className="flex justify-between">
          <input
            className="mr-1 bg-gray-50 text-md px-3 py-2 w-[100%] border border-r-1 border-gray-300 outline-none rounded-md"
            type="text"
            onChange={firstNameInputHandler}
            placeholder="First name"
          />
          <input
            className="ml-1 bg-gray-50 text-md px-3 py-2 w-[100%] border border-r-1 border-gray-300 outline-none rounded-md"
            type="text"
            onChange={lastNameInputHandler}
            placeholder="Last name"
          />
        </div>
        <input
          className="mt-2 bg-gray-50 text-md px-3 py-2 w-[100%] border border-r-1 border-gray-300 outline-none rounded-md"
          type="text"
          onChange={emailInputHandler}
          placeholder="Email address"
        />
        <input
          className="mt-2 bg-gray-50 text-md px-3 py-2 w-[100%] border border-r-1 border-gray-300 outline-none rounded-md"
          type="text"
          onChange={passwordInputHandler}
          placeholder="New Password"
        />
        <div className="mt-2">
          <p className="pl-1 text-sm mb-1">Date of birth</p>
          <div className="flex gap-3">
            <select
              onChange={dayInputHandler}
              className=" border border-r-1 border-gray-300 rounded-md outline-none px-2 py-2 w-full max-w-xs"
            >
              <option disabled selected>
                day
              </option>
              {days.map((day, index) => {
                return <option key={index}>{day}</option>;
              })}
            </select>
            <select
              onChange={monthInputHandler}
              className="border border-r-1 border-gray-300 rounded-md outline-none px-2 py-2 w-full max-w-xs"
            >
              <option disabled selected>
                month
              </option>
              {months.map((month, index) => {
                return <option key={index}>{month}</option>;
              })}
            </select>
            <select
              onChange={yearInputHandler}
              className="border border-r-1 border-gray-300 rounded-md outline-none px-2 py-2 w-full max-w-xs"
            >
              <option disabled selected>
                year
              </option>
              {years.map((year, index) => {
                return <option key={index}>{year}</option>;
              })}
            </select>
          </div>
          <div className="mt-2">
            <p className="pl-1 text-sm mb-1">Gender</p>
            <div className="flex gap-2 w-full">
              <label className="w-full flex justify-between items-center border border-r-1 border-gray-300 rounded-md outline-none px-2 py-2">
                Male
                <input
                  type="radio"
                  onChange={genderInputHandler}
                  name="gender"
                  value="Male"
                />
              </label>
              <label className="w-full flex justify-between items-center border border-r-1 border-gray-300 rounded-md outline-none px-2 py-2">
                Female
                <input
                  type="radio"
                  onChange={genderInputHandler}
                  name="gender"
                  value="Female"
                />
              </label>
              <label className="w-full flex justify-between items-center border border-r-1 border-gray-300 rounded-md outline-none px-2 py-2">
                Others
                <input
                  type="radio"
                  onChange={genderInputHandler}
                  name="gender"
                  value="Others"
                />
              </label>
            </div>
          </div>
        </div>

        <p className="text-[0.7rem] mt-2">
          People who use our service may have uploaded your contact information
          to Facebook. Learn more.
        </p>
        <p className="text-[0.75rem] mt-2">
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy. You may receive SMS notifications from us and can opt
          out at any time.
        </p>
        <div className="my-5 flex justify-center">
          <button
            onClick={signUpHandler}
            className="bg-green-600 text-white font-bold text-lg px-14 py-1 rounded-md"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
