import { Star } from 'lucide-react'
import AddToCartButton from './AddToCartButton'
import { Input } from './ui/input'
import { useState } from 'react'


const CustomerReview = () => {
    const [review,setReview] =useState(false)
    return (
        <section className='flex flex-col justify-center items-center  mt-20 md:my-10 '>
            <h2 className='font-bold text-4xl capitalize'> customer reviews</h2>
            <article className='flex flex-col lg:flex-row gap-4  items-center my-4'>
                <div className='my-2 lg:my-0 mx-24'>
                    <span className='flex space-x-2 items-center justify-center  mb-4'> {Array(5).fill(null).map((_, index) => (
                        <Star className='text-[rgb(88,148,3)] size-4 '  key={index

                        }/>
                    ))}</span>
                    <p className='text-xl '>Be the first to write a review </p>
                </div>
                <div className='hidden lg:block border border-r h-[80px]' />
                {/*  buttonm */}
                <AddToCartButton className='bg-[rgb(88,148,3)] capitalize text-lg py-6 w-[180px] mx-24 cursor-pointer' text={`${review ?"cancel review":"write review"}`}  onClick={()=>setReview((prev)=>!prev)}/>
            </article>
            <div className=' hidden lg:block border border-b-gray-50 w-full' />
            <section className={` my-5  transform ${review ?"w-full max-w-2xl border  rounded-xl px-4  translate-y-5 transition-all duration-500":"opacity-0 translate-y-2  h-0 overflow-hidden transition-all duration-300"}`}>
                <h2 className='text-[rgb(88,148,3)] text-2xl text-center py-4 font-bold '>Write a review</h2>
                <div className=''>
                    <p className='text-[rgb(88,148,3)] text-lg py-4'>Rating </p>
                    <span className='flex space-x-2'> {Array(5).fill(null).map((_, index) => (
                        <Star className='text-[rgb(88,148,3)] size-4 '  key={index}/>
                    ))}</span>

                </div>
                <form action="" method="post" className='text-[rgb(88,148,3)] text-xl'>
                    <div className='my-6'>

                        <label htmlFor="" className='capitalize '>review title</label>
                        <Input placeholder='give your review a title' className='py-6 text-[rgb(88,148,3)] ' />
                    </div>

                    <div className='my-6'>

                        <label htmlFor="" className='capitalize '>review </label>
                        <Input placeholder='give your review a title' className='py-6 text-[rgb(88,148,3)] ' />
                    </div>
                    <div className='my-6'>

                        <label htmlFor="" className='capitalize '>Name (displayed publicly like
                            John Smith)</label>
                        <Input placeholder='enter your name (public)' className='py-6 text-[rgb(88,148,3)] ' />
                    </div>
                    <div className='my-6'>

                        <label htmlFor="" className='capitalize '>email</label>
                        <Input placeholder='enter your email (private)' className='py-6 text-[rgb(88,148,3)] ' />
                    </div>
                    <p className='mb-6 text-lg leading-relaxed'>How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms, privacy and content policies</p>

                    <div className='flex  items-center gap-4 flex-wrap my-10'>
                        <AddToCartButton className="w-[200px] py-6 bg-white border-[3px] text-[rgb(88,148,3)] hover:bg-white border-[rgb(88,148,3)] text-xl font-semibold capitalize cursor-pointer" text="cancel review " />
                        <AddToCartButton className="w-[200px] text-xl py-6 bg-[rgb(88,148,3)] font-bold capitalize cursor-pointer" text="submit review " />

                    </div>
                </form>
            </section>
        </section>
    )
}

export default CustomerReview