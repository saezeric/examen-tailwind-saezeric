"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <NavigationMenu className="mx-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* He encontrado en reddit una persona que solucionaba el problema utilizando asChild, no se si es una buena practica pero me ha funcionado */}
          <NavigationMenuLink
            asChild
            className="flex flex-row items-center text-base font-normal text-white mx-2 hover:bg-black hover:text-white"
          >
            <Link href="/">
              <svg
                className="mr-2"
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1296 0.447618C8.04149 0.87767 4.55445 3.88285 3.52854 7.86731C2.25393 12.8103 4.87051 17.9036 9.63217 19.743C10.6166 20.1212 11.9793 20.3906 12.9327 20.3906C13.3006 20.3906 13.3835 20.3751 13.4715 20.287C13.627 20.1316 13.627 19.8569 13.4715 19.6963C13.3938 19.6186 13.2591 19.5875 12.8135 19.5512C10.969 19.4062 9.36792 18.888 8.05704 18.0176C7.44564 17.6134 7.26429 17.4683 6.72025 16.9295C5.00522 15.2455 4.08813 12.9658 4.08813 10.3854C4.08813 7.21446 5.51818 4.46316 8.03113 2.78441C9.32129 1.92948 11.0467 1.3699 12.8239 1.24555C13.2954 1.20928 13.3524 1.19373 13.4819 1.05902C13.6684 0.87767 13.6633 0.732594 13.4767 0.540882C13.3316 0.400986 13.3006 0.390623 12.943 0.395805C12.7358 0.400986 12.3679 0.426893 12.1296 0.447618Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M12.202 3.68942C10.6787 3.92258 9.38334 4.56507 8.3678 5.59616C7.42479 6.54952 6.86521 7.58579 6.56987 8.95885C6.47661 9.3889 6.45588 9.65833 6.45588 10.3941C6.4507 11.363 6.50769 11.762 6.76676 12.5858C7.25899 14.1298 8.30044 15.4355 9.68904 16.249C10.6217 16.793 11.9533 17.1661 13.0466 17.1868C13.4507 17.1972 13.5958 17.0884 13.5958 16.7879C13.5958 16.5184 13.4507 16.42 13.0155 16.3837C11.9222 16.2905 11.1087 16.0625 10.3056 15.6272C8.27971 14.5133 7.02583 12.192 7.25381 9.9744C7.48697 7.68424 8.59578 6.01066 10.4922 5.07802C12.3782 4.15056 14.6683 4.26973 16.4662 5.37854C16.9844 5.69978 17.7512 6.43035 18.0776 6.9174C18.632 7.73605 19.0155 8.81377 19.1243 9.85004C19.1968 10.5392 19.2072 10.5858 19.3263 10.705C19.4714 10.85 19.7149 10.8397 19.8704 10.6791C19.9844 10.5703 19.9999 10.5081 19.9999 10.2024C19.9999 9.48735 19.746 8.363 19.4248 7.65833C18.6165 5.87077 17.1709 4.55989 15.3315 3.94849C14.3471 3.61688 13.2486 3.5288 12.202 3.68942Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M12.7254 6.82405C11.9171 6.93286 11.2746 7.2541 10.6425 7.88623C10.2902 8.23338 10.1814 8.38364 9.98446 8.79296C9.51814 9.76187 9.47151 10.6634 9.83939 11.7101C10.114 12.4976 10.7254 13.1867 11.4871 13.5702C12.1451 13.8966 12.5959 13.9899 13.3886 13.9536C13.9067 13.9329 14.0881 13.9018 14.4404 13.7774C15.0415 13.5598 15.399 13.3266 15.8238 12.8759C17.0466 11.5805 17.1192 9.49763 15.9896 8.11939C15.2073 7.16602 13.943 6.66343 12.7254 6.82405ZM13.8808 7.7256C15.4249 8.09348 16.3368 9.74633 15.829 11.2593C15.2798 12.8914 13.5026 13.6323 11.9586 12.881C10.285 12.0676 9.90156 9.76706 11.2176 8.45099C11.8912 7.77224 12.9067 7.49763 13.8808 7.7256Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M0.233161 10.0407C0.0362694 10.1443 0 10.2479 0 10.678C0 12.3567 0.518135 14.4914 1.32124 16.1339C2.02591 17.5743 2.75648 18.6003 3.88083 19.7194C6.25907 22.0873 9.27979 23.4293 12.601 23.5847C13.285 23.621 13.2953 23.621 13.4404 23.4914C13.6425 23.3153 13.6477 23.0666 13.4508 22.8956C13.3368 22.7971 13.2487 22.7764 12.9896 22.7764C10.4352 22.7764 7.50777 21.7039 5.41451 20.0044C2.67358 17.7764 1.00518 14.4863 0.84456 10.9889C0.813472 10.2894 0.80829 10.2583 0.668394 10.1236C0.518135 9.96813 0.398964 9.94741 0.233161 10.0407Z"
                  fill="#FAFAFA"
                />
              </svg>
              Pandem
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* He encontrado en reddit una persona que solucionaba el problema utilizando asChild, no se si es una buena practica pero me ha funcionado */}
          <NavigationMenuLink
            asChild
            className="text-base font-light text-white mx-2"
          >
            <Link href="/Docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* He encontrado en reddit una persona que solucionaba el problema utilizando asChild, no se si es una buena practica pero me ha funcionado */}
          <NavigationMenuLink
            asChild
            className="text-base font-light text-white mx-2"
          >
            <Link href="/Pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
