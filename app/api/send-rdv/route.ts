// Next.js App Router API route — drop this file in: app/api/send-rdv/route.ts
// Reads RESEND_API_KEY from your env (Vercel → Settings → Environment Variables).
// Sends an email to ag@nexperio.com with the form contents, then returns { ok: true }.
// The client-side form already redirects to Calendly after success.

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

type RdvPayload = {
  symptom?: string;
  urgency?: string;
  name?: string;
  email?: string;
  company?: string;
  body?: string;
};

function escapeHtml(s: string = '') {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as RdvPayload;

    // Minimal validation
    if (!data.email || !data.name) {
      return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
    }

    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, sans-serif; color:#0a2238; max-width:600px;">
        <div style="background:#0a2238; color:#fff; padding:24px;">
          <p style="margin:0 0 4px; font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:#ff8a00;">Nexperio · Nouvelle consultation</p>
          <h1 style="margin:0; font-size:24px; font-weight:600;">Une nouvelle demande de RDV</h1>
        </div>
        <div style="padding:24px; background:#faf7f2; border:1px solid #e8e2d5;">
          <table style="width:100%; border-collapse:collapse; font-size:14px;">
            <tr><td style="padding:8px 0; color:#8a96a3; width:140px;">Nom</td><td style="padding:8px 0; font-weight:600;">${escapeHtml(data.name)}</td></tr>
            <tr><td style="padding:8px 0; color:#8a96a3;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color:#ff6600;">${escapeHtml(data.email)}</a></td></tr>
            <tr><td style="padding:8px 0; color:#8a96a3;">Entreprise</td><td style="padding:8px 0;">${escapeHtml(data.company || '—')}</td></tr>
            <tr><td style="padding:8px 0; color:#8a96a3;">Symptôme</td><td style="padding:8px 0;">${escapeHtml(data.symptom || '—')}</td></tr>
            <tr><td style="padding:8px 0; color:#8a96a3;">Urgence</td><td style="padding:8px 0;">${escapeHtml(data.urgency || '—')}</td></tr>
          </table>
          <div style="margin-top:24px; padding-top:16px; border-top:1px solid #e8e2d5;">
            <p style="margin:0 0 8px; color:#8a96a3; font-size:12px; letter-spacing:0.1em; text-transform:uppercase;">Description détaillée</p>
            <p style="margin:0; white-space:pre-wrap; line-height:1.6;">${escapeHtml(data.body || '—')}</p>
          </div>
        </div>
        <p style="margin:16px 0 0; font-size:12px; color:#8a96a3;">Le patient sera redirigé vers Calendly pour choisir un créneau.</p>
      </div>
    `;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Nexperio <noreply@nexperio.com>',     // requires nexperio.com verified in Resend
      to: ['ag@nexperio.com'],
      replyTo: data.email,
      subject: `Nouvelle consultation · ${data.name}${data.company ? ' · ' + data.company : ''}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('send-rdv error:', err);
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 });
  }
}
