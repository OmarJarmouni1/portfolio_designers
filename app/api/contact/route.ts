import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check for missing API key
        if (!process.env.RESEND_API_KEY) {
            console.error('❌ EMAIL ERROR: Missing RESEND_API_KEY in environment variables.');
            return NextResponse.json(
                { error: 'Email service is not configured.' },
                { status: 500 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['omarjarmouni1@gmail.com'],
            replyTo: email,
            subject: `Portfolio: ${subject}`,
            html: `
                <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafafa; border-radius: 12px;">
                    <div style="background: #2563eb; padding: 24px; border-radius: 8px 8px 0 0;">
                        <h2 style="color: white; margin: 0; font-size: 20px;">New Portfolio Message</h2>
                    </div>
                    <div style="background: white; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 80px;">Name</td>
                                <td style="padding: 8px 0; font-weight: 600;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td>
                                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Subject</td>
                                <td style="padding: 8px 0; font-weight: 600;">${subject}</td>
                            </tr>
                        </table>
                        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
                        <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: error.message || 'Failed to send email.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ message: 'Email sent successfully', id: data?.id }, { status: 200 });
    } catch (error: any) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
