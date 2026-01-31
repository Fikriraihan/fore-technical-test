// import { ComponentExample } from '@/components/component-example'
import Home from '@/features/home'
import { createFileRoute } from '@tanstack/react-router'

type AccessSettingSearchParams = {
  page?: number
  per_page?: number
  search?: string
}

const validateSearch = (
  search: Record<string, unknown>
): AccessSettingSearchParams => ({
  page: search.page as number,
  per_page: search.per_page as number,
  search: search.search as string,
})

export const Route = createFileRoute('/_layout/(home)/')({
  component: Home,
  validateSearch,
})

