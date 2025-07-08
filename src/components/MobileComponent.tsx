import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const SideBar = () => {
  return (
     <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-20 flex">
                            <div>
                                   {/* language selector */}


                    <Select defaultValue="light" >
                        <SelectTrigger className="w-[130px] py-[20px] rounded-lg  border border-black text-black hidden lg:flex ">
                            <SelectValue   />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem value="light" className=""> <img src="/english-image.png" alt="lanuage image" className="object-cover size-5" />English</SelectItem>
                            <SelectItem value="dark"> <img src="/argentina.png" alt="lanuage image" className="object-cover size-5" />Chinese</SelectItem>
                            <SelectItem value="system"> <img src="/egypt.png" alt="lanuage image" className="object-cover size-5" />Deutsh</SelectItem>
                        </SelectContent>
                    </Select>


                    {/* currency selector */}

                    <Select defaultValue="light">
                        <SelectTrigger className="w-[120px] py-[20px] rounded-lg  border border-black hidden lg:flex  ">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>

                            <SelectItem value="light" className=""> <img src="/english-image.png" alt="lanuage image" className="object-cover size-6" />USD $</SelectItem>
                            <SelectItem value="dark"> <img src="/argentina.png" alt="lanuage image" className="object-cover size-6" />AUD $</SelectItem>
                            <SelectItem value="system"> <img src="/egypt.png" alt="lanuage image" className="object-cover size-6" />AUD $</SelectItem>
                        </SelectContent>
                    </Select>

                            
                                    
                                   
                                    <ul className="p-4">
                                        <li className='py-2 text-lg font-bold'>   Veggie Burger</li>
                                        <li className='py-2 text-base font-normal'>Vegan Seagal</li>
                                        <li className='py-2 text-base font-normal'>The Habibi Burger</li>
                                        <li className='py-2 text-base font-normal'>McVeggie Burger</li>
                                        <li className='py-2 text-base font-normal'>Royal Crunchy Burger</li>
                                        <li className='py-2 text-base font-normal'>Crispy Veg Burger</li>
                                        <li className='py-2 text-base font-normal'>Good Flippin' Burgers</li>
                                    </ul>
                                    {/* </ul> */}
                                </div>
                            </div>
                        
  )
}

export default SideBar