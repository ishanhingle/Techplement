import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useSetRecoilState} from 'recoil';
import { userAtom } from '../strore';
import { backendURL } from '../config';
import { Comment } from 'react-loader-spinner';
import { toast } from 'react-toastify';
function Signin() {
    const navigate = useNavigate();
    const [body, setBody] = useState(null)
    const [loader,setLoader]=useState(false);
    const setUser = useSetRecoilState(userAtom);
    const handleChange = (e) => {
        setBody(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(body);
        handleSignin();
    }
    const handleSignin =() => {
         setLoader(true);  
         axios.post(`${backendURL}user/login`, { ...body }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res=>{
            const token = res.data.token;
            localStorage.setItem("token", res.data.token);
            setUser(res.data.user);
            setLoader(false);
            toast(res.data.message);
            navigate('/');
            })
           .catch ((error)=>{
            setLoader(false);
            toast(error.response.data.message);
        })
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
             {
            (loader)?(<Comment/>):
            (
            <div className=' bg-slate-100 lg:p-6 flex flex-col  justify-center items-center m-2 rounded-xl md:p-3 lg:text-2xl'>
                <h1 className='text-2xl underline md:text-4xl md:m-3 mb-5'>SIGNIN</h1>
                <form onSubmit={handleSubmit} className='flex flex-col justify-evenly'>
                    <div>
                        <label className='text-xl m-3 italic'>Username</label>
                        <input className=" border-solid border-2 p-1 rounded-lg bg-slate-50 m-2 focus:bg-slate-200" name='username' onChange={handleChange}/>
                    </div>
                    <div>
                        <label className='text-xl m-3 italic'>Password</label>
                        <input className='border-solid border-2 p-1 rounded-lg bg-slate-50 m-2  focus:bg-slate-200' type='password' name='password' onChange={handleChange}/>
                    </div>
                    <button type='submit' className='md:text-2xl p-2 m-3 bg-slate-50 rounded-xl hover:bg-slate-200'>Submit</button>
                </form>
                <h1 className='m-2 p-2 '>Haven't registered yet, click here to <Link to={'/signup'} className=' font-medium hover:underline'>SignUp</Link> </h1>
            </div>
            )
         }
        </div>
    )
}

export default Signin