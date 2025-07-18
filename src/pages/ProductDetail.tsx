import AddToCartButton from '@/components/AddToCartButton'
import Counter from '@/components/Counter'
import CustomerReview from '@/components/CustomerReview'
import FoodCategory from '@/components/FoodCategory'
import { RecentlyViewedProduct } from '@/components/RecentlyViewedProduct'
import Reveal from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { meals } from '@/constant/data'
import { ArrowLeft, Heart, Pencil, ShoppingCart, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const ProductDetail = () => {
  // const [activeThumbnail, setActiveThumbnail] = useState(0)


  // const handleThumbnailClick = (index: number) => {
  //   setActiveThumbnail(index)

  // }
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  // const [count, setCount] = useState(0)
  useEffect(() => {
    if (!api) {
      return
    }
  
    // setCount(api.scrollSnapList().length)
    // setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])


  return (
    <section className='relative w-full px-3 py-10 xl:p-14 z-30'>
      <section className='grid grid-cols-1 md:grid-cols-12  items-start  gap-5 w-full'>
        <div className=' sm:col-span-12 lg:col-span-5 order-3 md:order-3 lg:order-1'>
           <nav className='flex gap-3 items-center text-lg  font-medium mb-2  md:mb-8'>
    <Reveal>    <div className='size-12  rounded-full flex justify-center items-center border border-black'><Link to='/'><ArrowLeft className='size-4' /></Link></div>
        <span className='text-base'>Back to categories</span></Reveal>
      </nav>
          <article className='flex justify-between flex-wrap  items-center md:mb-3'>
          <Reveal>  <h2 className='capitalize text-sm  md:text-lg'>China Town </h2></Reveal>
           <Reveal>
             <div className='cursor-pointer  flex flex-wrap space-x-2 items-center'>
              {
                Array(5).fill(null).map((_, index) => (

                  <Star key={index} className='size-4 text-[rgb(88,148,3)]' />
                ))
              }
              <span className='flex items-center capitalize text-sm md:text-base font-medium  gap-2'><Pencil className=' size-4' />  write a review </span>

            </div>
           </Reveal>
         <Reveal>
             <Button className="bg-[hsl(85,96%,30%)] w-[40px] h-[40px] cursor-pointer " ><Heart className="size-6" /></Button>
         </Reveal>
          </article>
          <article>
           <Reveal> <h2 className='text-5xl font-bold  py-3 '>Chowmein</h2></Reveal>
           <Reveal> <p className='text-base md:text-lg leading-relaxed mb-4'>noodle, a cooked egg-and-flour paste prominent in European and Asian cuisine, generally distinguished from pasta by its elongated ribbonlike form. Noodles are commonly used to add body and flavour to broth soups. They are commonly boiled or sautéed and served with sauces and meats or baked in casseroles.</p></Reveal>
          <Reveal>  <Counter width='w-[140px] py-1.5' /></Reveal>
           <Reveal>
             <div className='flex space-x-6 items-center my-5'>
              <AddToCartButton className='w-[140px] bg-[rgb(88,148,3)] py-6 text-lg cursor-pointer' text='Add to Cart' icon={<ShoppingCart />} />
              <Button className='w-[140px] py-6 text-lg cursor-pointer'>Buy it now</Button>
            </div>
           </Reveal>

          </article>
        </div>
        {/* {image section} */}

        <div className=' order-1 lg:order-2 sm:col-span-12 lg:col-span-7 flex flex-col md:flex-row  md:py-0 md:order-2 md:gap-4 md:mb-4'>
        <div className='w-full md:col-span-10 lg:col-span-6 '>
            <Carousel setApi={setApi} className="w-full max-w-2xl cursor-pointer">
      <Reveal>
              <CarouselContent>
              {/* {meals.slice(0,5).map((m) => ( */}
              {meals.slice(0, 5).map((meal) => (
                
                <CarouselItem key={meal.id}>
                  <div className="">
                    <Card className='bg-transparent border-none overflow-hidden shadow-none p-0 '>
                      <CardContent className="flex  items-center w-full justify-center p-0">
                        <img src={meal.imageUrl} alt="product image" className='object-cover rounded-lg h-[250px] md:h-[350px] lg:h-[450px] w-full  cursor-pointer'
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}


            </CarouselContent>
      </Reveal>
            
          <Reveal>  <CarouselPrevious className='left-4' onClick={()=> api?.scrollTo(current - 1)}/>
            <CarouselNext className='right-4' onClick={()=>api?.scrollTo(current+1)} /></Reveal>
          </Carousel>
        </div>
         <Reveal>
             <div className='col-span-1 order-2 md:order-2 w-[300px] sm:w-[420px] md:w-1/5  md:h-[300px] flex  sm:flex-row md:flex-col gap-6  md:gap-4 my-4 lg:my-0 overflow-auto mx-auto'>
        
           
              {meals.slice(0,5).map((meal,index)=>(

            <div className='md:my-0 my-3 shrink-0 mx-auto py-2' key={meal.id} onClick={()=>api?.scrollTo(index)}>
                  <img src={meal.imageUrl} alt="product image" className='object-cover rounded-lg h-[80px] w-[80px] cursor-pointer'/>
                </div>
                    
          ))}
       
     
        
        </div>
           </Reveal>
        </div>
    
      </section>
      {/* recently viewed product */}
      <RecentlyViewedProduct />

      {/* customer review */}
      <CustomerReview />
      {/* food category */}
      <FoodCategory />
    </section>
  )
}

export default ProductDetail
