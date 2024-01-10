import Link from "next/link";
import DefaultFooter from "@/components/theme/footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="w-full border-b py-4 flex justify-center">
        <div className="content-max-width flex">
          <div className="">
            <Link
              href="/"
              className="hover:text-gray-700 transition-colors font-semibold"
            >
              fsmvu
            </Link>
          </div>
          <div className="ml-auto flex gap-4 text-sm">
            <Link href="/signin">Giriş Yap</Link>
            <Link href="/signup">Üye Ol</Link>
          </div>
        </div>
      </div>
      <div className="h-full flex justify-center">
        <div className="content-max-width my-4">{children}</div>
      </div>
      <DefaultFooter />
    </div>
  );
};

export default DefaultLayout;
