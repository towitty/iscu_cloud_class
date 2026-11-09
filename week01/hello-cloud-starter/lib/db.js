import { neon } from "@neondatabase/serverless";

export async function saveUrl(shortCode, originalUrl) {
  const sql = neon(process.env.DATABASE_URL);

  await sql`
    INSERT INTO urls (short_code, original_url)
    VALUES (${shortCode}, ${originalUrl})
  `;
}

export async function findUrlByShortCode(shortCode) {
  const sql = neon(process.env.DATABASE_URL);
  const rows = await sql`
    SELECT original_url
    FROM urls
    WHERE short_code = ${shortCode}
    LIMIT 1
  `;

  return rows[0]?.original_url ?? null;
}
