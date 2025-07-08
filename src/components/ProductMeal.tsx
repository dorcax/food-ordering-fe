import { CarouselDemo } from '@/components/CarouselItems'
import { meals } from '@/constant/data'

const ProductMeal = () => {

  return (
    <section className=' px-3 lg:px-14 py-2 relative'>
        <h2 className='text-3xl md:text-[44px]  text-black font-extrabold'> What would you like to eat ?</h2> 
        <CarouselDemo meals={meals}/>       
    </section>
  )
}

export default ProductMeal