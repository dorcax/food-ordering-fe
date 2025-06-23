import Delivery from '@/components/Delivery'
import Hero from '@/components/Hero'
import ProductMeal from '@/components/ProductMeal'
import Services from '@/components/Services'
import React from 'react'

const LandingContent = () => {
  return (
    <section>
        <Hero/>
        <ProductMeal/>
        <Delivery/>
        <Services/>
    </section>
  )
}

export default LandingContent