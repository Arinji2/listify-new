"use client";

import { REGEX } from "@/utils/regex";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function Form() {
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const input = e.currentTarget[0] as HTMLInputElement;
        const url = input.value;
        const isValid = REGEX.SPOTIFY_URL.test(url) ? true : false;

        if (isValid) {
          localStorage.setItem("signUpPlaylist", url);
        }
        router.prefetch("/register");
        router.push("/register");
      }}
      className="w-full h-fit flex flex-col md:flex-row items-center justify-start gap-5"
    >
      <input
        type="url"
        placeholder="Spotify Playlist Link"
        className="h-[58px] md:h-[85px] xl:w-[600px] xl:h-[100px] py-5 px-[17px] border-palette-text border-[3px] text-palette-text text-opacity-60 text-[20px] font-medium"
      />
      <button
        type="submit"
        className="w-fit h-fit p-2 md:p-5 border-[3px] border-palette-text shadow-button bg-palette-tertiary hover:scale-95 hover:shadow-buttonHover transition-all ease-out duration-300 will-change-transform text-palette-text text-[20px] xl:text-[40px] md:text-[30px] font-medium"
      >
        Start Playing
      </button>
    </form>
  );
}
