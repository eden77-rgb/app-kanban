import Task from '../pages/Task'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/task/$taskId')({
  component: Task,
})
