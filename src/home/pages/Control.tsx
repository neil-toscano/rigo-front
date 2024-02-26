import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import gotita from '../img/gotita.jpg';
export const Control = () => {
  return (
    <div className="flex justify-around items-center h-screen bg-cyan-400">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="mt-1 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900"> Empieza a controlar tu</h1>
        <h1 className="mt-1 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900"> RIGO</h1>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-20 w-auto" src={gotita} alt="Your Company"/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"></h2>
        </div>


        <div className="">
            <div className="mb-12">
            <button type="submit" className="flex w-80 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Prender</button>
            </div>
            <div className="mb-12">
            <button type="submit" className="flex w-80 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apagar</button>
            </div>

            <p className="flex justify-center items-center">Estado de tu motor:</p>

            <div className="mb-12">
            <p className="text-gray-900 flex justify-center items-center text-3xl font-bold">APAGADO</p>
            </div>

          
        </div>
      </div>
    </div>
  );
};
