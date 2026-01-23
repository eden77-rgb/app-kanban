import Kanban from '../pages/Kanban'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kanban')({
  component: Kanban,
})

