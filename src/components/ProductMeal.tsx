import { CarouselDemo } from '@/components/CarouselItems'
import { meals } from '@/constant/data'
import { useModal } from '@/context/ModalProvider'
import FoodModal from './modal/FoodModal'
import CartDrawer from './CartDrawer'

const ProductMeal = () => {
  const {isOpen,isDrawerOpen} =useModal()
  return (
    <section className='px-14  py-10  relative'>
        <h2 className='text-5xl  text-black font-extrabold'> What would you like to eat ?</h2> 
        <CarouselDemo meals={meals}/>
   
   {isOpen && <FoodModal/>}
   
   {/* {isDrawerOpen && <CartDrawer/>} */}

       
    </section>
  )
}

export default ProductMeal