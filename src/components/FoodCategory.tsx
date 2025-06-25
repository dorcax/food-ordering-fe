import { meals } from '@/constant/data'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

const FoodCategory = () => {
    const [selectCategory, setSelectCategory] = useState<string>("Italian")
    const [activeCategory, setActiveCategory] = useState<number | null>(1)
    const foodFilter = meals.filter((cat) => cat.category === selectCategory)
    const handleCategoryClick = (id: number, category: string) => {
        setSelectCategory(category)
        setActiveCategory(id)

    }
    return (
        <div>
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
                            <Button className={`bg-white border border-black text-black h-[70px] w-[150px] mx-4 text-xl px-2 hover:bg-white font-semibold cursor-pointer ${activeCategory === meal.id ? 'text-[rgb(88,148,3)] border-[rgb(88,148,3)]' : ""}`} onClick={() => handleCategoryClick(meal.id, meal.category)} key={meal.id}>{meal.category} <span className={` text-white py-2 px-2 rounded-md ${activeCategory === meal.id ? "bg-[rgb(88,148,3)]" : "bg-black"}`}><ChevronRight className='size-6' /></span></Button>
                        )
                    })}

                </section>

            </section>
            <section className='grid grid-cols-3 gap-6 w-full pt-6 pr-14'>{foodFilter.map((er) => (
                <div className=''><img src={er.imageUrl} alt="" className='w-[520px] h-[250px] object-cover rounded-t-xl ' />
                    <div className='bg-gray-100 p-3 rounded-b-xl overflow-hidden'>
                        <h2 className='font-bold text-2xl capitalize mb-3'>{er.title}</h2>
                        <p className='text-base text-gray-500 font-semibold '>{er.description}</p>
                    </div>
                </div>
            ))}</section>
        </div>
    )
}

export default FoodCategory