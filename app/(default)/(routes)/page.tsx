import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import Popup from "@/components/theme/popup";

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
      <Popup
        title="Geliştirme Süreci Devam Ediyor"
        description="
          Geliştirme sürecimiz hala devam etmekte olduğundan 
          dolayı uygulamamız şu an aktif değil. 
          Testlerimiz titizlikle devam ediyor ve en kısa 
          sürede sizi daha iyi hizmetle buluşturmak için çabalarımız sürüyor. 
          Gösterdiğiniz sabır ve ilgi için teşekkür ederiz."
        defaultOpen
      />
    </div>
  );
}
