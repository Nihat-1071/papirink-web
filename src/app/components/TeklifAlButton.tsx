"use client";

import Link from "next/link";

type Props = {
  phone?: string; // 10 haneli yaz (başında 0 olmadan): 5312345678
  className?: string;
  children?: React.ReactNode;
  onClickExtra?: () => void; // ileride modal vb. için
};

function normalizeTRPhone(input: string) {
  // 0, boşluk, parantez, +90 vs temizle
  const digits = input.replace(/\D/g, "");
  if (digits.startsWith("90") && digits.length >= 12) return digits.slice(2);
  if (digits.startsWith("0") && digits.length >= 11) return digits.slice(1);
  return digits;
}

export default function TeklifAlButton({
  phone = "5312345678",
  className = "",
  children = "Teklif Al",
  onClickExtra,
}: Props) {
  const normalized = normalizeTRPhone(phone);

  return (
    <Link
      href={`tel:+90${normalized}`}
      className={className}
      onClick={() => onClickExtra?.()}
      aria-label={`${children} - telefonla ara`}
      title="Telefonla ara"
    >
      {children}
    </Link>
  );
}
