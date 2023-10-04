import WidthWrapper from "../(wrapper)/widthWrapper";

import { Hero } from "./hero";
import Showcase from "./showcase";

export default function Home() {
  return (
    <section className="flex bg-palette-background gap-10 h-full flex-col items-center justify-start w-full">
      <WidthWrapper>
        <Hero />
      </WidthWrapper>
      <Showcase />
    </section>
  );
}
