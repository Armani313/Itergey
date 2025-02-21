import type { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type CoinType = {
  image: StaticImageData
  name: string
}

export type FeatureType = {
  icon: ReactNode
  title: string
  description: string
}

export type BlogType = {
  title: string
  image: StaticImageData
  date: string
  readTime: string
  category: string
  duration: number
  variant: string
}
