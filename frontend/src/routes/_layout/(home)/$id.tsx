import { createFileRoute } from '@tanstack/react-router'
import MovieDetail from '@/features/home/components/MovieDetail'
import Loader from '@/components/loader'

export const Route = createFileRoute('/_layout/(home)/$id')({
  component: MovieDetail,
  pendingComponent: () => (
    <div className="flex items-center justify-center h-screen">
      <Loader />
    </div>
  ),
})
