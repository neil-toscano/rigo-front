import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function Footer() {
  return (
    <Alert className="bg-azulpuro rounded-none my-0 mx-0 text-center">
      <AlertTitle>Derechos de Autor!</AlertTitle>
      <AlertDescription>Rigo, Powered by OneLoop</AlertDescription>
    </Alert>
  );
}
