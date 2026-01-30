import SearchInput from "@/components/search-input"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

const TopMenu = () => {
  const [search, setSearch] = useState("")
  return (
    <div className='w-full flex items-center justify-between gap-4'>
      <SearchInput search={search} setSearch={setSearch} className="max-w-[400px]" />
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>FR</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </Avatar>
    </div>
  )
}

export default TopMenu