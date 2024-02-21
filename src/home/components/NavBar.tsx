import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function MenubarDemo() {
  return (
    <>
      <div className="flex justify-between bg-azulpuro">
        <Menubar className="bg-azulpuro text-white my-0.5 rounded-none border-0">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">Nosotros</MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">Contacto</MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">Info</MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">
              Referencia
            </MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Edit...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <div className="flex justify-around items-center bg-azulpuro basis-1/4 my-0.5">
          <Input
            placeholder="Search"
            className="focus-visible:ring-0 focus:border-1 focus:border-emerald-600 basis-3/4 h-8"
          />
          <Button className="h-8 basis-1/5"> Login </Button>
        </div>
      </div>
    </>
  );
}
