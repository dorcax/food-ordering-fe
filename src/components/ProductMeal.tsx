import { CarouselDemo } from '@/components/CarouselItems'
import { meals } from '@/constant/data'
import { Eye, Heart } from 'lucide-react'
import { Button } from './ui/button'
import FoodModal from './modal/foodModal'
import { useModal } from '@/context/ModalProvider'

const ProductMeal = () => {
  const {isOpen} =useModal()
  return (
    <section className='px-14  py-10  relative'>
        <h2 className='text-5xl  text-black font-extrabold'> What would you like to eat ?</h2> 
        <CarouselDemo meals={meals}/>
   
   {isOpen && <FoodModal/>}
       
    </section>
  )
}

export default ProductMeal