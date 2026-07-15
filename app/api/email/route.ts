import { NextResponse } from 'next/server';

export async function GET() {
  const email = process.env.AUTHOR_EMAIL;

  if (!email) {
    return NextResponse.json({ error: 'Email not configured' }, { status: 500 });
  }

  return NextResponse.json({ email });
}