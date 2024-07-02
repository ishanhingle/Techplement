import axios from 'axios';
import React,{useState} from 'react'
import { MagnifyingGlass } from 'react-loader-spinner';
import { backendURL } from '../config';
import QuoteBox from '../components/QuoteBox';
function Search() {
  const [quotes,setQuotes]=useState(null);
  const [name,setName]=useState("");
  const searchQuotes=()=>{
    const searchLink=backendURL+"quote/search/"+name;
    console.log(searchLink);
    axios.get(searchLink)
    .then(res=>{
      setQuotes(res.data.quotes);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  const handleChange=(e)=>{
    setName(e.target.value);
  }

  return (
    <div className='h-screen w-screen'>
    <h1 className='text-center'>Search Quotes By Author's Username</h1>
    <div className='text-center w-full'>
      <input className='rounded-xl border-solid bottom-1 border-black
       bg-gray-200 lg:text-xl p-3 m-4' onChange={handleChange} placeholder="Author's Name"></input>
       <button className='text-xl rounded-2xl hover:bg-slate-100 p-2 max-h-fit' onClick={searchQuotes}> Search🔍</button>
    </div>
      {(!quotes)?(
        <div className='flex h-full w-full justify-center items-center'>
        <MagnifyingGlass/>
        <h1>Search For Authors</h1>
        </div>)
      :(
        <div className='flex flex-col justify-center items-center gap-2'> 
         {quotes.map(quote=><QuoteBox quote={quote}/>)}
        </div>
      )
      }
    </div>

  )
}

export default Search