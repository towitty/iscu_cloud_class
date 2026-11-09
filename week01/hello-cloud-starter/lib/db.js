import { neon } from "@neondatabase/serverless";

export async function saveUrl(shortCode, originalUrl) {
  const sql = neon(process.env.DATABASE_URL);

  await sql`
    INSERT INTO urls (short_code, original_url)
    VALUES (${shortCode}, ${originalUrl})
  `;
}
