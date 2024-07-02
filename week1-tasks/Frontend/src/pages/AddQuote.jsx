import React, { useEffect, useState } from 'react'
import { backendURL } from '../config'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../strore';
function addQuote() {
  const [ body, setBody ] = useState(null);
  const navigate=useNavigate();
  const user=useRecoilValue(userAtom);
  useEffect(()=>{
    if(!user){
      navigate('/signin')
      toast("Please Login First");
    }
  },[user])
  const handleChange = (e) => {
    console.log(body);
    setBody(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(backendURL + "quote/add", { ...body }, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then((res)=>{
      console.log(res);
      setBody(prev=>null);
      toast(res.data.message);
    })
    .catch(e=>{
      console.log(e.response.data.message);
      toast(e.response.data.message)
    })
  }
  return (
    <div className='w-screen flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full h-full '>
           <textarea name='body' className='m-4 p-4 w-4/6 h-2/6 rounded-2xl text-xl focus:ring-blue-500 bg-green-50 border-black bottom-2 border-solid '
            onChange={handleChange} placeholder='Write your Quote here!'/>
            <div className=''>
              <label className='m-2 p-2 '>Name :</label>
              <input name='name' className='bg-green-50 p-2 rounded-2xl my-2' placeholder="Write Author's Name" onChange={handleChange}></input>
            </div>
           <button type='submit' className='m-2 bg-slate-50 text-xl rounded-2xl hover:bg-slate-200 p-2 max-w-fit'>Submit</button>
      </form>
    </div>
  )
}

export default addQuote