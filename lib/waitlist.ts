/**
 * Waitlist target — a Google Apps Script Web App bound to a Google Sheet.
 * Each signup appends a row (Timestamp · Email · Source) to a sheet you own.
 * Free, unlimited, no per-submission emails.
 *
 * The browser posts with `mode: "no-cors"` (Apps Script can't send CORS
 * headers), so the request is delivered but its response is opaque — we treat
 * completion as success. The endpoint is verified server-side after deploy.
 *
 * ── Setup ──────────────────────────────────────────────────────────────────
 * 1. Create a Google Sheet (any name).
 * 2. Extensions → Apps Script. Delete the sample, paste the script from the
 *    project's SETUP-WAITLIST.md, Save.
 * 3. Deploy → New deployment → type "Web app":
 *      Execute as: Me   ·   Who has access: Anyone
 *    Authorize when prompted. Copy the Web app URL (ends in `/exec`).
 * 4. Paste it below as `endpoint`, then rebuild/redeploy.
 * Until set, the form runs in stub mode (validates + shows success, stores nowhere).
 */
export const WAITLIST = {
  endpoint:
    "https://script.google.com/macros/s/AKfycbxOaukYBR7iWyO4ZSuwyxqivIksOp1AJf94qqlV5FDp8fcBUTCJYSjX0lrDTYOLPNtg1Q/exec",
  source: "rhumi.app",
};

export function isWaitlistConfigured(): boolean {
  return Boolean(WAITLIST.endpoint);
}
