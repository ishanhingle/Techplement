import React from 'react'
import { useRecoilState } from 'recoil'
import { userAtom } from '../strore'
import { Link, useNavigate } from 'react-router-dom';
import { backendURL } from '../config';
import { toast } from 'react-toastify';

function Header() {
    const [user,setUser]=useRecoilState(userAtom);
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        navigate("/");
        setUser(null);
        toast("User Logged Out Successfully");
    }
    return (
        <div className='w-full flex justify-between flex-wrap border-black border-b-2 bg-blue-gray-50 text-grey-800 p-4'>
          <div className='font-black lg:text-2xl  bg-transparent p-0 m-2'>
                DailyQuote
          </div>
          <div className='flex gap-4 text-xs lg:text-xl m-2 ml-3 font-semibold '>
            <Link className= ' rounded-xl p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' to='/'>Home</Link>
            <Link className= 'rounded-xl  p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' to='search'>Search Author</Link>
            <Link className= 'rounded-xl  p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' to='add'>Add Quote</Link>
            {(user==null)?
            <Link className= 'rounded-xl  p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' to='/signin'>Signin</Link>
            :(<div className=' flex flex-wrap'>
              <div className= 'rounded-xl font-extrabold p-2'>{`Hello, ${user.username}`}</div>
              <button className=' ml-1 rounded-xl  p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black' onClick={logout}>
               Logout
              </button>
              </div>
            )
            }
            
          </div>
    </div>
  )
}

export default Header