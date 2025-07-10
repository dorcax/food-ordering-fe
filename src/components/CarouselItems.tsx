
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useModal } from "@/context/ModalProvider"
import { ArrowLeftRight, Clock9, Eye, Heart, ShoppingBasket } from "lucide-react"
import { Link, useOutletContext } from "react-router-dom"
import CartDetails from "./CartDetails"
import FoodModal from "./modal/FoodModal"
import { Button } from "./ui/button"



type MealProps = {
  imageUrl: string
  title: string
  price: number
  description: string
  category: string
  id: string

}

export function CarouselDemo({ meals }: any) {
  const date = new Date()
  const { handleOpenModal, handleOpenDrawer } = useModal()
  const { handleCompareProduct, handleWishList }: { handleCompareProduct: (meal: MealProps) => void, handleWishList: (meal: MealProps) => void } = useOutletContext()


  return (
    <Carousel className="w-full my-6 md:my-8 ">
      <CarouselContent className="">
        {meals.map((meal: MealProps) => (
          <CarouselItem key={meal.id} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 relative ">
            <div className="p-1">
              <Card className="rounded-xl overflow-hidden shadow-md h-full p-0 ">
                <CardContent className="p-0 flex flex-col w-full h-full group relative">
                  <Link to={`/product-detail/${meal.id}`}>
                    <img
                      src={meal.imageUrl}
                      alt={meal.title}
                      className="w-full h-[180px] object-cover"
                    />
                  </Link>

                  <div className="absolute top-6 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all z-20  ">
                    <Button className="bg-[hsl(85,96%,30%)] w-[30px] h-[30px] cursor-pointer" onClick={() => handleWishList(meal)}>
                      <Heart className="size-5" />
                    </Button>
                    <Button className="bg-[rgb(88,148,3)] w-[30px] h-[30px] cursor-pointer" onClick={() => handleCompareProduct(meal)}> <ArrowLeftRight className="size-5" />
                    </Button>
                    <Button className="bg-[rgb(88,148,3)] w-[30px] h-[30px] cursor-pointer" onClick={() => handleOpenModal(<FoodModal />)}><Eye className="size-5" />
                    </Button>
                  </div>
                  {/* meal title and description */}
                  <div className="bg-gray-100 w-full py-4 px-4 rounded-b-xl  ">
                    <h2 className="text-[26px] font-extrabold ">{meal?.title}</h2>
                    <p className="text-xl font-medium mb-4 my-2">${meal?.price.toFixed(2)}AUD</p>
                    <Button className="w-full rounded-xl bg-[rgb(88,148,3)] py-[22px]  text-base" onClick={() => handleOpenDrawer(<CartDetails />)}>Add to Cart  <ShoppingBasket  className="size-4"/>
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
