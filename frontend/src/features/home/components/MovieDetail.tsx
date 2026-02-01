import { Card } from "@/components/ui/card"
import { useParams, useRouter } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { RiArrowLeftLine, RiHeart2Line, RiShare2Line, RiStarFill } from "@remixicon/react"
import { Badge } from "@/components/ui/badge"
import { IMAGE_URL } from "../constants/imageUrl"
import { useGetDetailMovieQuery } from "../hooks/useGetDetailMovie"

const MovieDetail = () => {
  const { id } = useParams({ from: '/_layout/(home)/$id' })
  const router = useRouter()
  const { data: movieDetail } = useGetDetailMovieQuery({
    id: Number(id)
  })

  return (
    <div className="max-w-6xl md:max-w-7xl">
      <RiArrowLeftLine onClick={() => router.history.back()} className="cursor-pointer" />
      <div className='container mx-auto px-4 mt-10 relative pb-20'>
        <div className='flex items-center flex-col lg:flex-row gap-8'>
          <Card className="relative w-full max-w-xs p-0">
            <img
              src={`${IMAGE_URL}/${movieDetail.poster_path}`}
              alt={id}
              className="aspect-2/3 w-full object-cover"
            />
          </Card>
          <div className="flex-1 pt-4 space-y-6">
            <div>
              <h2>{movieDetail?.title}
                <span className="text-zinc-500 text-3xl font-normal ml-3">
                  ({movieDetail.release_date ? new Date(movieDetail.release_date).getFullYear() : "—"})
                </span>
              </h2>
              <Badge>
                <RiStarFill size={16} />
                <span>{movieDetail.vote_average.toFixed(1)}</span>
              </Badge>
            </div>
            <p>{movieDetail?.overview}</p>
            <div className='flex gap-2'>
              <Button className="w-fit px-12 py-4">Watch now</Button>
              <Button variant='outline' className="w-fit px-12 py-4">Review</Button>
              <Button variant='outline' aria-label="Add to favorites"><RiHeart2Line /></Button>
              <Button variant='outline' aria-label="Share"><RiShare2Line /></Button>
            </div>
            <div className="flex gap-2">
              {movieDetail.genres.map((genre) => (
                <Badge variant='primary' key={genre.id} className='px-4 py-2'>{genre.name}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail