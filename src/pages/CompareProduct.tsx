import BackToHome from '@/components/BackToHome'
import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import { useOutletContext } from 'react-router-dom'
import type { MealProps } from './Landing'
import WishListSubList from './WishListSubList'

const CompareProduct = () => {
    const { selectedMeal }: { selectedMeal: MealProps[] } = useOutletContext()
    return (
        <section>
          <BackToHome text="compare"/>
            {/* listing the selected product */}
            <section className='px-3 lg:px-14 py-6'>
                <h2 className='text-center text-4xl capitalize font-bold '>compare product</h2>
                <table className=' w-full my-10 hidden md:table'>
                     <colgroup>
                        <col className="w-[300px]" />
                        <col className="w-[40%]" />
                        <col className="w-[200px]" />
                        <col className="w-[200px]" />
                    </colgroup>
                    <thead className='bg-gray-300 '>
                        <tr>
                            <th className=' text-left p-3 capitalize font-normal text-xl'>product</th>
                            <th className=' text-left p-3 capitalize font-normal text-xl'>details</th>
                            <th className=' text-left p-3 capitalize font-normal text-xl'>status</th>
                            <th className=' text-left p-3 capitalize font-normal text-xl'>delete</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {selectedMeal.map((meal: MealProps) => (
                            <tr key={meal.id} className='border-b '>
                                <td className='p-4 w-[500px]   '>
                                    <img src={meal.imageUrl} alt="meal image" className='w-[400px] max-w-full h-[200px]   object-cover ' />
                                </td>
                                <td className='p-4  w-[600px]'>
                                 
                                     <h2 className='font-bold text-2xl py-2'>{meal.title}</h2>
                                    <p className='text-lg font-normal mb-3'>{meal.description}</p>
                                    <span className='text-2xl '>${meal.price.toFixed(2)}</span>
                                 
                                </td>
                                <td className='p-4'>    <Button className="w-[120px] bg-[rgb(88,148,3)] py-6 text-base">Add to Cart </Button></td>
                                <td className='p-4 '><Trash  className='text-red-600 size-6'/></td>
                            </tr>

                        ))}

                    </tbody>
                </table>
                <WishListSubList/>
            </section>
        </section>
    )
}

export default CompareProduct