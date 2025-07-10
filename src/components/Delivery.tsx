import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronRight } from "lucide-react"
import { Link } from 'react-router-dom'
import { Button } from "./ui/button"
const Delivery = () => {
  // const [activeItem,setActiveItem] =useState<number | null>(null)
  return (
    <section className='bg-[url("https://catering-workdo.myshopify.com/cdn/shop/files/category-back.jpg?v=1685364585")] bg-cover bg-center min-h-screen bg-no-repeat px-3 lg:px-14 py-20 mt-10'>
      {/* the delivery text */}
      <div className='max-w-[760px]'>
        <h2 className='text-[34px] font-bold  text-[rgb(88,148,3)] capitalize mb-1 '>delivery.</h2>
        <h4 className='text-white text-5xl font-extrabold py-3 leading-14'>The catering with <br /> <span className='text-[hsl(85,96%,30%)]'>the royal touch</span>
        </h4>
        <p className='text-white  text-lg font-medium leading-relaxed py-6'>Experience a gastronomic adventure like no other with our bespoke catering, showcasing the perfect harmony of taste, presentation, and ambiance.Treat your guests to a sensory feast with our catering expertise, where each dish is crafted with precision and infused with culinary magic.</p>
      </div>
      {/*  carosuel  */}
      <Carousel className='max-w-3xl my-2'>
      <div>
          <CarouselContent className='w-full '>
          {Array(5).fill(null).map((_, index) => (
            <CarouselItem className=" basis-full sm:basis-1/2 md:basis-1/3   text-white group  relative " >
              <Link to={`/category/${index}`}>
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="" className='object-cover w-full h-[200px] rounded-t-xl' />
                <span className='absolute top-6 left-8 bg-gray-400 rounded-full py-1 px-4 group-hover:bg-[rgb(88,148,3)] text-sm' >4 Items</span>
                <div className='border border-gray-400  h-[78px] rounded-b-xl group-hover:border-[rgb(88,148,3)]'>
                  <div className=' px-4 py-5 flex justify-between items-center'>
                    <h2 className='  text-2xl font-bold group-hover:text-[rgb(88,148,3)]'>Pizza</h2>
                    <Button className='bg-gray-400 group-hover:bg-[rgb(88,148,3)]'> <ChevronRight className='size-5' /></Button>
                  </div>
                </div>
              </Link>

            </CarouselItem>
          ))}
        </CarouselContent>
      </div>

        <div className="pointer-events-none group">
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-auto" />
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-auto" />
        </div>

      </Carousel>

    </section>
  )
}

export default Delivery