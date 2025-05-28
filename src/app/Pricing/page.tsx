"use client";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <>
      <div className="flex flex-col items-center p-[100px] min-h-screen w-full text-white">
        <div className="w-[672px] h-[156px] flex flex-col justify-center items-center space-y-6">
          <h1 className="text-center mb-4 font-bold text-[48px]">
            Bienvenido a Pricing
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <Button className="bg-white text-black hover:bg-gray-200 w-[122px] h-[32px] rounded-[6px]">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
