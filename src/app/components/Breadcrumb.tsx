"use client";

import Link from "next/link";
import React from "react";

const Breadcrumb = ({ pathname }: { pathname: string }) => {
  const separateSegments = pathname.split("/").filter((segment) => segment);
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <div className="flex overflow-hidden rounded-none  text-gray-600">
        {separateSegments.map((segment) => {
          switch (segment) {
            case "home":
              return (
                <Link
                  key={segment}
                  href={`/${segment}`}
                  className="flex items-center"
                >
                  <div className="flex h-7 items-center gap-1.5  px-4 transition hover:text-gray-900">
                    <span className="ms-1.5 text-xs font-medium">
                      {segment.toUpperCase()}
                    </span>
                  </div>
                </Link>
              );
            default:
              return (
                <Link
                  key={segment}
                  href={segment}
                  className="relative flex items-center"
                >
                  <div className="flex h-7 items-center  pe-4 ps-8 text-xs font-medium transition hover:text-gray-900">
                    {segment.toUpperCase()}
                  </div>
                </Link>
              );
          }
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;
