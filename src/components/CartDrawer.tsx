import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader
} from "@/components/ui/sheet"
import { useModal } from '@/context/ModalProvider'
import { type ReactNode } from 'react'
const CartDrawer = ({children}:{children:ReactNode}) => {
    const {handleCloseDrawer,isDrawerOpen} =useModal()
    return (
        <div>
            <Sheet open={isDrawerOpen} onOpenChange={handleCloseDrawer}>
              
                <SheetContent>
                    <SheetHeader>
                      
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