import type { StaticImageData } from 'next/image'

export type PlanItem = {
  id: number
  name: string
  price: string
  duration: string
  features: Array<string>
  isRecommended: boolean
  isPopular?: boolean
}

export type PostType = {
  image: StaticImageData
  tag: { variant?: string; value: string }
  title: string
  description?: string
  postedBy?: {
    avatar: StaticImageData
    name: string
  }
  postedOn?: {
    date: string
    time: string
  }
  overlay?: string
  groupAvatars?: StaticImageData[]
}
