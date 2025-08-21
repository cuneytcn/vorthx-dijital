import { siteConfig } from '@/config/site.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kullanım Koşulları | Vorthx Dijital',
    description:
        'Vorthx Dijital web sitesi kullanım koşulları. Hizmetlerimizi kullanırken uymanız gereken kurallar ve şartlar.',
    robots: 'index, follow',
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 pt-24 pb-16">
                <div className="mx-auto max-w-4xl">
                    <h1 className="mb-8 text-4xl font-bold text-gray-900">
                        Kullanım Koşulları
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="mb-8 text-gray-600">
                            Son güncelleme:{' '}
                            {new Date().toLocaleDateString('tr-TR')}
                        </p>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                1. Giriş ve Kabul
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Bu kullanım koşulları, Vorthx Dijital web
                                sitesini (vorthxdijital.com) ve sunduğumuz
                                hizmetleri kullanımınızı düzenler. Web sitemizi
                                kullanarak bu koşulları kabul etmiş
                                sayılırsınız.
                            </p>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Bu koşulları kabul etmiyorsanız, web sitemizi
                                kullanmamanızı rica ederiz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                2. Tanımlar
                            </h2>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>
                                    <strong>Şirket:</strong> Vorthx Dijital
                                </li>
                                <li>
                                    <strong>Web sitesi:</strong>{' '}
                                    vorthxdijital.com ve alt sayfaları
                                </li>
                                <li>
                                    <strong>Kullanıcı:</strong> Web sitemizi
                                    ziyaret eden ve hizmetlerimizi kullanan kişi
                                    veya kuruluş
                                </li>
                                <li>
                                    <strong>Hizmetler:</strong> Web tasarım,
                                    dijital pazarlama, SEO ve diğer dijital
                                    çözümlerimiz
                                </li>
                                <li>
                                    <strong>İçerik:</strong> Web sitemizdeki tüm
                                    yazılı, görsel ve işitsel materyaller
                                </li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                3. Web Sitesi Kullanımı
                            </h2>
                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                3.1 İzin Verilen Kullanım
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Web sitemizi aşağıdaki amaçlarla
                                kullanabilirsiniz:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>Hizmetlerimiz hakkında bilgi edinmek</li>
                                <li>
                                    İletişim formları aracılığıyla bizimle
                                    iletişime geçmek
                                </li>
                                <li>Blog yazılarını okumak</li>
                                <li>Projelerimizi incelemek</li>
                            </ul>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                3.2 Yasaklanan Faaliyetler
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Web sitemizi kullanırken aşağıdaki faaliyetlerde
                                bulunmak yasaktır:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>Yasadışı amaçlarla kullanım</li>
                                <li>Zararlı yazılım yükleme veya yayma</li>
                                <li>
                                    Sistemi hackleme veya güvenlik açığı arama
                                </li>
                                <li>
                                    Spam mesaj veya istenmeyen içerik gönderme
                                </li>
                                <li>
                                    Başkalarının kişisel bilgilerini çalmaya
                                    çalışma
                                </li>
                                <li>Telif hakkı ihlali</li>
                                <li>Yanıltıcı veya aldatıcı bilgi verme</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                4. Hizmetlerimiz
                            </h2>
                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                4.1 Hizmet Kapsamı
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Sunduğumuz başlıca hizmetler:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>Web tasarım ve geliştirme</li>
                                <li>E-ticaret çözümleri</li>
                                <li>Mobil uygulama geliştirme</li>
                                <li>SEO hizmetleri</li>
                                <li>Sosyal medya yönetimi</li>
                                <li>Dijital pazarlama</li>
                            </ul>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                4.2 Hizmet Sözleşmeleri
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Hizmetlerimizden yararlanmak için ayrı hizmet
                                sözleşmeleri imzalanır. Bu sözleşmeler, proje
                                detayları, süreler, ödemeler ve sorumlulukları
                                belirler.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                5. Fikri Mülkiyet Hakları
                            </h2>
                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                5.1 Web Sitesi İçeriği
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Web sitemizdeki tüm içerikler (yazılar,
                                görseller, logolar, tasarımlar) Vorthx
                                Dijital'in fikri mülkiyetidir. İzinsiz kullanım
                                yasaktır.
                            </p>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                5.2 Müşteri Projeleri
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Müşterilerimiz için geliştirdiğimiz projelerin
                                fikri mülkiyet hakları, hizmet sözleşmesinde
                                belirtilen şartlara göre belirlenir.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                6. Sorumluluk Sınırlandırması
                            </h2>
                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                6.1 Web Sitesi Kullanımı
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Web sitemizi kendi riskinizle kullanırsınız.
                                Aşağıdaki durumlardan sorumlu değiliz:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>Web sitesinin kesintiye uğraması</li>
                                <li>Teknik arızalar</li>
                                <li>Veri kaybı</li>
                                <li>
                                    Üçüncü taraf bağlantılarından kaynaklanan
                                    sorunlar
                                </li>
                                <li>Virüs veya zararlı yazılım bulaşması</li>
                            </ul>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                6.2 Hizmet Sınırlamaları
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Hizmetlerimizin kalitesi ve sonuçları, projenin
                                karmaşıklığı, müşteri işbirliği ve dış
                                faktörlere bağlıdır. Belirli sonuçları garanti
                                etmeyiz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                7. Gizlilik
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Kişisel verilerinizin korunması konusundaki
                                yaklaşımımız
                                <a
                                    href="/gizlilik-politikasi"
                                    className="text-blue-600 hover:underline">
                                    Gizlilik Politikamızda
                                </a>{' '}
                                detaylandırılmıştır.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                8. Ödeme ve Faturalama
                            </h2>
                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                8.1 Ödeme Koşulları
                            </h3>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>
                                    Ödemeler proje sözleşmesinde belirlenen
                                    şartlara göre yapılır
                                </li>
                                <li>
                                    Genellikle %50 peşin, %50 teslimat ödemesi
                                    uygulanır
                                </li>
                                <li>Ödemeler Türk Lirası olarak yapılır</li>
                                <li>Geç ödemeler için faiz uygulanabilir</li>
                            </ul>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                8.2 İptal ve İade
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                İptal ve iade koşulları proje sözleşmesinde
                                belirtilir. Genel olarak başlanan projelerde
                                kısmi iade uygulanır.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                9. Uyuşmazlık Çözümü
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Bu koşullardan doğan uyuşmazlıklar öncelikle
                                dostane yollarla çözülmeye çalışılır.
                                Çözülemezse İzmir mahkemeleri yetkilidir ve Türk
                                hukuku uygulanır.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                10. Değişiklikler
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Bu kullanım koşullarını önceden haber
                                vermeksizin değiştirebiliriz. Değişiklikler web
                                sitesinde yayınlandığı anda yürürlüğe girer.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                11. İletişim
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Kullanım koşulları hakkında sorularınız için:
                            </p>
                            <div className="rounded-lg bg-gray-50 p-6">
                                <p className="mb-2 text-gray-700">
                                    <strong>Şirket:</strong> Vorthx Dijital
                                </p>
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

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                12. Yürürlük
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Bu kullanım koşulları, web sitemizi kullanmaya
                                başladığınız anda yürürlüğe girer ve
                                kullanımınız boyunca geçerliliğini korur.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
