import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Login = () => {
  return (
    <section className='flex flex-col justify-center items-center py-10  '>
     <div className='w-full max-w-xl border'>
       <div className='flex flex-col my-6 justify-center items-center'>
        <h2 className=' capitalize text-2xl font-bold'>welcome back</h2>
       <p>welcome back please enter your details</p>
       </div>
      <form action="" method="post">
        <div className='m-4'>
          <label htmlFor="" className=' text-lg'>Email</label>
        <Input  className=' py-6'/>
        </div>
         <div className='m-4'>
          <label htmlFor="" className='text-lg'>Password</label>
        <Input  className=' py-6' type='password'/>
        </div>
        <a href="#" className='m-4 underline capitalize text-sm '>forgot password</a>
     
     <div className='flex flex-col justify-center items-center m-4'>
         <Button className='w-[300px] capitalize text-lg py-6 bg-[rgb(88,148,3)] '>login</Button>
          <p className='py-2 text-sm'>Don't have an account ? <a href="/register">register here</a></p>
     </div>
      </form>
     </div>
    </section>
  )
}

export default Login