// WordPress Headless CMS Integration
// Contact Form & Content Management

interface WordPressConfig {
    baseUrl: string;
    username?: string;
    password?: string;
    token?: string;
}

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    service: string;
    budget?: string;
    message: string;
}

interface WordPressResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
}

// WordPress konfigürasyonu
const wpConfig: WordPressConfig = {
    baseUrl:
        process.env.WORDPRESS_API_URL ||
        'https://your-wordpress-site.com/wp-json',
    username: process.env.WORDPRESS_USERNAME,
    password: process.env.WORDPRESS_PASSWORD,
    // Ya da Application Password token
    token: process.env.WORDPRESS_TOKEN,
};

// Temel WordPress API client
class WordPressClient {
    private config: WordPressConfig;

    constructor(config: WordPressConfig) {
        this.config = config;
    }

    private async makeRequest<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<WordPressResponse<T>> {
        try {
            const url = `${this.config.baseUrl}${endpoint}`;

            // Authentication headers
            const headers: Record<string, string> = {
                'Content-Type': 'application/json',
                ...(options.headers as Record<string, string>),
            };

            // Basic Auth ya da Token Auth
            if (this.config.username && this.config.password) {
                const auth = btoa(
                    `${this.config.username}:${this.config.password}`
                );
                headers.Authorization = `Basic ${auth}`;
            } else if (this.config.token) {
                headers.Authorization = `Bearer ${this.config.token}`;
            }

            const response = await fetch(url, {
                ...options,
                headers,
            });

            if (!response.ok) {
                throw new Error(
                    `WordPress API Error: ${response.status} ${response.statusText}`
                );
            }

            const data = await response.json();
            return { success: true, data };
        } catch (error) {
            console.error('WordPress API Request Error:', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }

    // Contact form gönderimi
    async submitContactForm(
        formData: ContactFormData
    ): Promise<WordPressResponse> {
        return this.makeRequest('/wp/v2/contact-submissions', {
            method: 'POST',
            body: JSON.stringify({
                title: `İletişim Formu - ${formData.name}`,
                content: `
                    <h3>Yeni İletişim Formu Mesajı</h3>
                    <p><strong>Ad Soyad:</strong> ${formData.name}</p>
                    <p><strong>E-posta:</strong> ${formData.email}</p>
                    ${formData.phone ? `<p><strong>Telefon:</strong> ${formData.phone}</p>` : ''}
                    ${formData.company ? `<p><strong>Şirket:</strong> ${formData.company}</p>` : ''}
                    <p><strong>Hizmet Türü:</strong> ${formData.service}</p>
                    ${formData.budget ? `<p><strong>Bütçe:</strong> ${formData.budget}</p>` : ''}
                    <p><strong>Mesaj:</strong></p>
                    <p>${formData.message}</p>
                `,
                status: 'private',
                meta: {
                    contact_name: formData.name,
                    contact_email: formData.email,
                    contact_phone: formData.phone || '',
                    contact_company: formData.company || '',
                    contact_service: formData.service,
                    contact_budget: formData.budget || '',
                    contact_date: new Date().toISOString(),
                },
            }),
        });
    }

    // Test bağlantısı
    async testConnection(): Promise<WordPressResponse> {
        return this.makeRequest('/wp/v2/types');
    }
}

// WordPress client instance
export const wpClient = new WordPressClient(wpConfig);

// Helper functions
export async function submitContactToWordPress(
    formData: ContactFormData
): Promise<WordPressResponse> {
    return wpClient.submitContactForm(formData);
}

export async function testWordPressConnection(): Promise<WordPressResponse> {
    return wpClient.testConnection();
}
