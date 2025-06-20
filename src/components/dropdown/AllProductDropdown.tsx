import React from 'react'

const AllProductDropdown = () => {
    return (
        <section className='border-t border-t-black bg-white shadow-2xl fixed mt-2 top-[120px]  left-0   transition-all duration-500 w-[100vw]  '>
          <div className='grid grid-cols-4 gap-2 p-6'>
              <ul>
                <li className='py-2 text-xl font-bold'>   Veggie Burger</li>
                <li className='py-2 text-lg font-normal'>Vegan Seagal</li>
                <li className='py-2 text-lg font-normal'>The Habibi Burger</li>
                <li className='py-2 text-lg font-normal'>McVeggie Burger</li>
                <li className='py-2 text-lg font-normal'>Royal Crunchy Burger</li>
                <li className='py-2 text-lg font-normal'>Crispy Veg Burger</li>
                <li className='py-2 text-lg font-normal'>Good Flippin' Burgers</li>
            </ul>



            <ul>
                <li className='py-2 text-xl font-bold'>
                    Loaded Cheese Pizza
                </li>
                    
                <li className='py-2 text-lg font-normal'>
                    Five Famous
                </li>
            
                <li className='py-2 text-lg font-normal'>
                    
                    Double Cheese Margherita
                </li>
                 
                <li className='py-2 text-lg font-normal'>
                       Classic Fresh Veggie
                </li>
                <li className='py-2 text-lg font-normal'>
                    Cheesy Paneer Paprika
                </li>
            </ul>
            <ul>
                <li className='py-2 text-xl font-bold'>
                    Loaded Cheese Pizza
                </li>
                <li className='py-2 text-lg  font-normal'>
                    Five Famous
                </li>
            
                <li className='py-2 text-lg font-normal '>
                    Double Cheese Margherita
                </li>
                <li className='py-2 text-lg font-normal'>
                    Classic Fresh Veggie
                </li>
                <li className='py-2 text-lg font-normal '>
                    Cheesy Paneer Paprika
                </li>
            </ul>

            <div className='p-4'>
                <img src="https://images.unsplash.com/photo-1547592180-85f173990554" alt="" className='object-cover w-[500px] rounded-md ' />
            </div>
          </div>
        </section>
    )
}

export default AllProductDropdown