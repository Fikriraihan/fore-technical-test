import { Card } from "@/components/ui/card"
import { useParams } from "@tanstack/react-router"
import AvengersImg from '@/assets/avengers.jpg'
import { Button } from "@/components/ui/button"
import { RiHeart2Line, RiShare2Line } from "@remixicon/react"
import { Badge } from "@/components/ui/badge"

const MovieDetail = () => {
  const { title } = useParams({ from: '/_layout/(home)/$title' })
  return (
    <div className='p-6 md:p-12 flex items-center gap-10 h-full'>
      {/* <h1 className='text-3xl font-bold mb-6'>{title}</h1> */}
      <Card className="relative w-full max-w-xs p-0">
        <img
          src={AvengersImg}
          alt={title}
          className="aspect-2/3 w-full object-cover"
        />
      </Card>
      <div className="flex flex-col gap-3">
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolores.</p>
        <div className='flex gap-2'>
          <Button className="w-fit px-12 py-4">Watch now</Button>
          <Button variant='outline' className="w-fit px-12 py-4">Review</Button>
          <Button variant='outline'><RiHeart2Line /></Button>
          <Button variant='outline'><RiShare2Line /></Button>
        </div>
        <div className="flex gap-2">
          <Badge className='px-4 py-2'>Action</Badge>
          <Badge className='px-4 py-2'>Action</Badge>
          <Badge className='px-4 py-2'>Action</Badge>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail