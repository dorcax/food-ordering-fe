import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"
import { useModal } from '@/context/ModalProvider'
import { type ReactNode } from 'react'
const CartDrawer = ({children,title}:{children:ReactNode,title:string}) => {
    const {handleCloseDrawer,isDrawerOpen} =useModal()
    return (
        <div>
            <Sheet open={isDrawerOpen} onOpenChange={handleCloseDrawer}>
              
                <SheetContent>
                    <SheetHeader>
                        {/* <SheetTitle>{title}</SheetTitle> */}
                        <SheetDescription>
                            {children}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default CartDrawer