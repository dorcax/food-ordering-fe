import { useModal } from "@/context/ModalProvider"
import { Search, X } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"


const SearchBarModal = () => {
    const { handleCloseModal } = useModal()
    return (
        <div className=" fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center z-50 w-full">
            <div className='w-full max-w-xl md:max-w-2xl lg:max-w-5xl rounded-xl shadow-2xl px-1 relative'>
                <div className="fixed  md:top-0 md:right-0 cursor-pointer">
                    <X onClick={handleCloseModal} className='size-8 text-white' /> </div>

                <div className="relative">
                    <Input className="py-6 shadow-md bg-white" placeholder="search product...."/>
                    <Button className="absolute right-3 bg-[rgb(88,148,3)] top-1.5 py-5 "><Search className="size-5"/></Button>
                </div>

            </div> 
        </div>
    )
}

export default SearchBarModal