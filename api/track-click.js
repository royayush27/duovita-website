import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { itemName, itemCategory, page, userSession } = req.body;

    if (!itemName) {
      return res.status(400).json({ error: 'itemName is required' });
    }

    await sql`
      INSERT INTO menu_clicks (item_name, item_category, page, user_session)
      VALUES (${itemName}, ${itemCategory || null}, ${page || null}, ${userSession || null})
    `;

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Click tracking error:', error);
    return res.status(500).json({ error: 'Failed to save click' });
  }
}