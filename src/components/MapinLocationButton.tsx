import { ArrowRight, MapPin } from 'lucide-react'
import { Button } from './ui/button'

const MapinLocationButton = ({className}:{className:string}) => {
  return (
       <Button className={`font-medium py-6 text-base ${className}  `}><MapPin className='size-5' /> find nearby resturants <ArrowRight className='size-5' /></Button>
  )
}

export default MapinLocationButton