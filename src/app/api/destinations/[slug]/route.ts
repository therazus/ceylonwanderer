// API endpoint to get a specific destination by slug
import { NextRequest, NextResponse } from 'next/server'
import { getDestinationBySlug } from '../../../../lib/destinations'
import { Language } from '@prisma/client'

interface RouteParams {
  params: {
    slug: string
  }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = await params
    const searchParams = request.nextUrl.searchParams
    const lang = searchParams.get('lang')
    const language = lang === 'de' ? Language.DE : Language.EN

    const destination = await getDestinationBySlug(slug, language)
    
    if (!destination) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Destination not found' 
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: destination
    })
  } catch (error) {
    console.error('Error fetching destination:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch destination' 
      },
      { status: 500 }
    )
  }
}
