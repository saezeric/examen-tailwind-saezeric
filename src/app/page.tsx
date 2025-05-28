"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="min-h-screen">
        <div className="flex flex-col items-center pt-[100px] w-full text-white">
          <div className="w-full max-w-[672px] h-auto flex flex-col justify-center items-center space-y-6 px-4">
            <h1 className="text-center mb-4 font-bold text-3xl md:text-[48px]">
              Information you need during on-call emergencies
            </h1>
            <h5 className="font-light text-base md:text-[18px] text-center">
              Quickly link new on-call tickets to similar past incidents and
              their solutions. All directly in Slack the moment an incident
              happens.
            </h5>
          </div>
          <div className="w-full flex justify-center mt-14">
            <Button className="bg-white text-black hover:bg-gray-200 w-[122px] h-[32px] rounded-[6px]">
              Get Started
            </Button>
          </div>
          <div className="flex justify-center items-center p-4 md:p-10">
            <Image
              src="/imagen-pagina.png"
              alt="On-call emergency information"
              width={1000}
              height={630}
              className="w-full max-w-[1000px] h-auto rounded-[4px] shadow-lg"
              style={{ borderRadius: "4px" }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full text-white">
          <div className="w-full max-w-[672px] h-auto flex flex-col justify-center items-center space-y-6 px-4">
            <h2 className="text-center mb-4 font-bold text-3xl md:text-[48px]">
              Quick solutions, less stress
            </h2>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center mt-14 gap-10 px-4">
            {/* Card 1 */}
            <div className="flex flex-col w-full md:w-80 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-1">
                Fix emergencies fast
              </h3>
              <p className="mt-5 font-light">
                Save 20-30 minutes per on-call ticket - no more searching for
                relevant issues and runbooks
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col w-full md:w-80 mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-1">
                Universally compatible
              </h3>
              <p className="mt-5 font-light">
                Works with PagerDuty, Jira, or custom Slack alerts—Pandem
                integrates with any system
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col w-full md:w-80">
              <h3 className="text-xl font-semibold mb-1">
                Secure for your org
              </h3>
              <p className="mt-5 font-light">
                We keep your data safe by taking top security measures.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-8 md:p-[100px] w-full text-white">
          <div className="w-full max-w-[672px] h-auto flex flex-col justify-center items-center space-y-6 px-4">
            <h2 className="text-center mb-4 font-bold text-3xl md:text-[48px]">
              Instant setup, no custom code
            </h2>
            <h5 className="font-light text-base md:text-[18px] text-center">
              Invite the bot, pick a channel, and youre set—no custom code
              needed, and no vendor lock-in.
            </h5>
          </div>
          <div className="flex justify-center items-center p-4 md:p-10 w-full">
            <Image
              src="/imagen-pagina.png"
              alt="On-call emergency information"
              width={670}
              height={415}
              className="w-full max-w-[670px] h-auto rounded-[4px] shadow-lg"
              style={{ borderRadius: "4px" }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center pb-[100px] md:pb-[200px] w-full text-white">
          <div className="w-full max-w-[672px] h-auto flex flex-col justify-center items-center space-y-6 px-4">
            <h1 className="text-center mb-4 font-bold text-3xl md:text-[48px]">
              Get in touch
            </h1>
            <h5 className="font-normal text-base md:text-[18px] text-center">
              Request a demo, or hop on a call
            </h5>
          </div>
          <div className="w-full flex justify-center mt-5">
            <Button className="bg-white text-black hover:bg-gray-200 w-[122px] h-[32px] rounded-[6px]">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
