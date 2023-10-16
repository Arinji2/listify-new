import { initPocketBase } from "@/utils/pbInit";

export default async function Page() {
  const pb = await initPocketBase();

  const data = pb.authStore.model;

  console.log(data);
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center gap-5 bg-palette-background pb-5 md:min-h-excludeNav">
      <h1 className="pt-5 text-[50px] font-bold text-black md:pt-0 md:text-[70px]">
        VERIFY
      </h1>

      <div className="flex h-full w-full flex-col items-start justify-center gap-5 xl:w-[50%]"></div>
    </div>
  );
}
