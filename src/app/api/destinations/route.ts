// API endpoint to get all destinations
import { NextRequest, NextResponse } from 'next/server'
import { getDestinations } from '../../../lib/destinations'
import { Language } from '@prisma/client'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const lang = searchParams.get('lang')
    const language = lang === 'de' ? Language.DE : Language.EN

    const destinations = await getDestinations(language)
    
    return NextResponse.json({
      success: true,
      data: destinations,
      count: destinations.length
    })
  } catch (error) {
    console.error('Error fetching destinations:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch destinations' 
      },
      { status: 500 }
    )
  }
}
