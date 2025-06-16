import React from 'react'
import { Button } from './ui/button'
import { MapPin, MoveRight, Star } from 'lucide-react'

const Hero = () => {
    return (
        <section className='flex items-center justify-around overflow-hidden'>
            <section className='px-14 w-[50%] py-14'>
                <p className='bg-[rgb(88,148,3)] w-[300px] rounded-full py-3 px-4 text-white text-xl'> 🔥 Get 10% off  for first order</p>

                <section className='mt-8'>
                    <h2 className='text-black font-bold text-[50px]'><span className='text-[4rem] capitalize  text-[rgb(88,148,3)] leading-16'>many <br /> resturants</span> <br />and offers in one place</h2>

                    <p className='font-medium text-xl'>Indulge in a culinary journey with our exquisite catering services, where every bite is a celebration of flavors and artistry.Elevate your event with our impeccable catering, where passion for food meets seamless service, creating unforgettable moments.</p>
                    <div className='flex items-center space-x-4 mt-8'>
                        <Button className='w-[300px] py-6 text-lg  '> <MapPin className='size-6'/> Find near by resturants <MoveRight /></Button>

                        <Button className='w-[300px] py-6 bg-white border border-black  text-gray-600 text-lg hover:text-black hover:bg-[0px]'> <Star className='size-6' /> Select your food preferencies</Button>
                    </div>
                </section>
                {/* google play store */}
                <div className='flex gap-5 items-center mt-8'>

                    <a href="">  <img src="https://catering-workdo.myshopify.com/cdn/shop/files/google-play-logo.png?v=1685358261" alt="" className='object-cover  w-[160px] ' /></a>
                    <a href="">  <img src="https://catering-workdo.myshopify.com/cdn/shop/files/app-store-logo.png?v=1685358287" alt="" className='object-cover w-[160px]' /> </a>
                    <h2 className='text-black text-4xl font-bold'>+145</h2>
                    <p className='text-[rgb(88,148,3)] text-xl font-bold '>Resturants and bars <br /> nearby you</p>
                </div>

            </section>

        <section className='flex-1 min-w-[50%] border'>
                <img src="./banner.png" alt="" className=' px-10  object-cover  h-auto py-6' />
        </section>


        </section>
    )
}

export default Hero