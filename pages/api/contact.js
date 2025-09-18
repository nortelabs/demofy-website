// pages/api/contact.js
// Contact form API endpoint with Mailgun integration

import { runMiddleware, rateLimiter, corsMiddleware, setSecurityHeaders } from '../../lib/security';

export default async function handler(req, res) {
  // Apply security headers
  setSecurityHeaders(res);

  // Apply CORS
  await runMiddleware(req, res, corsMiddleware);

  // Apply rate limiting
  await runMiddleware(req, res, rateLimiter);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'subject', 'message']
      });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format'
      });
    }

    // Send email via Mailgun
    const mailgunResponse = await sendEmailViaMailgun({
      name,
      email,
      subject,
      message
    });

    if (mailgunResponse.success) {
      res.json({
        success: true,
        message: 'Message sent successfully'
      });
    } else {
      throw new Error(mailgunResponse.error || 'Failed to send email');
    }

  } catch (error) {
    console.error('Contact API error:', error);
    res.status(500).json({
      error: 'Failed to send message',
      message: error.message
    });
  }
}

// Function to send email via Mailgun
async function sendEmailViaMailgun({ name, email, subject, message }) {
  const mailgunDomain = process.env.MAILGUN_DOMAIN;
  const mailgunApiKey = process.env.MAILGUN_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || 'support@demofyapp.com';

  if (!mailgunDomain || !mailgunApiKey) {
    throw new Error('Mailgun configuration missing');
  }

  const formData = new URLSearchParams();
  formData.append('from', `Demofy Contact Form <noreply@${mailgunDomain}>`);
  formData.append('reply-to', `${name} <${email}>`);
  formData.append('to', toEmail);
  formData.append('subject', `[Demofy Contact] ${getSubjectText(subject)}`);
  formData.append('text', formatEmailText({ name, email, subject, message }));
  formData.append('html', formatEmailHTML({ name, email, subject, message }));

  try {
    const response = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`api:${mailgunApiKey}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData
    });

    if (response.ok) {
      const result = await response.json();
      return { success: true, messageId: result.id };
    } else {
      const error = await response.text();
      return { success: false, error: `Mailgun API error: ${response.status} - ${error}` };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Helper function to get subject text
function getSubjectText(subject) {
  const subjectMap = {
    'support': 'Technical Support',
    'billing': 'Billing Question',
    'feature': 'Feature Request',
    'bug': 'Bug Report',
    'other': 'General Inquiry'
  };
  return subjectMap[subject] || 'General Inquiry';
}

// Helper function to format email text
function formatEmailText({ name, email, subject, message }) {
  return `
New contact form submission from Demofy website:

Name: ${name}
Email: ${email}
Subject: ${getSubjectText(subject)}
Message:
${message}

---
This message was sent from the Demofy contact form.
  `.trim();
}

// Helper function to format email HTML
function formatEmailHTML({ name, email, subject, message }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2 style="color: #db7536;">New Contact Form Submission</h2>
    <p>You have received a new message from the Demofy contact form:</p>
    
    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Subject:</strong> ${getSubjectText(subject)}</p>
    </div>
    
    <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h3 style="margin-top: 0;">Message:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
    
    <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
    <p style="color: #666; font-size: 12px;">
      This message was sent from the Demofy contact form at demofyapp.com
    </p>
  </div>
</body>
</html>
  `.trim();
}
