import Link from "next/link";
import { Github } from "lucide-react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex justify-center items-center">
        <div className="content-max-width my-4 flex justify-center">{children}</div>
      </div>
      <div className="w-full py-4 mt-auto flex justify-center">
        <div className="content-max-width flex">
          <div className="">
            <Link
              href="/"
              className="hover:text-gray-700 transition-colors font-semibold"
            >
              fsmvu
            </Link>
          </div>
          <div className="ml-auto">
            <Link
              href="https://github.com/bedirhanyildirim/fsmvu.com"
              className="hover:text-gray-700 transition-colors"
              target="_blank"
            >
              <Github />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
