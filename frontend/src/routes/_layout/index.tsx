// import { ComponentExample } from '@/components/component-example'
import Home from '@/features/home/components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/')({
  component: Home,
})

// function RouteComponent() {
//   return (
//     <ComponentExample />
//   )
// }
