"use client";
import Image from "next/image";
import WidthWrapper from "../(wrapper)/widthWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  let path = usePathname();
  path = path.split("/")[1];
  let safePath = path as "faq" | "about" | "support";
  const [active, setActive] = useState(false);
  return (
    <nav className="sticky z-[60] top-0 w-full h-[80px] md:h-[130px] bg-palette-background flex flex-col items-center justify-center">
      <WidthWrapper>
        <div className="w-full h-full flex flex-row items-center justify-between">
          <div className="xl:w-[200px] xl:h-[51px] w-[100px] h-[25.5px] relative">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              sizes=" (min-width: 1280px) 200px, 100px"
              className="object-contain"
            />
          </div>
          <ul className="hidden md:flex flex-row items-center  justify-center w-fit h-fit gap-8">
            <Link
              href="/faq"
              className="w-fit h-fit flex flex-col items-start justify-center group gap-1"
            >
              <p className="text-palette-text text-xl xl:text-3xl font-medium">
                FAQ
              </p>
              <div
                className={`${
                  safePath === "faq" ? "w-full " : "group-hover:w-full w-0 "
                } h-[3px] bg-black  transition-all ease-in-out duration-500 origin-left`}
              ></div>
            </Link>
            <Link
              href="/about"
              className="w-fit h-fit flex flex-col items-start justify-center group gap-1"
            >
              <p className="text-palette-text text-xl xl:text-3xl font-medium">
                About
              </p>
              <div
                className={`${
                  safePath === "about" ? "w-full " : "group-hover:w-full w-0 "
                } h-[3px] bg-black  transition-all ease-in-out duration-500 origin-left`}
              ></div>
            </Link>
            <Link
              href="/support"
              className="w-fit h-fit flex flex-col items-start justify-center group gap-1"
            >
              <p className="text-palette-text text-xl xl:text-3xl font-medium">
                Support
              </p>
              <div
                className={`${
                  safePath === "support" ? "w-full " : "group-hover:w-full w-0 "
                } h-[3px] bg-black  transition-all ease-in-out duration-500 origin-left`}
              ></div>
            </Link>
          </ul>
          <Link
            href="/register"
            className="md:block hidden w-fit h-fit border-[3px] border-black bg-palette-tertiary p-[10px]"
          >
            <p className="text-palette-text text-xl xl:text-3xl font-medium">
              Start Playing
            </p>
          </Link>
          <div
            className="md:hidden relative flex w-[50px] h-[50px] z-50 flex-col items-center justify-center gap-1"
            onClick={() => {
              setActive(!active);
            }}
          >
            <div
              className={`${
                active ? "-rotate-45 top-4 " : "rotate-0 top-2 "
              }bg-black w-[37px] h-[4px] absolute right-0 ease-in-out transition-all duration-500`}
            ></div>
            <div
              className={`${
                active ? "opacity-0 " : "opacity-100 "
              } bg-black w-[37px] h-[4px] absolute right-0 top-4 ease-in-out transition-all duration-500`}
            ></div>
            <div
              className={`${
                active ? "rotate-45 top-4 " : "rotate-0 top-6 "
              }bg-black w-[37px] h-[4px] absolute right-0 ease-in-out transition-all duration-500`}
            ></div>
          </div>
        </div>
      </WidthWrapper>
      <div
        className={`${
          active ? "translate-x-0 " : "translate-x-full "
        }md:hidden fixed top-0 right-0 flex-col items-center justify-center  flex w-[70%] h-screen bg-palette-accent ease-in-out transition-all duration-500`}
      >
        <ul className="md:hidden flex flex-col items-center  justify-center w-fit h-fit gap-8">
          <Link
            href="/faq"
            className="w-fit h-fit flex flex-col items-start justify-center group gap-1"
          >
            <p className="text-palette-background text-2xl  font-bold">FAQ</p>
            <div
              className={`${
                safePath === "faq" ? "w-full " : "group-hover:w-full w-0 "
              } h-[3px] bg-white  transition-all ease-in-out duration-500 origin-left`}
            ></div>
          </Link>
          <Link
            href="/about"
            className="w-fit h-fit flex flex-col items-start justify-center group gap-1"
          >
            <p className="text-palette-background text-2xl  font-bold">About</p>
            <div
              className={`${
                safePath === "about" ? "w-full " : "group-hover:w-full w-0 "
              } h-[3px] bg-white  transition-all ease-in-out duration-500 origin-left`}
            ></div>
          </Link>
          <Link
            href="/support"
            className="w-fit h-fit flex flex-col items-start justify-center group gap-1"
          >
            <p className="text-palette-background text-2xl  font-bold">
              Support
            </p>
            <div
              className={`${
                safePath === "support" ? "w-full " : "group-hover:w-full w-0 "
              } h-[3px] bg-white  transition-all ease-in-out duration-500 origin-left`}
            ></div>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
