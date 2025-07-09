import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useModal } from "@/context/ModalProvider"
import { Menu, Search, ShoppingCart, User, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import SideBar from "./MobileComponent"
import SearchBarModal from "./modal/SearchbarModal"
import NavItem from "./NavItems"
import { Button } from "./ui/button"




const header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    
    const { handleOpenModal } = useModal()
    return (
        <section>
            <div className='bg-[rgb(88,148,3)] text-center capitalize py-3 text-white text-base hidden md:block'>
                <p>subscribe to our newsletter and recieve a 10% discount on your first service.</p>
            </div>
            {/* logo and navigation */}
            <header className='flex justify-between items-center  px-3 xl:px-14 border-b h-[80px] shadow-5xl'>
                <div className='flex space-x-4 items-center w-full'>
                    <h2 className='text-black font-extrabold text-3xl'><Link to="/">catering</Link></h2>
                    <ul className='lg:flex items-center space-x-4 text-black cursor-pointer z-50 hidden '>
                        <NavItem />
                    </ul>
                </div>
                <div className='flex items-center  space-x-4 '>

                    <Search className="size-4 md:size-6" onClick={() => handleOpenModal(<SearchBarModal />)} />

                    {/* user dropdown */}
                    <div className="relative">
                        <User onClick={() => setIsOpen(prev => !prev)} className="size-4 md:size-6" />
                        {isOpen &&
                            <ul className="absolute top-11  bg-white shadow-2xl border-t  border-t-black w-[180px] z-20">
                                <li className="capitalize p-2  font-semibold text-base "><Link to="/login">login</Link></li>
                                <li className="capitalize p-2 font-semibold text-base"><Link to="/register">create account</Link></li>
                                <li className="capitalize p-2 font-semibold text-base"><Link to="wish-list">WhishList</Link></li>
                            </ul>
                        }
                    </div>

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

                    {/* cart button */}
                    <Button className="py-6 w-[150px] lg:flex items-center text-base hidden ">$4500.00 <span className="relative"><ShoppingCart className="size-5 " />
                        <span className=" absolute -top-2 -right-3 size-5 bg-[rgb(88,148,3)] flex items-center justify-center text-sm   rounded-full ">2</span>
                    </span>

                    </Button>
                    <span className="block lg:hidden"><ShoppingCart className="size-4 md:size-6" /></span>
                    {/* menu icon for mobile */}
                    <button type="button" className="block lg:hidden ">{toggleMenu ? <X onClick={() => setToggleMenu(false)} className="size-8 fixed left-32 md:left-[50%]  right-0 top-2 z-50 text-white" /> : <Menu className="size-6" onClick={() => setToggleMenu(prev => !prev)} />}</button>

                    {toggleMenu && <SideBar/>}

                </div>
            </header>
        </section>
    )
}

export default header