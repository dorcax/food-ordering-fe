import Delivery from '@/components/Delivery'
import Hero from '@/components/Hero'
import ProductMeal from '@/components/ProductMeal'
import Services from '@/components/Services'

const LandingContent = () => {
  return (
    <section className='overflow-hidden'>
        <Hero/>
        <ProductMeal/>
        <Delivery/>
        <Services/>
    </section>
  )
}

export default LandingContent