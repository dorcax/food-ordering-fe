import React, { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
import { ArrowLeftRight, Clock9, Eye, Heart } from "lucide-react"
import { useModal } from "@/context/ModalProvider"
import { Link, useNavigate, useOutletContext } from "react-router-dom"
import CartDetails from "./CartDetails"
import FoodModal from "./modal/FoodModal"



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
export function CarouselDemo({ meals }: any) {
  const date = new Date()
  const { handleOpenModal ,handleOpenDrawer} = useModal()
  const { handleCompareProduct, handleWishList }: { handleCompareProduct: (meal: MealProps) => void, handleWishList: (meal: MealProps) => void } = useOutletContext()


  return (
    <Carousel className="w-full my-14">
      <CarouselContent>
        {meals.map((meal: MealProps) => (
          <CarouselItem key={meal.id} className="md:basis-1/2 lg:basis-1/4 relative ">
            <div className="p-1">
              <Card className="p-0">
                <CardContent className="flex flex-col  items-center justify-center p-0  group">
                  <Link to={`/product-detail/${meal.id}`}> <img src={meal.imageUrl} alt={meal.title} className="object-cover w-[500px] h-[180px] rounded-tr-xl rounded-tl-xl" /></Link>
                  <div className="absolute top-6 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all z-10  ">
                    <Button className="bg-[hsl(85,96%,30%)] w-[40px] h-[40px] cursor-pointer" onClick={() => handleWishList(meal)}><Heart className="size-6" />
                    </Button>
                    <Button className="bg-[rgb(88,148,3)] w-[40px] h-[40px] cursor-pointer" onClick={() => handleCompareProduct(meal)}> <ArrowLeftRight className="size-6" />
                    </Button>
                    <Button className="bg-[rgb(88,148,3)] w-[40px] h-[40px] cursor-pointer" onClick={()=>handleOpenModal(<FoodModal/>)}><Eye className="size-6" />
                    </Button>
                  </div>
                  {/* stop watch */}
                  <div className="absolute top-[70px] w-[300px]  bg-[rgb(88,148,3)] py-1.5 inline-flex items-center justify-center rounded-lg gap-2 text-white text-xl opacity-100 group-hover:opacity-0 transition-all duration-200">
                    <Clock9 /> {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
                    {/* :{date.getMilliseconds()} */}
                  </div>
                  <div className="bg-gray-100 w-full py-5 px-4 rounded-b-xl ">
                    <h2 className="text-2xl font-extrabold ">{meal?.title}</h2>
                    <p className="text-xl font-bold mb-4 my-2">${meal?.price.toFixed(2)}AUD</p>
                    <Button className="w-full bg-[rgb(88,148,3)] py-6 text-lg" onClick={()=>handleOpenDrawer(<CartDetails />)}>Add to Cart 
                    </Button>
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
  )
}
