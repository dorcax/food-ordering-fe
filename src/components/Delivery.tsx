import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
import { ArrowLeftRight, ChevronRight, Clock9, Eye, Heart } from "lucide-react"
import { Link } from 'react-router-dom'
const Delivery = () => {
  // const [activeItem,setActiveItem] =useState<number | null>(null)
  return (
    <section className='bg-[url("https://catering-workdo.myshopify.com/cdn/shop/files/category-back.jpg?v=1685364585")] bg-cover bg-center min-h-screen bg-no-repeat px-14 py-20'>
      <h2 className='text-3xl  text-[rgb(88,148,3)] capitalize mb-3 '>delivery</h2>
      <h4 className='text-white text-5xl font-extrabold py-2'>The catering with <br /> <span className='text-[rgb(88,148,3)]'>the royal touch</span>
      </h4>
      <p className='text-white max-w-3xl text-base leading-relaxed py-6'>Experience a gastronomic adventure like no other with our bespoke catering, showcasing the perfect harmony of taste, presentation, and ambiance.Treat your guests to a sensory feast with our catering expertise, where each dish is crafted with precision and infused with culinary magic.</p>
      {/* 
        carosuel  */}
      <Carousel className='max-w-3xl  '>
        <CarouselContent>
          {Array(5).fill(null).map((_, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 text-white group relative" >
           <Link to={`/category/${index}`}>
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="" className='object-cover w-[500px] h-[200px] rounded-t-xl' />
              <span className='absolute top-6 left-8 bg-gray-400 rounded-full py-1.5 px-5 group-hover:bg-[rgb(88,148,3)]' >4 Items</span>
              <div className='border border-white  h-[90px] rounded-b-xl group-hover:border-[rgb(88,148,3)]'>
                <div className='py-5 px-4 flex justify-between items-center'>
                  <h2 className='  text-xl font-extrabold group-hover:text-[rgb(88,148,3)]'>Cheeseburger</h2>
                  <Button className='bg-gray-400 group-hover:bg-[rgb(88,148,3)]'> <ChevronRight className='size-5' /></Button>
                </div>
              </div>
           </Link>

            </CarouselItem>
          ))}



        </CarouselContent>
        {/* <div className="">
          <CarouselPrevious className="bottom-0 opacity-0 group-hover:opacity-100 z-50" />
          <CarouselNext className="bottom-0 opacity-0 group-hover:opacity-100 z-50" />
        </div> */}

        <>
          <CarouselPrevious className="bottom-0 z-50" />
          <CarouselNext className="bottom-0 z-50" />
        </>

      </Carousel>

    </section>
  )
}

export default Delivery