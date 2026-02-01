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
    <Card className="relative w-full p-0 overflow-hidden group min-h-[500px] md:min-h-[600px] h-fit">
      <div className="absolute inset-0 z-0">
        <img
          src={`${IMAGE_URL}/${poster_path}`}
          alt={`${title} poster`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className='relative z-20 flex flex-col justify-end md:justify-center h-full p-6 md:p-12 gap-6 md:gap-10 text-left'>
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
        <Link to={`/$id`} params={{ id: String(id) }}>
          <Button className='md:px-8 md:py-6 w-fit font-semibold shadow-lg shadow-primary/25'>Watch Now</Button>
        </Link>
      </div>
    </Card >
  )
}

export default Hero
