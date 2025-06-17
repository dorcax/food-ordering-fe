import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react"
import { Button } from "./ui/button"
import BlogDropdown from "./dropdown/BlogDropdown"
import PagesDropdown from "./dropdown/PagesDropdown"
import ShopAllDropdown from "./dropdown/ShopAllDropdown"
import AllProductDropdown from "./dropdown/AllProductDropdown"
const header = () => {
    return (
        <section>
            <div className='bg-[rgb(88,148,3)] text-center capitalize py-3 text-white text-lg'>
                <p>subscribe to our newsletter and recieve a 10% discount on your first service.</p>
            </div>
            <header className='flex justify-between items-center px-14 border-b py-4 shadow-5xl'>
                <div className='flex space-x-4 items-centern w-full'>
                    <h2 className='text-black font-bold text-3xl'>catering</h2>
                    <ul className='flex space-x-4 text-black'>
                        <li className='capitalize text-lg font-semibold px-2 inline-flex items-center relative group'>all products <span><ChevronDown  className="transition-transform group-hover:rotate-180 duration-500"/></span>
                        
                        <AllProductDropdown/></li>
                        <li className='capitalize text-lg font-semibold px-2 inline-flex items-center relative group'>shop all <span><ChevronDown className="transition-transform group-hover:rotate-180 duration-500"/></span>
                        <ShopAllDropdown/>
                        </li>

                        <li className='capitalize text-lg font-semibold px-2 inline-flex items-center relative group transition-all duration-500'>pages <span><ChevronDown className="transition-transform group-hover:rotate-180 duration-500" /></span>
                        <PagesDropdown/>
                        </li>
                        <li className='capitalize text-lg font-semibold px-2 inline-flex items-center  relative group'>blog <span><ChevronDown className=" transition-transform duration-500 group-hover:rotate-180 " /></span>
                        
                        <BlogDropdown />
                        </li>
                    </ul>
                </div>
                <div className='flex items-center px-2 space-x-4'>
                    <div>
                        <Search />
                    </div>
                    <div>
                        <User />
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[180px] border border-black text-black">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">English</SelectItem>
                                <SelectItem value="dark">Chinese</SelectItem>
                                <SelectItem value="system">Deutsh</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div>
                        <Select>
                            <SelectTrigger className="w-[180px] border border-black ">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">AUD $</SelectItem>
                                <SelectItem value="dark">CAD $</SelectItem>
                                <SelectItem value="system">USD $</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <Button className="py-7 flex items-center text-xl">$00.00 <span><ShoppingCart className="size-6" /></span></Button>
                </div>
            </header>
        </section>
    )
}

export default header