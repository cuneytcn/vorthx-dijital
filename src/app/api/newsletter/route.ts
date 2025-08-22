import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();
        if (!email) {
            return new Response(
                JSON.stringify({ error: 'Email is required.' }),
                { status: 400 }
            );
        }

        // SMTP ayarları
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.CONTACT_MAIL_USER,
                pass: process.env.CONTACT_MAIL_PASSWORD,
            },
        });

        // Mail içeriği
        await transporter.sendMail({
            from: `Vorthx Dijital <${process.env.CONTACT_MAIL_USER}>`,
            to: process.env.CONTACT_MAIL_RECEIVER, // Senin mail adresin
            subject: 'Yeni Bülten Abonesi',
            html: `<p>Yeni bülten abonesi: <strong>${email}</strong></p>`,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Mail gönderilemedi.' }), {
            status: 500,
        });
    }
}
