import { Star } from 'lucide-react'
import MapinLocationButton from './MapinLocationButton'
import { Button } from './ui/button'
import Reveal from './Reveal'

const Hero = () => {
    return (
        <section className='py-2'>
         <Reveal>
               <div className='flex items-center sm:bg-[url(https://catering-workdo.myshopify.com/cdn/shop/files/banner-image.png?v=1685358091)] bg-top-right [180%_50%] bg-no-repeat bg-none  sm:bg-[length:100%_58%]  xl:bg-[length:100%_120%]'>
                <section className='container px-3 py-10 xl:p-14 '>
                    {/* offer banner */}
                
                     <Reveal> <p className='bg-[hsl(85,96%,30%)] w-fit rounded-full py-2.5 px-2 text-white  text-lg'> 🔥 Get 10% off  for first order</p></Reveal>
                 
                    <section className=' mt-2 md:mt-8 max-w-2xl'>
                        {/* heading & text */}
                     
                        <Reveal> <h2 className="text-black font-bold text-[40px] leading-tight">
                            <span className="block text-[3rem] md:text-[4rem] capitalize sm:text-[rgb(88,148,3)]">
                                many <br /> restaurants
                            </span>
                            <span className="block ">and offers in one place</span>
                        </h2>
                     </Reveal>
                        <Reveal>  <p className='text-sm md:text-lg py-3.5'>Indulge in a culinary journey with our exquisite catering services, where every bite is a celebration of flavors and artistry.Elevate your event with our impeccable catering, where passion for food meets seamless service, creating unforgettable moments.</p></Reveal>
                   
                        {/* cta  button  */}
                   
                          <div className='flex  flex-wrap gap-2 items-center md:space-x-2 mt-2'>

                           <Reveal> <MapinLocationButton className='bg-black w-[250px] ' /></Reveal>

                            <Reveal>
                                <Button className='w-[270px] py-6 bg-white border border-black  text-gray-600 text-sm hover:text-black hover:bg-[0px]'> <Star className='size-4' /> Select your food preferencies</Button>
                            </Reveal>
                        </div>
                      
                    </section>
                    {/* google play store */}
                  
                     <div className='flex gap-5 items-center  mt-8 md:mt-5 shrink-0'>
                       <Reveal> <a href="">
                            <img src="/google-icon.png" alt="" className='object-cover  w-[120px]  ' />
                        </a></Reveal>
                       <Reveal> <a href="">
                            <img src="/apple-icon3.png" alt="" className='object-cover  w-[120px]' /> </a></Reveal>
                       <Reveal> <h2 className='text-black  text-2xl md:text-4xl font-bold'>+145</h2></Reveal>
                      <Reveal>  <p className='text-[rgb(88,148,3)] text-lg leading-5'>Resturants and bars <br /> nearby you</p></Reveal>
                    </div>

                  
                </section>
            </div>
         </Reveal>
        </section>
    )
}

export default Hero