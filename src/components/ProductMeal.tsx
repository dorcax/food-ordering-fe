import { CarouselDemo } from '@/components/CarouselItems'
import { meals } from '@/constant/data'
import { Eye, Heart } from 'lucide-react'
import { Button } from './ui/button'

const ProductMeal = () => {
  return (
    <section className='px-14  py-10 '>
        <h2 className='text-5xl  text-black font-extrabold'> What would you like to eat ?</h2> 
        <CarouselDemo meals={meals}/>

       
    </section>
  )
}

export default ProductMeal