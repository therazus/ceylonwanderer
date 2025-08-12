// Migration script to move existing destination data to database
import { prisma } from '../lib/prisma'
import { destinations } from '../app/data/destinations'
import { Language, DestinationStatus, ImageType } from '@prisma/client'

async function migrateDestinations() {
  console.log('🚀 Starting destination migration...')

  for (const dest of destinations) {
    console.log(`📍 Migrating destination: ${dest.name}`)

    try {
      // Create destination
      const destination = await prisma.destination.create({
        data: {
          slug: dest.slug,
          status: DestinationStatus.PUBLISHED,
        },
      })

      console.log(`✅ Created destination: ${destination.id}`)

      // Create English content
      await prisma.destinationContent.create({
        data: {
          destinationId: destination.id,
          language: Language.EN,
          name: dest.name,
          description: dest.description,
          shortDescription: dest.shortDescription,
          flightCost: dest.flightCost,
          vacationCostAmount: dest.vacationCost.amount,
          vacationCostDuration: dest.vacationCost.duration,
          travelTime: dest.travelTime,
          metaTitle: `${dest.name} - Ceylon Wanderer`,
          metaDescription: dest.shortDescription,
        },
      })

      console.log(`✅ Created English content for ${dest.name}`)

      // Create German content (placeholder - you'll need to translate)
      await prisma.destinationContent.create({
        data: {
          destinationId: destination.id,
          language: Language.DE,
          name: dest.name, // TODO: Translate
          description: dest.description, // TODO: Translate
          shortDescription: dest.shortDescription, // TODO: Translate
          flightCost: dest.flightCost,
          vacationCostAmount: dest.vacationCost.amount,
          vacationCostDuration: dest.vacationCost.duration,
          travelTime: dest.travelTime,
          metaTitle: `${dest.name} - Ceylon Wanderer`,
          metaDescription: dest.shortDescription, // TODO: Translate
        },
      })

      console.log(`✅ Created German content for ${dest.name}`)

      // Create images
      for (let i = 0; i < dest.images.length; i++) {
        await prisma.destinationImage.create({
          data: {
            destinationId: destination.id,
            blobUrl: dest.images[i], // These are currently local paths
            altText: `${dest.name} image ${i + 1}`,
            imageType: i === 0 ? ImageType.HERO : ImageType.GALLERY,
            order: i,
          },
        })
      }

      console.log(`✅ Created ${dest.images.length} images for ${dest.name}`)

      // Create tour plans
      for (let i = 0; i < dest.tourPlan.length; i++) {
        const plan = dest.tourPlan[i]
        
        // English tour plan
        await prisma.tourPlan.create({
          data: {
            destinationId: destination.id,
            language: Language.EN,
            key: plan.key,
            title: plan.title,
            description: plan.description,
            order: i,
          },
        })

        // German tour plan (placeholder)
        await prisma.tourPlan.create({
          data: {
            destinationId: destination.id,
            language: Language.DE,
            key: plan.key,
            title: plan.title, // TODO: Translate
            description: plan.description, // TODO: Translate
            order: i,
          },
        })
      }

      console.log(`✅ Created ${dest.tourPlan.length} tour plans for ${dest.name}`)

      // Create things to do
      for (let i = 0; i < dest.thingsToDo.length; i++) {
        const thing = dest.thingsToDo[i]
        
        // English things to do
        await prisma.thingToDo.create({
          data: {
            destinationId: destination.id,
            language: Language.EN,
            name: thing.name,
            description: thing.description,
            imageUrl: thing.image,
            icon: thing.icon,
            distance: thing.distance,
            order: i,
          },
        })

        // German things to do (placeholder)
        await prisma.thingToDo.create({
          data: {
            destinationId: destination.id,
            language: Language.DE,
            name: thing.name, // TODO: Translate
            description: thing.description, // TODO: Translate
            imageUrl: thing.image,
            icon: thing.icon,
            distance: thing.distance,
            order: i,
          },
        })
      }

      console.log(`✅ Created ${dest.thingsToDo.length} things to do for ${dest.name}`)
      console.log(`🎉 Successfully migrated ${dest.name}!\n`)

    } catch (error) {
      console.error(`❌ Error migrating ${dest.name}:`, error)
    }
  }

  console.log('🏁 Migration completed!')
}

async function main() {
  try {
    await migrateDestinations()
  } catch (error) {
    console.error('Migration failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Run migration if this file is executed directly
if (require.main === module) {
  main()
}

export { migrateDestinations }
