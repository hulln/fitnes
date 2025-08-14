import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, name, date, time } = req.body;

  try {
    await resend.emails.send({
      from: 'noreply@resend.dev', // You can use a verified sender or Resend's default
      to: email,
      subject: 'Potrditev rezervacije',
  html: `<h2>Pozdravljen/a, ${name}!</h2><p>Uspešno si rezerviral/a termin za <b>${date} ob ${time}</b>.</p><p>Hvala za zaupanje! 💪</p>`,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Napaka pri pošiljanju e-pošte.' });
  }
}
// Removed duplicate and invalid code below the main handler function