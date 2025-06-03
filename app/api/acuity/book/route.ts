import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const bookingData = await request.json();

    // Validate required fields
    const requiredFields = ['appointmentTypeID', 'datetime', 'firstName', 'lastName', 'email'];

    for (const field of requiredFields) {
      if (!bookingData[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      };
    };

    const userId = process.env.ACUITY_USER_ID
    const apiKey = process.env.ACUITY_API_KEY

    if (!userId || !apiKey) {
      throw new Error('Acuity credentials not configured')
    }

    const credentials = Buffer.from(`${userId}:${apiKey}`).toString('base64')

    const response = await fetch('https://acuityscheduling.com/api/v1/appointments', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Acuity API error: ${JSON.stringify(errorData)}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error booking appointment:', error)
    return NextResponse.json({ error: 'Failed to book appointment' }, { status: 500 })
  }
} 