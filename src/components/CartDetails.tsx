import { useModal } from '@/context/ModalProvider'
import { Trash, X } from 'lucide-react'
import Counter from './Counter'
import { Button } from './ui/button'

const CartDetails = () => {
    const { handleCloseDrawer } = useModal()
    return (
        <section className=' fixed inset-0 bg-[rgba(0,0,0,0.6)] flex z-50 transition-transform duration-500 ease-in-out'>

            {/* Cart Drawer - Left side */}
            <div className=' w-full md:ml-auto relative md:max-w-[450px]'>
            
                <section className='bg-white h-screen  w-full md:w-[450px] flex flex-col'>

                    {/* Header */}
                    <div className='bg-[rgb(88,148,3)] py-4 flex justify-between items-center text-white fixed w-full md:w-[450px] top-0 z-10 px-8'>
                        <div className='absolute  md:top-6 left-2  md:-left-14 z-50 cursor-pointer' onClick={() => handleCloseDrawer()}><X className='size-8 text-white' /></div>
                        <h2 className='capitalize px-6 md:px-0 text-2xl font-bold'>my cart</h2>
                        <p className='uppercase text-base font-bold'>14 items</p>
                    </div>
                    {/* Scrollable Items  */}
                    <section className='mt-[80px] flex-grow overflow-y-auto px-4 py-4 space-y-4'>
                        {Array(6).fill(null).map((_, index) => (
                            <div className='border rounded-md p-3 flex space-x-4' key={index}>
                                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591" alt="" className='w-[90px] h-[120px] rounded-2xl object-cover' />
                                <div className='w-full'>
                                    <h2 className='text-[rgb(88,148,3)] text-lg font-semibold pb-4 cursor-pointer'>Pasta Fagioli al Forno</h2>
                                    <Counter width='w-[120px] h-10' />
                                    <div className='flex justify-between items-center my-3'>
                                        <span className='font-medium text-lg'>$164.00 CAD</span>
                                        <Trash className='text-red-600 size-4' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Fixed  Footer */}
                    <article className='shadow-2xl'>
                        <div className='flex justify-between px-6 py-4'>
                            <Button className='bg-[rgb(88,148,3)] py-4 h-14 w-[160px]'><img src="./discountImg.png" alt="" className='size-8' /></Button>
                            <Button className='bg-[rgb(88,148,3)] py-4 h-14 w-[160px]'><img src="./giftbox.png" alt="" className='size-8' /></Button>
                        </div>
                        <div className='border-b' />
                        <div className='flex justify-between items-center px-6 py-4 text-[rgb(88,148,3)]'>
                            <div>
                                <h2 className='text-3xl font-medium pb-4 capitalize'>total item</h2>
                                <span className='text-base'>14</span>
                            </div>
                            <div>
                                <h2 className='text-3xl font-medium pb-4 capitalize'>subtotal</h2>
                                <span className='text-xl'>$164.00 CAD</span>
                            </div>
                        </div>
                        <div className='flex  gap-0 md:gap-1 justify-between overflow-hidden'>
                            <Button className='w-[200px] md:w-[230px] py-6 bg-[rgb(88,148,3)] capitalize text-base rounded-none'>
                                view cart
                            </Button>
                            <Button className='w-[200px] md:w-[230px] py-6 capitalize text-base rounded-none'>
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
