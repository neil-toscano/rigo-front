import React from "react";
import { Button } from "@/components/ui/button";
import { input } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import gotita from '../img/gotita.jpg';
export const Agtech = () => {
  return (
    <div className="flex justify-around items-center h-screen bg-cyan-400">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">RIGO</h1>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={gotita} alt="Your Company"/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Iniciar sesión con su cuenta</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Dirección Gmail</label>
              <div className="mt-2">
                <Input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Olvidó su contrtaseña?</a>
                </div>
              </div>
              <div className="mt-2">
                <Input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Aun no tienes tu Rigo?
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Únete a nosotros</a>
          </p>
        </div>
      </div>
    </div>
  );
};
