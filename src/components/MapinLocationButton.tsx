import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, MapPin } from 'lucide-react'

const MapinLocationButton = ({className}:{className:string}) => {
  return (
       <Button className={`bg-[rgb(88,148,3)] font-medium py-6 w-[250px] text-base ${className}  `}><MapPin className='size-5' /> find nearby resturants <ArrowRight className='size-5' /></Button>
  )
}

export default MapinLocationButton