import { StaticImageData } from 'next/image'

export type IntegrationType = {
  appLogo: StaticImageData
  app: string
  description: string
}

type Availability = {
  available: boolean
  addon?: boolean
}

export type PlanFeatureType = {
  name: string
  starter: Availability
  professional: Availability
  enterprise: Availability
}
