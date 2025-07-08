import React, { useState } from 'react'
import AllProductDropdown from "./dropdown/AllProductDropdown"
import BlogDropdown from "./dropdown/BlogDropdown"
import PagesDropdown from "./dropdown/PagesDropdown"
import ShopAllDropdown from "./dropdown/ShopAllDropdown"
import { ChevronDown } from 'lucide-react'
const navItems = [
    { label: "all products", key: "allproducts", Dropdown: AllProductDropdown },
    { label: "shop all", key: "all-shop", Dropdown: ShopAllDropdown },
    { label: "pages", key: "pages", Dropdown: PagesDropdown },
    { label: "blog", key: "blog", Dropdown: BlogDropdown },
]
const NavItem = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const handleToggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown)
    }

    return (
        <div>
            {
                navItems.map((er, index) => (
                    <li key={index} className='capitalize text-lg   px-2 inline-flex items-center relative ' onClick={() => handleToggleDropdown(er.key)}><span className='hover:text-[rgb(88,148,3)]'>{er.label} </span>
                    <span> <ChevronDown className={` ${openDropdown === er.key ? ' transition-transform rotate-180 duration-500' : ''}`} /></span>

                        {
                            openDropdown === er.key && <er.Dropdown />
                        }</li>

                ))
            }
        </div>


    )
}

export default NavItem