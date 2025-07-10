import { MapPin, MoveRight, Star } from 'lucide-react'
import { Button } from './ui/button'
import MapinLocationButton from './MapinLocationButton'

const Hero = () => {
    return (
        <section className='py-2'>
            <div className='flex items-center bg-[url(https://catering-workdo.myshopify.com/cdn/shop/files/banner-image.png?v=1685358091)] bg-top-right [180%_50%] bg-no-repeat bg-[length:100%_40%]  sm:bg-[length:100%_58%]  xl:bg-[length:100%_120%]'>
                <section className='container px-3 py-10 xl:p-14 '>
                    {/* offer banner */}
                    <p className='bg-[hsl(85,96%,30%)] w-fit rounded-full py-2.5 px-2 text-white  text-lg'> 🔥 Get 10% off  for first order</p>
                    <section className=' mt-2 md:mt-8 max-w-2xl'>
                        {/* heading & text */}
                        <h2 className="text-black font-bold text-[40px] leading-tight">
                            <span className="block text-[3rem] md:text-[4rem] capitalize sm:text-[rgb(88,148,3)]">
                                many <br /> restaurants
                            </span>
                            <span className="block ">and offers in one place</span>
                        </h2>
                        <p className='text-sm md:text-lg py-3.5'>Indulge in a culinary journey with our exquisite catering services, where every bite is a celebration of flavors and artistry.Elevate your event with our impeccable catering, where passion for food meets seamless service, creating unforgettable moments.</p>
                        {/* cta  button  */}
                        <div className='flex  flex-wrap gap-2 items-center md:space-x-2 mt-2'>

                            <MapinLocationButton className='bg-black w-[250px] ' />

                            <Button className='w-[270px] py-6 bg-white border border-black  text-gray-600 text-sm hover:text-black hover:bg-[0px]'> <Star className='size-4' /> Select your food preferencies</Button>
                        </div>
                    </section>
                    {/* google play store */}
                    <div className='flex gap-5 items-center  mt-8 md:mt-5 shrink-0'>
                        <a href="">
                            <img src="/google-icon.png" alt="" className='object-cover  w-[120px]  ' />
                        </a>
                        <a href="">
                            <img src="/apple-icon3.png" alt="" className='object-cover  w-[120px]' /> </a>
                        <h2 className='text-black  text-2xl md:text-4xl font-bold'>+145</h2>
                        <p className='text-[rgb(88,148,3)] text-lg leading-5'>Resturants and bars <br /> nearby you</p>
                    </div>

                </section>
            </div>
        </section>
    )
}

export default Hero