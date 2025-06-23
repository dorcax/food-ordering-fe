import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const BackToHome = ({text}:{text:string}) => {
  return (
     <section className='bg-gray-200 w-full h-[450px] py-20 px-14'>
                <nav className='flex gap-3 items-center text-lg  font-medium'>
                    <div className='size-12  rounded-full flex justify-center items-center border border-black'><Link to='/'><ArrowLeft className='size-4' /></Link></div>
                    <span>Back to Home</span>
                </nav>
                <h2 className='py-10 font-bold text-5xl capitalize'>{text}</h2>
                <p className='text-xl max-w-3xl leading-relaxed font-normal'>we are driven by a passion for learning, discovery, and connection. We constantly strive to enhance our platform, incorporate emerging technologies, and adapt to the evolving needs of our users.</p>
            </section>
  )
}

export default BackToHome