import Image from "next/image";
import { Form } from "./form";

export function Footer() {
  return (
    <div className="flex min-h-excludeMobNav w-full flex-col items-center justify-center  md:min-h-excludeNav">
      <section className="relative flex h-full w-[90%] flex-col items-center justify-center gap-10 text-left xl:w-[80%]">
        <h1 className="text-center text-[30px] font-bold text-palette-text md:text-[60px] xl:text-[80px]">
          What are you waiting for?
        </h1>
        <h1 className="text-center text-[20px] font-medium text-palette-text md:text-[30px] xl:text-[40px]">
          Join the other 100s of people using Listify today!
        </h1>
        <Form center />
      </section>
    </div>
  );
}
