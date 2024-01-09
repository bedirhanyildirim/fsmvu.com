import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Hoş geldiniz!</AlertTitle>
        <AlertDescription>
          Bu uygulama Fatih Sultan Mehmet Vakıf Üniversitesi öğrencilerinin
          ihtiyaçları göz önüne alınarak geliştirilmektedir.
        </AlertDescription>
      </Alert>
    </div>
  );
}
