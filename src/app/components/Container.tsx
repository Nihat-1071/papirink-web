import React from "react";

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
