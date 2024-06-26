"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "../components/Breadcrumb";

export default function Tamplete({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="">
      <div className="">
        <Breadcrumb pathname={pathname} />
      </div>
      <div>{children}</div>
    </div>
  );
}
