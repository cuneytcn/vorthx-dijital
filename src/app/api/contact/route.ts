import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Form validation schema
const contactSchema = z.object({
    name: z.string().min(2, 'Ad Soyad en az 2 karakter olmalıdır'),
    email: z.string().email('Geçerli bir e-posta adresi giriniz'),
    phone: z.string().optional(),
    company: z.string().optional(),
    service: z.string().min(1, 'Lütfen bir hizmet türü seçiniz'),
    budget: z.string().optional(),
    message: z.string().min(10, 'Mesajınız en az 10 karakter olmalıdır'),
});

type ContactData = z.infer<typeof contactSchema>;

// Mail gönderim fonksiyonu
async function sendContactMail(data: ContactData) {
    // Mail transporter (örnek: Gmail SMTP, kendi bilgilerinle değiştir)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.CONTACT_MAIL_USER,
            pass: process.env.CONTACT_MAIL_PASSWORD,
        },
    });

    // Mobil uyumlu, kutu görünümlü ve modern mail template
    const html = `
            <div style="font-family: Arial, sans-serif; background: #f4f6fb; padding: 16px;">
                <div style="max-width: 480px; margin: auto; background: #fff; border-radius: 14px; box-shadow: 0 2px 12px rgba(0,0,0,0.07); padding: 18px;">
                    <h2 style="color: #2a4d8f; margin-bottom: 18px; text-align:center; font-size: 1.4rem; letter-spacing:1px;">Yeni İletişim Formu Mesajı</h2>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="background: #f7f9fc; border-radius: 8px; padding: 12px 14px; font-size: 1rem;">
                            <strong style="color:#2a4d8f; width:110px; display:inline-block;">Ad Soyad:</strong> ${data.name}
                        </div>
                        <div style="background: #f7f9fc; border-radius: 8px; padding: 12px 14px; font-size: 1rem;">
                            <strong style="color:#2a4d8f; width:110px; display:inline-block;">E-posta:</strong> ${data.email}
                        </div>
                        <div style="background: #f7f9fc; border-radius: 8px; padding: 12px 14px; font-size: 1rem;">
                            <strong style="color:#2a4d8f; width:110px; display:inline-block;">Telefon:</strong> ${data.phone || '-'}
                        </div>
                        <div style="background: #f7f9fc; border-radius: 8px; padding: 12px 14px; font-size: 1rem;">
                            <strong style="color:#2a4d8f; width:110px; display:inline-block;">Şirket:</strong> ${data.company || '-'}
                        </div>
                        <div style="background: #f7f9fc; border-radius: 8px; padding: 12px 14px; font-size: 1rem;">
                            <strong style="color:#2a4d8f; width:110px; display:inline-block;">Hizmet:</strong> ${data.service}
                        </div>
                        <div style="background: #f7f9fc; border-radius: 8px; padding: 12px 14px; font-size: 1rem;">
                            <strong style="color:#2a4d8f; width:110px; display:inline-block;">Bütçe:</strong> ${data.budget || '-'}
                        </div>
                        <div style="background: #eaf1fb; border-radius: 8px; padding: 14px 16px; font-size: 1.05rem; color: #333;">
                            <strong style="color:#2a4d8f; width:110px; display:inline-block;">Mesaj:</strong><br>
                            <span style="display:block; margin-top:6px;">${data.message}</span>
                        </div>
                    </div>
                    <div style="margin-top: 24px; text-align: center; color: #aaa; font-size: 13px;">
                        Vorthx Dijital | İletişim Formu
                    </div>
                </div>
            </div>
        `;

    // Mail options
    const mailOptions = {
        from: `Vorthx Dijital <${process.env.CONTACT_MAIL_USER}>`,
        to: process.env.CONTACT_MAIL_RECEIVER, // Senin mail adresin
        subject: 'Yeni İletişim Formu Mesajı',
        html,
    };

    // Mail gönder
    return transporter.sendMail(mailOptions);
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validatedData = contactSchema.parse(body);

        // Mail gönder
        await sendContactMail(validatedData);

        return NextResponse.json(
            {
                success: true,
                message:
                    'Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapılacaktır.',
                data: validatedData,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('İletişim formu hatası:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Form verilerinde hata var',
                    errors: error.issues,
                },
                { status: 400 }
            );
        }
        return NextResponse.json(
            {
                success: false,
                message: 'Sunucu hatası. Lütfen daha sonra tekrar deneyiniz.',
            },
            { status: 500 }
        );
    }
}

// GET metodu (test için)
export async function GET() {
    return NextResponse.json(
        {
            message: 'Contact API with Nodemailer integration',
            endpoints: {
                POST: '/api/contact - İletişim formu göndermek için (mail ile)',
            },
            mail_status: 'configured',
        },
        { status: 200 }
    );
}
