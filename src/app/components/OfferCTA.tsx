import Link from "next/link";

export default function OfferCTA() {
  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-extrabold">
        Fiyat & Uyumluluk Bilgisi
      </h3>

      <p className="mt-2 text-sm text-slate-600 max-w-2xl">
        Ürün uyumluluğu, güncel fiyat ve stok bilgisi için bize doğrudan ulaşın.
        Teknik ekibimiz hızlıca yardımcı olur.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {/* Telefon */}
        <a
          href="tel:+905XXXXXXXXX"
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-blue-700"
        >
          📞 Telefonla Ara
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/905XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-green-500 bg-green-50 px-5 py-3 text-sm font-extrabold text-green-700 hover:bg-green-100"
        >
          💬 WhatsApp
        </a>

        {/* Mail */}
        <a
          href="mailto:info@papirink.com?subject=Teklif%20Talebi"
          className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
        >
          ✉️ Mail Gönder
        </a>
      </div>
    </div>
  );
}
