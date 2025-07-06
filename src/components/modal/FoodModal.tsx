import { Minus, Plus, ShoppingCart, X } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { useModal } from '@/context/ModalProvider'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Counter from '../Counter'
import AddToCartButton from '../AddToCartButton'

const FoodModal = () => {
  const { handleCloseModal } = useModal()
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-[rgba(3,2,2,0.7)] flex items-center justify-center w-full z-50'>
      <div className='w-full max-w-7xl bg-gray-300  rounded-xl shadow-2xl px-1'>
        <div className="flex justify-end mx-4 mt-2">
          <X onClick={handleCloseModal} className='size-8 hover:text-black transition-colors' /> </div>
        <div className='flex  items-center gap-2'>
          <div className=''>
            <Carousel className="w-full max-w-2xl">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <Card className='bg-transparent border-none shadow-none '>
                        <CardContent className="flex  items-center justify-center">
                          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591" alt="product image" className='object-cover rounded-xl ' />
                          {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='left-7 cursor-pointer' />
              <CarouselNext className='right-7 cursor-pointer' />
            </Carousel>

          </div>
          <div className=''>
            <h2 className='capitalize text-3xl font-bold py-2'>Chowmein</h2>
            <p className='w-full max-w-xl leading-relaxed font-normal text-lg mb-4'>noodle, a cooked egg-and-flour paste prominent in European and
              Asian cuisine, generally distinguished from pasta by its elongated ribbonlike form. Noodles are commonly used to add body and flavour to broth</p>
            <span className='font-bold text-2xl'>$500.00 CAD</span>
            <div className='my-6 flex gap-4 '>
              
      
             <AddToCartButton className='w-[140px] bg-[rgb(88,148,3)] py-6 text-lg cursor-pointer' text='Add to Cart' icon={<ShoppingCart />}  />
           
              <Counter width='w-[140px] py-3'/>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodModal


