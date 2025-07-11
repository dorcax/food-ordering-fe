import Reveal from "../Reveal"

const BlogDropdown = () => {
  return (
   
     <div className='bg-white shadow-xl w-[150px] absolute top-[45px] left-0 mt-2 border-t border-t-black  transition-all duration-500  cursor-pointer'>
       <Reveal>
         <ul>
            <li className=' p-2 capitalize text-base font-normal'>article page</li>
             <li className='p-2 capitalize text-base font-normal'>blog page</li>
        </ul>
       </Reveal>
    </div>
  
  )
}

export default BlogDropdown