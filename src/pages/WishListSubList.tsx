import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { useOutletContext } from 'react-router-dom'
import type { MealProps } from './Landing'

const WishListSubList = () => {
     const { selectedMeal }: { selectedMeal: MealProps[] } = useOutletContext()
  return (
       <section className=' border m-2 block  md:hidden'>

                    {selectedMeal.map((meal) => (
                        <div className='border-b py-5  flex justify-center items-center flex-col'>
                            <img src={meal.imageUrl} alt="" className='object-cover w-[250px] h-[160px] ' />
                            <h2 className='font-medium text-2xl pt-5'>{meal.title}</h2>
                            <p className='font-medium text-xl py-4'>${meal.price}</p>
                            <Button className="w-[120px] bg-[rgb(88,148,3)] py-6 text-base">Add to Cart </Button>
                            <Trash className='text-red-600 size-6 my-5' />
                        </div>
                    ))}

                </section>
  )
}

export default WishListSubList