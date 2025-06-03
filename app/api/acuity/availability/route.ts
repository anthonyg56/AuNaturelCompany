import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    const appointmentTypeID = searchParams.get('appointmentTypeID')
    const calendarID = searchParams.get('calendarID')

    if (!date || !appointmentTypeID || !calendarID) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 })
    }

    const userId = process.env.ACUITY_USER_ID
    const apiKey = process.env.ACUITY_API_KEY

    if (!userId || !apiKey) {
      throw new Error('Acuity credentials not configured')
    }

    const credentials = Buffer.from(`${userId}:${apiKey}`).toString('base64')

    const response = await fetch(
      `https://acuityscheduling.com/api/v1/availability/times?date=${date}&appointmentTypeID=${appointmentTypeID}&calendarID=${calendarID}`,
      {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json'
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Acuity API error: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching availability:', error)
    return NextResponse.json({ error: 'Failed to fetch availability' }, { status: 500 })
  }
} 