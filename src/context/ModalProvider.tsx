import React, { createContext, useContext, useState, type ReactNode } from 'react'

type ModalProps = {
    // popupContent: ReactNode
    isOpen: boolean
    handleOpenModal: () => void,
    handleCloseModal: () => void
    handleOpenDrawer: (content: ReactNode) => void
    handleCloseDrawer: () => void
    isDrawerOpen: boolean
}



const ModalContext = createContext<ModalProps | null>(null)
const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
    const [popupContent, setPopupContent] = useState<ReactNode>(null);
    const handleOpenModal = () => {
        setPopupContent(null);
        setIsOpen(true)
    }
    const handleCloseModal = () => {
        setPopupContent(null);
        setIsOpen(false)
    }
    const handleOpenDrawer = (content: ReactNode) => {
        setPopupContent(content);
        setIsDrawerOpen(true)
    }
    const handleCloseDrawer = () => {
        setPopupContent(null);
        setIsDrawerOpen(false)
    }
    return (
        <ModalContext.Provider value={{ isOpen, handleCloseModal, handleOpenModal, handleOpenDrawer, handleCloseDrawer, isDrawerOpen }}>
            {children}
            {popupContent}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error("the context must be use within it provider")
    }
    return context

}
export default ModalProvider