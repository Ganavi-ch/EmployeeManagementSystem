import React from 'react'

const AcceptTask = () => {
  return (
   <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-pink-400 rounded-xl'>
           <div className='flex justify-between text-sm items-center'> 
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
           </div>

           <h2 className=' mt-5 text-2xl font-semibold'>Make a youtube video </h2>
           <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dicta ducimus reprehenderit error suscipit eius quibusdam consequatur.</p>
        <div>
           <button className='bg-green-500 py-1 px-2 text-sm'>Marked as Completed</button>
           <button className='bg-red-500 py-1 px-2 text-sm'>Marked as Failed</button>
        </div>        
        
        </div>
       
  )
}

export default AcceptTask