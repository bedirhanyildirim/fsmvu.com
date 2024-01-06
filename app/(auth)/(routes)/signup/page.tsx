import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PageSignUp = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <Card className="w-full max-w-md px-4 py-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Üye Ol
          </CardTitle>
          <CardDescription className="text-center">
            Şimdi bir hesap oluştur
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="ad.soyad@fsm.edu.tr"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Şifre</Label>
            <Input id="password" required type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Üye Ol</Button>
        </CardFooter>
      </Card>
      <div className="mt-4 text-center">
        <span className="text-gray-600 dark:text-gray-400">
          Hesabın var mı?
        </span>
        <Link
          className="ml-1 underline text-gray-600 hover:text-black transition-colors dark:text-blue-400"
          href="/signin"
        >
          Giriş Yap
        </Link>
      </div>
    </main>
  );
};

export default PageSignUp;
