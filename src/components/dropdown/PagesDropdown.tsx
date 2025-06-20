import React from 'react'

const PagesDropdown = () => {
  return (
    <div className='border-t border-t-black bg-white shadow-2xl absolute mt-2 top-[150%] left-0 w-[250px] transition-all duration-500 cursor-pointer'><ul>

                    <li className='capitalize font-normal text-lg p-2'>
                        about us
                    </li>
                    <li className='capitalize font-normal text-lg p-2'>contact with us</li>
                    <li className='capitalize font-normal text-lg p-2'>faq</li>
                    <li className='capitalize font-normal text-lg p-2'>privacy policy</li>
                    <li className='capitalize font-normal text-lg p-2'>shipping & delivery</li>
                    <li className='capitalize font-normal text-lg p-2'>terms & conditions</li>
                </ul></div>
  )
}

export default PagesDropdown