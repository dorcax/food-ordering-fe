import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useModal } from '@/context/ModalProvider'
import { ShoppingCart, X } from 'lucide-react'
import AddToCartButton from '../AddToCartButton'
import Counter from '../Counter'
import Reveal from "../Reveal"

const FoodModal = () => {
  const { handleCloseModal } = useModal()
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-[rgba(3,2,2,0.7)] flex items-center justify-center w-full z-50'>
      <div className='w-full max-w-6xl bg-gray-300 mx-5 pb-5 md:pb-10 rounded-xl shadow-2xl'>
        <Reveal>   <div className="flex justify-end mx-4 mt-2">
          <X onClick={handleCloseModal} className='size-8 hover:text-black transition-colors' /> </div></Reveal>
        <div className='flex flex-wrap  lg:items-center  gap-2 '>
          <div className=''>
            <Carousel className="w-full h-full md:max-w-xs lg:max-w-xl p-0">
              <Reveal>     <CarouselContent className='p-0'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <Card className='bg-transparent border-none shadow-none p-0 '>
                        <CardContent className="flex  items-center justify-center px-4">
                          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591" alt="product image" className='object-cover rounded-xl md:h-[270px]  lg:h-full w-full' />
                          {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent></Reveal>
              <Reveal>
                <CarouselPrevious className='left-7 cursor-pointer' />
                <CarouselNext className='right-7 cursor-pointer' />
              </Reveal>
            </Carousel>
          </div>
          <div className='w-full md:max-w-[480px] lg:max-w-[550px] px-4 '>
            <Reveal>
              <h2 className='capitalize text-3xl  lg:text-4xl font-bold py-2'>Chowmein</h2>
            </Reveal>
            <Reveal> <p className=' leading-relaxed font-normal text-base lg:text-lg mb-4'>noodle, a cooked egg-and-flour paste prominent in European and
              Asian cuisine, generally distinguished from pasta by its elongated ribbonlike form. Noodles are commonly used to add body and flavour to broth</p></Reveal>
            <span className='font-bold text-2xl'>$500.00 CAD</span>
            <div className=' my-3 lg:my-6 flex gap-4 '>
              <Reveal>
                <AddToCartButton className='w-[140px] bg-[rgb(88,148,3)] py-6 text-base cursor-pointer' text='Add to Cart' icon={<ShoppingCart />} />
              </Reveal>
              <Reveal> <Counter width='w-[140px] py-3' /></Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodModal


