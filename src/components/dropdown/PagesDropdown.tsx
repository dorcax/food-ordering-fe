import React from 'react'

const PagesDropdown = () => {
  return (
    <div className='border-t border-t-black bg-white shadow-2xl absolute mt-2 top-[150%] left-0 w-[250px] opacity-0 group-hover:opacity-100 transition-all duration-500'><ul>

                    <li className='capitalize font-medium text-lg p-3'>
                        about us
                    </li>
                    <li className='capitalize font-medium text-lg p-3'>contact with us</li>
                    <li className='capitalize font-medium text-lg p-3'>faq</li>
                    <li className='capitalize font-medium text-lg p-3'>privacy policy</li>
                    <li className='capitalize font-medium text-lg p-3'>shipping & delivery</li>
                    <li className='capitalize font-medium text-lg p-3'>terms & conditions</li>
                </ul></div>
  )
}

export default PagesDropdown