import Link from "next/link";
import React from "react";

export default function ThemeLogo() {
  return (
    <div className="">
      <Link
        href="/"
        className="hover:text-gray-700 transition-colors font-semibold"
      >
        fsmvu.com
      </Link>
    </div>
  );
}
