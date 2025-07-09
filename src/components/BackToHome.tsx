import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const BackToHome = ({text}:{text:string}) => {
  return (
     <section className='bg-gray-200 w-full py-10 lg:py-16 px-3 lg:px-14'>
                <nav className='flex gap-3 items-center text-lg'>
                    <div className='size-10  rounded-full flex justify-center items-center border border-black'><Link to='/'><ArrowLeft className='size-4' /></Link></div>
                    <span className='text-sm'>Back to Home</span>
                </nav>
                <h2 className='py-5 md:py-10 font-bold text-3xl md:text-5xl capitalize'>{text}</h2>
                <p className='text-lg  max-w-3xl leading-relaxed font-normal'>we are driven by a passion for learning, discovery, and connection. We constantly strive to enhance our platform, incorporate emerging technologies, and adapt to the evolving needs of our users.</p>
            </section>
  )
}

export default BackToHome