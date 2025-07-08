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
        <div className='flex flex-col justify-center items-center '>
            <section className='max-w-4xl' >
                <h2 className='text-3xl md:text-5xl font-extrabold  text-center'>
                    <span className='text-[rgb(88,148,3)] leading-8'>Catering with the</span> first class  
                    <span className='block mx-2'>service</span>
                </h2>
               
                 <p className='my-2.5 md:mt-7 text-[13px] md:text-lg  md:px-10'>Catering services can be tailored to accommodate a wide range of occasions, <br /> including weddings, corporate events, parties, conferences, and social gatherings.</p>
               
                <section>
                    {meals.slice(0, 4).map((meal, index) => {
                        console.log(index)

                        return (
                            <Button className={`bg-white border border-black text-black h-[40px] md:h-[60px]  w-[100px] md:w-[150px] mx-1.5 my-3 md:m-4 text-lg px-2 hover:bg-white  cursor-pointer 
                            ${activeCategory === meal.id ? 'text-[rgb(88,148,3)] border-[rgb(88,148,3)]' : ""}`} 
                            onClick={() => handleCategoryClick(meal.id, meal.category)} 
                            key={meal.id}>{meal.category} <span className={` text-white p-0 md:p-2 rounded-md ${activeCategory === meal.id ? "bg-[rgb(88,148,3)]" : "bg-black"}`}>
                            <ChevronRight className='size-6' /></span>
                            </Button>
                        )
                    })}

                </section>

            </section>
            <section className='grid  grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-6 w-full pt-6 md:pr-14'>{foodFilter.map((er) => (
                <div className='w-full  overflow-hidden'><img src={er.imageUrl} alt="" className='w-full h-[250px] object-cover rounded-t-xl ' />
                    <div className='bg-[#ebebeb] p-3 rounded-b-xl'>
                        <h2 className='font-semibold text-2xl capitalize mb-3'>{er.title}</h2>
                        <p className='text-base text-[#9a9a9a73] font-semibold '>{er.description}</p>
                    </div>
                </div>
            ))}</section>
        </div>
    )
}

export default FoodCategory