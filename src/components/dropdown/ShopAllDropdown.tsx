

import { meals } from '@/constant/data'

const ShopAllDropdown = () => {
  return (
    <div className='border-t border-t-black bg-white shadow-2xl fixed mt-2 top-[120px] left-0 transition-all duration-500 w-[100vw]'>
        <div className='grid grid-cols-4 gap-4 py-6 px-14'>
            {meals.slice(0,4).map((meal, index) => (
                <div key={index} className='w-full'>
                    <img 
                        src={meal.imageUrl} 
                        // alt={meal.name} 
                        className='object-cover w-full h-[250px] rounded-xl' 
                    />
                      <h2 className=' capitalize text-center text-lg py-3 font-normal'>{meal.title}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ShopAllDropdown