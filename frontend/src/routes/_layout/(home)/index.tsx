// import { ComponentExample } from '@/components/component-example'
import Home from '@/features/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/(home)/')({
  component: Home,
})

// function RouteComponent() {
//   return (
//     <ComponentExample />
//   )
// }
