import { Card } from '@/components/ui/card'

import AvengersImg from '@/assets/avengers.jpg'

const Hero = () => {
  return (
    <Card className="relative w-full p-0">
      <div className="absolute z-30 aspect-video bg-black/35" />
      <img
        src={AvengersImg}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
      />
    </Card>
  )
}

export default Hero