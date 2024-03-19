import {
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import "./App.css";
import { RiFacebookFill } from "react-icons/ri";

function App() {
  return (
    <>
      <div className="h-full w-full flex md:flex-row justify-between items-center">
        <div className="md:h-full md:w-1/2 object-cover">
          <img
            src="/img/image.png"
            className="w-full h-full object-cover hidden md:block"
          />
        </div>

        <div className="flex flex-col flex-1 justify-center items-left md:gap-[50px] gap-[30px] w-full md:px-[100px] px-[30px]">
          <div className="flex flex-row justify-end items-center text-[#323232] gap-5 pb-[50px]">
            <p className="text-[14px] md:text-[16px] ">
              Already have an account?
            </p>
            <button className="text-[#DF6D73] text-[14px] md:text-[16px] md:font-medium font-normal md:border-2 border-[1px] border-[#FFB4B4] md:px-[28px] px-[20px] md:py-[5px] py-[3px] rounded-[20px] hover:bg-[#FFB4B4] hover:border-[#FFB4B4] hover:text-[#FFFFFF] hover:scale-90 transition-all">
              SIGN IN
            </button>
          </div>

          <div className="flex flex-col justify-start items-start text-[#323232]">
            <h1 className="md:text-[40px] text-[25px] font-bold">
              Welcome to
              <a className="text-[#DF6D73] pl-[9px]">Focus!</a>
            </h1>
            <p className="md:text-[16px] text-[14px]">Register your account</p>
          </div>

          <div className="flex flex-col md:gap-5 gap-[5px] w-full text-left">
            <div>
              <h1 className="text-left md:pb-[5px] pb-[3px] md:text-[16px] text-[15px] font-[18px]">
                Name
              </h1>
              <input
                type="text"
                className="md:border-2 border-[1px] px-[10px] md:py-[5px] py-[2px] rounded-[5px] w-full active:outline-[#FFB4B4] focus:outline-[#FFB4B4]"
              />
            </div>
            <div>
              <h1 className="text-left md:pb-[5px] pb-[3px] md:text-[16px] text-[15px] font-[18px]">
                Email
              </h1>
              <input
                type="text"
                className="md:border-2 border-[1px] px-[10px] md:py-[5px] py-[2px] rounded-[5px] w-full active:outline-[#FFB4B4] focus:outline-[#FFB4B4]"
              />
            </div>
            <div>
              <h1 className="text-left md:pb-[5px] pb-[3px] md:text-[16px] text-[15px] font-[18px]">
                Password
              </h1>
              <input
                type="text"
                className="md:border-2 border-[1px] px-[10px] md:py-[5px] py-[2px] rounded-[5px] w-full active:outline-[#FFB4B4] focus:outline-[#FFB4B4]"
              />
            </div>
          </div>

          <div className="w-full text-left">
            <button className="bg-[#DF6D73] md:text-[16px] text-[14px] color-sky-500 text-white font-semibold md:py-[15px] md:px-[75px] py-[10px] px-[55px] rounded-[100px] hover:bg-[#FFB4B4] hover:scale-90 transition-all">
              Login
            </button>
          </div>

          <div className="text-[#323232] w-full text-[14px] md:text-[16px] text-left flex flex-row items-center gap-3">
            <p>Create account with</p>
            <button className="md:text-[18px] text-[15px] text-[#DF6D73] md:border-2 border-[1px] border-[#DF6D73] rounded-[100px] p-[5px] hover:scale-90 transition-all ">
              <RiFacebookFill />
            </button>
            <button className="md:text-[17px] text-[15px] text-[#DF6D73] md:border-2 border-[1px] border-[#DF6D73] rounded-[100px] p-[5px] hover:scale-90 transition-all">
              <FaLinkedinIn />
            </button>
            <button className="md:text-[17px] text-[15px] text-[#DF6D73] md:border-2 border-[1px] border-[#DF6D73] rounded-[100px] p-[5px] hover:scale-90 transition-all">
              <FaGoogle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
