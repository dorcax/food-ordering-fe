import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom"



export type MealProps = {
    imageUrl: string
    title: string
    price: number
    description: string
    category: string
    id: string

}
const Landing = () => {
    const navigate = useNavigate()
    const [selectedMeal, setSelectedMeal] = useState<MealProps[]>([])
    const handleCompareProduct = (meal: MealProps) => {
        // setMeals((prev) => [...prev, meal])
        setSelectedMeal((prev) => {
            const existingMeal = prev.find((el) => el.id === meal.id)
            if (existingMeal) {
                return prev
            } else {
                return [...prev, meal]
            }

        }
        )
        navigate("/compare-product")

        console.log(meal)

    }

     const handleWishList = (meal: MealProps) => {
        // setMeals((prev) => [...prev, meal])
        setSelectedMeal((prev) => {
            const existingMeal = prev.find((el) => el.id === meal.id)
            if (existingMeal) {
                return prev
            } else {
                return [...prev, meal]
            }

        }
        )
        navigate("/wish-list")

        console.log(meal)

    }
    return (
        <section className='flex flex-col min-h-screen '>
            <Header />
            <main className='flex-1 '>
                <Outlet context={{ selectedMeal, handleCompareProduct,handleWishList }} />
            </main>
            <Footer />
        </section>
    )
}

export default Landing