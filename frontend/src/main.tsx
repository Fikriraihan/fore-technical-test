import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { createRouter, RouterProvider } from '@tanstack/react-router'
import qs from 'qs'
import { routeTree } from './routeTree.gen.ts'

function customParser(searchString: string) {
  return qs.parse(searchString, { ignoreQueryPrefix: true })
}

function customStringifier(searchObj: Record<string, unknown>) {
  return qs.stringify(searchObj, { addQueryPrefix: true })
}

const router = createRouter({
  routeTree,
  parseSearch: customParser,
  stringifySearch: customStringifier,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <RouterProvider router={router} />
      </main>
    </SidebarProvider>
  </StrictMode>,
)
