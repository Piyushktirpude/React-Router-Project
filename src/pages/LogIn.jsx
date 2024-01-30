import React, { useState } from 'react';
import frame from '../assets/frame.png';
import login from '../assets/login.png';
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import toast from 'react-hot-toast';

function LogIn(props) {

    const [isVisible, setIsvisible] = useState(false);
    let visibleChangeHandler=(event)=>{
        event.preventDefault()
        setIsvisible((isVisible)=> !isVisible);
    }


    const Navigate = useNavigate();
    const [formData, setformData] =useState({
        email:"",
        password:""
    });
    let changeHandler=(event)=>{
        let {name, value} = event.target
        setformData((prevData)=>{
            return {...prevData, [name]:value}
        })
    }

    const [data, setData] = useState([])
    let submitHandler=(event)=>{
        event.preventDefault()
        setData([...data, formData])
        if (formData.email !== "" && formData.password!=="") {
            props.setIsLogedIn(true);
            Navigate("/dashboard")
            toast.success("Loged In Succesfully")
        }
        else{
            alert("Login Failed!")
        }  
    }

  return (
    <div className='bg-[#F0F8FF] overflow-y-hidden-hidden flex h-screen pb-6'>
    
        <div className='flex w-[1080px] mx-auto text-black relative mt-28 gap-[10rem] items-center '>
        <div className='font-mono flex flex-col gap-6 shadow-[5px_5px_0px_0px_rgba(109,40,217)]'>
            <h1 className='text-4xl font-bold '>Welcome Back,</h1>
            <p className='text-md italic text-lg'>Build skills for today, tomorrow, and beyond. <span className='text-sky-500'>Education to future-proof your career.</span></p>
            <form className='flex flex-col mt-6 gap-4' >
                <label className='flex flex-col'>
                    <div >Email Address<span className='text-red-400'>*</span></div>
                    <input
                        type='email'
                        placeholder='Enter email address'
                        className='rounded-md p-2 w-[25rem] text-black'
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                    />
                </label>
                <label className='flex flex-col relative'>
                    <div>Password<span className='text-red-400'>*</span></div>
                    <input
                        type={!isVisible?('password'):('text')}
                        placeholder='Enter Password'
                        className='rounded-md p-2 w-[25rem] text-black'
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                    />
                    <button className='absolute right-[7rem] top-[35px] text-black' onClick={visibleChangeHandler}>{!isVisible?(<AiOutlineEye />):(<AiOutlineEyeInvisible/>)}</button>
                     <a href='/logIn' className='text-blue-400'>Forget Password?</a>
                </label>
            </form> 
            <button className='bg-yellow-50 h-[3rem] rounded-md w-[25rem] text-lg hover:shadow-md hover:shadow-blue-600' type='submit' onClick={submitHandler}>Sign In</button>
            <div className='flex items-center gap-8'>
                <div className='w-[10rem] bg-white h-[1px]'></div>
                <p>OR</p>
                <div className='w-[10rem] bg-white h-[1px]'></div>
            </div>
            <button  className='bg-white flex items-center justify-center gap-5  h-[3rem] rounded-md w-[25rem] text-lg text-black hover:shadow-md hover:shadow-blue-600'><FcGoogle/>Sign In with Google</button>
        </div>
      
            <img   src={frame} alt='frame' className='w-[27rem] h-[27rem]'/>
            <img className=' top-[3rem] right-4 w-[27rem] h-[27rem] absolute ' src={login} alt='frame'/>
       
    </div>
    </div>
    
  )
}

export default LogIn