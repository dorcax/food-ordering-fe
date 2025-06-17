import React from 'react'

const BlogDropdown = () => {
  return (
    <div className='bg-white shadow-xl w-[250px] absolute top-[150%] left-0 mt-2 border-t border-t-black  opacity-0 group-hover:opacity-100 transition-all duration-500 '>
        <ul>
            <li className=' p-3 capitalize text-lg font-medium'>article page</li>
             <li className=' p-3 capitalize text-lg font-medium'>blog page</li>
        </ul>
    </div>
  )
}

export default BlogDropdown