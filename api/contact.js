import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { nama, email, subjek, pesan } = req.body;

  if (!nama || !email || !pesan) {
    return res.status(400).json({ message: 'Nama, email, dan pesan wajib diisi.' });
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'autophile000@gmail.com',
      subject: `[Portofolio] ${subjek || 'Pesan Baru'} - dari ${nama}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00f2ff; border-bottom: 2px solid #00f2ff; padding-bottom: 10px;">
            Pesan Baru dari Portofolio
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Nama</td>
              <td style="padding: 8px;">${nama}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Subjek</td>
              <td style="padding: 8px;">${subjek || '-'}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #555; vertical-align: top;">Pesan</td>
              <td style="padding: 8px; white-space: pre-wrap;">${pesan}</td>
            </tr>
          </table>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            Pesan ini dikirim melalui formulir kontak di portofolio Ricky Prasetyo.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Pesan berhasil dikirim!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Gagal mengirim pesan. Coba lagi.' });
  }
}
