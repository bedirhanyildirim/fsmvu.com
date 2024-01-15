"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ThemeLogo from "@/components/theme/logo";
import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

const PageSignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (): void => {
    if (!/^[a-zA-Z]+\.[a-zA-Z]+@fsm\.edu\.tr$/.test(formData.email)) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    console.log("Form gönderildi:", formData);
  };

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <Card className="w-full max-w-md px-4 py-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            <ThemeLogo />
          </CardTitle>
          <CardDescription className="text-center">
            Şimdi bir hesap oluştur
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Geçersiz email adresizi</AlertTitle>
              <AlertDescription>
                Sadece üniversite email adresinizi kullanarak üye olabilirsiniz.
              </AlertDescription>
            </Alert>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="ad.soyad@fsm.edu.tr"
              required
              type="email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Şifre</Label>
            <Input
              id="password"
              name="password"
              onChange={handleInputChange}
              required
              type="password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full">
            Üye Ol
          </Button>
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
