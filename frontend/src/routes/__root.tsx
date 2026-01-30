import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      {import.meta.env.VITE_MAINTANANCE_MODE === "true" ? (
        <div>
          <div>
            <p>Kami Akan Segera Kembali!</p>
            <p>
              Situs web kami sedang menjalani pemeliharaan terjadwal untuk
              meningkatkan pengalaman Anda. Kami mohon maaf atas ketidaknyamanan
              yang ditimbulkan.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <Outlet />
          <React.Suspense>
            <TanStackRouterDevtools />
          </React.Suspense>
        </div>
      )}
    </React.Fragment>
  )
}
