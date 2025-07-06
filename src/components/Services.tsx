import { meals } from '@/constant/data'
import { ArrowRight, ChevronRight, MapPin } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cateringServices } from '@/constant/cateringServices'
import FoodCategory from './FoodCategory'



type ServicesType ={
    id:number,
    imageUrl:string,
    title:string,
    name:string,
    description:string
    rating:number
}
const Services = () => {
 
    return (
        <div className='pl-14 py-14'> <section className='flex justify-between items-center '>
            <section className='max-w-5xl  '>
                <h2 className='text-4xl font-bold text-[rgb(88,148,3)]'>We cook it for you .</h2>
                <h3 className='text-5xl font-bold py-6 leading-[60px]'>Making food  <br />more than <span className='text-[rgb(88,148,3)]'> just-food</span></h3>
                <p className='text-lg'>Catering is a service provided by professional food and beverage experts to meet the culinary needs of various events and gatherings.</p> 
                <Button className='bg-[rgb(88,148,3)] py-6 w-[300px] text-base my-8'><MapPin className='size-6'/> find nearby resturants <ArrowRight className='size-6'/></Button>
            </section>
            
               <section className='flex-1 min-w-[50%]'>
                    {/* Big image container */}
                    <img 
                        src="https://catering-workdo.myshopify.com/cdn/shop/files/location-img.png?v=1685359807" 
                        alt="Catering service" 
                        className='w-full h-auto max-h-[600px] object-contain rounded-lg '
                    />
                </section>
        </section>
            {/* filtering of meals */}

            <div className='mt-20'>
               <FoodCategory/>
            </div>
            {/* company services  */}
            <section className='flex justify-between gap-4 mt-24'>
                <section>
                    <h2 className='text-[rgb(88,148,3)] text-5xl font-bold'>Many Restaurants <br />  <span className='text-black  font-semibold leading-24'>and offer in one place</span></h2>
                    <p className=' text-lg max-w-xl'>Caterers work closely with clients to create a customized menu based on their preferences, dietary restrictions, and event requirements. The menu may include appetizers, main courses, side dishes, desserts, and beverages.</p>
                     <Button className='bg-[rgb(88,148,3)] py-6 w-[300px] text-base my-8'><MapPin className='size-6'/> find nearby resturants <ArrowRight className='size-6'/></Button>
                </section>
                <section>
                     <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-5xl"
    >
      <CarouselContent>
        {cateringServices.map((services:ServicesType) => (
          <CarouselItem key={services.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex px-2">
                  <img src={services.imageUrl} alt=""  className='object-cover w-[60px] h-[60px] rounded-full ' />
                  {/* <p>{services.rating}</p> */}
                  <div className=' mt-14 w-full'>
                    <h2 className='text-3xl py-2 font-bold text-[rgb(88,148,3)] '>{services.title}</h2>
                    <p className='text-base'>{services.description}</p>
                    <p className='text-xl font-semibold py-3'>{services.name}</p>
                  </div>
                   
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
                </section>
            </section>
        </div>
    )
}

export default Services