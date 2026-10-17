import net from 'net';
import tls from 'tls';

/**
 * Pure Node.js SMTP client (Zero external dependencies).
 * Supports SSL/TLS (port 465) and STARTTLS (port 587/25) with AUTH LOGIN.
 */

// Default Italian Padova HQ Receiver
export const DEFAULT_RECEIVER_EMAIL = 'contact@spot-optics.com';

/**
 * Creates a formatted HTML email for SpotOptics quote enquiries.
 */
export function buildQuoteEmailHtml({ name, email, phone, company, product, message, date }) {
  const brandTeal = '#29938B';
  const brandDark = '#101B2B';
  const formattedDate = date || new Date().toUTCString();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Quote Request - SpotOptics</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #1e293b;">
  <div style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); border: 1px solid #e2e8f0;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, ${brandDark} 0%, #173835 100%); padding: 28px 32px; border-bottom: 3px solid ${brandTeal};">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div>
          <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: 1px;">
            SPOT<span style="color: ${brandTeal};">OPTICS</span>
          </h1>
          <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
            Precision in Light & Shape &middot; Padova, Italy
          </p>
        </div>
        <div style="background: rgba(41, 147, 139, 0.2); border: 1px solid ${brandTeal}; color: #5eead4; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 999px;">
          NEW QUOTE INQUIRY
        </div>
      </div>
    </div>

    <!-- Body -->
    <div style="padding: 32px;">
      <h2 style="margin: 0 0 8px 0; font-size: 18px; color: ${brandDark};">
        New Technical Quotation Request
      </h2>
      <p style="margin: 0 0 24px 0; color: #64748b; font-size: 14px; line-height: 1.5;">
        A customer has submitted a quote inquiry via the SpotOptics official website. Details are provided below:
      </p>

      <!-- Customer Details Card -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
        <tbody>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; width: 140px; font-weight: 600;">Full Name:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${name || 'N/A'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Customer Email:</td>
            <td style="padding: 10px 0; color: ${brandTeal}; font-weight: 600;">
              <a href="mailto:${email}" style="color: ${brandTeal}; text-decoration: none;">${email || 'N/A'}</a>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone / Mobile:</td>
            <td style="padding: 10px 0; color: #0f172a;">${phone || 'Not specified'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Company / Lab:</td>
            <td style="padding: 10px 0; color: #0f172a;">${company || 'Not specified'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Product of Interest:</td>
            <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">
              <span style="background: #e6f4f2; color: ${brandTeal}; padding: 3px 8px; border-radius: 4px; font-size: 13px;">
                ${product || 'General Metrology Inquiry'}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Submission Time:</td>
            <td style="padding: 10px 0; color: #64748b; font-size: 13px;">${formattedDate}</td>
          </tr>
        </tbody>
      </table>

      <!-- Message Content -->
      <div style="background: #f8fafc; border-left: 4px solid ${brandTeal}; padding: 18px 20px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
        <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
          Customer Inquiry & Requirements:
        </p>
        <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">
${message || 'No additional message provided.'}
        </p>
      </div>

      <!-- Quick Action -->
      <div style="text-align: center; margin-top: 28px;">
        <a href="mailto:${email}?subject=Re:%20SpotOptics%20Quotation%20Inquiry%20-%20${encodeURIComponent(product || '')}" 
           style="background-color: ${brandTeal}; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-size: 14px; font-weight: 600; display: inline-block;">
          Reply Directly to ${name || 'Customer'}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 32px; font-size: 12px; color: #94a3b8; text-align: center;">
      <p style="margin: 0 0 4px 0;">
        SpotOptics S.r.l. &middot; Via Turazza 48, 35128 Padova (PD), Italy
      </p>
      <p style="margin: 0;">
        Phone: +39 049 8078529 &middot; Email: <a href="mailto:contact@spot-optics.com" style="color: ${brandTeal};">contact@spot-optics.com</a> &middot; <a href="https://www.spotoptics.com" style="color: ${brandTeal};">www.spotoptics.com</a>
      </p>
    </div>

  </div>
</body>
</html>
`;
}

/**
 * Builds standard MIME multipart/alternative payload.
 */
function buildMimeMessage({ from, to, replyTo, subject, text, html }) {
  const boundary = `----=_Part_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const messageId = `<${Date.now()}.${Math.random().toString(36).slice(2)}@spot-optics.com>`;
  const date = new Date().toUTCString();

  return [
    `From: ${from}`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: =?UTF-8?B?${Buffer.from(subject).toString('base64')}?=`,
    `Date: ${date}`,
    `Message-ID: ${messageId}`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    `Content-Type: text/plain; charset=UTF-8`,
    `Content-Transfer-Encoding: 7bit`,
    '',
    text,
    '',
    `--${boundary}`,
    `Content-Type: text/html; charset=UTF-8`,
    `Content-Transfer-Encoding: 8bit`,
    '',
    html,
    '',
    `--${boundary}--`,
    '',
  ].join('\r\n');
}

/**
 * Send an email using SMTP credentials.
 */
export async function sendSmtpEmail({
  to = process.env.QUOTE_RECEIVER_EMAIL || DEFAULT_RECEIVER_EMAIL,
  from = process.env.SMTP_FROM || `SpotOptics Quote System <${process.env.SMTP_USER || DEFAULT_RECEIVER_EMAIL}>`,
  replyTo,
  subject,
  text,
  html,
}) {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // If SMTP is not yet configured in .env, gracefully return a descriptive simulation status
  if (!host || !user || !pass) {
    return {
      sent: false,
      simulated: true,
      reason: 'SMTP credentials (SMTP_HOST, SMTP_USER, SMTP_PASS) are not fully configured in .env',
      details: {
        to,
        from,
        replyTo,
        subject,
      },
    };
  }

  const mimeData = buildMimeMessage({
    from,
    to,
    replyTo: replyTo || from,
    subject,
    text,
    html,
  });

  return new Promise((resolve, reject) => {
    let socket;
    let buffer = '';
    let step = 'CONNECT';

    const cleanUp = () => {
      try {
        if (socket && !socket.destroyed) {
          socket.end();
          socket.destroy();
        }
      } catch (e) {
        // ignore
      }
    };

    const timeoutTimer = setTimeout(() => {
      cleanUp();
      reject(new Error(`SMTP connection timed out at step ${step}`));
    }, 15000);

    const onConnected = () => {
      // Wait for server 220 banner
    };

    if (secure) {
      socket = tls.connect(
        {
          host,
          port,
          rejectUnauthorized: process.env.SMTP_IGNORE_TLS_ERROR !== 'true',
        },
        onConnected
      );
    } else {
      socket = net.connect({ host, port }, onConnected);
    }

    const sendCmd = (cmd) => {
      if (socket && !socket.destroyed) {
        socket.write(cmd + '\r\n');
      }
    };

    socket.on('error', (err) => {
      clearTimeout(timeoutTimer);
      cleanUp();
      reject(err);
    });

    socket.on('data', (chunk) => {
      buffer += chunk.toString();

      // Read complete SMTP multi-line or single-line response
      const lines = buffer.split('\r\n');
      buffer = lines.pop(); // Keep remaining partial line

      for (const line of lines) {
        if (!line) continue;
        const code = parseInt(line.substring(0, 3), 10);
        const isLastLine = line.charAt(3) === ' ' || line.length === 3;

        if (!isLastLine) continue; // multi-line continues

        // Handle states
        if (step === 'CONNECT') {
          if (code === 220) {
            step = 'EHLO';
            sendCmd(`EHLO spotoptics.com`);
          } else {
            clearTimeout(timeoutTimer);
            cleanUp();
            return reject(new Error(`SMTP Connect error: ${line}`));
          }
        } else if (step === 'EHLO') {
          if (code === 250) {
            step = 'AUTH_LOGIN';
            sendCmd('AUTH LOGIN');
          } else {
            clearTimeout(timeoutTimer);
            cleanUp();
            return reject(new Error(`SMTP EHLO failed: ${line}`));
          }
        } else if (step === 'AUTH_LOGIN') {
          if (code === 334) {
            step = 'AUTH_USER';
            sendCmd(Buffer.from(user).toString('base64'));
          } else {
            clearTimeout(timeoutTimer);
            cleanUp();
            return reject(new Error(`SMTP AUTH LOGIN rejected: ${line}`));
          }
        } else if (step === 'AUTH_USER') {
          if (code === 334) {
            step = 'AUTH_PASS';
            sendCmd(Buffer.from(pass).toString('base64'));
          } else {
            clearTimeout(timeoutTimer);
            cleanUp();
            return reject(new Error(`SMTP username rejected: ${line}`));
          }
        } else if (step === 'AUTH_PASS') {
          if (code === 235) {
            step = 'MAIL_FROM';
            const fromPure = from.match(/<([^>]+)>/)?.[1] || user;
            sendCmd(`MAIL FROM:<${fromPure}>`);
          } else {
            clearTimeout(timeoutTimer);
            cleanUp();
            return reject(new Error(`SMTP authentication failed: ${line}`));
          }
        } else if (step === 'MAIL_FROM') {
          if (code === 250) {
            step = 'RCPT_TO';
            const toPure = to.match(/<([^>]+)>/)?.[1] || to;
            sendCmd(`RCPT TO:<${toPure}>`);
          } else {
            clearTimeout(timeoutTimer);
            cleanUp();
            return reject(new Error(`SMTP MAIL FROM rejected: ${line}`));
          }
        } else if (step === 'RCPT_TO') {
          if (code === 250) {
            step = 'DATA';
            sendCmd('DATA');
          } else {
            clearTimeout(timeoutTimer);
            cleanUp();
            return reject(new Error(`SMTP RCPT TO rejected: ${line}`));
          }
        } else if (step === 'DATA') {
          if (code === 354) {
            step = 'SEND_BODY';
            socket.write(mimeData + '\r\n.\r\n');
          } else {
            clearTimeout(timeoutTimer);
            cleanUp();
            return reject(new Error(`SMTP DATA command rejected: ${line}`));
          }
        } else if (step === 'SEND_BODY') {
          if (code === 250) {
            step = 'QUIT';
            sendCmd('QUIT');
            clearTimeout(timeoutTimer);
            cleanUp();
            return resolve({ sent: true, response: line });
          } else {
            clearTimeout(timeoutTimer);
            cleanUp();
            return reject(new Error(`SMTP mail body rejected: ${line}`));
          }
        }
      }
    });
  });
}
