import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import toast from 'react-hot-toast';

function Instractor(props) {
  const [isVisible1, setIsvisible1] = useState(false);
    let visibleChangeHandler1=(event)=>{
        event.preventDefault()
        setIsvisible1((isVisible1)=> !isVisible1);
    }
    const [isVisible2, setIsvisible2] = useState(false);
    let visibleChangeHandler2=(event)=>{
        event.preventDefault()
        setIsvisible2((isVisible2)=> !isVisible2);
    }
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnfpassword: "",
  });
  let changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
    
  };
  const [data, setData] = useState([]);
  let formHandler = (event) => {
    event.preventDefault()
    setData([...data, formData]);
    if (formData.email !== "" && formData.password!=="") {
      props.setIsLogedIn(true);
      Navigate("/dashboard");
      toast.success("Signed Up Successfully!");
  }
  else{
      alert("Login Failed!")
  }  
  };
  return (
    <form className="flex flex-col mt-6 gap-4">
   
      
      <label className="flex flex-col">
        <div>
          Name<span className="text-red-400">*</span>
        </div>
        <input
          type="text"
          placeholder="Enter Last Name"
          className="rounded-md p-2 w-[31.1rem] text-black"
          name='name'
          onChange={changeHandler}
        />
      </label>
    
    <label className="flex flex-col">
      <div>
        Email<span className="text-red-400">*</span>
      </div>
      <input
        type="email"
        placeholder="Enter Email"
        className="rounded-md p-2 w-[31.3rem] text-black"
        name='email'
        onChange={changeHandler}
      />
    </label>
    <div className="flex gap-5">
      <label className="flex flex-col relative">
        <div>
          Password<span className="text-red-400">*</span>
        </div>
        <input
          type={!isVisible1?('password'):('text')}
          placeholder="Enter Password"
          className="rounded-md p-2 w-[15rem] text-black"
          name='password'
          onChange={changeHandler}
        />
        <button className='absolute top-[36px] right-[1rem] text-black' onClick={visibleChangeHandler1}>{!isVisible1?(<AiOutlineEye />):(<AiOutlineEyeInvisible/>)}</button>
      </label>
      <label className="flex flex-col relative">
        <div>
          Confirm Password<span className="text-red-400">*</span>
        </div>
        <input
          type={!isVisible2?('password'):('text')}
          placeholder="Confirm Password"
          className="rounded-md p-2 w-[15rem] text-black"
          name='cnfpassword'
          onChange={changeHandler}
        />
        <button className=' absolute top-[36px] right-[1rem] text-black' onClick={visibleChangeHandler2}>{!isVisible2?(<AiOutlineEye />):(<AiOutlineEyeInvisible/>)}</button>
        <a href="/logIn" className="text-blue-400">
          Forget Password?
        </a>
      </label>
    </div>
    <button onClick={formHandler} className="bg-yellow-50 h-[3rem] rounded-md w-[31.3rem] text-lg hover:shadow-md hover:shadow-blue-600">
            Sign Up
          </button>
  </form>
  )
}

export default Instractor