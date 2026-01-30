import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SidebarProvider } from "./components/ui/sidebar";
import { createRouter, RouterProvider } from '@tanstack/react-router'
import qs from 'qs'
import { routeTree } from './routeTree.gen.ts'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider } from './components/theme-provider.tsx';

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

const queryClient = new QueryClient()

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </SidebarProvider>
  </StrictMode>,
)
