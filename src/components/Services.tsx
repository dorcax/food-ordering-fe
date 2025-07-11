import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cateringServices } from '@/constant/cateringServices'
import { useState } from 'react'
import FoodCategory from './FoodCategory'
import MapinLocationButton from './MapinLocationButton'
import Reveal from "./Reveal"



type ServicesType = {
  id: number,
  imageUrl: string,
  title: string,
  name: string,
  description: string
  rating: number
}
const Services = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='px-3 py-10 lg:pl-14 md:py-14'>
       <section className=' flex flex-col md:flex-row gap-3 md:justify-between items-center '>
      <section className=''>
       <Reveal>
         <h2 className='text-xl md:text-3xl lg:text-4xl font-bold text-[rgb(88,148,3)]'>We cook it for you .</h2>
       </Reveal>
       
        <Reveal>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold md:py-4 leading-8 sm:leading-[60px] mb-0 md:mb-3">
          Making food <span className="whitespace-nowrap  sm:block">more than <span className="text-[rgb(88,148,3)]">just-food</span></span>
        </h3>

        </Reveal>
        <Reveal>
          <p className='text-lg '>Catering is a service provided by professional food and beverage experts to meet the culinary needs of various events and gatherings.</p>
        </Reveal>
      <Reveal>  <MapinLocationButton className='my-6 ' /></Reveal>
      </section>

    <Reveal>  <section className='w-full md:flex-1 min-w-[40%]'>
        {/* Big image container */}
        <img
          src="https://catering-workdo.myshopify.com/cdn/shop/files/location-img.png?v=1685359807"
          alt="Catering service"
          className='w-full h-auto max-h-[600px] object-contain rounded-lg '
        />
      </section></Reveal>
    </section>
      {/* filtering of meals */}

      <div className='mt-20'>
        <FoodCategory />
      </div>
      {/* company services  */}
      <section className='flex flex-col lg:flex-row  lg:justify-between   gap-4  mt-10 '>
        <section className='w-full lg:max-w-2xl'>
       <Reveal>
           <h2 className='text-[rgb(88,148,3)] text-base sm:text-xl md:text-3xl lg:text-5xl font-bold '>Many Restaurants   <span className='text-black text-3xl font-semibold md:leading-10 whitespace-nowrap  md:block'>and offer in one place</span></h2>
       </Reveal>
         <Reveal>
           <p className='text-lg py-4 '>Caterers work closely with clients to create a customized menu based on their preferences, dietary restrictions, and event requirements. The menu may include appetizers, main courses, side dishes, desserts, and beverages.</p>
         </Reveal>

        <Reveal>  <MapinLocationButton className='my-2' /></Reveal>
        </section>
        <section className=''>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-xl md:max-w-5xl "
          >
          
              <CarouselContent>
              {cateringServices.map((services: ServicesType) => (
                <CarouselItem key={services.id} className=" basis-full sm:basis-1/2 lg:basis-1/3" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                  <div className="p-1">
                    <Reveal>
                    <Card className='border border-[rgb(88,148,3)]'>
                      <CardContent className=" px-6  " >
                        <img src={services.imageUrl} alt="" className='object-cover w-[60px] h-[60px] rounded-full ' />
                        {/* <p>{services.rating}</p> */}
                        <div className=' mt-4 w-full'>

                          <h2 className={`text-[34px] leading-10 font-extrabold  py-2 ${services.id === 1 ? "text-[rgb(88,148,3)] " : " text-black"}`}>{services.title}...</h2>
                          <p className='text-base sm:text-lg py-2'>{services.description}</p>
                          <p className='text-lg font-bold '>{services.name}</p>
                        </div>

                      </CardContent>
                    </Card>
                    </Reveal>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          
            {isHovered && (<Reveal>
              <><CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" /></>
            </Reveal>)}
            {/* {isHovered &&   <CarouselNext className='' />} */}
          </Carousel>
        </section>
      </section>
    </div>
  )
}

export default Services