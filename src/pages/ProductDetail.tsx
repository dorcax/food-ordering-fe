import AddToCartButton from '@/components/AddToCartButton'
import Counter from '@/components/Counter'
import CustomerReview from '@/components/CustomerReview'
import FoodCategory from '@/components/FoodCategory'
import { RecentlyViewedProduct } from '@/components/RecentlyViewedProduct'
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
import { useEffect, useRef, useState } from 'react'
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
    <section className='relative w-full p-14 z-30'>
      <nav className='flex gap-3 items-center text-lg  font-medium mb-8'>
        <div className='size-12  rounded-full flex justify-center items-center border border-black'><Link to='/'><ArrowLeft className='size-4' /></Link></div>
        <span className='text-base'>Back to categories</span>
      </nav>

      <section className='grid grid-cols-12 items-start  gap-5 w-full'>
        <div className='col-span-5'>
          <article className='flex justify-between items-center mb-3'>
            <h2 className='capitalize  text-lg'>China Town Chinese Food</h2>
            <div className='cursor-pointer  flex space-x-2 items-center'>
              {
                Array(5).fill(null).map((_, index) => (

                  <Star key={index} className='size-4 text-[rgb(88,148,3)]' />
                ))
              }
              <span className='flex items-center capitalize text-base font-medium  gap-2'><Pencil className=' size-4' />  write a review </span>

            </div>
            <Button className="bg-[hsl(85,96%,30%)] w-[40px] h-[40px] cursor-pointer " ><Heart className="size-6" /></Button>
          </article>
          <article>
            <h2 className='text-5xl font-bold py-3 '>Chowmein</h2>
            <p className='text-lg leading-relaxed mb-2'>noodle, a cooked egg-and-flour paste prominent in European and Asian cuisine, generally distinguished from pasta by its elongated ribbonlike form. Noodles are commonly used to add body and flavour to broth soups. They are commonly boiled or sautéed and served with sauces and meats or baked in casseroles.</p>
            <Counter width='w-[140px] py-1.5' />
            <div className='flex space-x-6 items-center my-5'>
              <AddToCartButton className='w-[140px] bg-[rgb(88,148,3)] py-6 text-lg cursor-pointer' text='Add to Cart' icon={<ShoppingCart />} />
              <Button className='w-[140px] py-6 text-lg cursor-pointer'>Buy it now</Button>
            </div>

          </article>
        </div>
        <div className='col-span-6 '>
          <Carousel setApi={setApi} className="w-full max-w-3xl cursor-pointer">
            <CarouselContent>
              {/* {meals.slice(0,5).map((m) => ( */}
              {meals.slice(0, 5).map((meal) => (
                
                <CarouselItem key={meal.id}>
                  <div className="">
                    <Card className='bg-transparent border-none shadow-none p-0 '>
                      <CardContent className="flex  items-center justify-center p-0">
                        <img src={meal.imageUrl} alt="product image" className='object-cover rounded-lg h-[450px] w-[95%]  cursor-pointer'
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}


            </CarouselContent>
            
            <CarouselPrevious className='left-4' onClick={()=> api?.scrollTo(current - 1)}/>
            <CarouselNext className='right-4' onClick={()=>api?.scrollTo(current+1)} />
          </Carousel>
        </div>
        <div className='col-span-1  h-[300px] overflow-y-auto'>
          {meals.slice(0,5).map((meal,index)=>(
            <div className='my-3' key={meal.id} onClick={()=>api?.scrollTo(index)}>
                  <img src={meal.imageUrl} alt="product image" className='object-cover rounded-lg h-[100px]  cursor-pointer'/>
                </div>
          ))}
          {/* <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-xs "
          >
            <CarouselContent className="-mt-1 h-[200px]">
              {meals.slice(0, 5).map((m, index) => (
                <CarouselItem key={m.id} className="p-1 md:basis-1/5 cursor-pointer">
                  <div className="p-1">
                    <Card className='bg-transparent border-none shadow-none p-0 '>
                      <CardContent className="flex  items-center justify-center p-0">
                        <img src={m?.imageUrl} alt="product image" className='object-cover rounded-lg  w-[100px]' />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='hidden ' />
            <CarouselNext className='hidden' />
          </Carousel> */}

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
