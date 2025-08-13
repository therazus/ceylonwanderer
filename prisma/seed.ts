// Seed script to create initial admin user
import { prisma } from '../src/lib/prisma'
import bcrypt from 'bcryptjs'

async function createAdminUser() {
  console.log('🌱 Creating admin user...')

  const email = process.env.ADMIN_EMAIL || 'admin@ceylonwanderer.com'
  const password = process.env.ADMIN_PASSWORD || 'Admin123!'
  
  // Check if admin user already exists
  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email }
  })

  if (existingAdmin) {
    console.log('✅ Admin user already exists!')
    return
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12)

  // Create admin user
  const admin = await prisma.adminUser.create({
    data: {
      email,
      password: hashedPassword,
      name: 'Ceylon Wanderer Admin',
      role: 'ADMIN',
      isActive: true
    }
  })

  console.log('✅ Admin user created successfully!')
  console.log(`📧 Email: ${admin.email}`)
  console.log(`🔑 Password: ${password}`)
  console.log('⚠️  Please change the default password after first login!')
}

async function main() {
  try {
    await createAdminUser()
  } catch (error) {
    console.error('❌ Error creating admin user:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
