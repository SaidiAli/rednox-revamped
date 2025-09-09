'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  company?: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { name, email, company, subject, message } = formData

    const subjectLine = `Contact Form: ${subject} - ${name}`
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #f24229; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #555; margin-bottom: 15px;">Contact Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; font-weight: bold; color: #666; width: 120px;">Name:</td>
              <td style="padding: 10px; color: #333;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; font-weight: bold; color: #666;">Email:</td>
              <td style="padding: 10px; color: #333;">${email}</td>
            </tr>
            ${company ? `
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; font-weight: bold; color: #666;">Company:</td>
              <td style="padding: 10px; color: #333;">${company}</td>
            </tr>
            ` : ''}
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; font-weight: bold; color: #666;">Subject:</td>
              <td style="padding: 10px; color: #333;">${subject}</td>
            </tr>
          </table>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #555; margin-bottom: 15px;">Message:</h3>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; border-left: 4px solid #f24229;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>This email was sent from the Rednox Inc. contact form.</p>
          <p>Timestamp: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `

    const textContent = `
New Contact Form Submission

Contact Details:
- Name: ${name}
- Email: ${email}
${company ? `- Company: ${company}` : ''}
- Subject: ${subject}

Message:
${message}

---
This email was sent from the Rednox Inc. contact form.
Timestamp: ${new Date().toLocaleString()}
    `

    const { data, error } = await resend.emails.send({
      from: 'Rednox Contact Form <noreply@mail.rednoxinc.com>',
      to: ['solomon@rednoxinc.com'],
      subject: subjectLine,
      html: htmlContent,
      text: textContent,
      replyTo: email,
    })

    if (error) {
      console.error('Email sending error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Server action error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}