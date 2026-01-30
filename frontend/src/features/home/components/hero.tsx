import { Card } from '@/components/ui/card'
import AvengersImg from '@/assets/avengers.jpg'
import { Badge } from '@/components/ui/badge'
import { RiFireFill } from '@remixicon/react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <Card className="relative w-full p-0">
      <div className="absolute z-30 aspect-video bg-black/35" />
      <img
        src={AvengersImg}
        alt="Event cover"
        className="relative z-20 aspect-video w-full md:aspect-21/9 object-cover brightness-80 dark:brightness-40"
      />
      <div className='absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-center p-6 md:p-12 space-y-12'>
        <div>
          <Badge variant='primary' className='h-8'>
            <RiFireFill color='var(--primary)' />
            <span>
              Now Trending
            </span>
          </Badge>
        </div>
        <div className='space-y-4'>
          <div className='flex gap-2'>
            <Badge variant='primary' className='h-8'>
              Action
            </Badge>
            <Badge variant='primary' className='h-8'>
              Adventure
            </Badge>
          </div>
          <h1 className='text-white'>
            Avengers: Endgame
          </h1>
          <p className='text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            repellat quisquam doloribus, accusantium, repellendus, quae
          </p>
        </div>
        <Button className='px-8 py-6 w-fit'>Watch Now</Button>
      </div>
    </Card >
  )
}

export default Hero
