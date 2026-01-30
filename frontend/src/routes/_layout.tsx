import { AppSidebar } from '@/components/app-sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div className='w-full flex justify-between'>
      <AppSidebar />
      <main className="min-h-screen flex-1 p-4 w-full">
        <Outlet />
      </main>
    </div>
  )
}
