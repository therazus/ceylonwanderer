// Test script to verify database setup
import { testDatabaseConnection, getDestinations, getDestinationBySlug } from '../lib/destinations'
import { Language } from '@prisma/client'

async function testDatabase() {
  console.log('🧪 Testing database connection and queries...\n')

  // Test connection
  const isConnected = await testDatabaseConnection()
  if (!isConnected) {
    console.error('❌ Database connection failed!')
    return
  }

  // Test getting all destinations
  console.log('📋 Testing getDestinations...')
  const destinations = await getDestinations(Language.EN)
  console.log(`Found ${destinations.length} destinations:`)
  destinations.forEach(dest => {
    console.log(`  - ${dest.content.name} (${dest.slug})`)
  })

  // Test getting specific destination
  console.log('\n🎯 Testing getDestinationBySlug...')
  const galle = await getDestinationBySlug('galle', Language.EN)
  if (galle) {
    console.log(`✅ Found destination: ${galle.content.name}`)
    console.log(`   Description: ${galle.content.description.substring(0, 100)}...`)
    console.log(`   Images: ${galle.images.length}`)
    console.log(`   Tour Plans: ${galle.tourPlans.length}`)
    console.log(`   Things to Do: ${galle.thingsToDo.length}`)
  } else {
    console.log('❌ Destination not found')
  }

  // Test German content
  console.log('\n🇩🇪 Testing German content...')
  const galleDE = await getDestinationBySlug('galle', Language.DE)
  if (galleDE) {
    console.log(`✅ Found German content: ${galleDE.content.name}`)
  } else {
    console.log('❌ German content not found')
  }

  console.log('\n🎉 Database test completed!')
}

testDatabase().catch(console.error)
