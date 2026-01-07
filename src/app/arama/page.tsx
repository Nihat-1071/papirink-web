import { Suspense } from "react";
import AramaClient from "./AramaClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
      <AramaClient />
    </Suspense>
  );
}
