import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';

export async function POST(req) {
  try {
    const body = await req.json();
    const { interviewId, status } = body;

    // 👇 Example update query — change logic as per your schema
    await db.update(MockInterview)
      .set({ status: status || 'auto-submitted' })
      .where(eq(MockInterview.mockId, interviewId));

    return new Response(JSON.stringify({ message: 'Test auto-submitted' }), { status: 200 });
  } catch (error) {
    console.error('Submission failed:', error);
    return new Response(JSON.stringify({ error: 'Submission failed' }), { status: 500 });
  }
}
