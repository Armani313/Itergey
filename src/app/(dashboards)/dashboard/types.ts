import type { StaticImageData } from 'next/image'

export type Project = {
  time: string
  title: string
  state: {
    name: string
    variant: string
  }
  description: string
  progress: {
    value: number
    variant: string
  }
  member: StaticImageData[]
}

export type Task = {
  id: number
  title: string
  time: string
  variant: string
  taskRatio: {
    completedTask: number
    totalTask: number
  }
  comment: number
  priority: string
}
