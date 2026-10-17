import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendSmtpEmail, buildQuoteEmailHtml, DEFAULT_RECEIVER_EMAIL } from '@/lib/smtp';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, product, message } = body || {};

    // 1. Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, message: 'Full name is required.' },
        { status: 400 }
      );
    }

    if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, message: 'Enquiry message is required.' },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = (phone || '').trim();
    const cleanCompany = (company || '').trim();
    const cleanProduct = (product || '').trim();
    const cleanMessage = message.trim();

    // 2. Format content for DB record
    const formattedContent = [
      `[QUOTE REQUEST - SPOTOPTICS WEBSITE]`,
      `Product/Interest: ${cleanProduct || 'General Wavefront Metrology'}`,
      `Company: ${cleanCompany || 'N/A'}`,
      `Phone: ${cleanPhone || 'N/A'}`,
      `Enquiry:`,
      cleanMessage,
    ].join('\n');

    // 3. Persist inquiry in Database (Prisma Message table) if DB is connected
    let savedDbMessage = null;
    try {
      savedDbMessage = await prisma.message.create({
        data: {
          senderName: cleanName,
          senderEmail: cleanEmail,
          content: formattedContent,
          isRead: false,
        },
      });
    } catch (dbErr) {
      console.warn('Quote Route: Prisma Message insert failed (continuing to email delivery):', dbErr?.message);
    }

    // 4. Build Email
    const targetEmail = process.env.QUOTE_RECEIVER_EMAIL || DEFAULT_RECEIVER_EMAIL;
    const subject = `[Quote Request] ${cleanProduct ? `${cleanProduct} - ` : ''}${cleanName}${cleanCompany ? ` (${cleanCompany})` : ''}`;

    const textBody = [
      `New Technical Quote Request - SpotOptics S.r.l.`,
      `Target: SpotOptics Headquarters, Padova, Italy (${targetEmail})`,
      `--------------------------------------------------`,
      `Name: ${cleanName}`,
      `Email: ${cleanEmail}`,
      `Phone: ${cleanPhone || 'N/A'}`,
      `Company: ${cleanCompany || 'N/A'}`,
      `Product: ${cleanProduct || 'General Wavefront Metrology'}`,
      `Date: ${new Date().toISOString()}`,
      `--------------------------------------------------`,
      `Requirements / Message:`,
      cleanMessage,
    ].join('\n');

    const htmlBody = buildQuoteEmailHtml({
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      company: cleanCompany,
      product: cleanProduct,
      message: cleanMessage,
      date: new Date().toUTCString(),
    });

    // 5. Send via SMTP
    let emailResult = { sent: false };
    try {
      emailResult = await sendSmtpEmail({
        to: targetEmail,
        replyTo: `${cleanName} <${cleanEmail}>`,
        subject,
        text: textBody,
        html: htmlBody,
      });

      if (emailResult.simulated) {
        console.log('----------------------------------------------------');
        console.log('📌 [QUOTE ENQUIRY SIMULATED (SMTP details pending in .env)]');
        console.log(`To: ${targetEmail} (SpotOptics Padova HQ)`);
        console.log(`From: ${cleanName} <${cleanEmail}>`);
        console.log(`Product: ${cleanProduct}`);
        console.log(`Message: ${cleanMessage}`);
        console.log('----------------------------------------------------');
      } else {
        console.log(`✅ [QUOTE ENQUIRY DELIVERED VIA SMTP] To: ${targetEmail}`);
      }
    } catch (mailErr) {
      console.error('❌ Quote Route: SMTP transmission error:', mailErr?.message);
      // We don't fail the entire user experience if SMTP throws, but we note it in response
      emailResult = { sent: false, error: mailErr?.message };
    }

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been submitted successfully to SpotOptics Padova HQ.',
      data: {
        id: savedDbMessage?.id || null,
        recipient: targetEmail,
        delivered: emailResult.sent,
        simulated: emailResult.simulated || false,
      },
    });
  } catch (error) {
    console.error('Quote Route Server Error:', error);
    return NextResponse.json(
      { success: false, message: error?.message || 'Internal server error while processing quote enquiry.' },
      { status: 500 }
    );
  }
}
