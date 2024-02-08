import React from "react";
import { HomeLayout } from "../layout/HomeLayout";
import { Button } from "@/components/ui/button";

export const NostrosPage = () => {
  return (
    <HomeLayout>
      <div className="flex justify-around items-center h-screen bg-gradient-to-r from-[#279FD2]  to-[#FFFFFF]">
        <div className="flex flex-col space-y-20 w-5/6 content-around">
          <div className="flex justify-around w-2/5">
              <Button className="bg-azulmarino text-2xl rounded-xl" >AGTECH</Button>
              <Button className="bg-azulmarino text-2xl rounded-xl">INDUSTRYTECH</Button>
          </div>

          <div className="flex justify-around w-2/5">
              <Button className="bg-greyclear text-2xl rounded-xl">SABER MÁS</Button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};
