import { siteConfig } from '@/config/site.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | Vorthx Dijital',
    description:
        'Vorthx Dijital gizlilik politikası. Kişisel verilerinizin nasıl korunduğu ve işlendiği hakkında detaylı bilgi.',
    robots: 'index, follow',
};

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 pt-24 pb-16">
                <div className="mx-auto max-w-4xl">
                    <h1 className="mb-8 text-4xl font-bold text-gray-900">
                        Gizlilik Politikası
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="mb-8 text-gray-600">
                            Son güncelleme:{' '}
                            {new Date().toLocaleDateString('tr-TR')}
                        </p>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                1. Giriş
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Vorthx Dijital olarak, kişisel verilerinizin
                                korunmasına büyük önem veriyoruz. Bu gizlilik
                                politikası, web sitemizi ziyaret ettiğinizde
                                hangi bilgileri topladığımızı, bu bilgileri
                                nasıl kullandığımızı ve koruduğumuzu açıklar.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                2. Topladığımız Bilgiler
                            </h2>
                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                2.1 Kişisel Bilgiler
                            </h3>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Web sitemizi kullanırken aşağıdaki kişisel
                                bilgileri toplayabiliriz:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>Ad ve soyad</li>
                                <li>E-posta adresi</li>
                                <li>Telefon numarası</li>
                                <li>Şirket bilgileri</li>
                                <li>İletişim formu mesajları</li>
                            </ul>

                            <h3 className="mb-2 text-xl font-medium text-gray-800">
                                2.2 Teknik Bilgiler
                            </h3>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>IP adresi</li>
                                <li>Tarayıcı türü ve sürümü</li>
                                <li>İşletim sistemi</li>
                                <li>Ziyaret edilen sayfalar</li>
                                <li>Site içi navigasyon davranışları</li>
                                <li>Çerez verileri</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                3. Bilgilerin Kullanım Amaçları
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Topladığımız bilgileri aşağıdaki amaçlarla
                                kullanırız:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>Hizmet taleplerinize yanıt vermek</li>
                                <li>Müşteri destek hizmeti sağlamak</li>
                                <li>Web sitemizi iyileştirmek</li>
                                <li>
                                    Pazarlama ve promosyon faaliyetleri
                                    (onayınız dahilinde)
                                </li>
                                <li>
                                    Yasal yükümlülüklerimizi yerine getirmek
                                </li>
                                <li>Güvenlik ve dolandırıcılık önleme</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                4. Bilgi Paylaşımı
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Kişisel bilgilerinizi aşağıdaki durumlar dışında
                                üçüncü taraflarla paylaşmayız:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>Açık rızanızın bulunması</li>
                                <li>Yasal zorunluluklar</li>
                                <li>Mahkeme kararları</li>
                                <li>
                                    Hizmet sağlayıcılarımız (veri işleme
                                    sözleşmesi çerçevesinde)
                                </li>
                                <li>Şirket devri veya birleşme durumları</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                5. Veri Güvenliği
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Kişisel verilerinizin güvenliği için aşağıdaki
                                teknik ve idari tedbirleri alırız:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>SSL şifreleme teknolojisi</li>
                                <li>Güvenli sunucu altyapısı</li>
                                <li>Düzenli güvenlik güncellemeleri</li>
                                <li>Erişim kontrolü ve yetkilendirme</li>
                                <li>Veri yedekleme sistemleri</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                6. Çerezler (Cookies)
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Web sitemiz, kullanıcı deneyimini iyileştirmek
                                için çerezler kullanır. Çerez kullanımı hakkında
                                detaylı bilgi için
                                <a
                                    href="/cerez-politikasi"
                                    className="ml-1 text-blue-600 hover:underline">
                                    Çerez Politikamızı
                                </a>{' '}
                                inceleyebilirsiniz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                7. Haklarınız (KVKK Kapsamında)
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                6698 sayılı Kişisel Verilerin Korunması Kanunu
                                kapsamında aşağıdaki haklara sahipsiniz:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>
                                    Kişisel verilerin işlenip işlenmediğini
                                    öğrenme
                                </li>
                                <li>
                                    İşlenen kişisel veriler hakkında bilgi talep
                                    etme
                                </li>
                                <li>
                                    İşleme amacını ve bunların amacına uygun
                                    kullanılıp kullanılmadığını öğrenme
                                </li>
                                <li>
                                    Yurt içinde veya yurt dışında kişisel
                                    verilerin aktarıldığı üçüncü kişileri bilme
                                </li>
                                <li>
                                    Eksik veya yanlış işlenmiş verilerin
                                    düzeltilmesini isteme
                                </li>
                                <li>
                                    Kişisel verilerin silinmesini veya yok
                                    edilmesini isteme
                                </li>
                                <li>
                                    Düzeltme, silme ve yok etme işlemlerinin
                                    üçüncü kişilere bildirilmesini isteme
                                </li>
                                <li>
                                    İşlenen verilerin münhasıran otomatik
                                    sistemler vasıtasıyla analiz edilmesi
                                    suretiyle kişinin aleyhine bir sonucun
                                    ortaya çıkmasına itiraz etme
                                </li>
                                <li>
                                    Kişisel verilerin kanuna aykırı olarak
                                    işlenmesi sebebiyle zarara uğranması halinde
                                    zararın giderilmesini talep etme
                                </li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                8. Veri Saklama Süresi
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Kişisel verilerinizi, işleme amacının
                                gerektirdiği süre boyunca ve yasal
                                yükümlülüklerimiz çerçevesinde saklarız. Genel
                                saklama süreleri:
                            </p>
                            <ul className="mb-4 list-disc pl-6 text-gray-700">
                                <li>İletişim form verileri: 3 yıl</li>
                                <li>
                                    Pazarlama izinleri: İzin geri alınana kadar
                                </li>
                                <li>Web sitesi logları: 1 yıl</li>
                                <li>
                                    Müşteri kayıtları: 10 yıl (yasal zorunluluk)
                                </li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                9. Değişiklikler
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Bu gizlilik politikasını zaman zaman
                                güncelleyebiliriz. Önemli değişiklikler için
                                size bildirimde bulunacağız. Güncel versiyonu
                                her zaman web sitemizden takip edebilirsiniz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                                10. İletişim
                            </h2>
                            <p className="mb-4 leading-relaxed text-gray-700">
                                Gizlilik politikamız hakkında sorularınız için
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
                    </div>
                </div>
            </div>
        </div>
    );
}
