import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import './index.css'

import { routeTree } from './routeTree.gen'
import NotFound from './pages/NotFound'

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFound
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
