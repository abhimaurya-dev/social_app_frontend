import LoginForm from "./components/LoginForm";

// eslint-disable-next-line react/prop-types
const Login = ({ createNewAccountHandler }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-[10rem] items-center">
      <div className="flex flex-col lg:items-start lg:justify-start">
        <img
          className="h-[6.5rem] lg:h-[7rem] mt-3"
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          alt="facebook-logo"
        />
        <p className="w-[23rem] pl-2 lg:pl-8 lg:mt-[-0.8rem] lg:w-[30rem] lg:text-3xl text-2xl">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <LoginForm createNewAccountHandler={createNewAccountHandler} />
        <p className="mt-7 text-sm">
          <span className="font-bold">Create a Page</span> for a celebrity,
          brand or business.
        </p>
      </div>
    </div>
  );
};

export default Login;
