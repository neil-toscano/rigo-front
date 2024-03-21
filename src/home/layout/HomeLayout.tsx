import React, { ReactNode } from 'react';
import { MenubarDemo } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

interface childrenProps {
  // todo => importante esta interface, debido a que estamos usando TypeScript(TS)
  children: ReactNode;
}
export const HomeLayout = ({ children }: childrenProps) => {
  return (
    <>
      <div className="bg-aliceblue">
        <MenubarDemo />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
