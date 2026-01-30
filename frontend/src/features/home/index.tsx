import { SidebarTrigger } from "@/components/ui/sidebar"
import TopMenu from "./components/TopMenu"
import MovieList from "./components/MovieList"
import Hero from "./components/hero"

const Home = () => {
  return (
    <section className='flex flex-col w-full gap-4'>
      <div className='flex items-center gap-2'>
        <SidebarTrigger />
        <TopMenu />
      </div>
      <div className='space-y-10'>
        <Hero />
        <MovieList />
      </div>
    </section>
  )
}

export default Home