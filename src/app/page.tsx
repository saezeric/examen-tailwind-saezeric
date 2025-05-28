"use client";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center p-[100px] min-h-screen w-full text-white">
        <div className="w-[672px] h-[156px] flex flex-col justify-center items-center space-y-6">
          <h1 className="text-center mb-4 font-bold text-[48px]">
            Information you need during on-call emergencies
          </h1>
          <h5 className="font-light text-[18px] text-center">
            Quickly link new on-call tickets to similar past incidents and their
            solutions. All directly in Slack the moment an incident happens.
          </h5>
        </div>
        <div className="w-full flex justify-center mt-14">
          <Button className="bg-white text-black hover:bg-gray-200 w-[122px] h-[32px] rounded-[6px]">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
