"use client";

import { usePathname } from "next/navigation";

export default function Tamplete({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="">
      <div>{children}</div>
    </div>
  );
}
