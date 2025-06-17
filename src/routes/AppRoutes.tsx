import Delivery from '@/components/Delivery'
import Footer from '@/components/Footer'
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
        <Footer/>
    </div>
  )
}

export default AppRoutes