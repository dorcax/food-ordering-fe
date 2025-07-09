import { ArrowUpRight } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Footer = () => {
    return (
        <div className=' border boder-t flex flex-col-reverse md:flex-row md:justify-between gap-4 px-3 lg:px-14 py-7'>
            <section className='sm:order-2 lg:order-1'>
                <h2 className='text-2xl font-extrabold capitalize py-4 '>shop:</h2>
                <ul>

                    <li className='capitalize  text-lg py-1'>search</li>
                    <li className='capitalize  text-lg py-1'>all categories</li>
                    <li className='capitalize  text-lg py-1'>my cart</li>
                </ul>
            </section>
            <section className='sm:order-3 lg:order-2'>
                <h2 className='text-2xl font-bold capitalize py-4'>account:</h2>
                <ul>

                    <li className='capitalize font-bold text-base py-1'>
                        about us
                    </li>
                    <li className='capitalize  text-lg py-1'>contact with us</li>
                    <li className='capitalize  text-lg py-1'>faq</li>
                    <li className='capitalize  text-lg py-1'>privacy policy</li>
                    <li className='capitalize  text-lg py-1'>shipping & delivery</li>
                    <li className='capitalize  text-lg py-1'>terms & conditions</li>
                </ul>
            </section>
            <section className=' w-full md:max-w-md lg:max-w-xl sm:order-1 lg:order-3'>
                <h2 className='text-xl lg:text-2xl font-bold capitalize py-4'>Subscribe newsletter and get -20% off</h2>
                <p className='text-base lg:text-lg'>Skillfully preparing and cooking the selected dishes using high-quality ingredients and culinary expertise to ensure delicious flavors and appealing presentations.

                </p>

                <div className='relative my-6'>
                    <Input className='max-w-lg md:max-w-sm py-6  h-[60px] border border-black rounded-l-xl  rounded-r-none  ' placeholder='Enter your email address '/>
                    <Button className='absolute top-0 right-3  w-[180px] h-[60px] rounded-tl-none rounded-bl-none text-base inline-flex border '>Subscription <ArrowUpRight className='size-5' /></Button>
                </div>

            </section>
        </div>
    )
}

export default Footer