import { db } from '@vercel/postgres';

const client = await db.connect();

async function getEmails() {
  const result = await client.sql`
    SELECT * FROM waitlist;
  `;
  return result.rows;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    const emails = await getEmails();
    await client.sql`COMMIT`;

    return Response.json({ emails });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}