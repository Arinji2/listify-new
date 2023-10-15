import { Loader2 } from "lucide-react";
import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
export function Register() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="flex h-[50px] w-[95%] flex-row items-center justify-center gap-2 border-[3px] border-black bg-palette-tertiary text-[20px] font-medium text-black shadow-[4px_4px_0_#000] md:w-[400px]"
    >
      {pending && (
        <Loader2 className="h-[20px] w-[20px] animate-spin text-black" />
      )}{" "}
      Register
    </button>
  );
}

export function RegisterWithGoogle() {
  const [pending, setPending] = useState(false);
  return (
    <button
      type="submit"
      className="flex h-[50px] w-[95%] flex-row items-center justify-center gap-2 border-[3px] border-black bg-palette-tertiary text-[20px] font-medium text-black shadow-[4px_4px_0_#000] md:w-[400px]"
    >
      {pending && (
        <Loader2 className="h-[20px] w-[20px] animate-spin text-black" />
      )}{" "}
      Register with Google
    </button>
  );
}

export function RegisterWithGithub() {
  const [pending, setPending] = useState(false);
  return (
    <button
      type="submit"
      className="flex h-[50px] w-[95%] flex-row items-center justify-center gap-2 border-[3px] border-black bg-palette-tertiary text-[20px] font-medium text-black shadow-[4px_4px_0_#000] md:w-[400px]"
    >
      {pending && (
        <Loader2 className="h-[20px] w-[20px] animate-spin text-black" />
      )}{" "}
      Register with Github
    </button>
  );
}
