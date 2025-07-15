import Reveal from '@/components/Reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useRegisterMutation } from '@/api/data/auth.api'

// validation 
const formSchema  =z.object({
  username:z.string().min(4,"username must be atleast 2 characters").max(20),
  email:z.email("invalid email"),
  password:z.string().min(6,"password must be atleat 6 characters").max(14,"passwsord  ust not exceed 14 characters")
})

const Register = () => {
  const[register] =useRegisterMutation()
  const form =useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      username:"",
      email:"" ,
      password:""
    }
  })

  // handle submit function 
  const onSubmit =async (values:z.infer<typeof formSchema>)=>{
    try {
      const res =await register(values).unwrap()
       
    } catch (error) {
      
    }
  
  }
  return (
    <section className='flex flex-col justify-center items-center py-10  m-3 '>
  <div className='w-full max-w-md border'>
     <Reveal>
       <div className=''>
        <div className='flex flex-col my-6 justify-center items-center'>
          <h2 className=' capitalize text-2xl font-bold'>create an account</h2>

        </div>
        {/* <form action="" method="post">

          <div className='m-4'>
            <label htmlFor="" className=' text-lg'>username</label>
            <Input className=' py-6' />
          </div>
          <div className='m-4'>
            <label htmlFor="" className=' text-lg'>Email</label>
            <Input className=' py-6' />
          </div>
          <div className='m-4'>
            <label htmlFor="" className='text-lg'>Password</label>
            <Input className=' py-6' type='password' />
          </div>
          <a href="#" className='m-4 underline capitalize text-sm '>forgot password</a>

          <div className='flex flex-col justify-center items-center m-4'>
            <Button className='w-[300px] capitalize text-lg py-6 bg-[rgb(88,148,3)] '>Register</Button>
           
          </div>

        </form> */}
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <div className='mx-4'>
         <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="userename" {...field} className='' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       </div>
          <div className='mx-4'>
         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" type='email' {...field} className='' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       </div>
          <div className='mx-4'>
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type='password' {...field} className='' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       </div>
      <div className='flex justify-center items-center mb-3'>
          <Button type="submit" className='w-[250px] '>Submit</Button>
      </div>
      </form>
    </Form>
      </div>
   </Reveal>
  </div>
    </section>
  )
}

export default Register