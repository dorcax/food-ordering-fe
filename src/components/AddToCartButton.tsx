import { ShoppingCart } from 'lucide-react'
import React, { type ReactNode } from 'react'
import { Button } from './ui/button'

type AddToCartButtonProps ={
    onClick?:()=>void
    className:string
    text:string,
    icon?:ReactNode
}

const AddToCartButton = ({onClick,className,text,icon}:AddToCartButtonProps) => {
    return (
      
        <div>
            <Button className={className} onClick={onClick}>{text} {icon} </Button>
        </div>
    )
}

export default AddToCartButton