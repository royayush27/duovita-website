function getSessionId() {
  let sessionId = localStorage.getItem('duovita_session_id');

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem('duovita_session_id', sessionId);
  }

  return sessionId;
}

export async function trackEvent({
  eventType,
  itemId,
  itemName,
  itemCategory,
  eventValue,
  metadata,
}: {
  eventType: string;
  itemId?: string;
  itemName?: string;
  itemCategory?: string;
  eventValue?: string;
  metadata?: Record<string, unknown>;
}) {
  try {
    await fetch('/api/track-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventType,
        itemId,
        itemName,
        itemCategory,
        eventValue,
        page: window.location.pathname,
        userSession: getSessionId(),
        metadata,
      }),
    });
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}