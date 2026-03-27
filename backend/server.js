import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
import { Resend } from 'resend';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Resend with API Key from .env
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// API route to submit contact info and send email via Resend
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Default sender for free tier
      to: process.env.CONTACT_EMAIL_TO || 'akshitadhaka42@gmail.com',
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #D35400;">New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #D35400;">
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 0.8rem; color: #888;">Sent from Akshita Dhaka's Portfolio</p>
        </div>
      `
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }

    res.status(200).json({ success: true, message: 'Message sent successfully!' });

  } catch (err) {
    console.error('Server Internal Error:', err);
    res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
  }
});

// API route to download resume
app.get('/api/resume/download', (req, res) => {
  const file = path.join(__dirname, 'public', 'Akshita_Dhaka_Resume.pdf');
  res.download(file, 'Akshita_Dhaka_Resume.pdf', (err) => {
    if (err) {
      console.error('Error downloading resume:', err);
      if (!res.headersSent) {
        res.status(404).send('Resume file not found. It will be added soon.');
      }
    }
  });
});

// Create 'public' directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
