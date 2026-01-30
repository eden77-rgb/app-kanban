import Kanban from '../pages/Kanban'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/kanban')({
  component: Kanban,
})

