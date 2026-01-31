import { RiCloseLargeLine, RiSearchAi2Fill } from "@remixicon/react"
import { Input } from "./ui/input"
import { cn } from "@/lib/utils"

interface SearchInputProps {
  search: string
  setSearch: (search: string) => void
  className?: string
}

const SearchInput = (props: SearchInputProps) => {
  const { search, setSearch, className } = props
  return (
    <div className={cn("relative w-full", className)}>
      <RiSearchAi2Fill className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
      <Input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        placeholder="Search for films..."
        className="pl-10"
      />
      <RiCloseLargeLine className={cn('absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer', search === '' && 'hidden')} onClick={() => setSearch('')} />
    </div>
  )
}

export default SearchInput