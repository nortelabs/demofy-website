// pages/api/contact.js
// Contact form API endpoint with Google Workspace SMTP integration

import { runMiddleware, rateLimiter, corsMiddleware, setSecurityHeaders } from '../../lib/security';
import nodemailer from 'nodemailer';

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

    // Send email via Google Workspace SMTP
    const emailResponse = await sendEmailViaSMTP({
      name,
      email,
      subject,
      message
    });

    if (emailResponse.success) {
      res.json({
        success: true,
        message: 'Message sent successfully'
      });
    } else {
      throw new Error(emailResponse.error || 'Failed to send email');
    }

  } catch (error) {
    console.error('Contact API error:', error);
    res.status(500).json({
      error: 'Failed to send message',
      message: error.message
    });
  }
}

// Function to send email via Google Workspace SMTP
async function sendEmailViaSMTP({ name, email, subject, message }) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.CONTACT_EMAIL || 'contact@demofyapp.com';

  if (!gmailUser || !gmailAppPassword) {
    throw new Error('Gmail configuration missing. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables.');
  }

  // Create transporter using Google Workspace SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword
    }
  });

  // Verify transporter configuration
  try {
    await transporter.verify();
    console.log('SMTP transporter verified successfully');
  } catch (verifyError) {
    console.error('SMTP verification failed:', verifyError);
    return { success: false, error: `SMTP verification failed: ${verifyError.message}` };
  }

  const mailOptions = {
    from: `"${name}" <${gmailUser}>`,
    replyTo: `${name} <${email}>`,
    to: toEmail,
    subject: `[Demofy Contact] ${getSubjectText(subject)}`,
    text: formatEmailText({ name, email, subject, message }),
    html: formatEmailHTML({ name, email, subject, message })
  };

  try {
    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      gmailUser: gmailUser ? 'Set' : 'Not set',
      gmailAppPassword: gmailAppPassword ? 'Set' : 'Not set'
    });
    
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('SMTP Error details:', {
      message: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode
    });
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
