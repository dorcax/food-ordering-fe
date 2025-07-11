import { ArrowUpRight } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import Reveal from './Reveal'

const Footer = () => {
    return (
        <div className=' border boder-t flex flex-col-reverse md:flex-row md:justify-between gap-4 px-3 lg:px-14 py-7'>
            <section className='sm:order-2 lg:order-1'>
             <Reveal>
                   <h2 className='text-2xl font-extrabold capitalize py-4 '>shop:</h2>
             </Reveal>
               <Reveal>
                 <ul>

                    <li className='capitalize  text-lg py-1'>search</li>
                    <li className='capitalize  text-lg py-1'>all categories</li>
                    <li className='capitalize  text-lg py-1'>my cart</li>
                </ul>
               </Reveal>
            </section>
            <section className='sm:order-3 lg:order-2'>
               <Reveal>
                 <h2 className='text-2xl font-bold capitalize py-4'>account:</h2>
               </Reveal>
           <Reveal>
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
           </Reveal>
            </section>
            <section className=' w-full md:max-w-md lg:max-w-xl sm:order-1 lg:order-3'>
                <Reveal>
                    <h2 className='text-xl lg:text-2xl font-bold capitalize py-4'>Subscribe newsletter and get -20% off</h2>
                </Reveal>
               <Reveal>
                 <p className='text-base lg:text-lg'>Skillfully preparing and cooking the selected dishes using high-quality ingredients and culinary expertise to ensure delicious flavors and appealing presentations.

                </p>

               </Reveal>
               <Reveal>
                 <div className=' my-6 flex md:flex-nowrap flex-wrap gap-3 md:gap-0'>
                    <Input className='w-full md:max-w-sm h-[60px] border border-black md:rounded-l-xl  md:rounded-r-none  ' placeholder='Enter your email address '/>
                    <Button className=' w-full  md:w-[200px] h-[60px] md:rounded-tl-none md:rounded-bl-none text-base inline-flex border  '>Subscription <ArrowUpRight className='size-5' /></Button>
                </div>
               </Reveal>

            </section>
        </div>
    )
}

export default Footer