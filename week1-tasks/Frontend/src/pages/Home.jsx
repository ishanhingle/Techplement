import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { backendURL } from '../config';
import QuoteBox from '../components/QuoteBox';
import { Comment } from 'react-loader-spinner';
function Home() { 
  const [quote,setQuote]=useState({author:"somone",body:"something"});
  const [loader,setLoader]=useState(true);
  const getQuote=()=>{
    axios.get(backendURL+"quote/random")
          .then(res=>{
            setQuote(res.data.quote)
            console.log(res.data.quote);
            setLoader(false);
          })
          .catch(err=>{
            toast(err.message)
            setLoader(false);
            })
  }
  useEffect(()=>{
    setLoader(true);
    getQuote();
  },[])
  return (
    <>
    <h1 className='text-center mt-12 text-xl md:text-3xl lg:text-6xl 
    text-slate-900 font-serif font-bold'>Hi Here's Your Daily  Quote</h1>
    <div className='w-screen h-screen flex justify-center items-center'>
     {(loader)?(<Comment size={75}/>):
      (
        <div className='flex flex-col justify-center items-center '>
          <QuoteBox quote={quote}/>
          <button className='text-xl lg:text-3xl bg-slate-200 p-3 m-4 rounded-2xl' onClick={getQuote}> Get Random</button>
        </div>
      )
     }
    </div>
    </>
  )
}

export default Home