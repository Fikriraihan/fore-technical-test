import { SidebarTrigger } from "@/components/ui/sidebar"
import TopMenu from "./top-menu"
import Hero from "./hero"

const Home = () => {
  return (
    <section className='flex flex-col w-full gap-4'>
      <div className='flex items-center gap-2'>
        <SidebarTrigger />
        <TopMenu />
      </div>
      <Hero />
    </section>
  )
}

export default Home