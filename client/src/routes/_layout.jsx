import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: () => (
    <>
      <nav className="flex items-center gap-6 p-4 border-b border-white/10 text-gray-400">
        <Link 
          to="/" 
          className="hover:text-white transition-colors [&.active]:text-sky-400 [&.active]:font-medium"
        >
          Home
        </Link>
        <Link 
          to="/kanban" 
          className="hover:text-white transition-colors [&.active]:text-sky-400 [&.active]:font-medium"
        >
          Kanban
        </Link>
        <Link 
          to="/about" 
          className="hover:text-white transition-colors [&.active]:text-sky-400 [&.active]:font-medium"
        >
          About
        </Link>
      </nav>
      <Outlet />
    </>
  ),
})