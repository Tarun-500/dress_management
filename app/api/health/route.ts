import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    {
      app: 'dress-management',
      status: 'ok',
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  );
}
