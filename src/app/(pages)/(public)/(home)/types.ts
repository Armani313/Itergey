import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type ServiceType = {
  icon: ReactNode
  title: string
  description: string
}

export type ProjectType = {
  title: string
  description: string
  image: StaticImageData
}

export type TestimonialType = {
  name: string
  position: string
  description: string
  image: StaticImageData
  brand: string
}
