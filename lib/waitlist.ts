/**
 * Waitlist target — FormSubmit.co (free, unlimited, no account, static-friendly).
 *
 * The form POSTs the email to FormSubmit's AJAX endpoint; FormSubmit forwards
 * each signup to `endpointEmail` below. The AJAX endpoint returns JSON with
 * proper CORS, so success/failure is actually detectable.
 *
 * ── One-time activation ────────────────────────────────────────────────────
 * The FIRST submission triggers a confirmation email from FormSubmit to
 * `endpointEmail` with an "Activate" button. Click it once; after that,
 * signups are delivered. Nothing else to configure.
 *
 * ── Optional: hide the email from page source ──────────────────────────────
 * The activation email includes a random alias endpoint
 * (https://formsubmit.co/ajax/xxxxxxxx). Swap that string in below to keep the
 * raw address out of the client bundle.
 */
export const WAITLIST = {
  endpoint: "https://formsubmit.co/ajax/mubinalmanaf@gmail.com",
  subject: "New Rhumi beta signup",
};

export function isWaitlistConfigured(): boolean {
  return Boolean(WAITLIST.endpoint);
}
