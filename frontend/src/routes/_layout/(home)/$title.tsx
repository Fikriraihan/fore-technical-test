import { createFileRoute } from '@tanstack/react-router'
import MovieDetail from '@/features/home/components/MovieDetail'

export const Route = createFileRoute('/_layout/(home)/$title')({
  component: MovieDetail,
})
