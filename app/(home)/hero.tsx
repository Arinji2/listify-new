import Image from "next/image";
import { Form } from "./form";

export function Hero() {
  return (
    <div className="w-full h-fit flex flex-col items-start justify-start gap-10">
      <section className="w-[90%] xl:w-[70%] h-fit relative flex flex-col items-start justify-center text-left">
        <h1 className="font-bold text-palette-text text-[30px] md:text-[60px] xl:text-[80px]">
          Giving Love to your Spotify Playlists
        </h1>
        <div className="h-[21px] xl:h-[31px] absolute right-0 md:right-10 xl:-right-10 top-0 w-[40px] xl:w-[50px]">
          <Image
            src="/heart.svg"
            alt="Heart"
            fill
            sizes="(min-width: 1280px) 50px"
          />
        </div>
      </section>
      <section className="w-full h-fit flex md:flex-nowrap flex-wrap flex-row items-center justify-start gap-[33px]">
        <div className="w-fit h-fit flex flex-row items-center justify-center gap-[11px]">
          <div className="h-[17px] w-[17px] rounded-full bg-palette-primary"></div>
          <h2 className="font-medium text-palette-text text-[20px] md:text-[30px]">
            Showcase
          </h2>
        </div>
        <div className="w-fit h-fit flex flex-row items-center justify-center gap-[11px]">
          <div className="h-[17px] w-[17px] rounded-full bg-palette-primary"></div>
          <h2 className="font-medium text-palette-text text-[20px] md:text-[30px]">
            Compare
          </h2>
        </div>
        <div className="w-fit h-fit flex flex-row items-center justify-center gap-[11px]">
          <div className="h-[17px] w-[17px] rounded-full bg-palette-primary"></div>
          <h2 className="font-medium text-palette-text text-[20px] md:text-[30px]">
            Convert
          </h2>
        </div>
      </section>
      <Form />
    </div>
  );
}
