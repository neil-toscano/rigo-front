import React, { ReactNode } from "react";
import { MenubarDemo } from "../components/NavBar";
import { Footer } from "../components/Footer";

interface childrenProps {
  // todo => importante esta interface, debido a que estamos usando TypeScript(TS)
  children: ReactNode;
}
export const HomeLayout = ({ children }: childrenProps) => {
  return (
    <>
      <div className="bg-aliceblue">
        <MenubarDemo />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </div>
    </>
  );
};
