import Form from '../pages/Form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/form')({
  component: Form,
})