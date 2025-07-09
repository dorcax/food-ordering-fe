
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { meals } from "@/constant/data"
import { Link } from "react-router-dom"


export function RecentlyViewedProduct() {
  
 
  
  return (
    <div className="my-6 lg:my-20">
        <h2 className="text-3xl md:text-5xl font-bold py-2 capitalize">recently viewed products</h2>
        <Carousel className="w-full my-6">
      <CarouselContent>
        {meals.slice(0, 5).map((meal:any) =>(
          <CarouselItem key={meal.id} className="md:basis-1/2 lg:basis-1/4 relative ">
            <div className="p-1">
              <Card className="p-0 overflow-hidden">
                <CardContent className="flex flex-col w-full  p-0  group">
                 <Link to={`/product-detail/${meal.id}`}> <img src={meal.imageUrl} alt={meal.title} className="object-cover w-full h-[200px] rounded-tr-xl rounded-tl-xl"/></Link>
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
