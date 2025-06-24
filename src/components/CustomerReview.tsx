import { Star } from 'lucide-react'
import AddToCartButton from './AddToCartButton'
import { Input } from './ui/input'


const CustomerReview = () => {
    return (
        <section className='flex flex-col justify-center items-center my-8 '>
            <h2 className='font-bold text-4xl capitalize'> customer reviews</h2>
            <article className='flex gap-4  items-center my-4'>
                <div className='border mx-24'>
                    <span className='flex space-x-2'> {Array(5).fill(null).map((_, index) => (
                        <Star className='text-green-500 size-4 ' />
                    ))}</span>
                    <p>be the first to write a review </p>
                </div>
                <div className=' border border-r h-[80px]' />
                {/*  buttonm */}
                <AddToCartButton className='bg-green-600 capitalize text-lg py-6 w-[300px] mx-24' text='write a review' />
            </article>
            <div className=' border border-b-gray-50 w-full' />
            <section className='w-full max-w-3xl border my-4 rounded-xl px-3'>
                <h2 className='text-[rgb(88,148,3)] text-lg text-center '>Write a review</h2>
                <div className='border '>
                    <p className='text-[rgb(88,148,3)] text-lg '>Rating </p>
                    <span className='flex space-x-2'> {Array(5).fill(null).map((_, index) => (
                        <Star className='text-green-500 size-4 ' />
                    ))}</span>

                </div>
                <form action="" method="post">
                    <div>
                        <h2>review title</h2>
                        <Input placeholder='give your review a title' />
                    </div>

                    <div>
                        <h2>review </h2>
                        <Input placeholder='give your review a title' />
                    </div>
                    <div>
                        <h2>Name (displayed publicly like
                            John Smith
                            )</h2>
                        <Input placeholder='enter your name (public)' />
                    </div>
                    <div>
                        <h2>
                            email</h2>
                        <Input placeholder='enter your email (private)' />
                    </div>
                    <p>How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms, privacy and content policies</p>

                  <div className='flex space-x-6 items-center'>
                    <AddToCartButton className="w-[200px] text-lg py-6 bg-white border text-black hover:bg-white" text="cancel review "/>
                      <AddToCartButton className="w-[200px] text-lg py-6" text="submit review " />
                       
                  </div>
                </form>
            </section>
        </section>
    )
}

export default CustomerReview