import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'

const Footer = () => {
    return (
        <div className=' border boder-t flex justify-between gap-4 px-14 py-14'>
            <section>
                <h2 className='text-2xl font-bold capitalize py-2 '>shop</h2>
                <ul>

                    <li className='capitalize font-semibold text-lg py-2'>search</li>
                    <li className='capitalize font-semibold text-lg py-2'>all categories</li>
                    <li className='capitalize font-semibold text-lg py-2'>my cart</li>
                </ul>
            </section>
            <section>
                <h2 className='text-2xl font-bold capitalize py-2'>account</h2>
                <ul>

                    <li className='capitalize font-medium text-lg py-2'>
                        about us
                    </li>
                    <li className='capitalize font-semibold text-lg py-2'>contact with us</li>
                    <li className='capitalize font-semibold text-lg py-2'>faq</li>
                    <li className='capitalize font-semibold text-lg py-2'>privacy policy</li>
                    <li className='capitalize font-semibold text-lg py-2'>shipping & delivery</li>
                    <li className='capitalize font-semibold text-lg py-2'>terms & conditions</li>
                </ul>
            </section>
            <section>
                <h2 className='text-2xl font-bold capitalize py-2'>Subscribe newsletter and get -20% off</h2>
                <p className='max-w-xl text-lg font-medium'>Skillfully preparing and cooking the selected dishes using high-quality ingredients and culinary expertise to ensure delicious flavors and appealing presentations.

                </p>

                <div className='relative my-6'>
                    <Input className='w-[400px] py-6  h-[60px] border border-black' placeholder='Enter your email address '/>
                    <Button className='absolute top-0 right-0 w-[180px] h-[60px] rounded-tl-none rounded-bl-none text-lg inline-flex'>Subscription <ArrowUpRight className='size-8' /></Button>
                </div>

            </section>
        </div>
    )
}

export default Footer