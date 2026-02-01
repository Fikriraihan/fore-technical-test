import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RiFireFill } from '@remixicon/react'
import { Button } from '@/components/ui/button'
import type { MovieType } from '../DAO/movie.dao'
import { Link } from '@tanstack/react-router'
import { IMAGE_URL } from '../constants/imageUrl'

interface HeroProps {
  movie: MovieType
}

const Hero = (props: HeroProps) => {
  const { movie } = props
  const { overview, title, poster_path, id } = movie

  return (
    <Card className="relative w-full h-96 md:h-full p-0">
      <div className="absolute inset-0 z-10 bg-black/40" />
      <img
        src={`${IMAGE_URL}/${poster_path}`}
        alt="Event cover"
        className="w-full h-full aspect-4/3 sm:aspect-video md:aspect-21/9 object-cover brightness-90 transition-transform duration-700 hover:scale-105"
      />
      <div className='absolute inset-0 z-20 flex flex-col justify-end md:justify-center p-6 md:p-12 gap-6 md:gap-10 md:pb-12 text-left'>
        <div>
          <Badge variant='primary' className='h-8'>
            <RiFireFill size={16} color="var(--primary)" className="mr-1" />
            <span>
              Now Trending
            </span>
          </Badge>
        </div>
        <div className='space-y-2 md:space-y-4 max-w-2xl'>
          <h1>
            {title}
          </h1>
          <p className='text-gray-200 line-clamp-3 md:line-clamp-none'>
            {overview}
          </p>
        </div>
        <Link to={`/$id`} params={{ id }}>
          <Button className='md:px-8 md:py-6 w-fit font-semibold shadow-lg shadow-primary/25'>Watch Now</Button>
        </Link>
      </div>
    </Card >
  )
}

export default Hero
