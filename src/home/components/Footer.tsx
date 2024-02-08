import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function Footer() {
  return (
    <Alert className="bg-cadetblue rounded-none my-0 mx-0">
      <AlertTitle>Derechos de Autor!</AlertTitle>
      <AlertDescription>Rigo, Powered by OneLoop</AlertDescription>
    </Alert>
  );
}
