import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import logger from '@/utils/logger';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <p>New message from ${name} with email: ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    logger.info('Email sent successfully', { name, email });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    logger.error('Error sending email:', { error });
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
