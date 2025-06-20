import React, { createContext, useContext, useState } from 'react'

type ModalProps={
    isOpen:boolean 
    handleOpenModal:()=>void,
    handleCloseModal:()=>void
}



const ModalContext =createContext<ModalProps |null>(null)
const ModalProvider = ({children}:{children:React.ReactNode}) => {
    const [isOpen,setIsOpen] =useState<boolean>(false)
    const handleOpenModal=()=>{
        setIsOpen(true)
    }
    const handleCloseModal=()=>{
        setIsOpen(false)
    }
  return (
    <ModalContext.Provider value={{isOpen,handleCloseModal,handleOpenModal}}>
        {children}
    </ModalContext.Provider>
  )
}

export const useModal =()=>{
 const context =useContext(ModalContext)
 if(!context){
    throw new Error("the context must be use within it provider")
 }
 return context

}
export default ModalProvider