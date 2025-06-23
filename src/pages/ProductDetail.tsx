import { ArrowLeft} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


const ProductDetail = () => {
  return (
    <section className='relative w-full border p-14 z-30'>
           <nav className='flex gap-3 items-center text-lg  font-medium mb-8'>
                    <div className='size-12  rounded-full flex justify-center items-center border border-black'><Link to='/'><ArrowLeft className='size-4'/></Link></div>
                    <span>Back to categories</span>
                </nav>

                <section className='grid grid-cols-12  gap-3 w-full'>
                    <div className='col-span-5 border'>
                        hello
                    </div>
                    <div className='col-span-5 border'>2</div>
                    <div className='col-span-2 border'>r</div>
                </section>
    </section>
  )
}

export default ProductDetail
