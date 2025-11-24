const BREVO_URL = 'https://api.brevo.com/v3/smtp/email'

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    try {
      const data = await request.json()
      const { name, workEmail, projectType, message } = data || {}

      if (!name || !workEmail || !message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        })
      }

      const payload = {
        sender: {
          name: env.SENDER_NAME || 'NavioDev Website',
          email: env.SENDER_EMAIL || 'noreply@navio.dev'
        },
        to: [
          {
            email: env.CONTACT_TO || 'info@naviodev.com'
          }
        ],
        subject: `New contact request — ${name}`,
        htmlContent: `
          <h3>New contact from navio.dev</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${workEmail}</p>
          <p><strong>Project type:</strong> ${projectType || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${(message || '').replace(/\n/g, '<br />')}</p>
        `
      }

      const brevoResponse = await fetch(BREVO_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': env.BREVO_API_KEY
        },
        body: JSON.stringify(payload)
      })

      if (!brevoResponse.ok) {
        const errorText = await brevoResponse.text()
        return new Response(JSON.stringify({ error: errorText || 'Brevo error' }), {
          status: 502,
          headers: { 'Content-Type': 'application/json' }
        })
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*' }
      })
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Invalid payload' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }
}
