import { languages } from "../constants/languages";
import { footerConstants } from "../constants/footerConstants";
const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white text-gray-500 px-10 lg:w-[60vw] lg:px-[5rem]">
        <ul className="flex flex-wrap space-x-2 text-[0.8rem] pt-5">
          {languages.map((language, index) => {
            return <li key={index}>{language}</li>;
          })}
        </ul>
        <hr className="border-t-[1px] mt-2 w-[100%] border-gray-300" />
        <ul className="flex flex-wrap text-[0.8rem] mt-2">
          {footerConstants.map((footerConstant, index) => {
            return (
              <li className="pr-5" key={index + 1}>
                {footerConstant}
              </li>
            );
          })}
        </ul>
        <p className="text-[0.8rem] pt-8 pb-6">abhimaurya-dev &copy; 2023</p>
      </div>
    </div>
  );
};

export default Footer;
