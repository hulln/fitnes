import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, name, date, time, payment, message } = await req.json();

  try {
    // Send to user
    await resend.emails.send({
      from: 'noreply@resend.dev',
      to: email,
      subject: 'Potrditev rezervacije',
      html: `
        <div style="font-family:Arial,sans-serif; background:#18181b; color:#fff; padding:32px; border-radius:16px;">
          <h1 style="font-size:2rem; margin-bottom:0.5em;">💪🔥 Bravo, ${name}! 🔥💪</h1>
          <p style="font-size:1.1rem;">
            Tvoj termin za <b>${date} ob ${time}</b> je rezerviran!<br/>
            <span style="font-size:1.5em;">🏋️‍♂️</span>
          </p>
          <p style="margin:1.5em 0; font-size:1.1rem;">
            Brate, zdaj ni več izgovorov! (Obisk obvezen, ker stran (še) nima implementirane možnosti preklica rezervacije. Hehe.<br/>
            Pripravi se na <b>pump</b> stoletja!<br/>
            <span style="font-size:1.5em;">🔥🥇🏆</span>
          </p>
          <p style="font-size:1.1rem;">
            Če prideš, dobiš <b>respekt</b> ekipe in protein shake gratis. (No, to mogoče še ne.)<br/>
            Če ne prideš ... pazi se! 😜
          </p>
          <hr style="margin:2em 0; border:0; border-top:1px solid #333;">
          <p style="font-size:1rem;">
            Vidimo se v gymu!<br/>
            <b>Kontejnerska Telovadnica Crew</b> 🏋️‍♂️<br/>
            <span style="font-size:1.2em;">#NoExcuses #BalkanStrength</span>
          </p>
        </div>
      `,
    });

    // Send to admin
    await resend.emails.send({
      from: 'noreply@resend.dev',
      to: 'nivea.miki@gmail.com',
      subject: `NOVA REZERVACIJA: ${name} (${date} ob ${time})`,
      html: `
        <div style="font-family:Arial,sans-serif; background:#18181b; color:#fff; padding:32px; border-radius:16px;">
          <h1 style="font-size:2rem; margin-bottom:0.5em;">Nova rezervacija!</h1>
          <p>
            <b>Ime:</b> ${name}<br/>
            <b>Email:</b> ${email}<br/>
            <b>Datum:</b> ${date}<br/>
            <b>Termin:</b> ${time}<br/>
            <b>Plačilo:</b> ${payment || '-'}<br/>
            <b>Sporočilo:</b> ${message ? message.replace(/\n/g, '<br/>') : '-'}
          </p>
        </div>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Napaka pri pošiljanju e-pošte.' }, { status: 500 });
  }
}
