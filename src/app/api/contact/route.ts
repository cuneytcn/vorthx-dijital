import { submitContactToWordPress } from '@/lib/wordpress';
import { NextRequest, NextResponse } from 'next/server';
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

export async function POST(request: NextRequest) {
    try {
        // Request body'yi parse et
        const body = await request.json();

        // Zod ile validasyon
        const validatedData = contactSchema.parse(body);

        // WordPress'e gönder
        const wpResponse = await submitContactToWordPress(validatedData);

        if (!wpResponse.success) {
            // WordPress'e gönderilemedi ama local olarak loglayalım
            console.error("WordPress'e gönderim başarısız:", wpResponse.error);
            console.log('Form verisi (local backup):', validatedData);

            // Kullanıcıya başarılı mesaj dön (fallback)
            return NextResponse.json(
                {
                    success: true,
                    message:
                        'Mesajınız alındı. En kısa sürede dönüş yapılacaktır.',
                    data: validatedData,
                    warning:
                        'WordPress bağlantısı sağlanamadı, mesajınız kayıt altına alındı.',
                },
                { status: 200 }
            );
        }

        // WordPress'e başarılı gönderim
        console.log("WordPress'e başarıyla gönderildi:", wpResponse.data);

        // Başarılı yanıt
        return NextResponse.json(
            {
                success: true,
                message:
                    'Mesajınız başarıyla alındı. En kısa sürede dönüş yapılacaktır.',
                data: validatedData,
                wordpress_id: wpResponse.data?.id,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('İletişim formu hatası:', error);

        // Zod validation hatası
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

        // Genel hata
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
            message: 'Contact API with WordPress integration',
            endpoints: {
                POST: '/api/contact - İletişim formu göndermek için (WordPress entegreli)',
            },
            wordpress_status: 'configured',
        },
        { status: 200 }
    );
}
