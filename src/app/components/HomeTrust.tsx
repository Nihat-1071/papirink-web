// src/app/components/HomeTrust.tsx
import { ShieldCheck, Truck, Award } from "lucide-react";

const ITEMS = [
  {
    title: "Güvenli Alışveriş",
    desc: "Şeffaf süreç, güvenilir hizmet.",
    icon: ShieldCheck,
  },
  {
    title: "Hızlı Teslimat",
    desc: "Stoktan çıkış, hızlı kargo.",
    icon: Truck,
  },
  {
    title: "Yüksek Kalite",
    desc: "Baskıda net sonuç, güçlü ürün.",
    icon: Award,
  },
];

export default function HomeTrust() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Papirink’te alışveriş rahat
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
          Ürün, tedarik ve teslimat sürecinde hızlı ve güvenilir ilerleriz.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-8 text-center shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
            >
              {/* soft glow */}
              <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl opacity-0 transition group-hover:opacity-100" />

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-sky-200 bg-gradient-to-b from-white to-sky-50 text-sky-700 shadow-sm transition group-hover:scale-[1.03]">
                <Icon size={44} strokeWidth={1.6} />
              </div>

              <div className="mt-5 text-base font-extrabold text-slate-900">
                {item.title}
              </div>

              <p className="mt-2 text-sm text-slate-600">
                {item.desc}
              </p>

              {/* subtle bottom line */}
              <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-slate-900/10 transition group-hover:bg-sky-300/60" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
