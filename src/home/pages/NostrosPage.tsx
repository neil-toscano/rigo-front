import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const NostrosPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cyan-400">
      <div className="text-white text-center">
        <h1 className="text-4xl md:text-7xl italic">¡Una gota de tecnología en la industria!</h1>
      </div>

      <div className="flex flex-col items-center justify-between w-full px-4 mt-12">
        <h1 className="text-white text-3xl italic mb-8">Elige tu RIGO</h1>

        <div className="w-full mb-8 ">
          <Link to="/agtech">
            <Button className="bg-azulmarino text-4xl rounded-3xl py-8 w-2/3 mb-4 sm:w-1/2 mb-4">AGTECH</Button>
          </Link>
          <Button className="bg-azulmarino text-4xl rounded-3xl py-8 w-2/3 mb-4 sm:w-1/2 mb-4">INDUSTRYTECH</Button>
        </div>

        <div className="w-full mb-8">
          <Button className="bg-greyclear text-2xl rounded-3xl py-4 w-full">SABER MÁS</Button>
        </div>
      </div>
    </div>



  );
};
