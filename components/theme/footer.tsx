import { Github, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";
import { version } from "@/package.json";
import ThemeLogo from "@/components/theme/logo";

export default function DefaultFooter() {
  return (
    <div className="w-full border-t py-4 mt-auto flex justify-center">
      <div className="content-max-width flex flex-col gap-2">
        <div className="w-full flex justify-between">
        <ThemeLogo />
        </div>
        <div className="w-full grid grid-cols-3 items-center gap-10">
          <div className="flex gap-1 text-xs text-gray-700">
            <p>v{version}</p>
            <p>{process.env.NODE_ENV}</p>
          </div>
          <h3 className=""></h3>
          <h3 className="flex gap-4 justify-end">
            <Link
              href="https://github.com/bedirhanyildirim/fsmvu.com"
              className="hover:text-gray-700 transition-colors"
              target="_blank"
            >
              <Github />
            </Link>
            <Link
              href="https://www.instagram.com/fsmvucom"
              className="hover:text-gray-700 transition-colors"
              target="_blank"
            >
              <Instagram />
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
