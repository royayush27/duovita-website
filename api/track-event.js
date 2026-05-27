import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      eventType,
      itemId,
      itemName,
      itemCategory,
      eventValue,
      page,
      userSession,
      metadata
    } = req.body;

    if (!eventType) {
      return res.status(400).json({ error: 'eventType is required' });
    }

    await sql`
      INSERT INTO user_events (
        event_type,
        item_id,
        item_name,
        item_category,
        event_value,
        page,
        user_session,
        metadata
      )
      VALUES (
        ${eventType},
        ${itemId || null},
        ${itemName || null},
        ${itemCategory || null},
        ${eventValue || null},
        ${page || null},
        ${userSession || null},
        ${metadata ? JSON.stringify(metadata) : null}
      )
    `;

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Event tracking error:', error);
    return res.status(500).json({ error: 'Failed to save event' });
  }
}