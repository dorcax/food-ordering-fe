import React from 'react'
import { Minus, Plus } from "lucide-react";
const Counter = () => {
    return (
        <div>

            <div className="flex items-center border border-gray-600 rounded-lg h-12 w-[150px] cursor-pointer">
                <button className="flex-1 h-full flex items-center justify-center  text-black cursor-pointer">
                    <Minus className='size-5' />
                </button>
                <span className='h-full flex items-center justify-center px-4 text-black font-medium'>1</span>
                <button className="flex-1 h-full flex items-center justify-center  text-black cursor-pointer">
                    <Plus className='size-5' />
                </button>
            </div></div>
    )
}

export default Counter