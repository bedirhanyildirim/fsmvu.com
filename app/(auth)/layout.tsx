import DefaultFooter from "@/components/theme/footer";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex justify-center items-center">
        <div className="content-max-width my-4 flex justify-center">{children}</div>
      </div>
      <DefaultFooter />
    </div>
  );
};

export default AuthLayout;
