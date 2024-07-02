import React from 'react'

function QuoteBox({quote}) {
  if(!quote) return null;
  return (
    <div className='p-5 m-6 bg-yellow-50 rounded-3xl text-center max-w-xs lg:w-xl lg:max-w-3xl'>
       <div className='font-black max-w-full text-xl lg:text-5xl m-3'>
         "{quote.body}"
       </div>
       <div>
          ~{quote.name}
       </div>
    </div>
  )
}

export default QuoteBox