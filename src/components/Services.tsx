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



type ServicesType ={
    id:number,
    imageUrl:string,
    title:string,
    name:string,
    description:string
    rating:number
}
const Services = () => {
    const [selectCategory, setSelectCategory] = useState<string>("Italian")
    const [activeCategory, setActiveCategory] = useState<number | null>(1)
    const foodFilter = meals.filter((cat) => cat.category === selectCategory)
    const handleCategoryClick = (id: number, category: string) => {
        setSelectCategory(category)
        setActiveCategory(id)

    }
    return (
        <div className='pl-14 py-28'> <section className='flex justify-between items-center '>
            <section className='max-w-5xl  '>
                <h2 className='text-4xl font-bold text-[rgb(88,148,3)]'>We cook it for you .</h2>
                <h3 className='text-6xl font-extrabold py-6'>Making food  <br />more than <span className='text-[rgb(88,148,3)]'> just-food</span></h3>
                <p className='text-xl font-semibold'>Catering is a service provided by professional food and beverage experts to meet the culinary needs of various events and gatherings.</p> 
                <Button className='bg-[rgb(88,148,3)] py-6 w-[300px] text-lg my-8'><MapPin className='size-6'/> find nearby resturants <ArrowRight className='size-6'/></Button>
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

            <div className='mt-40'>
                <section className='flex flex-col justify-center items-center'>
                    <h2 className='text-6xl font-extrabold  text-center'>
                        <span className='text-[rgb(88,148,3)]'>Catering with the</span> first class <br />
                        <span className='block'>service</span>
                    </h2>
                    <p className='max-w-3xl my-10  text-xl font-semibold'>Catering services can be tailored to accommodate a wide range of occasions, including weddings, corporate events, parties, conferences, and social gatherings.</p>
                    <section>
                        {meals.slice(0, 4).map((meal, index) => {
                            console.log(index)

                            return (
                                <Button className={`bg-white border border-black text-black h-[70px] w-[150px] mx-4 text-xl px-2 hover:bg-white font-semibold ${activeCategory === meal.id ? 'text-[rgb(88,148,3)] border-[rgb(88,148,3)]' : ""}`} onClick={() => handleCategoryClick(meal.id, meal.category)} key={meal.id}>{meal.category} <span className={` text-white py-2 px-2 rounded-md ${activeCategory === meal.id ? "bg-[rgb(88,148,3)]" : "bg-black"}`}><ChevronRight className='size-6' /></span></Button>
                            )
                        })}

                    </section>

                </section>
                <section className='grid grid-cols-3 gap-6 w-full pt-6 pr-14'>{foodFilter.map((er) => (
                    <div className=''><img src={er.imageUrl} alt=""className='w-[520px] h-[250px] object-cover rounded-t-xl '/>
                    <div className='bg-gray-100 p-3 rounded-b-xl overflow-hidden'>
                        <h2 className='font-bold text-2xl capitalize mb-3'>{er.title}</h2>
                        <p className='text-base text-gray-500 font-semibold '>{er.description}</p>
                    </div>
                    </div> 
                ))}</section>
            </div>
            {/* company services  */}
            <section className='flex justify-between gap-4 mt-24'>
                <section>
                    <h2 className='text-[rgb(88,148,3)] text-4xl font-extrabold'>Many Restaurants <br />  <span className='text-black  font-bold leading-24'>and offer in one place</span></h2>
                    <p className='font-semibold text-xl max-w-xl'>Caterers work closely with clients to create a customized menu based on their preferences, dietary restrictions, and event requirements. The menu may include appetizers, main courses, side dishes, desserts, and beverages.</p>
                     <Button className='bg-[rgb(88,148,3)] py-6 w-[300px] text-lg my-8'><MapPin className='size-6'/> find nearby resturants <ArrowRight className='size-6'/></Button>
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
                    <h2 className='text-3xl py-2 font-extrabold text-[rgb(88,148,3)] '>{services.title}</h2>
                    <p className='text-lg font-semibold'>{services.description}</p>
                    <p className='text-xl font-bold py-3'>{services.name}</p>
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