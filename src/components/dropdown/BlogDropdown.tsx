import React from 'react'

const BlogDropdown = () => {
  return (
    <div className='bg-white shadow-xl w-[250px] absolute top-[150%] left-0 mt-2 border-t border-t-black  transition-all duration-500  cursor-pointer'>
        <ul>
            <li className=' p-2 capitalize text-lg font-normal'>article page</li>
             <li className='p-2 capitalize text-lg font-normal'>blog page</li>
        </ul>
    </div>
  )
}

export default BlogDropdown