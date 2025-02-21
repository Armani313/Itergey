import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type BenefitType = {
  icon: ReactNode
  title: string
  description: string
}

export type ImageType = {
  src: StaticImageData
  caption: string
}

export type GalleryItemType = {
  id?: number
  image: ImageType
}

export type VacancyType = {
  category: string
  jobs: {
    designation: string
    type: string
  }[]
}
