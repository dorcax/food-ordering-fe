import React from 'react'
import Counter from './Counter'
import { Button } from './ui/button'
import { Trash, X } from 'lucide-react'
import { useModal } from '@/context/ModalProvider'

const CartDetails = () => {
    const { handleCloseDrawer ,isDrawerOpen} = useModal()
    return (
        <section className='fixed inset-0 bg-[rgba(0,0,0,0.6)] flex z-50 transition-transform duration-500 ease-in-out'>

            {/* Cart Drawer - Left side */}
            <div className='ml-auto relative'>
                <div className=' absolute top-6 -left-14 z-50 cursor-pointer' onClick={() => handleCloseDrawer()}><X className='size-8 text-white' /></div>
                <section className='bg-white h-screen overflow-hidden w-[450px] flex flex-col  '>
                    {/* Add cart items here */}
                    <div className='bg-[rgb(88,148,3)] py-6 flex justify-between items-center  text-white fixed w-[450px] top-0 z-10 px-4 overflow-hidden'>
                        <h2 className='capitalize text-2xl font-bold '>my cart </h2>
                        <p className='capitalize text-xl font-bold '>14 items</p>
                    </div>
                    {/* main cart items */}
                    <section className='px-4 mt-[80px] py-4 space-y-4 overflow-y-auto'>
                        {Array(6).fill(null).map((_, index) => (
                            <div className='border rounded-md  p-3 flex   space-x-4 '>
                                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591" alt="" className='w-[90px] h-[120px] rounded-2xl object-cover ' />
                                <div className=' w-full '>
                                    <h2 className='text-[rgb(88,148,3)] text-base font-medium pb-4 cursor-pointer'>Pasta Fagioli al Forno</h2>
                                    <Counter width='w-[120px] h-10' />
                                    <div className='flex justify-between items-center my-3 '>
                                        <span className=''>$164.00 CAD</span>
                                        <Trash className='text-red-600 size-5 ' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                    <article className='bg-white shadow-md h-[300px] border-t'>
                        <div className='flex justify-between px-6 py-4 '>
                            <Button className='bg-[rgb(88,148,3)] py-4 h-14 w-[160px]'><img src="./discountImg.png " alt="" className='size-8' /></Button>
                            <Button className='bg-[rgb(88,148,3)] py-4 h-14 w-[160px]'><img src="./giftbox.png" alt="" className='size-8 ' /></Button>

                        </div>
                        <div className='border-b' />
                        {/*  */}
                        <div className=' flex justify-between items-center w-full  px-6 py-4'>
                            <div className='text-[rgb(88,148,3)]'>
                                <h2 className=' text-3xl font-medium pb-4 capitalize'>total item</h2>
                                <span className='text-base'>14</span>
                            </div>
                            <div className='text-[rgb(88,148,3)]'>
                                <h2 className=' text-3xl font-medium pb-4 capitalize'>subtotal</h2>
                                <span>
                                    <span className='text-xl'>$164.00 CAD</span>
                                </span>
                            </div>
                        </div>
                        {/* checkout button  */}
                        <div className='flex gap-1 justify-between items-center'>
                            <Button className='w-[230px] py-6 bg-[rgb(88,148,3)] capitalize text-base rounded-none'>
                                view cart
                            </Button>
                            <Button className='w-[230px] py-6 capitalize text-base rounded-none'>
                                proceed to checkout
                            </Button>
                        </div>
                    </article>
                </section>
            </div>
        </section>
    )
}

export default CartDetails
