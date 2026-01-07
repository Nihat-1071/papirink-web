// src/app/kurumsal/satis-sozlesmesi/page.tsx

import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTopProgress from "../../components/ScrollToTopProgress";
import { CONTACT } from "../../lib/contact";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/kurumsal/satis-sozlesmesi";

export const metadata: Metadata = {
  title: "Satış Sözleşmesi | Papirink",
  description:
    "Satışa ilişkin ön bilgilendirme belgesi ve sözleşme metni (mesafeli satış sözleşmesi).",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Satış Sözleşmesi | Papirink",
    description:
      "Satışa ilişkin ön bilgilendirme belgesi ve sözleşme metni (mesafeli satış sözleşmesi).",
    type: "website",
    siteName: "Papirink",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satış Sözleşmesi | Papirink",
    description:
      "Satışa ilişkin ön bilgilendirme belgesi ve sözleşme metni (mesafeli satış sözleşmesi).",
  },
};

export default function SatisSozlesmesiPage() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Kurumsal", href: "/kurumsal" },
    { label: "Satış Sözleşmesi", href: "/kurumsal/satis-sozlesmesi" },
  ];

  return (
    <>
      <Header />
      <ScrollToTopProgress />

      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          {/* HERO */}
          <section className="mt-5 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.55]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div className="relative grid gap-6 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700">
                    Kurumsal
                    <span className="h-1 w-1 rounded-full bg-neutral-400" />
                    Satış Sözleşmesi
                  </p>

                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    SATIŞA İLİŞKİN ÖN BİLGİLENDİRME BELGESİ VE SÖZLEŞME METNİ
                  </h1>

                  <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-700">
                    Aşağıda yer alan metin, mesafeli satış sözleşmesine ilişkin
                    bilgilendirme ve sözleşme hükümlerini içerir.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="/iletisim"
                      className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                    >
                      İletişim
                    </a>
                    <a
                      href={`tel:${CONTACT?.phone ?? ""}`}
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                    >
                      Hızlı İletişim
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm">
                    <p className="text-sm font-semibold text-neutral-900">
                      Not
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-700">
                      Bu sayfadaki metin bilgilendirme amaçlıdır. İhtiyaç halinde
                      bizimle iletişime geçebilirsiniz.
                    </p>
                    <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-4">
                      <p className="text-xs font-medium text-neutral-600">
                        Kurumsal
                      </p>
                      <p className="mt-1 text-sm leading-6 text-neutral-800">
                        Banka bilgileri ve teslimat bilgileri sayfalarına da göz
                        atabilirsiniz.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          href="/kurumsal/banka-bilgilerimiz"
                          className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-900 shadow-sm transition hover:shadow"
                        >
                          Banka Bilgilerimiz
                        </a>
                        <a
                          href="/kurumsal/teslimat-bilgileri"
                          className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-900 shadow-sm transition hover:shadow"
                        >
                          Teslimat Bilgileri
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTENT */}
          <section className="mt-10">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="space-y-10">
                {/* Madde 1-2-3 */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-neutral-900">
                    Madde 1 - Taraflar
                  </h2>

                  <div className="space-y-3 text-base leading-7 text-neutral-700">
                    <p className="font-semibold text-neutral-900">1.1. Satıcı:</p>
                    <p className="font-semibold text-neutral-900">
                      PAPİRİNK KAĞIT KIRTASİYE MAKİNA BASKI SİSTEMLERİ SANAYİ TİCARET
                      LİMİTED ŞİRKETİ
                    </p>
                    <p>
                      Adresi: Bademlik Mahallesi Bademlik Yolu Caddesi No 105 - B
                      Keçiören - Ankara
                    </p>
                    <p>
                      Telefon: 0312 580 10 06 E- Mail : info@papirink.com.tr
                    </p>

                    <p className="mt-4 font-semibold text-neutral-900">1.2. Alıcı:</p>
                    <p>
                      Müşteri olarak Papirink.com sitesine üye olan kişinin üye
                      olurken veya sipariş verirken kullanılan adres ve iletişim
                      bilgileri esas alınır.
                    </p>
                  </div>

                  <h2 className="pt-2 text-xl font-semibold text-neutral-900">
                    Madde 2 - Konu: Mesafeli Satış Sözleşmesi
                  </h2>
                  <p className="text-base leading-7 text-neutral-700">
                    İşbu sözleşmenin konusu, ALICI’nın SATICI’ya ait Papirink.com
                    internet sitesinden elektronik ortamda siparişini yaptığı aşağıda
                    nitelikleri ve satış ücreti belirtilen ürünün satışı ve teslimi
                    ile ilgili olarak 4077 sayılı Tüketicilerin Korunması Hakkındaki
                    Kanun ve Mesafeli Sözleşmelere Dair Yönetmelik hükümleri gereğince
                    tarafların hak ve yükümlülüklerinin saptanmasıdır. Alıcı, satıcının
                    isim, unvan, açık adres, telefon ve diğer erişim bilgileri, satışa
                    konu malın temel nitelikleri, vergiler dahil olmak üzere satış fiyatı,
                    ödeme şekli, teslimat koşulları ve masrafları vs. satışa konu mal ile
                    ilgili tüm ön bilgiler ve “cayma” hakkının kullanılması ve bu hakkın
                    nasıl kullanılacağı, şikayet ve itirazlarını iletebilecekleri resmi
                    makamlar vs. konusunda açık, anlaşılır ve internet ortamına uygun
                    şekilde satıcı tarafından bilgilendirildiğini, bu ön bilgileri
                    elektronik ortamda teyit ettiğini ve sonrasında mal sipariş verdiğini
                    iş bu sözleşme hükümlerince kabul ve beyan eder. Papirink.com sitesinde
                    yer alan ön bilgilendirme ve alıcı tarafından verilen sipariş üzerine
                    düzenlenen fatura iş bu sözleşmenin ayrılmaz parçalarıdır.
                  </p>

                  <h2 className="pt-2 text-xl font-semibold text-neutral-900">
                    Madde 3 - Sözleşme Konusu Ürün/Ödeme/Teslimat Bilgileri
                  </h2>
                  <p className="text-base leading-7 text-neutral-700">
                    Elektronik ortamda alınan ürün/ürünlerin cinsi ve türü, miktarı,
                    marka/modeli, satış bedeli, ödeme şekli, teslim alacak kişi, teslimat
                    adresi, fatura bilgileri, kargo ücreti siparişin sonlandığı andaki
                    bilgilerden oluşmaktadır. Fatura edilecek kişi ile sözleşmeyi yapan
                    kişi aynı olmak zorundadır. Aşağıda yer alan bilgiler doğru ve eksiksiz
                    olmalıdır. Bu bilgilerin doğru olmaması veya noksan olduğu durumlardan
                    doğacak zararları tamamıyla karşılamayı alıcı kabul eder ayrıca bu
                    durumda oluşabilecek her türlü sorumluluğu alıcı kabul eder. SATICI
                    gerekli gördüğü durumlarda, ALICI’nın vermiş olduğu bilgiler gerçekle
                    örtüşmediğinde, siparişi durdurma hakkını saklı tutar. SATICI siparişte
                    sorun tespit ettiği durumlarda ALICI’nın vermiş olduğu telefon, e-posta
                    ve posta adreslerinden ALICI’ya ulaşamadığı takdirde siparişin yürürlüğe
                    koyulmasını 15 (onbeş) gün süreyle dondurur. ALICI’nın bu süre zarfında
                    SATICI ile konuyla ilgili olarak iletişime geçmesi beklenir. Bu süre
                    içerisinde ALICI’dan herhangi bir cevap alınamazsa SATICI, her iki tarafın
                    da zarar görmemesi için siparişi iptal eder.
                  </p>
                </div>

                {/* Madde 4-5-6 */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-neutral-900">
                    Madde 4 - Sözleşme Tarihi ve Mücbir Nedenler
                  </h2>
                  <p className="text-base leading-7 text-neutral-700">
                    Sözleşme tarihi, alıcı tarafından siparişin verildiği tarihtir.
                    Sözleşmenin imzalandığı tarihte mevcut olmayan veya öngörülemeyen,
                    tarafların kontrolleri dışında gelişen, ortaya çıkmasıyla taraflardan
                    birinin ya da her ikisinin de sözleşme ile yüklendikleri borç ve
                    sorumluluklarını kısmen ya da tamamen yerine getirmelerini ya da bunları
                    zamanında yerine getirmelerini olanaksızlaştıran durumlar, mücbir sebep
                    (Doğal afet, savaş, terör, ayaklanma, değişen mevzuat hükümleri, el koyma
                    veya grev, lokavt, üretim ve iletişim tesislerinde önemli ölçüde arıza vb.)
                    olarak kabul edilecektir. Mücbir sebep şahsında gerçekleşen taraf, diğer
                    tarafa durumu derhal ve yazılı olarak bildirecektir. Mücbir sebebin devamı
                    esnasında tarafların edimlerini yerine getirememelerinden dolayı herhangi
                    bir sorumluluk doğmayacaktır. İşbu mücbir sebep durumu 30 (otuz) gün süreyle
                    devam ederse, taraflardan her birinin, tek taraflı olarak fesih hakkı doğmuş
                    olacaktır.
                  </p>

                  <h2 className="text-xl font-semibold text-neutral-900">
                    Madde 5 - Satıcının Hak ve Yükümlülükleri-Mesafeli Satış Sözleşmesi
                  </h2>
                  <div className="space-y-3 text-base leading-7 text-neutral-700">
                    <p>
                      5.1. Satıcı, 4077 sayılı Tüketicilerin Korunması Hakkındaki Kanun ve
                      Mesafeli Sözleşmelere Dair Yönetmelik hükümleri uyarınca sözleşmede
                      kendisine yüklenen edimleri mücbir haller dışında eksiksiz yerine
                      getirmeyi kabul ve taahhüt eder.
                    </p>
                    <p>
                      5.2. 18 (on sekiz) yaşından küçük kişiler Papirink.com internet
                      sitesinden alışveriş yapamaz. Satıcı, alıcının sözleşmede belirttiği
                      yaşının doğru olduğunu esas alacaktır. Ancak alıcının yaşını yanlış
                      yazmasından dolayı satıcıya hiçbir şekilde sorumluluk yüklenemeyecektir.
                    </p>
                    <p>
                      5.3. Sistem hatalarından meydana gelen fiyat yanlışlıklarından Papirink.com
                      sorumlu değildir. Buna istinaden satıcı, internet sitesindeki sistemden,
                      dizayndan veya yasadışı yollarla internet sitesine yapılabilecek müdahaleler
                      sebebiyle ortaya çıkabilecek tanıtım, fiyat hatalarından sorumlu değildir.
                      Sistem hatalarına dayalı olarak alıcı satıcıdan hak iddiasında bulunamaz.
                    </p>
                    <p>
                      5.4. Papirink.com internet sitesinde kredi kartı (Visa, MasterCard, vs.)
                      ya da banka havalesi ile alışveriş yapılabilir. Sipariş tarihinden itibaren
                      bir hafta içinde havalesi yapılmayan siparişler iptal edilir. Siparişlerin
                      işleme alınma zamanı, siparişin verildiği an değil, kredi kartı hesabından
                      gerekli tahsilatın yapıldığı ya da havalenin (EFT’nin) banka hesaplarına
                      ulaştığı belirlenen andır. Ödemeli gönderi ya da posta çeki gibi müşteri
                      hizmetleri ile görüşülmeden gerçekleştirilen ödeme yöntemleri kabul edilmez.
                    </p>
                  </div>

                  <h2 className="text-xl font-semibold text-neutral-900">
                    Madde 6 - Alıcının Hak ve Yükümlülükleri - Mesafeli Satış Sözleşmesi
                  </h2>
                  <div className="space-y-3 text-base leading-7 text-neutral-700">
                    <p>
                      6.1. Alıcı, sözleşmede kendisine yüklenen edimleri mücbir sebepler dışında
                      eksiksiz yerine getirmeyi kabul ve taahhüt eder.
                    </p>
                    <p>
                      6.2. Alıcı, sipariş vermekle birlikte iş sözleşme hükümlerini kabul etmiş
                      sayıldığını ve sözleşmede belirtilen ödeme şekline uygun ödemeyi yapacağını
                      kabul ve taahhüt eder.
                    </p>
                    <p>
                      6.3. Alıcı, Papirink.com internet sitesinden satıcının isim, unvan, açık
                      adres, telefon ve diğer erişim bilgileri, satışa konu malın temel nitelikleri,
                      vergiler dahil olmak üzere satış fiyatı, ödeme şekli, teslimat koşulları ve
                      masrafları vs. satışa konu mal ile ilgili tüm ön bilgiler ve “cayma” hakkının
                      kullanılması ve bu hakkın nasıl kullanılacağı, şikayet ve itirazlarını
                      iletebilecekleri resmi makamlar vs. konusunda açık, anlaşılır ve internet
                      ortamına uygun şekilde bilgi sahibi olduğunu bu ön bilgileri elektronik
                      ortamda teyit ettiğini kabul ve beyan eder.
                    </p>
                    <p>
                      6.4. Bir önceki maddeye bağlı olarak ALICI, ürün sipariş ve ödeme koşullarının,
                      ürün kullanım talimatlarının, olası durumlara karşı alınan tedbirlerin ve yapılan
                      uyarıların olduğu Papirink.com sipariş/ödeme/kullanım prosedürü bilgilerini okuyup
                      bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini beyan eder.
                    </p>
                    <p>
                      6.5. Alıcı, aldığı ürünü iade etmek istemesi durumunda ne surette olursa olsun
                      ürüne ve ambalajına zarar vermemeyi, iade anında fatura aslını ve irsaliyesini
                      iade etmeyi kabul ve taahhüt eder.
                    </p>
                  </div>
                </div>

                {/* Madde 7 */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-neutral-900">
                    Madde 7 - Sipariş/Ödeme Prosedürü
                  </h2>

                  <div className="space-y-4 text-base leading-7 text-neutral-700">
                    <p className="font-semibold text-neutral-900">
                      Sipariş: Mesafeli Satış Sözleşmesi
                    </p>
                    <p>
                      Alışveriş sepetine eklenen ürünlerin KDV dahil TL tutarı alıcı tarafından
                      onaylandıktan sonra, ilgili banka kartının posu üzerinden işleme alınır. .
                      Süreçteki herhangi bir aksama durumu ya da kredi kartı ile ilgili ortaya
                      çıkabilecek problemler alıcıya sözleşmede belirttiği telefon/faks/e-posta
                      yollarından biri veya birkaçı kullanılmak sureti ile bildirilir. Gerekirse
                      alıcıdan bankası ile görüşmesi istenebilir. Siparişlerin işleme alınma zamanı,
                      siparişin verildiği an değil, kredi kartı hesabından gerekli tahsilatın yapıldığı
                      ya da havalenin (EFT’ nin) satıcı hesaplarına ulaştığının belirlendiği andır.
                      İstisnai olarak haklı bir nedenle sözleşme konusu malın tedarik edilemeyeceğinin
                      anlaşılması ve/veya stok problemi ile karşılaşılması durumunda alıcı hemen açık
                      ve anlaşılır bir şekilde bilgilendirilip onay vermesi durumunda alıcıya eşit
                      kalitede ve fiyatta başka bir mal gönderilebilir ya da alıcının arzusu ve seçimi
                      doğrultusunda yeni olan başka bir ürün gönderilebilir, ürünün stoklara girmesi
                      ya da teslim e engel diğer engelin ortadan kalkması beklenebilir ve/veya sipariş
                      iptal edilebilir. Sözleşme konusu malın teslim yükümlülüğünün yerine
                      getirilmesinin imkânsızlaştığı hâllerde alıcı bu durumdan haberdar edilerek
                      ödemiş olduğu toplam bedel ve varsa onu borç altına sokan her türlü belge en geç
                      on gün içinde kendisine iade edilerek sözleşme iptal edilir. Böyle bir durumda
                      alıcının satıcıdan ilave herhangi bir maddi ve manevi zarar talebi olmayacaktır.
                    </p>

                    <p className="font-semibold text-neutral-900">
                      Ödeme: Mesafeli Satış Sözleşmesi
                    </p>
                    <p>
                      Papirink.com internet sitesinde, internet ortamında kredi kartı bilgilerini
                      kullanmak istemeyen alıcılara nakit havale ile sipariş imkanları sunulmuştur.
                      Havale ile ödemede alıcı kendisine en uygun bankayı seçip havalesini yapabilir.
                      Eğer EFT yapılmışsa hesaba geçme tarihi dikkate alınacaktır. Havale ve/veya EFT
                      yaparken “Gönderen Bilgileri”nin fatura bilgileri ile aynı olması ve sipariş
                      numarasının yazılması gereklidir. Ürünün tesliminden sonra Alıcı’ya ait kredi
                      kartının Alıcı’nın kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız
                      veya hukuka aykırı olarak kullanılması nedeni ile ilgili banka veya finans kuruluşu
                      ürün bedelini Satıcı’ya ödememesi halinde, Alıcı’nın kendisine teslim edilmiş ürünü
                      10 gün içinde Satıcı’ya göndermesi zorunludur. Bu tür durumlarda nakliye giderleri
                      Alıcı’ya aittir. Alıcı kredi kartı ile ödeme yapmayı tercih etmiş ise ALICI, ilgili
                      faiz oranlarını ve temerrüt faizi ile ilgili bilgileri bankasından ayrıca teyit
                      edeceğini, yürürlükte bulunan mevzuat hükümleri gereğince faiz ve temerrüt faizi
                      ile ilgili hükümlerin Banka ve ALICI arasındaki “Kredi Kartı Sözleşmesi” kapsamında
                      uygulanacağını kabul, beyan ve taahhüt eder.
                    </p>
                  </div>
                </div>

                {/* Madde 8 */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-neutral-900">
                    Madde 8 - Ürün İade ve Cayma Hakkına İlişkin Prosedürü
                  </h2>

                  <div className="space-y-4 text-base leading-7 text-neutral-700">
                    <p className="font-semibold text-neutral-900">
                      Ürün İade: Mesafeli Satış Sözleşmesi
                    </p>
                    <p>
                      Alıcı malı teslim aldıktan sonra yedi gün gün içerisinde herhangi bir gerekçe
                      göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir.
                      385 sayılı vergi usul kanunu genel tebliği uyarınca iade işlemlerinin yapılabilmesi
                      için alıcının mal ile birlikte teslim edilen satıcıya ait 2 adet faturanın alt
                      kısmındaki iade bölümlerini eksiksiz ve doğru şekilde doldurduktan sonra imzalayarak
                      bir nüshasını ürün ile birlikte satıcıya göndermesi diğer nüshasını da uhdesinde
                      tutması gerekmektedir. Cayma hakkı süresi alıcıya malın teslim edildiği günden itibaren
                      başlar. Cayma hakkkı kapsamında iade edilen ürün veya ürünlerin kargo bedeli satıcı
                      tarafından karşılanır. Alıcının istekleri ve/veya açıkça onun kişisel ihtiyaçları
                      doğrultusunda hazırlanan mallar için cayma hakkı söz konusu değildir. Alıcının cayma
                      hakkını kullanması halinde satıcı, cayma bildirimini içeren faturanın ürünle birlikte
                      kendisine ulaşmasından itibaren en geç on gün içerisinde almış olduğu toplam bedeli
                      ve varsa tüketiciyi borç altına sokan her türlü belgeyi tüketiciye hiçbir masraf
                      yüklemeden iade edecektir. Teslim alınmış olan malın değerinin azalması veya iadeyi
                      imkânsız kılan bir nedenin varlığı cayma hakkının kullanılmasına engel değildir. Ancak
                      değer azalması veya iadenin imkânsızlaşması tüketicinin kusurundan kaynaklanıyorsa
                      satıcıya malın değerini veya değerindeki azalmayı tazmin etmesi gerekir. Sehven alınan
                      her ürün için de gene iade süresi 7 gündür. Bu süre içerisinde, ambalajı açılmış,
                      kullanılmış, tahrip edilmiş vesaire şekildeki ürünler iadesi kabul edilmez. İade,
                      orijinal ambalaj ile yapılmalıdır. Sehven alınan üründe ve ambalajında herhangi bir
                      açılma, bozulma, kırılma, tahrip, yırtılma, kullanılmış ve sair durumlar tespit edildiği
                      hallerde ve ürünün alıcıya teslim edildiği andaki hali ile iade edilememesi durumunda
                      ürün iade alınmaz ve bedeli iade edilmez. Ürün iadesi için, durum öncelikli olarak müşteri
                      hizmetlerine iletilmelidir. Ürünün iade olarak gönderilme bilgisi, satıcı tarafından müşteriye
                      iletilir. Bu görüşmeden sonra ürün iade ile ilgili bilgileri içeren fatura ile birlikte alıcı
                      adresine teslimatı yapan kargo şirketi kanalıyla satıcıya ulaştırmalıdır. Satıcıya ulaşan
                      iade ürün iş bu sözleşmede belirtilen koşulları sağladığı taktirde iade olarak kabul edilir,
                      geri ödemesi de alıcı kredi kartına/hesabına yapılır. Ürün iade edilmeden bedel iadesi yapılmaz.
                      Kredi Kartına yapılan iadelerin kredi kartı hesaplarına yansıma süresi ilgili bankanın
                      tasarrufundadır. Alışveriş kredi kartı ile ve taksitli olarak yapılmışsa kredi kartına iade
                      prosedürü şu şekilde uygulanacaktır; Alıcı ürünü kaç taksit ile satın alma talebini iletmiş ise,
                      banka alıcıya geri ödemesini taksitle yapmaktadır. Satıcı, bankaya ürün bedelinin tamamını tek
                      seferde ödedikten sonra, banka POS’larından yapılan taksitli harcamaların alıcının kredi kartına
                      iadesi durumundakonuyu muhatil tarafların mağdur duruma düşmemesi için talep edilen iade tutarları
                      yine taksitli olarak hamil taraf hesaplarına banka tarafından aktarılır. Alıcının satış iptaline
                      kadar ödemiş olduğu taksit tutarları, eğer iade tarihi ile kartın hesap kesim tarihleri çakışmazsa
                      her ay karta 1(bir) iade yansıyacak ve alıcı iade öncesinde ödemiş olduğu taksitleri satışın
                      taksitleri bittikten sonra, iade tarihinden önce ödemiş olduğu taksit sayısı kadar ay daha alacak
                      ve mevcut borçlarından düşmüş olacaktır. Kart ile alınmış mal ve hizmetin iadesi durumunda satıcı,
                      banka ile yapmış olduğu sözleşme gereği alıcıya nakit para ile ödeme yapamaz. Üye işyeri yani satıcı,
                      bir iade işlemi söz konusu olduğunda ilgili yazılım aracılığı ile iadesini yapacak olup, üye işyeri
                      yani satıcı ilgili tutarı bankaya nakden veya mahsuben ödemekle yükümlü olduğundan yukarıda detayları
                      belirtilen prosedür gereğince alıcıya nakit olarak ödeme yapılamamaktadır. Kredi kartına iade alıcının
                      bankaya bedeli tek seferde ödemesinden sonra, banka tarafından yukarıdaki prosedür gereğince yapılacaktır.
                    </p>
                  </div>
                </div>

                {/* Madde 10-11 */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-neutral-900">
                    Madde 10 - Garanti - Mesafeli Satış Sözleşmesi
                  </h2>

                  <div className="space-y-3 text-base leading-7 text-neutral-700">
                    <p>
                      1. Kartuş setleri ve diğer ürünlerde ürün fabrikasyon hataları olması durumunda
                      garanti kapsamında olarak değerlendirilir ve garanti süresi ürünün kullanıcı/müşteri
                      tarafından teslim alındığı tarihten itibaren kartuş gövdeleri için 12 ay, kartuş
                      çipleri için 6 ay, diğer ürünler için 2 yıldır. Garanti kapsamındaki hizmetler
                      firmamızın teknik departmanı tarafından sağlanmaktadır.
                    </p>
                    <p>
                      2. Ürün'ün kullanım kılavuzunda yer alan hususlara aykırı kullanılmasından
                      kaynaklanan arızalar garanti kapsamı dışındadır.
                    </p>
                    <p>3. Bu garanti aşağıda sayılan durumlarda geçersiz olur.</p>
                    <p>- Arızanın doğrudan malzeme hatası, kalitesiz tasarım ya da işçilik nedeni ile meydana gelmemesi durumunda.</p>
                    <p>- Ürünün tahrip edilmiş olması durumunda.</p>
                  </div>

                  <h2 className="text-xl font-semibold text-neutral-900">
                    Madde 11 - Gizlilik - Mesafeli Satış Sözleşmesi
                  </h2>
                  <p className="text-base leading-7 text-neutral-700">
                    Alıcı tarafından iş bu sözleşmede belirtilen bilgiler ile ödeme yapmak amacı ile
                    satıcıya bildirdiği bilgiler satıcı tarafından 3. şahıslarla paylaşılmayacaktır.
                    Satıcı bu bilgileri sadece idari/yasal zorunluluğun mevcudiyeti çerçevesinde
                    açıklayabilecektir. Araştırma ehliyeti belgelenmiş her türlü adli soruşturma dahilinde
                    satıcı kendisinden istenen bilgiyi elinde bulunduruyorsa ilgili makama sağlayabilir.
                  </p>
                </div>

                {/* CTA */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm font-semibold text-neutral-900">Destek</p>
                  <p className="mt-1 text-sm leading-6 text-neutral-700">
                    Sözleşme metniyle ilgili sorularınız için iletişim sayfamızdan bize ulaşabilirsiniz.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="/iletisim"
                      className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                    >
                      İletişime Geç
                    </a>
                    <a
                      href="/kurumsal"
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                    >
                      Kurumsal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
