import type { StaticImageData } from 'next/image'

export type GalleryItem = {
  id?: number
  image: StaticImageData
  title?: string
  description?: string
  category?: string[]
}
