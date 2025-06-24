
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { meals } from "@/constant/data"

type MealProps = {
  imageUrl: string
  title: string
  price: number
  description: string
  category: string
  id: string

}
interface MealCarousel {
  meal: MealProps[]

}
export function RecentlyViewedProduct() {
  
 
  
  return (
    <div className="my-20">
        <h2 className="text-5xl font-bold py-2 capitalize">recently viewed products</h2>
        <Carousel className="w-full my-6">
      <CarouselContent>
        {meals.slice(0, 5).map((meal:any) =>(
          <CarouselItem key={meal.id} className="md:basis-1/2 lg:basis-1/4 relative ">
            <div className="p-1">
              <Card className="p-0">
                <CardContent className="flex flex-col  items-center justify-center p-0  group">
                 <Link to={`/product-detail/${meal.id}`}> <img src={meal.imageUrl} alt={meal.title} className="object-cover w-[500px] h-[200px] rounded-tr-xl rounded-tl-xl"/></Link>
                  <div className="bg-gray-100 w-full py-5 px-4 rounded-b-xl ">
                    <h2 className="text-2xl font-extrabold ">{meal?.title}</h2>
                    <p className="text-xl font-bold mb-4 my-2">${meal?.price.toFixed(2)}AUD</p>
                  </div>

                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="group">
        <CarouselPrevious className="bottom-0 opacity-0 group-hover:opacity-100" />
        <CarouselNext className="bottom-0 opacity-0 group-hover:opacity-100" /></div>
    </Carousel>
    </div>
  )
}
