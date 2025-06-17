import React from 'react'

const AllProductDropdown = () => {
    return (
        <section className='border-t border-t-black bg-white shadow-2xl absolute mt-2 top-[150%] opacity-0 group-hover:opacity-100 transition-all duration-500 w-[1300px] flex gap-4'>
            <ul>
                <li className='p-4 text-xl font-bold'>   Veggie Burger</li>
                <li className='p-4 text-lg font-medium'>Vegan Seagal</li>
                <li className='p-4 text-lg font-medium'>The Habibi Burger</li>
                <li className='p-4 text-lg font-medium'>McVeggie Burger</li>
                <li className='p-4 text-lg font-medium'>Royal Crunchy Burger</li>
                <li className='p-4 text-lg font-medium'>Crispy Veg Burger</li>
                <li className='p-4 text-lg font-medium'>Good Flippin' Burgers</li>
            </ul>



            <ul>
                <li className='p-4 text-xl font-bold'>
                    Loaded Cheese Pizza
                </li>
                <li className='p-4 text-lg font-medium'>
                    Five Famous
                </li>
            
                <li className='p-4 text-lg font-medium'>
                    Double Cheese Margherita
                </li>
                <li className='p-4 text-lg font-medium'>
                    Classic Fresh Veggie
                </li>
                <li className='p-4 text-lg font-medium'>
                    Cheesy Paneer Paprika
                </li>
            </ul>
            <ul>
                <li className='p-4 text-xl font-bold'>
                    Loaded Cheese Pizza
                </li>
                <li className='p-4 text-lg font-medium'>
                    Five Famous
                </li>
            
                <li className='p-4 text-lg font-medium'>
                    Double Cheese Margherita
                </li>
                <li className='p-4 text-lg font-medium'>
                    Classic Fresh Veggie
                </li>
                <li className='p-4 text-lg font-medium'>
                    Cheesy Paneer Paprika
                </li>
            </ul>

            <div className='p-4'>
                <img src="https://images.unsplash.com/photo-1547592180-85f173990554" alt="" className='object-cover w-[500px] rounded-md ' />
            </div>
        </section>
    )
}

export default AllProductDropdown