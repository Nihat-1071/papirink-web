import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const dynamic = "error";

export default function NotFound() {
  return (
    <>
    <Header/>
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/brand/papirink-logo.webp"
          alt="Papirink"
          width={220}
          height={80}
          priority
          className="mx-auto"
        />
      </div>

      {/* 404 */}
      <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Aradığınız sayfa bulunamadı
      </h2>

      {/* Kısa açıklama */}
      <p className="max-w-xl text-gray-600 mb-10">
        Papirink; plotter kağıtları, kartuş, toner, mürekkep ve baskı çözümleri
        alanında profesyonel ürünler sunar. Aradığınız içerik taşınmış veya
        kaldırılmış olabilir.
      </p>

      {/* Yönlendirme butonları */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition"
        >
          Ana Sayfa
        </Link>

        <Link
          href="/urunler"
          className="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition"
        >
          Ürünler
        </Link>
      </div>
    </main>
    <Footer/>
    </>
  );
}
