// Database types for Ceylon Wanderer
import { Destination, DestinationContent, DestinationImage, TourPlan, ThingToDo, Language, DestinationStatus, ImageType } from '@prisma/client'

// Full destination with all related data
export type DestinationWithContent = Destination & {
  content: DestinationContent[]
  images: DestinationImage[]
  tourPlans: TourPlan[]
  thingsToDo: ThingToDo[]
}

// Destination with content for a specific language
export type DestinationForLanguage = Destination & {
  content: DestinationContent
  images: DestinationImage[]
  tourPlans: TourPlan[]
  thingsToDo: ThingToDo[]
}

// Create/Update types
export type CreateDestinationData = {
  slug: string
  status?: DestinationStatus
  content: {
    language: Language
    name: string
    description: string
    shortDescription?: string
    heroTitle?: string
    heroSubtitle?: string
    flightCost?: number
    vacationCostAmount?: number
    vacationCostDuration?: string
    travelTime?: string
    metaTitle?: string
    metaDescription?: string
  }[]
  tourPlans?: {
    language: Language
    key: string
    title: string
    description: string
    order?: number
  }[]
  thingsToDo?: {
    language: Language
    name: string
    description: string
    imageUrl?: string
    icon?: string
    distance?: string
    order?: number
  }[]
}

export type CreateImageData = {
  blobUrl: string
  originalName?: string
  altText?: string
  width?: number
  height?: number
  fileSize?: number
  mimeType?: string
  imageType?: ImageType
  order?: number
}

// Re-export Prisma types
export type {
  Destination,
  DestinationContent,
  DestinationImage,
  TourPlan,
  ThingToDo,
  Language,
  DestinationStatus,
  ImageType
}
