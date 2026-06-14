// Visitor tracking utility — sends page views to the Express backend
const TRACKING_URL = import.meta.env.VITE_TRACKING_URL || 'http://194.127.192.20:3001/api/track'
const API_KEY = import.meta.env.VITE_TRACKING_API_KEY || 'portfolio-track-key-2024'

export async function trackVisit(page: string) {
  try {
    await fetch(TRACKING_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
      body: JSON.stringify({
        page,
        referrer: document.referrer || 'direct',
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      }),
    })
  } catch {
    // silent fail — tracking should never break the site
  }
}
