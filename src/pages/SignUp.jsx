import React, { useState } from "react";
import frame from "../assets/frame.png";
import login from "../assets/login.png";
import { FcGoogle } from "react-icons/fc";
import Student from "../components/Student";
import Instractor from "../components/Instractor"
function LogIn(props) {
    const [click, setClick] = useState(true);
    let clickHandler2=()=>{
        setClick(false)
    }
    let clickHandler1=()=>{
        setClick(true)
    }
    
  return (
    <div className="bg-[#F0F8FF] overflow-y-hidden flex h-[60rem]  ">
      <div className="flex w-[1080px] mx-auto text-black relative mt-16 gap-[10rem] items-center">
        <div className="font-mono flex flex-col gap-6">
          <h1 className="text-2xl font-bold ">
            Join the millions learning to code with StudyNotion for free,
          </h1>
          <p className="text-md italic text-lg">
            Build skills for today, tomorrow, and beyond.{" "}
            <span className="text-sky-500">
              Education to future-proof your career.
            </span>
          </p>
          <div className=" border bg-slate-700 w-[13rem] flex items-center justify-center h-[3rem] rounded-full gap-2">
            <button className={`border p-2 h-10 rounded-full ${click === true?("bg-slate-400"):(" bg-blac")} `}onClick={clickHandler1}>Student</button>
            <button className={`border p-2 h-10 rounded-full ${click === false?("bg-slate-400"):(" bg-blac")} `} onClick={clickHandler2}>Instructor</button>
          </div>
          
          {
            click === true?(<Student setIsLogedIn={props.setIsLogedIn}/>):(<Instractor  setIsLogedIn={props.setIsLogedIn}/>)
          }
          
          <div className="flex items-center gap-8">
            <div className="w-[10rem] bg-white h-[1px]"></div>
            <p>OR</p>
            <div className="w-[10rem] bg-white h-[1px]"></div>
          </div>
          <button className="bg-white flex items-center justify-center gap-5  h-[3rem] rounded-md  text-lg text-black hover:shadow-md hover:shadow-blue-600">
            <FcGoogle />
            Sign Up with Google
          </button>
        </div>

        <img src={frame} alt="frame" className="w-[27rem] h-[27rem]" />
        <img
          className=" top-[14rem] right-2 w-[27rem] h-[27rem] absolute "
          src={login}
          alt="frame"
        />
      </div>
    </div>
  );
}

export default LogIn;
