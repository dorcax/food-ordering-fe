import BackToHome from '@/components/BackToHome'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { useOutletContext } from 'react-router-dom'
import type { MealProps } from './Landing'
import WishListSubList from './WishListSubList'
import Reveal from '@/components/Reveal'

const WishList = () => {
    const { selectedMeal }: { selectedMeal: MealProps[] } = useOutletContext()
    return (
        <section>
            <Reveal>     <BackToHome text="wishlist" /></Reveal>
            {/* listing the selected product */}
            <section className='px-3 lg:px-14  py-6 '>
                <Reveal>  <h2 className='text-center text-3xl capitalize font-bold '>wishList({selectedMeal.length})</h2></Reveal>
                <Reveal>    <table className=' w-full hidden  md:table my-10'>
                    <colgroup>
                        <col className="w-[300px]" />
                        <col className="w-[40%]" />
                        <col className="w-[200px]" />
                        <col className="w-[200px]" />
                    </colgroup>
                    <thead className='bg-gray-300 w-full '>
                        <tr>
                            <th className=' text-left p-3 capitalize  font-normal  text-xl'>product</th>
                            <th className=' text-left p-3 capitalize  font-normal  text-xl'>details</th>
                            <th className=' text-left p-3 capitalize  font-normal   text-xl'>cart button</th>
                            <th className=' text-left p-3 capitalize  font-normal  text-xl'>delete</th>
                        </tr>
                    </thead>
                    <tbody className='relative'>
                        {selectedMeal.map((meal: MealProps) => (
                            <tr key={meal.id} className='border-b '>
                                <td className='p-4 '>
                                    <img src={meal.imageUrl} alt="meal image" className='w-[300px] h-[100px] md:h-[200px] object-cover ' />
                                </td>
                                <td className='p-4'>

                                    <h2 className='font-bold text-2xl py-2'>{meal.title}</h2>
                                    <p className='text-base font-normal mb-3'>{meal.description}</p>
                                    <span className='text-2xl '>${meal.price.toFixed(2)}</span>

                                </td>
                                <td className='p-4 '>    <Button className="w-[120px] bg-[rgb(88,148,3)] py-6 text-base">Add to Cart </Button></td>
                                <td className='p-4 '><Trash className='text-red-600 size-6' /></td>
                            </tr>

                        ))}
                        <tr >
                            <td colSpan={4} className='p-10 '>
                                <div className='flex justify-center items-center '>
                                    <Button className="w-[250px] bg-[rgb(88,148,3)] py-6 text-base">Add to Cart </Button>
                                </div>                        </td>
                        </tr>

                    </tbody>
                </table></Reveal>
                <WishListSubList />
            </section>
        </section>
    )
}

export default WishList