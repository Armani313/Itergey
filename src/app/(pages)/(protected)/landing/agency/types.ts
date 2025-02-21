import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'

export type ServiceType = {
  icon: ReactNode
  variant: string
  title: string
  description: string
}

export type BlogPostType = {
  heading: string
  img: StaticImageData
  time: string
  title: string
  description: string
  variant: string
  duration: number
}

export type ProjectType = {
  title: string
  description: string
  image: StaticImageData
}

export type JobDetailType = {
  designation: string
  location: string
  jobType: string
}
