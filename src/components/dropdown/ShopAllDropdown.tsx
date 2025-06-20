// import { meals } from '@/constant/data'
// import React from 'react'

// const ShopAllDropdown = () => {
//   return (
//     <div className='border-t border-t-black bg-white shadow-2xl absolute mt-2 top-[150%]   opacity-0 group-hover:opacity-100 transition-all duration-500  w-[1300px]'>
//         <div className='grid grid-cols-3 gap-2 '>
//             {meals.slice(0,4).map((meal)=>(
//             <div className=''>
//                 <img src={meal.imageUrl} alt="" className='object-cover w-full h-[250px] rounded-xl' />
//             </div>
//         ))}
//         </div>
//     </div>
//   )
// }

// export default ShopAllDropdown

import { meals } from '@/constant/data'
import React from 'react'

const ShopAllDropdown = () => {
  return (
    <div className='border-t border-t-black bg-white shadow-2xl fixed mt-2 top-[120px] left-0 transition-all duration-500 w-[100vw]'>
        <div className='grid grid-cols-4 gap-6 p-6'>
            {meals.slice(0,4).map((meal, index) => (
                <div key={index} className='w-full'>
                    <img 
                        src={meal.imageUrl} 
                        // alt={meal.name} 
                        className='object-cover w-full h-[250px] rounded-xl' 
                    />
                      <h2 className=' capitalize text-center text-xl py-3 font-normal'>{meal.title}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ShopAllDropdown