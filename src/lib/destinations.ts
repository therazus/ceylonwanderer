// Database queries for destinations
import { prisma } from './prisma'
import { Language } from '@prisma/client'
import type { DestinationForLanguage, DestinationWithContent } from '../types/database'

// Get all destinations with content for a specific language
export async function getDestinations(language: Language = Language.EN) {
  const destinations = await prisma.destination.findMany({
    where: {
      status: 'PUBLISHED'
    },
    include: {
      content: {
        where: { language }
      },
      images: {
        orderBy: { order: 'asc' }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return destinations.map(dest => ({
    ...dest,
    content: dest.content[0] // Get the first (only) content for the language
  })) as DestinationForLanguage[]
}

// Get a single destination by slug with all related data
export async function getDestinationBySlug(slug: string, language: Language = Language.EN) {
  const destination = await prisma.destination.findUnique({
    where: { slug },
    include: {
      content: {
        where: { language }
      },
      images: {
        orderBy: { order: 'asc' }
      },
      tourPlans: {
        where: { language },
        orderBy: { order: 'asc' }
      },
      thingsToDo: {
        where: { language },
        orderBy: { order: 'asc' }
      }
    }
  })

  if (!destination || destination.content.length === 0) {
    return null
  }

  return {
    ...destination,
    content: destination.content[0], // Get the first (only) content for the language
    tourPlans: destination.tourPlans,
    thingsToDo: destination.thingsToDo
  } as DestinationForLanguage
}

// Get destination with all languages (for admin)
export async function getDestinationWithAllContent(slug: string): Promise<DestinationWithContent | null> {
  return await prisma.destination.findUnique({
    where: { slug },
    include: {
      content: true,
      images: {
        orderBy: { order: 'asc' }
      },
      tourPlans: {
        orderBy: [{ language: 'asc' }, { order: 'asc' }]
      },
      thingsToDo: {
        orderBy: [{ language: 'asc' }, { order: 'asc' }]
      }
    }
  })
}

// Test function to verify database connection
export async function testDatabaseConnection() {
  try {
    const count = await prisma.destination.count()
    console.log(`✅ Database connected! Found ${count} destinations.`)
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    return false
  }
}
