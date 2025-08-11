import CookieModal from '@/app/(routes)/(legal)/cerez-politikasi/components/cookie-modal';
import { siteConfig } from '@/config/site.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Çerez Politikası | Vorthx Dijital',
    description:
        'Vorthx Dijital çerez politikası. Web sitemizde kullanılan çerezler ve amaçları hakkında detaylı bilgi.',
    robots: 'index, follow',
};

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 pt-24 pb-16">
                <div className="mx-auto max-w-4xl">
                    <h1 className="mb-8 text-4xl font-bold text-gray-900">
                        Çerez Politikası
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="mb-8 text-gray-600">
                            Son güncelleme:{' '}
                            {new Date().toLocaleDateString('tr-TR')}
                        </p>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                1. Çerez Nedir?
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Çerezler (cookies), web sitelerinin
                                kullanıcıların bilgisayarlarında veya mobil
                                cihazlarında sakladığı küçük metin dosyalarıdır.
                                Bu dosyalar, web sitesinin daha iyi çalışmasını
                                sağlar ve kullanıcı deneyimini iyileştirir.
                            </p>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Çerezler, size kişisel olarak tanımlanabilir
                                bilgiler içermez, ancak size sunduğumuz
                                kişiselleştirilmiş deneyimle
                                ilişkilendirilebilir.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                2. Çerez Türleri
                            </h2>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                2.1 Saklama Süresine Göre
                            </h3>
                            <div className="mb-4">
                                <h4 className="mb-2 text-lg font-medium text-gray-800">
                                    Oturum Çerezleri (Session Cookies)
                                </h4>
                                <p className="mb-4 leading-relaxed text-gray-700">
                                    Tarayıcınızı kapattığınızda otomatik olarak
                                    silinen geçici çerezlerdir. Web sitesinin
                                    temel işlevlerini yerine getirmek için
                                    kullanılır.
                                </p>

                                <h4 className="mb-2 text-lg font-medium text-gray-800">
                                    Kalıcı Çerezler (Persistent Cookies)
                                </h4>
                                <p className="mb-4 leading-relaxed text-gray-700">
                                    Belirli bir süre boyunca cihazınızda kalan
                                    çerezlerdir. Tercihlerinizi hatırlamak ve
                                    gelecek ziyaretlerinizde daha iyi deneyim
                                    sunmak için kullanılır.
                                </p>
                            </div>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                2.2 Kaynağına Göre
                            </h3>
                            <div className="mb-4">
                                <h4 className="mb-2 text-lg font-medium text-gray-800">
                                    Birinci Taraf Çerezleri
                                </h4>
                                <p className="mb-4 leading-relaxed text-gray-700">
                                    Doğrudan web sitemiz tarafından ayarlanan
                                    çerezlerdir. Site işlevselliği ve kullanıcı
                                    deneyimi için kritiktir.
                                </p>

                                <h4 className="mb-2 text-lg font-medium text-gray-800">
                                    Üçüncü Taraf Çerezleri
                                </h4>
                                <p className="mb-4 leading-relaxed text-gray-700">
                                    Google Analytics, Facebook Pixel gibi dış
                                    hizmetler tarafından ayarlanan çerezlerdir.
                                    Analitik ve pazarlama amaçları için
                                    kullanılır.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                3. Kullandığımız Çerez Kategorileri
                            </h2>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                3.1 Zorunlu Çerezler
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Web sitesinin temel işlevlerini yerine getirmek
                                için gerekli çerezlerdir. Bu çerezler olmadan
                                site düzgün çalışmaz.
                            </p>
                            <div className="mb-4 rounded-lg bg-gray-50 p-4">
                                <p className="text-sm text-gray-700">
                                    <strong>Amaç:</strong> Güvenlik, oturum
                                    yönetimi, form verileri
                                    <br />
                                    <strong>Saklama Süresi:</strong> Oturum
                                    boyunca
                                    <br />
                                    <strong>Üçüncü Taraf:</strong> Hayır
                                </p>
                            </div>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                3.2 Performans Çerezleri
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Web sitesinin performansını ölçmek ve
                                iyileştirmek için kullanılan çerezlerdir.
                            </p>
                            <div className="mb-4 rounded-lg bg-gray-50 p-4">
                                <p className="text-sm text-gray-700">
                                    <strong>Amaç:</strong> Sayfa yükleme
                                    süreleri, hata takibi
                                    <br />
                                    <strong>Saklama Süresi:</strong> 2 yıl
                                    <br />
                                    <strong>Üçüncü Taraf:</strong> Google
                                    Analytics
                                </p>
                            </div>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                3.3 Analitik Çerezleri
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Ziyaretçi davranışlarını anlamak ve site
                                içeriğini iyileştirmek için kullanılır.
                            </p>
                            <div className="mb-4 rounded-lg bg-gray-50 p-4">
                                <p className="text-sm text-gray-700">
                                    <strong>Amaç:</strong> Ziyaretçi
                                    istatistikleri, sayfa görüntülemeleri
                                    <br />
                                    <strong>Saklama Süresi:</strong> 2 yıl
                                    <br />
                                    <strong>Üçüncü Taraf:</strong> Google
                                    Analytics
                                </p>
                            </div>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                3.4 Pazarlama Çerezleri
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Size daha uygun reklamlar göstermek ve pazarlama
                                kampanyalarının etkinliğini ölçmek için
                                kullanılır.
                            </p>
                            <div className="mb-4 rounded-lg bg-gray-50 p-4">
                                <p className="text-sm text-gray-700">
                                    <strong>Amaç:</strong> Hedefli reklamlar,
                                    kampanya takibi
                                    <br />
                                    <strong>Saklama Süresi:</strong> 1 yıl
                                    <br />
                                    <strong>Üçüncü Taraf:</strong> Facebook
                                    Pixel, Google Ads
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                4. Kullandığımız Spesifik Çerezler
                            </h2>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-300 bg-white">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="border px-4 py-2 text-left">
                                                Çerez Adı
                                            </th>
                                            <th className="border px-4 py-2 text-left">
                                                Amaç
                                            </th>
                                            <th className="border px-4 py-2 text-left">
                                                Süre
                                            </th>
                                            <th className="border px-4 py-2 text-left">
                                                Tür
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr>
                                            <td className="border px-4 py-2">
                                                _ga
                                            </td>
                                            <td className="border px-4 py-2">
                                                Google Analytics - Kullanıcı
                                                tanımlama
                                            </td>
                                            <td className="border px-4 py-2">
                                                2 yıl
                                            </td>
                                            <td className="border px-4 py-2">
                                                Analitik
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">
                                                _ga_[ID]
                                            </td>
                                            <td className="border px-4 py-2">
                                                Google Analytics 4 - Oturum
                                                verisi
                                            </td>
                                            <td className="border px-4 py-2">
                                                2 yıl
                                            </td>
                                            <td className="border px-4 py-2">
                                                Analitik
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">
                                                _fbp
                                            </td>
                                            <td className="border px-4 py-2">
                                                Facebook Pixel - Dönüşüm takibi
                                            </td>
                                            <td className="border px-4 py-2">
                                                3 ay
                                            </td>
                                            <td className="border px-4 py-2">
                                                Pazarlama
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">
                                                PHPSESSID
                                            </td>
                                            <td className="border px-4 py-2">
                                                Oturum yönetimi
                                            </td>
                                            <td className="border px-4 py-2">
                                                Oturum
                                            </td>
                                            <td className="border px-4 py-2">
                                                Zorunlu
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2">
                                                cookieconsent
                                            </td>
                                            <td className="border px-4 py-2">
                                                Çerez tercihi hatırlama
                                            </td>
                                            <td className="border px-4 py-2">
                                                1 yıl
                                            </td>
                                            <td className="border px-4 py-2">
                                                Zorunlu
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                5. Çerez Kontrolü
                            </h2>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                5.1 Çerez Tercihlerinizi Yönetme
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Çerez tercihlerinizi aşağıdaki yollarla kontrol
                                edebilirsiniz:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>
                                    Web sitemizin alt kısmındaki çerez ayarları
                                    bağlantısını kullanarak
                                </li>
                                <li>Tarayıcınızın ayarlar menüsünden</li>
                                <li>
                                    Çerez banner'ındaki seçenekleri kullanarak
                                </li>
                            </ul>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                5.2 Tarayıcı Ayarları
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Popüler tarayıcılarda çerez ayarları:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>
                                    <strong>Chrome:</strong> Ayarlar {'>'}{' '}
                                    Gizlilik ve güvenlik {'>'} Çerezler
                                </li>
                                <li>
                                    <strong>Firefox:</strong> Ayarlar {'>'}{' '}
                                    Gizlilik ve Güvenlik {'>'} Çerezler
                                </li>
                                <li>
                                    <strong>Safari:</strong> Tercihler {'>'}{' '}
                                    Gizlilik {'>'} Çerezler
                                </li>
                                <li>
                                    <strong>Edge:</strong> Ayarlar {'>'}{' '}
                                    Çerezler ve site izinleri
                                </li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                6. Çerez Reddi Sonuçları
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Çerezleri reddetmeniz durumunda aşağıdaki
                                durumlar oluşabilir:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>
                                    Bazı site özelliklerinin düzgün çalışmaması
                                </li>
                                <li>Tercihlerinizin hatırlanmaması</li>
                                <li>Form verilerinizin kaybolması</li>
                                <li>Kişiselleştirilmiş içerik görememe</li>
                                <li>Site performansının ölçülememesi</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                7. Üçüncü Taraf Hizmetleri
                            </h2>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                7.1 Google Analytics
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Web site trafiğini analiz etmek için Google
                                Analytics kullanırız. Bu hizmet hakkında daha
                                fazla bilgi için:
                                <a
                                    href="https://policies.google.com/privacy"
                                    className="ml-1 text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Google Gizlilik Politikası
                                </a>
                            </p>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                7.2 Facebook Pixel
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Pazarlama kampanyalarımızın etkinliğini ölçmek
                                için Facebook Pixel kullanırız. Daha fazla
                                bilgi:
                                <a
                                    href="https://www.facebook.com/privacy/policy/"
                                    className="ml-1 text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Facebook Gizlilik Politikası
                                </a>
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                8. Güncellemeler
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Bu çerez politikasını zaman zaman
                                güncelleyebiliriz. Önemli değişiklikler için
                                size bildirimde bulunacağız. Güncel versiyonu
                                her zaman web sitemizden takip edebilirsiniz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                9. İletişim
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Çerez politikamız hakkında sorularınız için
                                bizimle iletişime geçebilirsiniz:
                            </p>
                            <div className="rounded-lg bg-gray-50 p-6">
                                <p className="mb-2 text-gray-700">
                                    <strong>E-posta:</strong>{' '}
                                    {siteConfig.contact.email}
                                </p>
                                <p className="mb-2 text-gray-700">
                                    <strong>Telefon:</strong>{' '}
                                    {siteConfig.contact.phone}
                                </p>
                                <p className="text-gray-700">
                                    <strong>Adres:</strong>{' '}
                                    {siteConfig.contact.address}
                                </p>
                            </div>
                        </section>

                        <div className="mt-12 rounded-lg bg-blue-50 p-6">
                            <h3 className="mb-2 text-lg font-semibold text-blue-900">
                                💡 Çerez Tercihleri
                            </h3>
                            <p className="mb-4 text-blue-800">
                                Çerez tercihlerinizi istediğiniz zaman
                                değiştirebilirsiniz. Sayfanın alt kısmındaki
                                "Çerez Ayarları" bağlantısını kullanın.
                            </p>
                            <CookieModal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
