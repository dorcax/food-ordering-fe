import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const SideBar = () => {
    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] z-40 flex">
            {/* Left transparent space */}
            <div className="w-[100px] md:w-[400px]"></div>
            {/* Green background drawer */}
            <div className="w-[calc(100%-100px)] md:w-[calc(100%-400px)]">
                <div className="bg-[rgb(88,148,3)] h-[60px]  p-4 text-white" />
                <div className="bg-white shadow-2xl  h-full ">
                    <div className="flex justify-between items-center border-b-3 px-5 pt-4 border-gray-300 gap-4">
                        {/* language selector */}
                        {/* language selector */}


                        <Select defaultValue="light" >
                            <SelectTrigger className="w-full py-[20px] border border-black text-black flex mb-4 ">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent >
                                <SelectItem value="light" className=""> <img src="/english-image.png" alt="lanuage image" className="object-cover size-5" />English</SelectItem>
                                <SelectItem value="dark"> <img src="/argentina.png" alt="lanuage image" className="object-cover size-5" />Chinese</SelectItem>
                                <SelectItem value="system"> <img src="/egypt.png" alt="lanuage image" className="object-cover size-5" />Deutsh</SelectItem>
                            </SelectContent>
                        </Select>



                        {/* currency selector */}

                        <Select defaultValue="light">
                            <SelectTrigger className="w-full py-[20px]  border border-black flex mb-4 ">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>

                                <SelectItem value="light" className=""> <img src="/english-image.png" alt="lanuage image" className="object-cover size-6" />USD $</SelectItem>
                                <SelectItem value="dark"> <img src="/argentina.png" alt="lanuage image" className="object-cover size-6" />AUD $</SelectItem>
                                <SelectItem value="system"> <img src="/egypt.png" alt="lanuage image" className="object-cover size-6" />AUD $</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <ul className="p-4">
                        <li className='py-2 text-lg font-bold'>   Veggie Burger</li>
                        <li className='py-2 text-base font-normal'>Vegan Seagal</li>
                        <li className='py-2 text-base font-normal'>The Habibi Burger</li>
                        <li className='py-2 text-base font-normal'>McVeggie Burger</li>
                        <li className='py-2 text-base font-normal'>Royal Crunchy Burger</li>
                        <li className='py-2 text-base font-normal'>Crispy Veg Burger</li>
                        <li className='py-2 text-base font-normal'>Good Flippin' Burgers</li>
                    </ul>
                    {/* </ul> */}
                </div>
            </div>
        </div>
    )
}

export default SideBar