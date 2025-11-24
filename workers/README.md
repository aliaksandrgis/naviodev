# Contact Worker

This Cloudflare Worker forwards contact form submissions to Brevo (Sendinblue).

## Environment variables

Set the following variables via `wrangler secret put` or Cloudflare dashboard:

- `BREVO_API_KEY` — Brevo API key.
- `CONTACT_TO` — destination email, e.g. `info@naviodev.com`.
- `SENDER_EMAIL` — email verified in Brevo (e.g. `noreply@navio.dev`).
- `SENDER_NAME` — label for the sender (optional).
- `ALLOWED_ORIGIN` — optional CORS origin for the site (e.g. `https://navio.dev`).

## Deployment

```bash
npm install -g wrangler
wrangler init navio-contact-worker --from-durable-object workers/contact-worker.js
# or simply wrangler deploy workers/contact-worker.js
```

After deployment note the Worker URL (e.g. `https://navio-contact-worker.workers.dev/contact`) and set it as `VITE_CONTACT_ENDPOINT` in `.env`.

## Request payload

```json
{
  "name": "John Doe",
  "workEmail": "john@example.com",
  "projectType": "Web / Backend",
  "message": "Request details"
}
```

The worker responds with `{ "success": true }` on success or `{ "error": "message" }` otherwise.
