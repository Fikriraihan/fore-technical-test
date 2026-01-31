import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IMAGE_URL } from "../constants/imageUrl"
import { Link } from "@tanstack/react-router"
import type { MovieType } from "../DAO/movie.dao"

interface MovieCardProps {
  movie: MovieType
}


export function MovieCard(props: MovieCardProps) {
  const { movie } = props
  const { overview, title, poster_path } = movie
  return (
    <Card className="relative mx-auto w-full pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={`${IMAGE_URL}/${poster_path}`}
        alt={title}
        className="relative z-20 aspect-video w-full object-cover dark:brightness-40"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className='line-clamp-3'>
          {overview}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={`/$id`} params={{ id: movie.id.toString() }}>
          <Button className="w-full">View Movie</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
