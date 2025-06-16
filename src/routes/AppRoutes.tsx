import Delivery from '@/components/Delivery'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductMeal from '@/components/ProductMeal'
import Services from '@/components/Services'
import React from 'react'


const AppRoutes = () => {
  return (
    <div className=''>
        <Header/>
        <Hero/>
        <ProductMeal />
        <Delivery/>
        <Services/>
    </div>
  )
}

export default AppRoutes