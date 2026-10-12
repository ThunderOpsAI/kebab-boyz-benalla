import { NextResponse } from 'next/server';
import { getInquiries, saveInquiry } from '@/lib/db';

export async function GET() {
  try {
    const data = await getInquiries();
    return NextResponse.json({ success: true, ...data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to retrieve inquiries';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    const saved = await saveInquiry({
      name: body.name,
      phone: body.phone,
      email: body.email || '',
      service_type: body.service_type || 'Takeaway Catering',
      guest_count: body.guest_count ? parseInt(body.guest_count, 10) : undefined,
      event_date: body.event_date || '',
      notes: body.notes || ''
    });

    return NextResponse.json({ success: true, inquiry: saved });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Server error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
