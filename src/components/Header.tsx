import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useModal } from "@/context/ModalProvider"
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react"
import { useState } from "react"
import AllProductDropdown from "./dropdown/AllProductDropdown"
import BlogDropdown from "./dropdown/BlogDropdown"
import PagesDropdown from "./dropdown/PagesDropdown"
import ShopAllDropdown from "./dropdown/ShopAllDropdown"
import SearchBarModal from "./modal/SearchbarModal"
import { Button } from "./ui/button"
const header = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const {handleOpenModal} =useModal()

    const handleToggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown)
    }

    return (
        <section>
            <div className='bg-[rgb(88,148,3)] text-center capitalize py-3 text-white text-lg'>
                <p>subscribe to our newsletter and recieve a 10% discount on your first service.</p>
            </div>
            <header className='flex justify-between items-center px-14 border-b py-1.5 shadow-5xl'>
                <div className='flex space-x-4 items-centern w-full'>
                    <h2 className='text-black font-bold text-3xl'>catering</h2>
                    <ul className='flex space-x-4 text-black cursor-pointer z-50'>
                        <li className='capitalize text-base  px-2 inline-flex items-center relative' onClick={() => handleToggleDropdown("allproducts")}>all products <span> <ChevronDown className={` ${openDropdown === 'allproducts' ? ' transition-transform rotate-180 duration-500' : ''}`} /></span>

                            {
                                openDropdown === "allproducts" && <AllProductDropdown />
                            }</li>
                        <li className='capitalize text-base px-2 inline-flex items-center relative' onClick={() => handleToggleDropdown("all-shop")}>shop all <span>
                            <ChevronDown className={` ${openDropdown === 'all-shop' ? ' transition-transform rotate-180 duration-500' : ''}`} />
                        </span>
                            {openDropdown === "all-shop" && <ShopAllDropdown />}
                        </li>

                        <li className='capitalize text-base  px-2 inline-flex items-center relative' onClick={() => handleToggleDropdown("pages")}>pages <span> <ChevronDown className={` ${openDropdown === 'pages' ? ' transition-transform rotate-180 duration-500' : ''}`} /></span>
                            {openDropdown === "pages" && <PagesDropdown />}
                        </li>
                        <li className='capitalize text-base px-2 inline-flex items-center  relative' onClick={() => handleToggleDropdown("blog")}>blog <span><ChevronDown className={` ${openDropdown === 'blog' ? ' transition-transform rotate-180 duration-500' : ''}`} /></span>

                            {openDropdown === "blog" && <BlogDropdown />}
                        </li>
                    </ul>
                </div>
                <div className='flex items-center  space-x-4'>
                    <div onClick={()=>handleOpenModal(<SearchBarModal/>)} className="">
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