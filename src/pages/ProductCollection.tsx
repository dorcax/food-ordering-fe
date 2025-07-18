import BackToHome from '@/components/BackToHome'
import CartDetails from '@/components/CartDetails'
import FoodModal from '@/components/modal/FoodModal'
import Reveal from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { useModal } from '@/context/ModalProvider'
import { ArrowLeftRight, Eye, Heart, Minus, Plus, Settings2 } from 'lucide-react'
import { useState } from 'react'


const ProductCollection = () => {
  const { handleOpenModal, handleOpenDrawer } = useModal()
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleChange = () => {
    setIsActive((prev)=>!prev)
    console.log("hi")
  }

  return (
    <section className='w-full min-h-screen overflow-hidden '>
      <BackToHome text="collection" />
      <section className='flex justify-center  '>
        <div className=' w-[280px] lg:w-[350px] h-screen hidden md:block border-r border-r-gray-400  '>
      <Reveal>   <div className='border border-b-gray-400 p-[28px] lg:p-[27px]'> <h2 className=' font-semibold text-2xl'>Filters</h2></div></Reveal>
          <article className='p-4 relative'>
            
          <Reveal>
              <div className='flex justify-between items-center cursor-pointer' onClick={handleChange}>
              <p className='font-medium text-xl'>Availability</p>
              <span>
                {isActive ? <Minus className='size-5' /> : <Plus className='size-5' />}
              </span>
            </div>
          </Reveal>
            {isActive && (
           <Reveal>
               <div>
              <div className='flex  justify-between items-center my-4 font-medium'>
                <span>0 Selected</span>
                <span>Reset</span>
              </div>
              <div className='my-6'>
                <div className='flex justify-between items-center font-medium'>
                  <div>
                    <input type="checkbox" name="" id="" className='border ' />
                    <span className='capitalize text-sm mx-2'>in stock</span>
                  </div>
                  <span>(4)</span>
                </div>
                <div className='flex justify-between items-center font-medium'>
                  <div>
                    <input type="checkbox" name="" id="" className='border  ' />
                    <span className='capitalize text-sm mx-2'>out of stock</span>
                  </div>
                  <span>(0)</span>
                </div>
              </div></div>
           </Reveal>
            )}
          </article>
        </div>
        <div className='flex-1'>
        <div >
         <Reveal>
          
            <div className='px-3 py-6 lg:p-6 flex justify-between  gap-4 items-center border border-b-gray-400'>
           <button className=' md:hidden  border w-10 h-[40px] p-2 rounded-xl flex  justify-center items-center '> <Settings2 className='size-8 '  /></button>
            <p className='text-xl hidden  sm:block '>Home /
              Biggies Burger</p>
            <div className=''>
              <span className='font-semibold text-base'>Sort by:</span>
              <select className='border border-gray-600 w-[220px] p-2 mx-2  rounded-xl capitalize '>
                <option value="">best selling</option>
                <option value="">featured</option>
                <option value="">price ,high to low</option>
                <option value="">price,low to high</option>
                <option value="">Date,Old to new</option>
                <option value="">Date,New to Old</option>
              </select>
            </div>
              
          </div>
         </Reveal>
           {/* <div className=' block md:hidden '/> */}
        </div>
          <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 pt-6 pb-10 px-4 md:p-4  '>
            {Array(5).fill(null).map((_, index) => (
          <Reveal>    <div className='group relative ' key={index}>
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="" className="object-cover w-full h-[160px] rounded-tr-xl rounded-tl-xl" />
                <div className="absolute top-2 right-3 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all z-10  ">
                  <Button className="bg-[hsl(85,96%,30%)] w-[30px] cursor-pointer" ><Heart className="size-6" />
                  </Button>
                  <Button className="bg-[rgb(88,148,3)] w-[30px] h-[30px] cursor-pointer"> <ArrowLeftRight className="size-6" />
                  </Button>
                  <Button className="bg-[rgb(88,148,3)] w-[30px] h-[30px] cursor-pointer" onClick={() => handleOpenModal(<FoodModal/>)}><Eye className="size-6" />
                  </Button>
                </div>
                {/* collection name and price */}
                <div className="bg-gray-100 w-full py-3 px-4 rounded-b-xl ">
                  <h2 className="text-2xl font-extrabold ">salad</h2>
                  <p className="text-xl font-medium mb-4 ">#100000</p>
                  <Button className="w-full bg-[rgb(88,148,3)] py-5 text-base" onClick={() => handleOpenDrawer(<CartDetails />)}>Add to Cart
                  </Button>
                </div>
              </div></Reveal>
            ))}
          </div>

        </div>
     
      </section>
    {/* <div className="border-b border-gray-400 w-full absolute top-[72%] lg:top-[77%] xl:top-[78%]  hidden md:block" /> */}


    </section>
  )
}

export default ProductCollection
